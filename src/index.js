import './style.css';
import weather from './scripts/weather';

const content = document.querySelector('#content');
content.className = 'container';

const mainPage = document.createElement('div');
content.appendChild(mainPage);

const consthomePage = () => {
  mainPage.appendChild(weather());
};

consthomePage();
