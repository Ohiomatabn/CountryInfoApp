async function searchCountryInfo(){
  const countryInput = document.getElementById('country-input');

  if(countryInput){
      try{
        const xhr = await fetch(`https://restcountries.com/v3.1/name/${countryInput.value}`).then(response => response.json()).then(data => countryHTML(data));
      }
      catch(err){
        alert(contryInput + 'is not a valid country name)')
      }
  }
}

function countryHTML(data){
  html = `
    <div class="card">
      <img src="${data[0].flags.png}" alt="IMAGE" id="country-flag" />
      <h2><span class="key">Name:</span> <span class="value">${data[0].name.common}</span></h2>
      <p><span class="key">Continent:</span> <span class="value">${data[0].continents}</span></p>
      <p><span class="key">Capital:</span> <span class="value">${data[0].capital}</span></p>
      <p><span class="key">Currencies:</span> <span class="value">${Object.values(data[0].currencies)[0].name}, ${Object.values(data[0].currencies)[0].symbol}</span></p>
      <p><span class="key">Population:</span> <span class="value">${data[0].population}</span></p>
      <p><span class="key">Timezone:</span> <span class="value">${data[0].timezones}</span></p>
    </div>
  `

  document.getElementById('cover').innerHTML += html;

  console.log(html);
}

document.getElementById('btn').addEventListener('click', e =>{
  e.preventDefault();
  searchCountryInfo();
})