fetch('https://632daa4e2cfd5ccc2af3ebea.mockapi.io/flowers')
.then(resp => resp.json()).then(res => displayFlowers(res));


function displayFlowers(flowers) {


    const container = document.getElementById('container');
    for (const flower of flowers) {

  console.log(flower);

  const card = document.createElement('div');
  card.classList.add('card');

  const topCard = document.createElement('div');
  topCard.classList.add('top-card');
  card.appendChild(topCard);

  const flowerName = document.createElement('h1');
  flowerName.innerText = flower.name;
  flowerName.classList.add('name');
  topCard.appendChild(flowerName);

  const flowerFamily = document.createElement('h4');
  flowerFamily.innerText = flower.family;
  flowerFamily.classList.add('family');
  topCard.appendChild(flowerFamily);

  const flowerImage = document.createElement('img');
  flowerImage.classList.add('image');
  flowerImage.src = flower.image;
  topCard.appendChild(flowerImage);

  const bottomCard = document.createElement('div');
  bottomCard.classList.add('bottom-card');
  card.appendChild(bottomCard);

  const textLocalization = document.createElement('h3');
  textLocalization.innerText = 'Localization :'
  textLocalization.classList.add('text-localization');
  bottomCard.appendChild(textLocalization);

  const localization = document.createElement('h2');
  localization.innerHTML = flower.localization;
  localization.classList.add('localization');
  bottomCard.appendChild(localization);

  const temperature = document.createElement('div');
  temperature.classList.add('temperature');
  bottomCard.appendChild(temperature);

  const textTemperature = document.createElement('h3');
  textTemperature.innerText = 'Min / Max temperature :';
  textTemperature.classList.add('text-temperature');
  temperature.appendChild(textTemperature);

  const minTemperature = document.createElement('h3');
  minTemperature.innerText = flower.min_temperature + ' / ';
  temperature.appendChild(minTemperature);

  const maxTemperature = document.createElement('h3');
  maxTemperature.innerText =flower.max_temperature;
  temperature.appendChild(maxTemperature);
  

  container.appendChild(card);



  
    }
  }