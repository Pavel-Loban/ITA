//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const APP_ID = '8d00804bee02e0935a5a2892cbeaa237';
const WEATHER_URI = 'https://api.openweathermap.org/data/2.5/weather';
const WEATHER_URI_5DAY = 'https://api.openweathermap.org/data/2.5/forecast';

const getResource = async(url) => {
    try{
        const res = await fetch(url);
        return res.json();
    }catch(err){
        throw new Error(`Error code ${err.status}`);
    }
};

const getWeatherInfo = async(place = 'Minsk') => {
    const result = await getResource(`${WEATHER_URI}?q=${place}&appid=${APP_ID}`);
    // console.log(result);

    return result;
};


// getWeatherInfo('Brest');

const currentWeatherPicture = (temp) => {
    const currentPicture = document.querySelector('#weather-current');

    if(temp > 20){
        currentPicture.setAttribute('src','images/tropical.jpg');
    }else if(temp > 0 && temp < 20){
        currentPicture.setAttribute('src','images/fall.jpg');
    }else{
        currentPicture.setAttribute('src','images/winter.jpg');
    }
};




const renderWeatherApp = async() => {
    const currentPlace = document.querySelector('#place').value.trim();
    const data = await getWeatherInfo(currentPlace);

    // console.log(data);
    const currentTemp = document.querySelector('#current-temp');
    const currentWind = document.querySelector('#current-wind');
    const maxTemp = document.querySelector('#max_temp');
    const minTemp = document.querySelector('#min_temp');
    const weather = document.querySelector('#weather');
    const deg = document.querySelector('#wind_deg');

    currentTemp.innerHTML = Math.round(data.main.temp - 273);
    currentWind.innerHTML = Math.ceil(data.wind.speed);
    maxTemp.innerHTML = data.main.temp_max;
    minTemp.innerHTML = data.main.temp_min;
    weather.innerHTML = data.weather[0].description;
    deg.innerHTML = data.wind.deg;
    currentWeatherPicture(Math.round(data.main.temp - 273));
};

const searchBtn = document.querySelector('#get-info');

searchBtn.addEventListener('click', renderWeatherApp);

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

const getInfoWeatherForFiveDays = async(place = 'Minsk') => {
    const result = await getResource(`${WEATHER_URI_5DAY}?q=${place}&appid=${APP_ID}`);
    // console.log(result);

    return result;
};



const renderTempApp = async() => {
    try{
        const currentPlace = document.querySelector('#place').value.trim();
        const data = await getInfoWeatherForFiveDays(currentPlace);
        const withHeader = document.querySelector('.with-header');

        withHeader.innerHTML = '';
        data.list.forEach((elem) => {
            const currentTemp = Math.round(elem.main.temp - 273);

            withHeader.innerHTML += `
            <li class="collection-item"><div>${elem.dt_txt}<a href="#!" class="secondary-content"><i class="material-icons">${currentTemp} degrees</i></a></div></li>
            `;
        });
    }catch(err){
        console.log('Error >>>', err);
    }
};

searchBtn.addEventListener('click', renderTempApp);