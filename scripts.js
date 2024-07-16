const button = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

async function convertValues() {
    const inputMoneyValue = document.querySelector(".input-money").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueConverted = document.querySelector(".currency-value");


   // const dolarToday = 5.2;
    //const euroToday = 6.2;
    //const libraToday = 6.4;

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL").then( response => response.json())
    const dolarToday = data.USDBRL.high
    const euroToday = data.EURBRL.high
    const libraToday = data.GBPBRL.high



    console.log(data)



    if (currencySelect.value === "dolar") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputMoneyValue / dolarToday);


    }
    if (currencySelect.value === "euro") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"

        }).format(inputMoneyValue / euroToday);

    }

    if (currencySelect.value === "libra") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB" ,{
            style: "currency",
            currency: "GPB"
        }).format(inputMoneyValue / libraToday);
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputMoneyValue);



}
function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }
    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "libra"
        currencyImage.src = "./assets/libra.png"
    }

    convertValues()

}

currencySelect.addEventListener("change", changeCurrency)

button.addEventListener("click", convertValues);

