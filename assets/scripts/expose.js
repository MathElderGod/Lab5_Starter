// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornType = document.getElementById("horn-select");
  const hornImgType = document.querySelector("[alt='No image selected']");
  const currentVolume = document.getElementById("volume");
  const currentVolumeImg = document.querySelector("[alt='Volume level 2']");

  const currentAudio = document.getElementsByClassName("hidden");
  const playCurrentAudio = document.querySelector("button");

  let audioFile;

  hornType.addEventListener("change", changeHornContent);
  currentVolume.addEventListener("input", changeVolumContent);
  playCurrentAudio.addEventListener("click", playSound);

  console.log(playCurrentAudio);

  function changeHornContent() {
    switch (hornType.value) {
      case "air-horn":
        hornType.value = "air-horn";
        hornImgType.src = "assets/images/air-horn.svg"
        currentAudio.src = "assets/audio/air-horn.mp3";
        audioFile = new Audio(currentAudio.src);
        console.log(currentAudio);
        //console.log(hornType.value);
        break;
      case "car-horn":
        hornType.value = "car-horn";
        hornImgType.src = "assets/images/car-horn.svg"
        currentAudio.src = "assets/audio/car-horn.mp3";
        audioFile = new Audio(currentAudio.src);
        console.log(currentAudio);
        //console.log(hornType.value);
        break;
      case "party-horn":
        hornType.value = "party-horn";
        hornImgType.src = "assets/images/party-horn.svg"
        currentAudio.src = "assets/audio/party-horn.mp3";
        audioFile = new Audio(currentAudio.src);
        console.log(currentAudio);
        //console.log(hornType.value);
        break;
    }
  }

  function changeVolumContent() {

    if (currentVolume.value == 0) {
      currentVolumeImg.src = "assets/icons/volume-level-0.svg";
      audioFile.volume = currentVolume.value / 100.00
      console.log(audioFile.volume);
    } else if (currentVolume.value >= 1 && currentVolume.value < 33) {
      currentVolumeImg.src = "assets/icons/volume-level-1.svg";
      audioFile.volume = currentVolume.value / 100.00
      console.log(audioFile.volume);
    } else if (currentVolume.value >= 33 && currentVolume.value < 67) {
      currentVolumeImg.src = "assets/icons/volume-level-2.svg";
      audioFile.volume = currentVolume.value / 100.00
      console.log(audioFile.volume);
    } else if (currentVolume.value >= 67) {
      currentVolumeImg.src = "assets/icons/volume-level-3.svg";
      audioFile.volume = currentVolume.value / 100.00
      console.log(audioFile.volume);
    }
  }

  function playSound() {
    console.log(currentAudio);
    if (audioFile == undefined) {
      return;
    }
    audioFile.play();
  }
}