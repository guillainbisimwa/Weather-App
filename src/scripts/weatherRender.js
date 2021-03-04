const changeIcon = (weather) => {
  const weatherWrapper = document.querySelector('#weather');
  weatherWrapper.innerHTML = '';

  switch (weather) {
    case 'Rain': {
      const shower = document.createElement('div');
      shower.className = 'icon sun-shower';

      const cloud = document.createElement('div');
      cloud.className = 'cloud';

      const sun = document.createElement('div');
      sun.className = 'sun';

      const rays = document.createElement('div');
      rays.className = 'rays';

      sun.appendChild(rays);

      const rain = document.createElement('div');
      rain.className = 'rain';

      shower.append(cloud, sun, rain);

      weatherWrapper.appendChild(shower);
      break;
    }
    case 'Sun': {
      const sunny = document.createElement('div');
      sunny.className = 'icon sunny';

      const sun = document.createElement('div');
      sun.className = 'sun';

      const rays = document.createElement('div');
      rays.className = 'rays';

      sun.appendChild(rays);

      sunny.append(sun);
      break;
    }
    case 'Clouds': {
      const thunder = document.createElement('div');
      thunder.className = 'icon thunder-storm';

      const cloud = document.createElement('div');
      cloud.className = 'cloud';

      const lightning = document.createElement('div');
      lightning.className = 'lightning';

      const bolt = document.createElement('div');
      bolt.className = 'bolt';

      const bolt1 = document.createElement('div');
      bolt1.className = 'bolt';

      lightning.append(bolt, bolt1);
      thunder.append(cloud, lightning);

      weatherWrapper.appendChild(thunder);
      break;
    }
    case 'Snow': {
      const flurries = document.createElement('div');
      flurries.className = 'icon flurries';

      const cloud = document.createElement('div');
      cloud.className = 'cloud';

      const snow = document.createElement('div');
      snow.className = 'snow';

      const flake1 = document.createElement('div');
      flake1.className = 'flake';

      const flake2 = document.createElement('div');
      flake2.className = 'flake';

      snow.append(flake1, flake2);
      flurries.append(cloud, snow);

      weatherWrapper.appendChild(flurries);
      break;
    }
    default: {
      const cloudy = document.createElement('div');
      cloudy.className = 'icon cloudy';

      const cloud = document.createElement('div');
      cloud.className = 'cloud';

      const cloud1 = document.createElement('div');
      cloud1.className = 'cloud';

      cloudy.append(cloud, cloud1);

      weatherWrapper.appendChild(cloudy);
    }
  }
};

const changeBackground = (weather) => {
  const body = document.querySelector('body');

  switch (weather) {
    case 'Rain': {
      body.removeAttribute('class');
      body.classList.add('rainyBg');
      break;
    }
    case 'Sun': {
      body.removeAttribute('class');
      body.classList.add('sunnyBg');
      break;
    }
    case 'Clouds': {
      body.removeAttribute('class');
      body.classList.add('cloudyBg');
      break;
    }
    case 'Snow': {
      body.removeAttribute('class');
      body.classList.add('rainyBg');
      break;
    }
    default:
      body.removeAttribute('class');
      body.classList.add('defaultBg');
  }
};

const displayDate = () => {
  const today = new Date();

  const months = ['January', 'February', 'March',
    'April', 'May', 'June', 'July',
    'August', 'September', 'October',
    'November', 'December'];

  const days = ['Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const dd = days[today.getDay()];
  const dateWeek = today.getDate();
  const mm = months[today.getMonth()];
  const yyyy = today.getFullYear();

  const day = document.querySelector('#day');
  day.textContent = dd;
  const date = document.querySelector('#date');
  date.textContent = `${mm} ${dateWeek}, ${yyyy}`;
};

const displayDetails = (weather) => {
  const pressureNbr = document.querySelector('.pressureNbr');
  pressureNbr.textContent = weather.pressure;
  const humidityNbr = document.querySelector('.humidityNbr');
  humidityNbr.textContent = weather.humidity;
  const tempMinNbr = document.querySelector('.tempMinNbr');
  tempMinNbr.textContent = `${weather.temp_min} °C`;
  const tempMaxNbr = document.querySelector('.tempMaxNbr');
  tempMaxNbr.textContent = `${weather.temp_max} °C`;
};

const displayWeather = (weather) => {
  const textTemp = document.querySelector('#text-temp');
  textTemp.textContent = weather.weather[0].description;

  const city = document.querySelector('#city');
  city.textContent = `${weather.name}, ${weather.sys.country} `;

  const degreeNbr = document.querySelector('#degree-nbr');
  degreeNbr.textContent = `${Math.round(weather.main.temp)}°`;

  const degree = document.querySelector('#degree');
  degree.textContent = 'C';
  changeBackground(weather.weather[0].main);
  changeIcon(weather.weather[0].main);
  displayDate();
  displayDetails(weather.main);
};

export default displayWeather;