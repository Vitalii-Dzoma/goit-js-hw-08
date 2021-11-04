import Player from '@vimeo/player';
import { throttle } from "lodash";
var iframe = document.querySelector('iframe');
    var player = new Vimeo.Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(data) {
    console.log(data)
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data.seconds))
    document.addEventListener("DOMContentLoaded", setCurrentTime)
    
    console.log(parsedData)
 
}
const parsedData = JSON.parse(localStorage.getItem("videoplayer-current-time"))
   player.setCurrentTime(parsedData).then(function (seconds) {
    console.log(seconds)
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