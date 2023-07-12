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

export function getCountryInfo(name) {

    fetch(`https://restcountries.com/v3.1/name/${name.toLowerCase()}`)
        .then(r => r.json())
        .then(data => {
            const name = data.name.common
            const capital = data.capital
            const region = data.region
            const subregion = data.subregion

        })
}