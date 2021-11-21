const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const container = document.querySelector('.container')
const sidebar = document.querySelector('.sidebar')
const slider = document.querySelector('.main-slide')

const sliderCount = slider.querySelectorAll('div').length

sidebar.style.top = `-${(sliderCount - 1)*100}vh`

let activeSlideIndex = 0;

upBtn.addEventListener('click', () => {
  changeHandler('up')
})
downBtn.addEventListener('click', () => {
  changeHandler('down')
})

document.addEventListener('keydown', (event) => {
  if(event.key === 'ArrowUp') {
    changeHandler('up')
  } else if (event.key === 'ArrowDown') {
    changeHandler('down')
  }
})

function changeHandler(direction) {
  if (direction === 'up') {
    activeSlideIndex++;
    if (activeSlideIndex === sliderCount) {
      activeSlideIndex = 0;
    }
  }
  if (direction === 'down') {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = sliderCount - 1;
    }
  }
  const height = container.clientHeight;
  slider.style.transform = `translateY(-${activeSlideIndex * height}px)`
  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}