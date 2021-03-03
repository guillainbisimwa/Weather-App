import './style.css';
import weather from './scripts/weather';
import header from './scripts/header';
import main from './scripts/main_render';

const content = document.querySelector('#content');

const mainPage = document.createElement('div');
mainPage.className = 'container pb-5';

content.appendChild(mainPage);

const homePage = () => {
  mainPage.append(header(), main());
};

homePage();
