
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