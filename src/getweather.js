require('dotenv').config();

async function getWeather(location) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_KEY}=${location}`, {mode: 'cors'});
    const weatherData = await response.json();
    
    const currentWeather = {
        condition: weatherData.current.condition.text,
        temperatureC: weatherData.current.temp_c,
        temperatureF: weatherData.current.temp_f,
    }
    
    return currentWeather;
}

export { getWeather }