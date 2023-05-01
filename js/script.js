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
const search = document.querySelector('.search-box #weatherButton');
const searchBox = document.getElementById('search-field');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');
search.addEventListener('click', searchFunction);
searchBox.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        searchFunction();
    }
});

function searchFunction() {
    const APIKey = '74ec9acfe98d4b49f47bd9135d855b30';
    const city = document.querySelector('.search-box input').value;
    if (city === '') {
        return;
    }
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(response => response.json()).then(json => {
        if (json.cod === '404') {
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
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');

        switch (json.weather[0].main) {
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

const popupLink = document.querySelector('#langLink');
const pContent = document.querySelector('#langPop');

popupLink.addEventListener('click', (event) => {
    event.preventDefault();
    if (pContent.style.display === 'block') {
        pContent.style.display = 'none';
    } else {
        pContent.style.display = 'block';
        const linkRect = popupLink.getBoundingClientRect();
        pContent.style.top = linkRect.bottom + 'px';
        pContent.style.left = linkRect.left + 'px';
    }
});

pContent.addEventListener('click', (event) => {
    event.stopPropagation();
});

document.addEventListener('click', (event) => {
    if (!popupLink.contains(event.target) && !pContent.contains(event.target)) {
        pContent.style.display = 'none';
    }
});

// Load JSON file
var cropData = null;
var xhr = new XMLHttpRequest();
const searchBtn = document.querySelector('#searchCropbar')
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        cropData = JSON.parse(xhr.responseText);
    }
};
xhr.open("GET", "../assets/crops.json", true);
xhr.send();

// Search for crop details
searchBtn.addEventListener('click', searchCrop);
function searchCrop() {
    var cropName = document.getElementById("cropSearch").value;
    var cropDetails = null;

    // Find crop in JSON data
    for (var i = 0; i < cropData.crops.length; i++) {
        if (cropData.crops[i].name.toLowerCase() === cropName.toLowerCase()) {
            cropDetails = cropData.crops[i];
            break;
        }
    }

    // Display popup with crop details
    if (cropDetails != null) {
        document.getElementById("popupTitle").innerHTML = cropDetails.name;
        document.getElementById("popupDetails").innerHTML = `<div class = "grid"><br><span>🛒 Items Needed:</span><br> ► ` + cropDetails.items_needed.join(" • ") + `</div><div class = "grid"><br><span>🌪️ Atmosphere:</span><br> ► ` + cropDetails.atmosphere + `</div><div class = "grid"><br><span>⏳ Time to grow:</span><br> ► ` + cropDetails.time_duration + `</div><div class = "grid"><br><span>🌤️ Season:</span><br> ► ` + cropDetails.season + `</div><div class = "grid"><br><span>🌦️ Climate:</span><br> ► ` + cropDetails.climate + `</div>`;
        document.documentElement.classList.add("popup-open");
    }
    else {
        document.getElementById("popupTitle").innerHTML = "Nothing Found";
        document.getElementById("popupDetails").innerHTML = "Information about this crop is not available yet but will be in the future.";
        document.documentElement.classList.add("popup-open");
    }
}

// Close popup
function closePopup() {
    document.documentElement.classList.remove("popup-open");
}

window.addEventListener("click", function (event) {
    if (event.target === document.getElementById("searchPop")) {
        closePopup();
    }
});


//profile button popup
// Get the popup wrapper, link, and card elements
const popupLink1 = document.querySelector('.popup-link-1');
const popupCard = document.querySelector('.popup-card-1');

// Add a click event listener to the link
popupLink1.addEventListener('click', (event) => {
    event.preventDefault();
    if (popupCard.style.display === 'block') {
        popupCard.style.display = 'none';
    } else {
        popupCard.style.display = 'block';
        const linkRect = popupLink1.getBoundingClientRect();
        popupCard.style.top = linkRect.bottom + 'px';
        popupCard.style.left = linkRect.left + 'px';
    }
});

popupCard.addEventListener('click', (event) => {
    event.stopPropagation();
});

document.addEventListener('click', (event) => {
    if (!popupLink1.contains(event.target) && !popupCard.contains(event.target)) {
        popupCard.style.display = 'none';
    }
});

// //BAR GRAPH

const options = {
    method: 'GET',
	headers: {
		'X-RapidAPI-Key': '99c8271435msh6cd0d182ea06065p12e5f7jsnf0e09f2ff64b',
		'X-RapidAPI-Host': 'commodity-rates-api.p.rapidapi.com'
	}
};

const cropNames = ['SUGAR', 'RICE', 'CORN', 'COTTON'];
// const cropNames = ['WHEAT'];

const cropPrices = [];
Promise.all(cropNames.map(crop => {
    return fetch(`https://commodity-rates-api.p.rapidapi.com/latest?base=USD&symbols=${crop}`, options)
        .then(response => response.json())
        .then(response => {
            // Convert the price to USD
            const priceInUSD = (1 / response.data.rates[crop]) * 80;

            // Add the crop name and price to the array
            cropPrices.push({
                name: crop,
                price: priceInUSD
            });
        });
}))
    .then(() => {
        // Sort the crop prices by ascending order
        cropPrices.sort((a, b) => a.price - b.price);
        // Create the bar chart
        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: cropPrices.map(crop => crop.name),
                datasets: [{
                    label: 'Prices in ₹',
                    data: cropPrices.map(crop => crop.price),
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.7)',
                        'rgba(54, 162, 235, 0.7)',
                        'rgba(255, 206, 86, 0.7)',
                        'rgba(75, 192, 192, 0.7)',
                        'rgba(153, 102, 255, 0.7)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    })
    .catch(err => console.error(err));

//animation
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);
