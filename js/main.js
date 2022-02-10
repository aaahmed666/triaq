let map;

function initMap() {
  const myLatLng = { lat: 31.049804, lng: 31.379884 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: myLatLng,
  });

  let marker = new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Hello World!",
    draggable: true
  });

  google.maps.event.addListener(marker, "dragend", function (e) {
    updateInput(e.latLng)
});
  }

  function updateInput(latLng) {
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({
        'latLng': latLng
    }, function (results) {
      document.getElementById('locationInput').value = results[0].formatted_address
      document.getElementById('locationInput-1').value = results[0].formatted_address
      console.log(results)
    });
}

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

var swiper = new Swiper(".new", {
  slidesPerView: 3,
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
      slidesPerView: 3,
      spaceBetween: 30,
      grid: {
        rows: 2,
      },
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

var swiper = new Swiper(".single", {
  autoplay: {
      delay: 2000,
      },
pagination: {
  el: ".single .swiper-pagination",
  clickable: true,
},
navigation: {
  nextEl: ".single .swiper-button-next",
  prevEl: ".single .swiper-button-prev",
},
});



$(document).ready(function() {
    $(".find").select2();

    if($(window).width() < 767) {
      $('.footer .fast').click (function () {
          $('.footer .fast i').toggleClass('fa-chevron-down fa-chevron-up');
          $('.footer .speed').slideToggle();
          });
  }

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  $('#exampleModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  });
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





Array.prototype.forEach.call(document.querySelectorAll('.file-upload-button'), function (button) {
  const hiddeninput = button.parentElement.querySelector('.file-upload-input');
  const label = document.querySelector('.new-clinic .file-upload-label');
  const defualtLabelText = "No File(s) Selected";



  button.addEventListener('click', function() {
    hiddeninput.click();
  });
  
  hiddeninput.addEventListener('change', function() {
    const filenamelist = Array.prototype.map.call(hiddeninput.files, function (file) {
      return file.name;
    });

    filenamelist.forEach(function(e) {
      let span = document.querySelector('.preview');
      let element = document.createElement("span");
      let times = document.createElement('i');
      times.classList.add("fas");
      times.classList.add("fa-times")
      span.appendChild(element);
      span.appendChild(times)
      element.innerHTML += e;
      
        console.log(element)
      });
  });
});


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