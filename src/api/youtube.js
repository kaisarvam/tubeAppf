import axios from 'axios';


const KEY = 'AIzaSyCsIkFTfE0tfiMOs6efG7Vvekr_YyeYQYE';

export default axios.create({

    baseURL:'https://www.googleapis.com/youtube/v3',
    params :{
        part: 'snippet',
        maxResults: 5,
        key: KEY,

    },
  

});

