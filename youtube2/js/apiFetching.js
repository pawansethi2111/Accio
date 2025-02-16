import axios from 'axios';

let mainSection = 
function getYoutubeVideos(){

    try{
  const response = axios.get("https://www.googleapis.com/youtube/v3/search",{
            params:{
                key:"",
                part:"snippet",
                q:"javascript",
                type:"video",
                maxResults:50,
            }
    });

    // console.log(response.data.items);
    let videoArray = response.data.items;
    for(let t of videoArray){
    let videoSection = document.createElement("div");

    let iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${t.id.videoId}`
    videoSection.append(iframe);
    mainSection.append(videoSection);
    }
}
catch(error) {
    console.log(error);
}
}

document.addEventListener("DOMContentLoaded",getYoutubeVideos);