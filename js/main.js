(() =>{
const playButtons = document.querySelectorAll('.playButton'),
      pauseButtons = document.querySelectorAll('.pauseButton'),
      rwButtons = document.querySelectorAll('.rwButton'),
      audioElement = document.querySelector('audio');
let globalPaused = false;

function playTrack(){
  if (globalPaused) {
    console.log('paused');
    resume();
    return;
  }
   let audioSource = this.dataset.trackref;
  audioElement.src = `audio/${audioSource}.mp3`;
  audioElement.load();
  audioElement.play();
}

function resume(){
  audioElement.play();
  globalPaused = false;

}

function pauseTrack(){
  globalPaused = true;
  audioElement.pause();
}

function rwTrack(){
  audioElement.currentTime=0;
}

playButtons.forEach(button => button.addEventListener("click", playTrack));
pauseButtons.forEach(button => button.addEventListener("click", pauseTrack));
rwButtons.forEach(button => button.addEventListener("click", rwTrack));



})();
