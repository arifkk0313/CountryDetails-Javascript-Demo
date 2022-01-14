function fetchData() {
    let countryName = country_name.value

    fetch(`https://restcountries.com/v2/name/${countryName}?fullText=true`)
        .then(res => res.json()).then(data => populateValues(data))
}
function populateValues(country) {
    console.log(country);
    // console.log(country);
    let countryName = country[0].name
    let countryCapita = country[0].capital
    let countryPopulation = country[0].population
    let currencyName = country[0].currencies[0].name
    let currencySymbol = country[0].currencies[0].symbol
    let countryFlag = country[0].flag
    let htmlData = `
    <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${countryFlag}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${countryName}</h5>
  <ul class="list-group list-group-flush">
  <li class="list-group-item">Capital - ${countryCapita}</li>
    <li class="list-group-item">Population - ${countryPopulation}</li>
    <li class="list-group-item">Currency name - ${currencyName}</li>
    <li class="list-group-item">Currency Symbol - ${currencySymbol}</li>
  </ul>
  
</div>
    `

    document.querySelector("#result").innerHTML=htmlData

}

