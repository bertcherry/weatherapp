import WindowImage from './window.png';
import { getGif } from './getgif';
import { getWeather } from './getweather';

function initialDisplay() {
    const contentDiv = document.getElementById('content');
    
    const windowDiv = document.createElement('div');
    windowDiv.classList.add('window-frame');
    contentDiv.appendChild(windowDiv);

    const windowContainer = document.createElement('div');
    windowContainer.classList.add('img-container');
    windowContainer.id = 'window-container';
    const windowImage = document.createElement('img');
    windowImage.src = WindowImage;
    windowImage.alt = 'Transparent window frame to show outside weather';
    windowContainer.appendChild(windowImage);
    windowDiv.appendChild(windowContainer);

    const gifContainer = document.createElement('div');
    gifContainer.classList.add('img-container');
    gifContainer.id = 'gif-container';
    const gif = document.createElement('img');
    gif.id = 'weather-gif';
    gifContainer.appendChild(gif);
    windowDiv.appendChild(gifContainer);
    gifDisplay('static');

    const thermometerDiv = document.createElement('div');
    thermometerDiv.id = 'thermometer';
    const thermometerText = document.createElement('div');
    thermometerDiv.appendChild(thermometerText);
    contentDiv.appendChild(thermometerDiv);
    temperatureDisplay('?', '?');
}

async function gifDisplay(condition) {
    const gif = document.getElementById('weather-gif');
    const currentGif = await getGif(condition);
    gif.src = currentGif.source;
    gif.alt = currentGif.text;
}

function temperatureDisplay(f, c) {
    const thermometer = document.getElementById('thermometer');
    thermometer.firstChild.textContent = `${f}\u00B0F ${c}\u00B0C`; 
}

async function updateWeather(location) {
    const currentWeather = await getWeather(location);
    gifDisplay(currentWeather.condition);
    temperatureDisplay(currentWeather.temperatureF, currentWeather.temperatureC);
}

export { initialDisplay, updateWeather }