//------ Selecting html elements ------

const view = document.querySelector('.view') 
const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonReset = document.querySelector('.reset')

//------ Formatting Functions ------

const toHour = time => Math.floor(time / 3600)
const toMinute = time => Math.floor((time % 3600) / 60)
const toSecond = time => (time % 3600) % 60
const formated = value => String(value).padStart(2, 0)

//------ For Viewing ------

function viewTimer(time) {
  let hours = formated(toHour(time))
  let minutes = formated(toMinute(time))
  let seconds = formated(toSecond(time))
  view.textContent = `${hours}:${minutes}:${seconds}`
}

//------ Initial State ------

let initialTime = 0 // in seconds
let currentTime = initialTime
viewTimer(initialTime)

//------ Update Time ------

function timer() {
  currentTime++
  viewTimer(currentTime)
}

//------ Manipulate the Timer ------

let repeat;

buttonPlay.addEventListener('click', () => {
  repeat = setInterval(timer, 1000) // start timer
  
  buttonPlay.setAttribute('disabled','')
  buttonStop.removeAttribute('disabled')
  buttonReset.removeAttribute('disabled')
})

buttonStop.addEventListener('click', () => {
  clearInterval(repeat) // stop timer
  
  buttonPlay.removeAttribute('disabled')
  buttonStop.setAttribute('disabled','')
})

buttonReset.addEventListener('click', () => {
  clearInterval(repeat) // stop timer
  
  viewTimer(currentTime = initialTime) // reset time

  buttonPlay.removeAttribute('disabled')
  buttonStop.setAttribute('disabled','')
  buttonReset.setAttribute('disabled','')
})


