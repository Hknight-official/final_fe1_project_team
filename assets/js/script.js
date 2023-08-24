const sliders = document.querySelectorAll('.game-list');
const gameItem = document.querySelector('.game-item')
console.log(gameItem)
let isDown = false;
let startX;
let scrollLeft;

sliders.forEach((slider) => {
  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener('mouseleave', () => {
    isDown = false;
  });
  slider.addEventListener('mouseup', () => {
    isDown = false;
  });
  slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
  });
});

const nextBtns = document.querySelectorAll('.next-game-btn');
nextBtns.forEach((nextBtn,index) => {
  nextBtn.addEventListener('click',()=> {
    scrollLeft = sliders[index].scrollLeft;
    sliders[index].scrollLeft = scrollLeft + gameItem.offsetWidth
  })
})
const backBtns = document.querySelectorAll('.back-game-btn');
backBtns.forEach((backBtn,index) => {
  backBtn.addEventListener('click',()=> {
    scrollLeft = sliders[index].scrollLeft;
    sliders[index].scrollLeft = scrollLeft - gameItem.offsetWidth
  })
})