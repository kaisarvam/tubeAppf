import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos'




const App =()=>{
    const [selectedVideo,setSelectedVideo] = useState(null);
    const [videos,Search] = useVideos('buildings');

    useEffect(()=>{

   setSelectedVideo(videos[0]);
   
    },[videos]);


   
    return (

        <div className="ui container"> 
            <SearchBar onTermSubmit={Search}/>
            There are {videos.length} videos matching your search result ..
            <div className="ui grid"> 
            <div className="ui row">
                <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
            </div>
            <div className="five wide column">
             <VideoList onVideoSelect ={(video)=>{setSelectedVideo(video)}}  videos={videos}/>
             </div>
             </div>
             </div>

             </div>
   )
}




export default App ;