// NavBar drop down menu code
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
hamburger.addEventListener("click", mobileMenu);
function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
navLink.forEach(n => n.addEventListener("click", closeMenu));
function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// cardFunction

function showInventory() {
    document.getElementById("inventoryCard").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function showChat() {
    document.getElementById("chatCard").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function hideCard() {
    document.getElementById("inventoryCard").style.display = "none";
    document.getElementById("chatCard").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

const bubble = document.querySelector('#weather');
const popup = document.querySelector('.popup');
const popupContent = document.querySelector('.popup-content');
const popupOverlay = document.querySelector('.popup-overlay');

bubble.addEventListener('click', () => {
  popup.classList.add('popup-open');
  popupOverlay.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

popupOverlay.addEventListener('click', () => {
  popup.classList.remove('popup-open');
  popupOverlay.style.display = 'none';
  document.body.style.overflow = 'auto';
});

window.addEventListener('resize', () => {
  if (popup.classList.contains('popup-open')) {
    popup.style.top = `${window.innerHeight / 2}px`;
  }
});

const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const searchBox = document.getElementById('search-field');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');
search.addEventListener('click', searchFunction);
searchBox.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      searchFunction();
    }
  });

function searchFunction(){
    const APIKey = '74ec9acfe98d4b49f47bd9135d855b30';
    const city = document.querySelector('.search-box input').value;
    if(city === ''){
        return;
    }
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(response => response.json()).then(json => {
        if(json.cod === '404'){
            container.style.height = '400px';
            weatherBox.style.display = 'none';
            weatherDetails.style.display = 'none';
            error404.style.display = 'block';
            error404.classList.add('fadeIn');
            return;
        }
        error404.style.display = 'none';
        error404.classList.remove('fadeIn');
        const image = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.weather-box .temperature');
        const description  = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');

        switch(json.weather[0].main){
            case 'Clear':
                image.src = '../images/clear.png';
                break;
            case 'Rain':
                image.src = '../images/rain.png';
                break;
            case 'Snow':
                image.src = '../images/snow.png';
                break;
            case 'Clound':
                image.src = '../images/cloud.png';
                break;
            case 'Haze':
                image.src = '../images/mist.png';
                break;
            default:
                image.src = '../images/default.png';
        }
        temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

        weatherBox.style.display = '';
        weatherDetails.style.display = '';
        weatherBox.classList.add('fadeIn');
        weatherDetails.classList.add('fadeIn');
        container.style.height = '590px';
    });
};