const view = document.querySelector('.view') 

const toHour = time => Math.floor(time / 3600)
const toMinute = time => Math.floor((time % 3600) / 60)
const toSecond = time => (time % 3600) % 60

const formated = value => String(value).padStart(2, 0)

function init(time) {
  let hours = formated(toHour(time))
  let minutes = formated(toMinute(time))
  let seconds = formated(toSecond(time))
  view.innerHTML = `${hours}:${minutes}:${seconds}`
}

let time = 0
init(time)

function countdown() {
  time = time + 1

  hours = formated(toHour(time))
  minutes = formated(toMinute(time))
  seconds = formated(toSecond(time))
  view.innerHTML = `${hours}:${minutes}:${seconds}`
}

let repeat;

const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonReset = document.querySelector('.reset')

buttonPlay.addEventListener('click', () => {
  repeat = setInterval(countdown, 1000)
  
  buttonPlay.setAttribute('disabled','')
  buttonStop.removeAttribute('disabled')
  buttonReset.removeAttribute('disabled')
})

buttonStop.addEventListener('click', () => {
  clearInterval(repeat)
  
  buttonPlay.removeAttribute('disabled','')
  
  buttonStop.setAttribute('disabled','')
})

buttonReset.addEventListener('click', () => {
  buttonPlay.removeAttribute('disabled')
  buttonStop.setAttribute('disabled','')
  buttonReset.setAttribute('disabled','')

  clearInterval(repeat)
  time = 0 
  init(time)
})


