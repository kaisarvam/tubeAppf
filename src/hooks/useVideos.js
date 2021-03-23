import React, { useEffect, useState } from 'react';
import youtube from '../api/youtube';


const useVideos = (defultSearch)=>{
   
    const [videos,setVideos] = useState([]);
    // const [selectedVideo,setSelectedVideo] = useState(null);
    // setSelectedVideo(response.data.items[0]);

    useEffect(()=>{

        Search(defultSearch);
    
    },[defultSearch]);


    const Search = async (term)=>{

       
        const response =  await  youtube.get('/search',
           {
               params:{
                   q: term
               }
           
           });
    
           console.log(response); 
           setVideos(response.data.items);
           
       };


       return [videos,Search];

};

export default useVideos;