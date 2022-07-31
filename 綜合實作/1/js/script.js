const title = document.querySelector('.title')
const subtitle = document.querySelector('.subtitle')
const cities = document.querySelector('.cities')
const downloadIcsBtn = document.querySelector('.download-ics-btn')
const video = document.querySelector('.video')

function show(){
  if (Math.floor(video.currentTime) > 8) {
    downloadIcsBtn.style.opacity = 1
    title.style.opacity = 1
    subtitle.style.opacity = 1
    cities.style.display = "block"
    cities.style.opacity = 1
  } else if (Math.floor(video.currentTime) > 7) {
    title.style.opacity = 1
    subtitle.style.opacity = 1
    cities.style.display = "block"
    cities.style.opacity = 1
  } else if (Math.floor(video.currentTime) > 4) {
    cities.style.display = "block"
    cities.style.opacity = 1
  } 
}

function reset(){
  cities.style.opacity = 0
  title.style.opacity = 0
  subtitle.style.opacity = 0
  downloadIcsBtn.style.opacity = 0
  cities.style.display = "none"
}


video.addEventListener('timeupdate', show)
video.addEventListener('seeking', reset)