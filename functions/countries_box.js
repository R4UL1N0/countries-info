

export function buildCountriesSelectBox(countriesList) {
    console.log('exec')
    const selectEl = document.createElement('select')

    console.log(`length: ${countriesList.length}`)
    console.log(countriesList)

    for (var i = 0; i < countriesList.length; i++) {

        const countryName = countriesList[i]

        console.log(countryName)
        console.log('exec loop')

        const optionEl = document.createElement('option')
        optionEl.classList.add('country-option')

        optionEl.value = countryName
        optionEl.textContent = countryName

        selectEl.appendChild(optionEl)
    }

    document.getElementById('countries-page').appendChild(selectEl)
}

export function buildCountriesDiv(countriesList) {
    const divEl = document.createElement('div')
    divEl.id = "countries-div"

    for (var i = 0; i < countriesList.length; i++) {
        const countryName = countriesList[i]

        const textEl = document.createElement('p')
        textEl.classList.add('country-text')
        textEl.innerHTML = countryName

        divEl.appendChild(textEl)
    }

    document.getElementById('countries-page').appendChild(divEl)
}

export function buildCountryComponent(countryInfo) {

    const countryInfoEl = document.getElementById('specific-country-component')

    if (!countryInfoEl) {
        console.log("it doesn't exist yet")
        const countryEl = document.createElement('div')
        countryEl.id = 'specific-country-component'
        document.getElementById('countries-page').appendChild(countryEl)

        createCountryComponentElements()
    } else {
        createCountryComponentElements(countryInfo)
    }
}

function createCountryComponentElements(country) {

    const countryInfoEl = document.getElementById('specific-country-component')

    const flagDiv = document.createElement('img')
    flagDiv.style.height = '250px'
    flagDiv.style.width = '400px'
    flagDiv.style.marginBottom = '10px'

    const nameH1 = document.createElement('h1')
    const regionSubregion = document.createElement('p')


    const population = document.createElement('p')
    const capital = document.createElement('p')
    const officialName = document.createElement('p')
    officialName.style.paddingBottom = '15px'
    

    if (!country) {
        console.log('creating')
        flagDiv.src = './assets/no_country.jpg'
        
        nameH1.innerHTML = "No Country Yet."

        countryInfoEl.appendChild(flagDiv)
        countryInfoEl.appendChild(nameH1)

    } else {
        console.log('building')
        flagDiv.src = country.flag
        nameH1.innerHTML = country.name
        countryInfoEl.replaceChildren(flagDiv, nameH1)

        officialName.innerHTML = country.officialName
        countryInfoEl.appendChild(officialName)

        regionSubregion.innerHTML = `${country.region} - ${country.subregion}`
        countryInfoEl.appendChild(regionSubregion)

        capital.innerHTML = `Capital: ${country.capital}`
        countryInfoEl.appendChild(capital)

        population.innerHTML = `Population: ${country.population}`
        countryInfoEl.appendChild(population)


    }
}


// countryInfo = {
//     "name": d.name.common,
//     "officialName": d.name.official,
//     "capital": d.capital,
//     "region": d.region,
//     "subregion": d.subregion,
//     "languages": d.languages,
//     "flag": d.flags.png,
//     "flagDescription": d.flags.alt,
//     "latLng": d.latlng,
//     "population": d.population
// }