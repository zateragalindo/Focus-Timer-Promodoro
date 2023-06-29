
import Controls from './controls.js';
import Timer from './timer.js';
import Sound from './sounds.js'
import{ 
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonSoundOff,
  buttonSoundOn,
  minutesDisplay,
  secondsDisplay
 } from './elements.js';

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonSoundOn,
  buttonSoundOff
});

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
});

const sound = Sound();

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
  controls.soundControls();
  sound.bgAudio.play();
})

buttonSoundOff.addEventListener('click', () => {
  controls.soundControls();
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