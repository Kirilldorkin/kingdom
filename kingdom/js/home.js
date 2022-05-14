let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     slidesPerGroup: 1,
//     loop: true,
//     loopFillGroupWithBlank: true,
// });

const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  centeredSlides: true,
  calculateHeight: true,
  spaceBetween: 30,
});

// document
//   .querySelector('.slide-1')
//   .addEventListener('click', function (e) {
//     e.preventDefault();
//     swiper.slideTo(0, 0);
//   });

// document
//   .querySelector('.slide-250')
//   .addEventListener('click', function (e) {
//     e.preventDefault();
//     swiper.slideTo(249, 0);
//   });

// document
//   .querySelector('.slide-500')
//   .addEventListener('click', function (e) {
//     e.preventDefault();
//     swiper.slideTo(499, 0);
//   });

// document
//   .querySelector('.prepend-2-slides')
//   .addEventListener('click', function (e) {
//     e.preventDefault();
//     swiper.virtual.prependSlide([
//       'Slide ' + --prependNumber,
//       'Slide ' + --prependNumber,
//     ]);
//   });

// document
//   .querySelector('.append-slide')
//   .addEventListener('click', function (e) {
//     e.preventDefault();
//     swiper.virtual.appendSlide('Slide ' + ++appendNumber);
//   });

// document.querySelectorAll("a.yakor").forEach(link => {
//   link.addEventListener("click", function (e) {
//     e.preventDefoult()

//     const href = this.getAttribute("href").substring(1)

//     const scrollTarget = document.getElementById(href)

//     const topOffset = 0
//     const elementPosition = scrollTarget.getBoundingClientRect().top
//     const offsetPosition = elementPosition - topOffset

//     window.scrollBy({
//       top: offsetPosition,
//       behavior: "smooth"
//     })
//   })
// })

$(document).ready(function() {
  $("a.nav-link").click(function(){
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
      duration: 1000,
      easing: "swing"
    });
    return false;
  });
});