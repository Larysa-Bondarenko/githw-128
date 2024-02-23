"use strict";

$(function () {
  var heroSlider = $("#hero-slider").lightSlider({
    item: 1,
    slideMargin: 0,
    verticalHeight: 800,
    itemHeight: 800,
    loop: true,
    auto: true,
    controls: false,
    vertical: true,
    mode: 'fade',
    pause: 3000,
    // pauseOnHover: true
    responsive: [{
      breakpoint: 1100,
      settings: {
        verticalHeight: 700,
        itemHeight: 700
      }
    }, {
      breakpoint: 1020,
      settings: {
        verticalHeight: 600,
        itemHeight: 600
      }
    }, {
      breakpoint: 774,
      settings: {
        verticalHeight: 400,
        itemHeight: 400
      }
    }]
  });
}); //Functional for hamburger

window.hamb_btn.addEventListener('click', function () {
  document.body.classList.toggle('open-mobile-menu');
  window.hamb_btn.classList.toggle('is-active');
});
window.hamb_btn_mobile.addEventListener('click', function () {
  document.body.classList.toggle('open-mobile-menu');
  window.hamb_btn.classList.toggle('is-active');
}); //smooth scroll

function scrollToElem(selector) {
  var top = document.querySelector(selector).offsetTop;
  window.scrollTo({
    top: top,
    behavior: 'smooth'
  });
} //For news slider


function getNews() {
  var response, newsJson, list, newsSlider;
  return regeneratorRuntime.async(function getNews$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch('data/news.json'));

        case 3:
          response = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(response.json());

        case 6:
          newsJson = _context.sent;
          // console.log('newsJason', json);
          list = '<ul id="newsSlider" class="newsSlider">';
          newsJson.forEach(function (item) {
            list += "\n        <li>\n        <div class=\"news-img\">\n        <img src=\"".concat(item.image, "\" alt=\"").concat(item.title, "\">\n        </div>\n        <h3>").concat(item.title, "</h3>\n        <p class=\"anons\">").concat(item.anons, "</p>\n        <div class=\"auth-flex\">\n            <div class=\"avatar\">\n            <img src=\"").concat(item.author.avatar, "\" alt=\"").concat(item.author.name, "\">\n            </div>\n            <div class=\"auth-info\">\n            <p class=\"auth-name\">").concat(item.author.name, "</p>\n            <p class=\"auth-date\">").concat(item.date, "</p>\n            </div>\n        </div>\n      </li>\n        ");
          });
          list += '</ul>';
          document.getElementById('newsSlider-wrap').innerHTML = list; // $('#newsSlider').lightSlider({

          newsSlider = $('#newsSlider').lightSlider({
            item: 3,
            slideMargin: 30,
            loop: true,
            auto: true,
            controls: false,
            itemWidth: 370,
            itemHeight: 514,
            pause: 3000,
            pauseOnHover: true,
            responsive: [{
              breakpoint: 975,
              settings: {
                item: 2,
                slideMove: 1,
                slideMargin: 35
              }
            }, {
              breakpoint: 700,
              settings: {
                item: 1,
                slideMove: 1,
                slideMargin: 40
              }
            }]
          });
          $("#newsSliderPrev").on('click', function () {
            newsSlider.goToPrevSlide();
          });
          $("#newsSliderNext").on('click', function () {
            newsSlider.goToNextSlide();
          });
          _context.next = 19;
          break;

        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](0);
          console.error('Error fetching news:', _context.t0);

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 16]]);
}

getNews();
lightGallery(document.getElementById('lightGallery'), {
  thumbnail: true
}); //For map

function initMap(link) {
  link.remove();
  var map = L.map('map').setView([50.43132200998583, 30.514766270540136], 13);
  L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
  }).addTo(map);
  var customMarker = L.icon({
    iconUrl: 'assets/images/pin.png',
    iconSize: [106, 106],
    // size of the icon
    // shadowSize:   [50, 64], // size of the shadow
    iconAnchor: [22, 94],
    // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],
    // the same for the shadow
    popupAnchor: [-3, -76]
  });
  L.marker([50.43132200998583, 30.514766270540136], {
    icon: customMarker
  }).addTo(map); // .bindPopup('A pretty CSS popup.<br> Easily customizable.') //this line shows popup with txt/pi/whatever at marker
  // .openPopup();  //this makes popup visible at once
}