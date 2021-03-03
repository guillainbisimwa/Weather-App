import setAttributes from './setAttributes';

const main = () => {
  const main = document.createElement('main');
  main.className = 'row mt-5';

  const colLeftWrapper = document.createElement('div');
  colLeftWrapper.className = 'info col-sm-8';

  const colLeft = document.createElement('div');
  colLeft.className = 'row align-items-center py-3';

  const dFlexContainer = document.createElement('div');
  dFlexContainer.className = 'd-flex';

  const mainCenter = document.createElement('div');
  mainCenter.className = 'pt-2 mx-auto text-center text-lg-start';

  const dateWrapper = document.createElement('h1');
  dateWrapper.className = 'text-light pb-2';

  const day = document.createElement('span');
  setAttributes(day, {
    class: 'fw-light', id: 'day',
  });
  day.textContent = 'Monday';

  const date = document.createElement('span');
  setAttributes(date, {
    id: 'date',
  });
  date.textContent = 'March, 1st 202';

  dateWrapper.append(day, date);

  const hour = document.createElement('p');
  hour.className = 'h4 fw-light text-light opacity-70 line-height-base';

  const showTempWrapper = document.createElement('div');
  showTempWrapper.className = 'showTemp mt-8 pt-5';

  const showTemp = document.createElement('div');
  showTemp.className = 'd-flex gap-3 pt-5';

  const textTemp = document.createElement('p');
  textTemp.className = 'h4 fw-light text-light opacity-70 line-height-base';
  textTemp.textContent = 'Cloud rain';
  setAttributes(textTemp, {
    id: 'text-temp',
  });

  const iconTemp = document.createElement('i');
  iconTemp.className = 'fas fa-cloud-rain fs-1 text-light';
  setAttributes(iconTemp, {
    id: 'icon-temp',
  });

  showTemp.append(textTemp, iconTemp);

  const cityWrapper = document.createElement('div');
  cityWrapper.className = '-flex gap-3 pt-1';

  const cityContainer = document.createElement('h1');
  cityContainer.className = 'text-light pb-2';

  const city = document.createElement('span');
  city.textContent = 'Goma';
  setAttributes(city, {
    id: 'city',
  });

  const degreeNbr = document.createElement('span');
  setAttributes(degreeNbr, {
    class: 'fw-light', id: 'degree-nbr',
  });
  degreeNbr.textContent = '12';

  const degree = document.createElement('span');
  setAttributes(degree, {
    class: 'fw-light', id: 'degree',
  });
  degree.textContent = 'C';

  cityContainer.append(city, degreeNbr, degree);

  cityWrapper.appendChild(cityContainer);

  showTempWrapper.append(showTemp, cityWrapper);

  mainCenter.append(dateWrapper, hour, showTempWrapper);

  dFlexContainer.appendChild(mainCenter);

  colLeft.appendChild(dFlexContainer);

  colLeftWrapper.appendChild(colLeft);

  const colRightWrapper = document.createElement('div');
  colRightWrapper.className = 'details col-sm-4 mt-3 py-3';

  const rightCard = document.createElement('div');
  rightCard.className = 'card';
  rightCard.innerHTML = 'p';

  main.append(colLeftWrapper, colRightWrapper);
  return main;
};

export default main;