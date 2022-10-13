
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

let hoverIconLove = document.querySelectorAll('.card-action-btn')
let showIconLove = document.querySelectorAll('.card-action-btn-love')

hoverIconLove.forEach((hoverIcon,index)=>{
    hoverIcon.addEventListener('click',()=>{
      showIconLove.forEach(hover => hover.classList.remove('active'))
      showIconLove[index].classList.add('active')
    })
})

var let = new Swiper(".tour-places .swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2000,
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


const scrollBtn = document.querySelector(".btn-position");

const btnVisibility = () => {
    if (window.scrollY > 400) {
        scrollBtn.style.visibility = "visible";
    } else {
        scrollBtn.style.visibility = "hidden";
    }
};

document.addEventListener("scroll", () => {
    btnVisibility();
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const openDarkmode = document.querySelector('.sunDarkmode')
openDarkmode.addEventListener('click', function () {
    openDarkmode.classList.toggle('bxs-moon')
    if (openDarkmode.classList.contains('bxs-moon')) {
        document.body.classList.toggle('active')
        openDarkmode.style.color = 'yellow'
    }
    else {
        document.body.classList.remove('active')
        openDarkmode.style.color = 'orange'
    }
})


const tabs = document.querySelectorAll('.tab-btn')
const contentsTab = document.querySelectorAll('.hero-form')

tabs.forEach((tab,index) =>{
  tab.addEventListener('click',()=>{
      tabs.forEach(tab => tab.classList.remove('active'))
      tab.classList.add('active')

      contentsTab.forEach(content => content.classList.remove('active'))
      contentsTab[index].classList.add('active')
  })
})

// function([string1, string2],target id,[color1,color2])    
consoleText(['Bất động sản Tây Ninh', 'Cam kết uy tín', 'Thao tác nhanh gọn !'], 'text',['white','yellow','lightblue']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}