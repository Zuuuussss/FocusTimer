//DOM
//Document Objetc Model //event-driver
import "./timer.js"
import "./controls.js"

const buttonPause = document.querySelector(".pause")
const buttonPlay = document.querySelector(".play")
const buttonStop = document.querySelector(".stop")
const buttonSet = document.querySelector(".set")
const buttonSoundOn = document.querySelector(".sound-on")
const buttonSoundOff = document.querySelector(".sound-off")
const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut

buttonPlay.addEventListener("click", function () {
  buttonPlay.classList.add("hide")
  buttonPause.classList.remove("hide")
  buttonSet.classList.add("hide")
  buttonStop.classList.remove("hide")

  countdown()
})

buttonPause.addEventListener("click", function () {
  buttonPause.classList.add("hide")
  buttonPlay.classList.remove("hide")
})

buttonStop.addEventListener("click", function () {
  resetcontrols()
  resettimer()
})

buttonSoundOff.addEventListener("click", function () {
  buttonSoundOn.classList.remove("hide")
  buttonSoundOff.classList.add("hide")
})

buttonSoundOn.addEventListener("click", function () {
  buttonSoundOn.classList.add("hide")
  buttonSoundOff.classList.remove("hide")
})

buttonSet.addEventListener("click", function () {
  let newminutes = prompt("Quantos minutos?")
  if (!newminutes) {
    resettimer()
    return
  }

  minutes = newminutes
  updatetimerdisplay(minutes, 0)
})
