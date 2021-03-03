import setAttributes from './setAttributes';

const header = () => {
  // const container = document.createElement('div');
  // container.className = 'container pb-5';

  const header = document.createElement('header');
  header.className = 'd-flex justify-content-between pt-5';

  const logoWrapper = document.createElement('div');
  const h1 = document.createElement('h1');
  h1.textContent = 'Weather app';

  logoWrapper.appendChild(h1);

  const searchWrapper = document.createElement('div');

  const searchInput = document.createElement('input');
  setAttributes(searchInput, {
    class: 'form-control form-control-sm me-2', id: 'search-input', type: 'search', placeholder: 'Add a town here', 'aria-label': 'Search',
  });

  const tempWrapper = document.createElement('div');
  const tempSwitch = document.createElement('input');
  setAttributes(tempSwitch, {
    class: 'form-check-input', id: 'temp-switch', type: 'checkbox',
  });
  const tempConnversion = document.createElement('h5');
  tempConnversion.className = 'd-flex temp mx-2 mt-2';
  tempConnversion.textContent = '°C / °F';

  tempWrapper.append(tempSwitch, tempConnversion);

  searchWrapper.append(searchInput, tempWrapper);

  header.append(logoWrapper, searchWrapper);
};

export default header;