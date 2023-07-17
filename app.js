import { getCountries, getCountryInfo } from './functions/countries_api.js'
import { buildCountriesDiv, buildCountriesSelectBox, buildCountryComponent } from './functions/countries_box.js'

async function initApp() {
    const countriesNames = await getCountries()

    buildCountriesDiv(countriesNames)
    buildCountriesSelectBox(countriesNames)
    buildCountryComponent()
    onCountryButtonClick()

}

initApp()

function onCountryButtonClick() {
    document.addEventListener('click', function(e) {


        console.log(e.target)

        if (e.target.classList.contains('country-text')) {
            console.log("That's the class you want")
            const countryName = e.target.innerText.toLowerCase()

            getCountryInfo(countryName)
                .then(data => {
                    
                    console.log(data)
                    buildCountryComponent(data)
                })
        }

    })

    document.getElementById('select-countries').addEventListener('change', function(e) {
        getCountryInfo(e.target.value)
                .then(data => {
                    
                    console.log(data)
                    buildCountryComponent(data)
                })
    })
}