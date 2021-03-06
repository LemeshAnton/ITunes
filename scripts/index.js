import { radioPlayerInit } from './radioPlayer.js';
import { videoPlayerInit } from './videoPlayer.js';
import { musicPlayerInit } from './musicPlayer.js';


const playerBtn = document.querySelectorAll('.player-btn');
const playerBlock = document.querySelectorAll('.player-block');
const temp = document.querySelector('.temp');



const stopVideoPlayer = videoPlayerInit();
const stopRadioPlayer = radioPlayerInit();
const stopMusicPlayer = musicPlayerInit();
const deactivationPlayer = () => {
    temp.style.display = 'none';
    playerBtn.forEach(iteam => iteam.classList.remove('active'));
    playerBlock.forEach(iteam => iteam.classList.remove('active'));

    stopVideoPlayer();
    stopRadioPlayer();
    stopMusicPlayer();

}

playerBtn.forEach((btn, i) => btn.addEventListener('click', () => {
    deactivationPlayer();
    btn.classList.add('active');
    playerBlock[i].classList.add('active');

}));


