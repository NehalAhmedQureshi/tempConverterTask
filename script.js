const tempTo = document.querySelector(".tempTo")

const tempIn = document.querySelector(".tempIn")
const form = document.querySelector(".tempForm")
let inputTemp = document.querySelector(".temp")
const printer = document.querySelector(".show")

printer.style.display = "none"
form.addEventListener("submit", (event) => {
    input = Number(inputTemp.value)

    event.preventDefault()

    console.log("🚀 ~ input:", input)
    printer.style.display = "block"


    if (tempIn.value == "Celcius" && tempTo.value == "Fahrenhiet") {
        const celsToFahren = Number((input * (9 / 5)));
        printer.classList.add("alert-info")
        printer.classList.remove("alert-danger")
        printer.innerHTML = `${input}° Celcius is equal to ${celsToFahren}° Fahrenheit`

    } else if (tempIn.value == "Celcius" && tempTo.value == "Kelvin") {
        const celsToKelvin = Number(input + 273.15);
        printer.classList.add("alert-info")
        printer.classList.remove("alert-danger")
        printer.innerHTML = `${input}° Celcius is equal to ${celsToKelvin}° Kelvin`

    } else if (tempIn.value == "Celcius" && tempTo.value == "Celcius") {
        // alert("Temperature already in Celcius")
        printer.classList.remove("alert-info")
        printer.classList.add("alert-danger")
        printer.innerHTML = `Temperature already in celcius`

    } else if (tempIn.value == "Fahrenhiet" && tempTo.value == "Celcius") {
        const fahrenToCelcius = (input - 32) * 5 / 9;
        printer.classList.add("alert-info")
        printer.classList.remove("alert-danger")
        printer.innerHTML = `${input}° Fahrenheit is equal to ${fahrenToCelcius}° Celcius`

    } else if (tempIn.value == "Fahrenhiet" && tempTo.value == "Kelvin") {
        const fahrenToKelvin = ((input - 32) * 5 / 9) + 273.15;
        printer.classList.add("alert-info")
        printer.classList.remove("alert-danger")
        printer.innerHTML = `${input}° Fahrenheit is equal to ${fahrenToKelvin}° Kelvin`

    } else if (tempIn.value == "Fahrenhiet" && tempTo.value == "Fahrenhiet") {
        // alert("Temperature already in Fahrenhiet")
        printer.classList.remove("alert-info")
        printer.classList.add("alert-danger")
        printer.innerHTML = `Temperature already in Fahrenheit`


    } else if (tempIn.value == "Kelvin" && tempTo.value == "Celcius") {
        const kelvinToCelcius = input - 273.15;
        printer.classList.add("alert-info")
        printer.classList.remove("alert-danger")
        printer.innerHTML = `${input}° Kelvin is equal to ${kelvinToCelcius}° Celcius`


    } else if (tempIn.value == "Kelvin" && tempTo.value == "Fahrenhiet") {
        const kelvinToFahren = ((input - 273.15) * 9 / 5) + 32;
        printer.classList.add("alert-info")
        printer.classList.remove("alert-danger")
        printer.innerHTML = `${input}° Kelvin is equal to ${kelvinToFahren}° Fahrenheit`

    } else if (tempIn.value == "Kelvin" && tempTo.value == "Kelvin") {
        // alert("Temperature already in Kelvin")
        printer.classList.remove("alert-info")
        printer.classList.add("alert-danger")
        printer.innerHTML = `Temperature already in Kelvin`


    }


})