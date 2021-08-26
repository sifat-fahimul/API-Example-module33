const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountry(data))

}
loadCountries()
const displayCountry = countries => {
    const divcontainer = document.getElementById('country');
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML = `
    <h3>${country.name}</h3>
    <p>${country.capital}</p>
    <button onclick="loadCountryByName('${country.name}')">Details</button>
    `
        divcontainer.appendChild(div)
    })
}
const loadCountryByName = (name) => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]))
}
const displayCountryDetails = country => {
    console.log(country)
    const detailsDiv = document.getElementById('country-details')
    detailsDiv.innerHTML = `
     <h4> Country name: ${country.name}</h4>
     <p> Population: ${country.population}</p>
     <img width="200px" src="${country.flag}">
    `

}