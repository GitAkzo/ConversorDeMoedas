var valueToConvert = document.querySelector('#valueToConvert')
var valueDolar = document.querySelector('#valueDolar')
var result = document.querySelector('span')

function convert() {
    result.innerHTML = `O valor convertido é: ` + (parseFloat(valueToConvert.value) * parseFloat(valueDolar.value)).toFixed(2)
}