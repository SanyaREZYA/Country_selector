document.addEventListener('DOMContentLoaded', () => {
    const countrySelector = document.getElementById('countrySelector');
    const shadowRoot = countrySelector.attachShadow({ mode: 'open' });
    const container = document.createElement('div');
    const countryName = document.createElement('span');
    const flagImage = document.createElement('img');
    const button = document.createElement('button');
    const countriesListContainer = document.createElement('div');
    const style = document.createElement('style');

    countryName.textContent = 'Україна';
    flagImage.src = 'https://flagsapi.com/UA/flat/64.png';
    countriesListContainer.className = 'countriesListContainer';
    countriesListContainer.style.display = 'none';
    style.textContent = `
        div {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
    
        span {
          flex-grow: 1;
        }
    
        img {
          width: 35px;
          height: 25px;
        }
    
        button {
          margin-left: 10px;
          width: 30px;
          height: 30px;
          padding: 20px;
          border: none;
          background-color: white;
          background-image: url(images/button_arrow.png);
          background-repeat: no-repeat;
          background-size: contain;
        }
    
        .countriesListContainer {
          margin-top: 10px;
        }
    
        .countryItem {
          display: flex;
          align-items: center;
          margin-bottom: 5px;
          cursor: pointer;
        }

        .countryItem:hover {
          background-color: #eeeeee;
        }
    
        .countryFlag {
          width: 25px;
          height: 20px;
          margin-right: 5px;
        }
      `;
    let isOpen = false;
  
    button.addEventListener('click', () => {
      if (isOpen) {
        countriesListContainer.style.display = 'none';
        isOpen = false;
      } else {
        countriesListContainer.style.display = 'block';
        isOpen = true;
      }
    });
  
    const countriesList = [
      { name: 'Україна', flagSrc: 'https://flagsapi.com/UA/flat/64.png' },
      { name: 'Сполучені Штати', flagSrc: 'https://flagsapi.com/US/flat/64.png' },
      { name: 'Канада', flagSrc: 'https://flagsapi.com/CA/flat/64.png' },
      { name: 'Польща', flagSrc: 'https://flagsapi.com/PL/flat/64.png' },
      { name: 'Німеччина', flagSrc: 'https://flagsapi.com/DE/flat/64.png' },
      { name: 'Франція', flagSrc: 'https://flagsapi.com/FR/flat/64.png' },
    ];
  
    countriesList.forEach(country => {
      const countryItem = document.createElement('div');
      countryItem.className = 'countryItem';
  
      const countryFlag = document.createElement('img');
      countryFlag.className = 'countryFlag';
      countryFlag.src = country.flagSrc;
  
      const countrySpan = document.createElement('span');
      countrySpan.textContent = country.name;
  
      countryItem.addEventListener('click', () => {
        countryName.textContent = country.name;
        flagImage.src = country.flagSrc;
        countriesListContainer.style.display = 'none';
        isOpen = false;
      });
  
      countryItem.appendChild(countryFlag);
      countryItem.appendChild(countrySpan);
      countriesListContainer.appendChild(countryItem);
    });
  
    container.appendChild(countryName);
    container.appendChild(flagImage);
    container.appendChild(button);
  
    shadowRoot.appendChild(style);
    shadowRoot.appendChild(container);
    shadowRoot.appendChild(countriesListContainer);
  });
  