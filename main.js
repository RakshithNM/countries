import './style.css'

let templateString = '<h1>COUNTRIES OF THE WORLD</h1>';
let countryData = '';
fetch("https://restcountries.eu/rest/v2/all")
  .then(response => response.json())
  .then(data => {
    let countryNames = data.map(item => {
      return {
        name: item.name,
        flag: item.flag
      }
    });
    for(let i = 0; i < countryNames.length; i++) {
      countryData += `
          <div class="card">
            <img src="${countryNames[i].flag}" alt="${countryNames[i].name}" width="160" height="90">
            <p>${countryNames[i].name}</p>
          </div>
        `
      if(i == countryNames.length - 1) {
        templateString += `
          <div>${countryData}</div>
          `
      }
    }
    console.log(templateString);
    document.querySelector('#app').innerHTML = templateString; 
  });
