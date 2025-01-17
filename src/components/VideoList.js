import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props)=>{

// console.log(props.videos);
const renderedList = props.videos.map((video)=>{
    return <VideoItem key={video.id.videoId} onVideoSelect={props.onVideoSelect} video={video}/>;
});



return (
<div className="ui relaxed devided list">
    
   {renderedList}
     
</div>
)
};

export {VideoList as default};