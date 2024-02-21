const startButton = document.querySelector('#start')
const resetButton = document.querySelector('#reset')
let interval
let minutes = 25
let seconds = 0
let isPaused = false
let counter = 0

const display = {
  minutes: document.querySelector('#minutes'),
  seconds: document.querySelector('#seconds'),
  currentInfo: document.querySelector('#currentInfo'),
  nextInfo: document.querySelector('#nextInfo')
}

startButton.addEventListener('click', startTimer)

function startTimer() {
  isPaused = false
  interval = setInterval(() => {
    if(!isPaused) {
      seconds--
      if(minutes == 0 && seconds == 0) {
        counter++
        switch(counter) {
          case 1:
            display.currentInfo.setAttribute('src', 'assets/shortBreak.svg')
            display.nextInfo.setAttribute('src', 'assets/focus.svg')
            minutes = 5
            seconds = '00'
            startTimer()
            break
          case 2:
            display.currentInfo.setAttribute('src', 'assets/focus.svg')
            display.nextInfo.setAttribute('src', 'assets/shortBreak.svg')
            minutes = 25
            seconds = '00'
            break
          case 3:
            display.currentInfo.setAttribute('src', 'assets/shortBreak.svg')
            display.nextInfo.setAttribute('src', 'assets/focus.svg')
            minutes = 5
            seconds = '00'
            startTimer()
            break
          case 4: 
            display.currentInfo.setAttribute('src', 'assets/focus.svg')
            display.nextInfo.setAttribute('src', 'assets/longBreak.svg')
            minutes = 25
            seconds = '00'
            break
          case 5:
            display.currentInfo.setAttribute('src', 'assets/longBreak.svg')
            display.nextInfo.setAttribute('src', 'assets/focus.svg')
            minutes = 15
            seconds = '00'
            startTimer()
        }
        clearInterval(interval)
      }
      if(minutes > 0 && seconds == -1) {
        minutes--
        seconds = 59
      }
      Render(minutes, seconds)
    }
  }, 1000)

  startButton.setAttribute('src', 'assets/pause-solid.svg')
  startButton.addEventListener('click', pauseTimer)
  startButton.removeEventListener('click', startTimer)
}

function pauseTimer() {
  isPaused = true
  clearInterval(interval)
  startButton.setAttribute('src', 'assets/play-solid.svg')
  startButton.removeEventListener('click', pauseTimer)
  startButton.addEventListener('click', startTimer)
}

function Render(minutes, seconds) {
  display.minutes.textContent = minutes
  display.seconds.textContent = seconds
}

function resetTimer() {
  minutes = 25
  seconds = '00'
  Render(minutes, seconds)
}

resetButton.addEventListener('click', resetTimer)

export default startTimer