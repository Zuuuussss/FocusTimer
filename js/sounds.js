export default function () {
  const buttonPressAudio = new Audio("../Sounds/Button.mp3")
  const kitchenTimer = new Audio("./Sounds/End.mp3")

  const bgAudio = new Audio("./Sounds/BgAudio.mp4")

  bgAudio.loop = true

  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  return {
    pressButton,
    timeEnd,
    bgAudio,
  }
}
