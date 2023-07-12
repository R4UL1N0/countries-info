

export function countriesSelectBox(countriesList) {
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

export function countriesDiv(countriesList) {
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