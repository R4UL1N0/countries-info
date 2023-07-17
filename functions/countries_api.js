export async function getCountries() {

    let countriesList = []

    await fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            console.log(data[0])
            console.log(data.length)

            countriesList = data.map(d => d.name.common)
        })
    console.log(`LEN: ${countriesList.length}`)
    return countriesList.sort()
}

export async function getCountryInfo(name) {

    let countryInfo 

    await fetch(`https://restcountries.com/v3.1/name/${name.toLowerCase()}`)
        .then(r => r.json())
        .then(data => {
            const d = data[0]
            
            if (data.length > 0) {

                countryInfo = {
                    "name": d.name.common,
                    "officialName": d.name.official,
                    "capital": d.capital,
                    "region": d.region,
                    "subregion": d.subregion,
                    "languages": d.languages,
                    "flag": d.flags.png,
                    "flagDescription": d.flags.alt,
                    "latLng": d.latlng,
                    "population": d.population
                }
            }
           
        })

        return countryInfo
}
