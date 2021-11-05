import Player from '@vimeo/player';
import { throttle } from "lodash";
const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);



player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(data) {

    localStorage.setItem("videoplayer-current-time", data.seconds)
   
    
    
 
}
const parsedData = JSON.parse(localStorage.getItem("videoplayer-current-time"))
   player.setCurrentTime(parsedData)