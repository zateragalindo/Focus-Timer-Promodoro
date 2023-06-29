export default function Controls({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonSoundOn,
  buttonSoundOff
}) {

  function reset() {
    buttonPlay.classList.remove('hide');
    buttonSet.classList.remove('hide');
    buttonPause.classList.add('hide');
    buttonStop.classList.add('hide');
  }

  function play() {
    buttonPlay.classList.add('hide');
    buttonSet.classList.add('hide');
    buttonPause.classList.remove('hide');
    buttonStop.classList.remove('hide');
  }

  function pause() {
    buttonPause.classList.add('hide');
    buttonPlay.classList.remove('hide');
  }

  function soundControls() {
    buttonSoundOn.classList.toggle('hide');
    buttonSoundOff.classList.toggle('hide');
  }

  function getMinutes() {
    let newMinutes = prompt("Quantos minutos ?");
    if (!newMinutes) {
      return false;
    }
    return newMinutes;
  }

  return {
    reset,
    play,
    pause,
    soundControls,
    getMinutes
  }

}