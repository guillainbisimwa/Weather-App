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

const defaultCountry = 'Moscow';
const getWeather = (query) => {
  fetch(`${weatherApi.base}weather?q=${query}&units=metric&APPID=${weatherApi.key}`)
    .then(weather => weather.json()).then(displayWeather);
};

getWeather(defaultCountry);
const check = document.querySelector('#tempSwitch');

// eslint-disable-next-line func-names
check.addEventListener('change', function () {
  const degree = document.querySelector('#degree');
  const degreeNbr = document.querySelector('#degree-nbr');
  if (this.checked) {
    const temp = Math.round(((parseInt(degreeNbr.textContent, 10) * 9) / 5) + 32);
    degreeNbr.textContent = temp;
    degree.textContent = '°F';
  } else {
    const temp = Math.round(((parseInt(degreeNbr.textContent, 10) - 32) * (5 / 9)));
    degreeNbr.textContent = temp;
    degree.textContent = '°C';
  }
});

const search = document.querySelector('#search-input');

const found = (event) => {
  if (event.keyCode === 13) {
    getWeather(search.value);
  }
};

search.addEventListener('keypress', found);
