import './style.css';
import header from './scripts/header';
import main from './scripts/main_render';
import weatherApi from './scripts/weatherApi';
import displayWeather from './scripts/weatherRender';

const content = document.querySelector('#content');
content.className = 'body';

const mainPage = document.createElement('div');
mainPage.className = 'container pb-5';

content.appendChild(mainPage);

const homePage = () => {
  mainPage.append(header(), main());
};

homePage();

const defaultCountry = 'Goma';
function getWeather(query) {
  fetch(`${weatherApi.base}weather?q=${query}&units=metric&APPID=${weatherApi.key}`)
    .then(weather => weather.json()).then(displayWeather);
}

getWeather(defaultCountry);
