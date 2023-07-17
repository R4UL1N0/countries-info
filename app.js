import { getCountries, getCountryInfo } from './functions/countries_api.js'
import { buildCountriesDiv, buildCountriesSelectBox, buildCountryComponent } from './functions/countries_box.js'

async function initApp() {
    const countriesNames = await getCountries()

    buildCountriesDiv(countriesNames)
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
}