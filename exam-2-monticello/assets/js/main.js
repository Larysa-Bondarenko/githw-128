
$(function(){
    const heroSlider = $("#hero-slider").lightSlider({
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
        
        responsive : [
            {
                breakpoint:1100,
                settings: {
                verticalHeight: 700,
                itemHeight: 700     
                }
                        
            },
            {
                breakpoint:1020,
                settings: {
                verticalHeight: 600,
                itemHeight: 600     
                }
                        
            },
            {
                breakpoint:774,
                settings: {
                    verticalHeight: 400,
                itemHeight: 400  
                    
                  }
            }
        ]

    })

})

//Functional for hamburger
window.hamb_btn.addEventListener
('click', function(){
    document.body.classList.toggle('open-mobile-menu')
    window.hamb_btn.classList.toggle('is-active')
})

window.hamb_btn_mobile.addEventListener
('click', function(){
    document.body.classList.toggle('open-mobile-menu')
    window.hamb_btn.classList.toggle('is-active')
})

//smooth scroll
function scrollToElem(selector){
    const top = document.querySelector(selector).offsetTop

    window.scrollTo({
        top: top,
        behavior: 'smooth'
    })
}

//For news slider
async function getNews(){
    try {
    const response = await fetch('data/news.json')
    const newsJson = await response.json()
    // console.log('newsJason', json);
    let list = '<ul id="newsSlider" class="newsSlider">';
    newsJson.forEach(item => {
        list += `
        <li>
        <div class="news-img">
        <img src="${item.image}" alt="${item.title}">
        </div>
        <h3>${item.title}</h3>
        <p class="anons">${item.anons}</p>
        <div class="auth-flex">
            <div class="avatar">
            <img src="${item.author.avatar}" alt="${item.author.name}">
            </div>
            <div class="auth-info">
            <p class="auth-name">${item.author.name}</p>
            <p class="auth-date">${item.date}</p>
            </div>
        </div>
      </li>
        `
    })
    list += '</ul>';
    document.getElementById('newsSlider-wrap').innerHTML = list; 


    // $('#newsSlider').lightSlider({
    const newsSlider = $('#newsSlider').lightSlider({   
        item: 3,
        slideMargin: 30,
        loop: true,
        auto: true,
        controls: false,
        itemWidth: 370,
        itemHeight: 514,
        pause: 3000,
        pauseOnHover: true,
        
        responsive : [
            {
                        breakpoint:975,
                        settings: {
                            item:2,
                            slideMove:1,
                            slideMargin:35
                          }
                    },
            {
                breakpoint:700,
                settings: {
                    item:1,
                    slideMove:1,
                    slideMargin:40
                  }
            }
      
        ]
      
    })

    $("#newsSliderPrev").on('click', function(){
        newsSlider.goToPrevSlide();
    })
    
    $("#newsSliderNext").on('click', function(){  
        newsSlider.goToNextSlide();
    })
  
 } catch (error) {
    console.error('Error fetching news:', error);
 }
}
getNews();


lightGallery(document.getElementById('lightGallery'), {
    thumbnail: true
})

//For map
function initMap(link){
    link.remove();
    const map = L.map('map').setView([50.43132200998583, 30.514766270540136], 13);

    L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
    }).addTo(map);

    const customMarker = L.icon({
        iconUrl: 'assets/images/pin.png',
        iconSize:     [106,106], // size of the icon
        // shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76]
    })

    L.marker([50.43132200998583, 30.514766270540136], {icon: customMarker}).addTo(map)
        // .bindPopup('A pretty CSS popup.<br> Easily customizable.') //this line shows popup with txt/pi/whatever at marker
        // .openPopup();  //this makes popup visible at once
}

