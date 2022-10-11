
/**
 * add event on element
 */

const buttonOpenMenu = document.querySelector('.nav-toggle-btn')
const showMenu = document.querySelector('.navbar')
const showIconMenu = document.querySelector('.menu-icon')
const closeIconMenu = document.querySelector('.close-icon')

buttonOpenMenu.addEventListener('click',() =>{
  showMenu.classList.toggle('active')
})

buttonOpenMenu.addEventListener('click',()=>{
  closeIconMenu.classList.toggle('active')
  showIconMenu.classList.toggle('active')
  
})

let hoverIconLove = document.querySelector('.card-action-btn')
let showIconLove = document.querySelector('.card-action-btn-love')

hoverIconLove.addEventListener('click',()=>{
  showIconLove.style.color = 'red'
})

var let = new Swiper(".tour-places .swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
  },
  breakpoints: {
     0: {
        slidesPerView: 1,
        spaceBetween: 15,
     },
     576: {
        slidesPerView: 2,
        spaceBetween: 15,
     },
     992: {
        slidesPerView: 2,
        spaceBetween: 20,
     },
     1200: {
        slidesPerView: 3,
        spaceBetween: 30,
     },
  },
});