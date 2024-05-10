function updatetimerdisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  minutesDisplay.textContent = String(seconds).padStart(2, "0")
}

function resettimer() {
  updatetimerdisplay(minutes, 0)
  clearTimeout(timerTimeOut)
}
function countdown() {
  timerTimeOut = setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    updatetimerdisplay(minutes, 0)

    if (minutes <= 0) {
      resetcontrols()
      return
    }

    if (seconds <= 0) {
      seconds = 3
      --minutes
    }

    updatetimerdisplay(minutes, String(seconds - 1))

    countdown()
  }, 1000)
}
