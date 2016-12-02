import React from 'react';
import { VideoListItem } from './components';

const VideoList = ({videos}) => {
  return (
    <ul className='col-md-4 list-group'>
      <VideoListItem />
    </ul>
  )
}

export { VideoList };
