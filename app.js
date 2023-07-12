import { getCountries } from './functions/countries_api.js'
import { countriesDiv } from './functions/countries_box.js'

async function initApp() {
    const countriesNames = await getCountries()

    countriesDiv(countriesNames)

}

initApp()