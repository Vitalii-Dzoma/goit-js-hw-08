import Player from '@vimeo/player';
import { throttle } from "lodash";
const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);



player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(data) {

    localStorage.setItem("videoplayer-current-time", data.seconds)
   
    
    
 
}
const parsedData = JSON.parse(localStorage.getItem("videoplayer-current-time"))
player.setCurrentTime(parsedData).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});