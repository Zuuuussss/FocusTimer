import Controls from "./controls.js"
import Timer from "./timer.js"

let buttonPlay = document.querySelector(".play")
let buttonPause = document.querySelector(".pause")
let buttonStop = document.querySelector(".stop")
let buttonSet = document.querySelector(".set")
let buttonSoundOn = document.querySelector(".sound-on")
let buttonSoundOff = document.querySelector(".sound-off")

const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
})

buttonPlay.addEventListener("click", function () {
  controls.play()
  timer.countdown()
})

buttonPause.addEventListener("click", function () {
  controls.pause()
  timer.hold()
})

buttonStop.addEventListener("click", function () {
  controls.reset()
  timer.reset()
})

buttonSoundOff.addEventListener("click", function () {
  buttonSoundOn.classList.remove("hide")
  buttonSoundOff.classList.add("hide")
})

buttonSoundOn.addEventListener("click", function () {
  buttonSoundOff.classList.remove("hide")
  buttonSoundOn.classList.add("hide")
})

buttonSet.addEventListener("click", function () {
  let newMinutes = controls.getMinutes()
  if (!newMinutes) {
    timer.reset()
    return
  }

  timer.updateDisplay(newMinutes, 0)
  timer.updateMinutes(newMinutes)
})
