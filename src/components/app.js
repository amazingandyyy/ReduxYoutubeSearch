import React, { Component } from 'react';

import { SearchBar, VideoList } from '../components';
import { youtubeAPI_KEY } from '../../keys';
import YTSearch from 'youtube-api-search';


export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: []
        };

        YTSearch({key: youtubeAPI_KEY, term: 'sufboards'}, (videos) => {
            this.setState({ videos });
        });
    }
  render() {
    return (
        <div>
            <SearchBar />
            <VideoList videos={this.state.videos}/>
        </div>
    );
  }
}
