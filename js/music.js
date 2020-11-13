const musicPlayer = document.getElementById('musicPlayer');
const musicTitle = document.getElementById('musicTitle');
const playBtn = document.getElementById('musicPlayBtn');
const stopBtn = document.getElementById('musicStopBtn');
const shuffleBtn = document.getElementById('musicShuffleBtn');
const progressContainer = document.querySelector('.music__progress');
const progressBar = document.getElementById('musicProgressBar');

// SETTING
const songList = ['hey', 'summer', 'ukulele'] // sample mp3 files
let songIndex = 1;
let songTitle = songList[songIndex];

// HELPER FUNCTIONS
function loadSong(songTitle) {
    musicTitle.innerText = `Now playing : ${songTitle.toUpperCase()} 🎼🎵`;
    musicPlayer.src = `assets/music/${songTitle}.mp3`    
}

function play() {    
    musicPlayer.classList.add('play');
    playBtn.classList.remove('fa-play');
    playBtn.classList.add('fa-pause');
    musicPlayer.play();
}

function pause() {  
    musicPlayer.classList.remove('play');
    playBtn.classList.remove('fa-pause');
    playBtn.classList.add('fa-play');
    
    musicPlayer.pause();
}

// Load and play a preset song when play button is clicked
function playSong() {
    loadSong(songTitle);
    const isPlaying = musicPlayer.classList.contains('play');
    isPlaying ? pause() : play();
}

// Stop and reload a song when stop button is clicked
function stopSong() {
    pause();
    musicTitle.innerText = `Play a song! 🎸🤘`;
    musicPlayer.currentTime = 0;
}

// Shuffle a playing song when shuffle button is clicked
function shuffleSong() {
    const shuffleIndex = Math.floor(Math.random() * songList.length);
    songTitle = songList[shuffleIndex];
    loadSong(songTitle);
    play();
}

function nextSong() {
    songIndex++;
    if(songIndex >= songList.length) {
        songIndex = 0;
    }
    loadSong(songList[songIndex]);
    play();
}

// Visually update progress bar (change style) as a song is playing
function updateProgress() {
    let percentagePlayed = musicPlayer.currentTime / musicPlayer.duration * 100;
    progressBar.style.width = `${percentagePlayed}%`;
}

// Change playtime of a song when progress bar is adjusted by the user. 
function changePlayTime(e) {
    const totalWidth = this.clientWidth;
    const pointSelected = e.offsetX;
    musicPlayer.currentTime = musicPlayer.duration * (pointSelected / totalWidth);
}

// EVENT LISTENERS
playBtn.addEventListener('click', playSong);
stopBtn.addEventListener('click', stopSong);
shuffleBtn.addEventListener('click', shuffleSong);
musicPlayer.addEventListener('timeupdate', updateProgress);
musicPlayer.addEventListener('ended', nextSong);
progressContainer.addEventListener('click', changePlayTime);




