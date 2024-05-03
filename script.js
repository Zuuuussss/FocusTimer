//DOM
//Document Objetc Model //event-driver

const buttonPause = document.querySelector(".pause")
const buttonPlay = document.querySelector(".play")
const buttonStop = document.querySelector(".stop")
const buttonSet = document.querySelector(".set")
const buttonSoundOn = document.querySelector(".sound-on")
const buttonSoundOff = document.querySelector(".sound-off")
const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")
let minutes

function resetcontrols() {
  buttonPlay.classList.remove("hide")
  buttonPause.classList.add("hide")
  buttonSet.classList.remove("hide")
  buttonStop.classList.add("hide")
}

function updatetimerdisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  minutesDisplay.textContent = String(seconds).padStart(2, "0")
}

function countdown() {
  setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    updatetimerdisplay(minutes, 0)

    if (minutes <= 0) {
      resetcontrols()
      return
    }

    if (seconds <= 0) {
      seconds = 2
      --minutes
    }

    updatetimerdisplay(minutes, String(seconds - 1))

    countdown()
  }, 1000)
}

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
  minutes = prompt("quantos minutos?")
  updatetimerdisplay(minutes, 0)
})
