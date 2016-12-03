import React, { Component } from 'react';
import _ from 'lodash';

import { SearchBar, VideoList, VideoDetail } from '../components';
import { youtubeAPI_KEY } from '../../keys';
import YTSearch from 'youtube-api-search';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('dog');

    }

    videoSearch(term) {
        YTSearch({key: youtubeAPI_KEY, term: term}, (videos) => {
            this.setState({
                videos,
                selectedVideo: videos[0]
            });
        });
    }


  render() {
    const videoSearch = _.debounce( term => { this.videoSearch(term) }, 300 );

    return (
        <div>
            <SearchBar onSearchTermChange={videoSearch}/>
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList
                onVideoSelect={selectedVideo=>this.setState({selectedVideo})}
                videos={this.state.videos}/>
        </div>
    );
  }
}
