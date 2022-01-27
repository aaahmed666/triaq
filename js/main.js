
var swiper = new Swiper(".information", {
  autoplay: {
      delay: 2000,
      },
pagination: {
  el: ".information .swiper-pagination",
  clickable: true,
}
});

var swiper = new Swiper(".offer", {
  slidesPerView: 4,
  spaceBetween: 30,
  autoplay: {
      delay: 2000,
      },
pagination: {
  el: ".offer .swiper-pagination",
  clickable: true,
  },
  breakpoints: {
    0: {
        slidesPerView: 1,
        spaceBetween: 15,
    },
    567: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    767: {
        slidesPerView: 1,
        spaceBetween: 30,
    },
    991: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    1199: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

var swiper = new Swiper(".partner", {
  slidesPerView: 9,
  spaceBetween: 30,
  autoplay: {
      delay: 2000,
      },
pagination: {
  el: ".partner .swiper-pagination",
  clickable: true,
  },
  breakpoints: {
    0: {
        slidesPerView: 3,
        spaceBetween: 15,
    },
    567: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    767: {
        slidesPerView: 5,
        spaceBetween: 30,
    },
    991: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    1199: {
      slidesPerView: 9,
      spaceBetween: 30,
    },
  },
});



$(document).ready(function() {
    $(".find").select2();

    if($(window).width() < 767) {
      $('.footer .fast').click (function () {
          $('.footer .fast i').toggleClass('fa-chevron-down fa-chevron-up');
          $('.footer .speed').slideToggle(function(){
            if ($(this).is(':visible'))
            $(this).css('display','flex');
          });
      });
  }
});

//for mobile navbar
let menu = document.querySelector(".header .header__menu .open")
let nav = document.querySelector(".header .header__menu .list ul")
let close = document.querySelector(".header .close")
let popup = document.querySelector(".popup")
let list = document.querySelector(".header .header__menu .list")
const lang = document.querySelector(".header .lang")


menu.onclick = function() {
  nav.classList.add("open");
  popup.classList.add("open");
  close.classList.add("open");
  list.classList.add("open");
  lang.classList.add("open");
  document.body.classList.add('ovh');
}

close.onclick = function() {
  nav.classList.remove("open");
  popup.classList.remove("open");
  close.classList.remove("open");
  list.classList.remove("open");
  lang.classList.remove("open");
  document.body.classList.remove('ovh');
}

popup.onclick = function() {
  nav.classList.remove("open");
  popup.classList.remove("open");
  close.classList.remove("open");
  list.classList.remove("open");
  lang.classList.remove("open");
  document.body.classList.remove('ovh');
}


// (function(){
//   var doc = document.documentElement;
//   var w = window;
//   var curScroll = prevScroll = w.scrollY || doc.scrollTop;
//   var curDirction = prevDirection = 0;
//   var header = document.getElementById('side-header');
//   var threshold = 100;
//   var toggled;

//   var checkScroll = function() {
//       curScroll = w.scrollY || doc.scrollTop;
//       if (curScroll > prevScroll) {
//           curDirction = 2;
//       }
//       else {
//           curDirction = 1;
//       }

//       if(curDirction !== prevDirection) {
//           toggled = toggleHeader();
//       }

//       if(toggled) {
//           prevDirection = curDirction;
//       }
//       prevScroll = curScroll;
//   };

//   var toggleHeader = function() {
//       toggled = true;
//       if(curDirction === 2 && curScroll > threshold) {
//           header.classList.add('hide');
//       }
//       else if (curDirction === 1) {
//           header.classList.remove('hide');
//       }
//       else {
//           toggled = false;
//       }
//       return toggled;
//   };

//   window.addEventListener("scroll",checkScroll);
// })();