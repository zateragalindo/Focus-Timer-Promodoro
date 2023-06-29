import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonSoundOff,
  buttonSoundOn
} from './elements.js';

export default function({
  controls,
  timer,
  sound
}) {

  buttonPlay.addEventListener('click', () => {
    controls.play();
    timer.countdown();
    sound.pressButton();
  })
  
  buttonPause.addEventListener('click', () => {
    controls.pause();
    timer.pause();
    sound.pressButton();
  })
  
  buttonStop.addEventListener('click', () => {
    controls.reset();
    timer.reset();
    sound.pressButton();
  })
  
  buttonSoundOn.addEventListener('click', () => {
    buttonSoundOn.classList.toggle('hide');
    buttonSoundOff.classList.toggle('hide');
    sound.bgAudio.play();
  })
  
  buttonSoundOff.addEventListener('click', () => {
    buttonSoundOn.classList.toggle('hide');
    buttonSoundOff.classList.toggle('hide');
    sound.bgAudio.pause();
  })
  
  buttonSet.addEventListener('click', () => {
    let newMinutes = controls.getMinutes();
  
    if( !newMinutes ) {
      timer.reset()
      return
    }
  
    timer.updateDisplay(newMinutes, 0);
    timer.updateMinutes(newMinutes);
  })
}