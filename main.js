let amount = document.getElementById("amountInput");
let from = document.getElementById("fromList");
let to = document.getElementById("toList");
let result = 0;
let formattedResult = '';
let convertButton = document.getElementById('convertButton');
//convertButton.addEventListener("click", vndToUsd);

const currencyRatio = {
    vnd: {
        usd: 0.000043,
        krw: 0.051,
        eur: 0.000039,
        vnd: 1
    },
    usd: {
        usd: 1,
        krw: 1193.27,
        eur: 0.9,
        vnd: 23235.5
    },
    krw: {
        usd: 0.00084,
        krw: 1,
        eur: 0.00075,
        vnd: 19.47
    }
};


function getConversionRate(from, to) {
    return currencyRatio[from][to];
}


function convert() {
    if (from.value === "USD" && to.value === "VND") {
        result = amount.value * currencyRatio.usd.vnd
        formattedResult = formatCurrency(to.value, result);
        resultArea.innerHTML = `${formattedResult}`;
    } else if (from.value === "USD" && to.value === "USD") {
        result = amount.value * currencyRatio.usd.usd
        formattedResult = formatCurrency(to.value, result)
        resultArea.innerHTML = `${formattedResult}`;
    } else if (from.value === "USD" && to.value === "EUR") {
        result = amount.value * currencyRatio.usd.eur
        formattedResult = formatCurrency(to.value, result);
        resultArea.innerHTML = `${formattedResult}`;
    } else if (from.value === "USD" && to.value === "KRW") {
        result = amount.value * currencyRatio.usd.krw
        formattedResult = formatCurrency(to.value, result)
        resultArea.innerHTML = `${formattedResult}`;
    } else if (from.value === "KRW" && to.value === "USD") {
        result = amount.value * currencyRatio.krw.usd
        formattedResult = formatCurrency(to.value, result);
        resultArea.innerHTML = `${formattedResult}`;
    } else if (from.value === "KRW" && to.value === "KRW") {
        result = amount.value * currencyRatio.krw.krw
        formattedResult = formatCurrency(to.value, result)
        resultArea.innerHTML = `${formattedResult}`;
    } else if (from.value === "KRW" && to.value === "EUR") {
        result = amount.value * currencyRatio.krw.eur
        formattedResult = formatCurrency(to.value, result);
        resultArea.innerHTML = `${formattedResult}`;
    } else if (from.value === "KRW" && to.value === "VND") {
        result = amount.value * currencyRatio.krw.vnd
        formattedResult = formatCurrency(to.value, result)
        resultArea.innerHTML = `${formattedResult}`;
    } else if (from.value === "VND" && to.value === "VND") {
        result = amount.value * currencyRatio.vnd.vnd
        formattedResult = formatCurrency(to.value, result);
        resultArea.innerHTML = `${formattedResult}`;
    } else if (from.value === "VND" && to.value === "USD") {
        result = amount.value * currencyRatio.vnd.usd
        formattedResult = formatCurrency(to.value, result)
        resultArea.innerHTML = `${formattedResult}`;
    } else if (from.value === "VND" && to.value === "EUR") {
        result = amount.value * currencyRatio.vnd.eur
        formattedResult = formatCurrency(to.value, result);
        resultArea.innerHTML = `${formattedResult}`;
    } else if (from.value === "VND" && to.value === "KRW") {
        result = amount.value * currencyRatio.vnd.krw
        formattedResult = formatCurrency(to.value, result)
        resultArea.innerHTML = `${formattedResult}`;
    } else if (from.value === "EUR" && to.value === "VND") {
        result = amount.value * currencyRatio.eur.vnd
        formattedResult = formatCurrency(to.value, result);
        resultArea.innerHTML = `${formattedResult}`;
    } else if (from.value === "EUR" && to.value === "USD") {
        result = amount.value * currencyRatio.eur.usd
        formattedResult = formatCurrency(to.value, result)
        resultArea.innerHTML = `${formattedResult}`;
    } else if (from.value === "EUR" && to.value === "EUR") {
        result = amount.value * currencyRatio.eur.eur
        formattedResult = formatCurrency(to.value, result);
        resultArea.innerHTML = `${formattedResult}`;
    } else if (from.value === "EUR" && to.value === "KRW") {
        result = amount.value * currencyRatio.eur.krw
        formattedResult = formatCurrency(to.value, result)
        resultArea.innerHTML = `${formattedResult}`;
    } else {
        resultArea.innerHTML = `ERROR`;
    }
    return;
}
/*function usdToVnd() {
    
    return amount.value * currencyRatio
}
function vndToUsd() {
    return amount.value / currencyRatio
}*/

function formatCurrency(type, value) {
    const formatter = new Intl.NumberFormat(type, {
        currency: type,
        style: "currency"
    });
    return formatter.format(value);
}








/*const currencyRatio = 23400;

let amount = document.getElementById("amountInput").value;
let result = 0;

function vndToUsd() {
    console.log ("result is", amount/currencyRatio)
}

function usdToVnd() {
    result.innerHTML = `result is ${amount.value / currencyRatio}`
}

function convert() {
    from = from.toUpperCase();
    to = to.toUpperCase();
    from = from.trim();
    to = to.trim();

    if (from === "VND" && to === "USD") {
        result = vndToUsd();
        console.log(fromCap, " to ", toCap, "is ", (new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(result)));
    } 
    else if (from === "USD" && to === "VND") {
        result = usdToVnd();
        console.log(fromCap, " to ", toCap, "is ", (new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'VND' }).format(result)));
    } 
    else {
        alert("You typed the wrong currency");
        return;
    }
    alert("Converted amount is:" + result);
}

convert();
*/

/*let amount = prompt("How much money")

let from = prompt("What currency do you have?")

let to = prompt("What currency do you want to convert to?")

vndRate = 23400;
usdRate = 1;
krwRate = 1222;

let fromTrim = from.trim();
let toTrim = to.trim();
let fromCap = fromTrim.toUpperCase();
let toCap = toTrim.toUpperCase();

function vndToUsd() {
    let result = amount / vndRate;
    console.log(fromCap, " to ", toCap, "is ", (new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(result)));
}
function usdToVnd() {
    let result = amount * vndRate;
    console.log(fromCap, " to ", toCap, "is ", (new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'VND' }).format(result)));
}
function usdToKrw() {
    let result = amount * krwRate;
    console.log(fromCap, " to ", toCap, "is ", (new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'KRW' }).format(result)));
}
function krwToUsd() {
    let result = amount / krwRate;
    console.log(fromCap, " to ", toCap, "is ", (new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(result)));
}
function krwToVnd() {
    let result = (amount/krwRate) * vndRate;
    console.log(fromCap, " to ", toCap, "is ", (new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'VND' }).format(result)));
}
function vndToKrw() {
    let result = (amount/vndRate) * krwRate;
    console.log(fromCap, " to ", toCap, "is ", (new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'KRW' }).format(result)));
}

if (fromCap === "VND" && toCap === "USD"){
    vndToUsd();
}
else if(fromCap === "USD" && toCap === "VND"){
    usdToVnd();
}else if(fromCap === "USD" && toCap === "KRW"){
    usdToKrw();
}else if(fromCap === "KRW" && toCap === "USD"){
    krwToUsd();
}else if(fromCap === "KRW" && toCap === "VND"){
    krwToVnd();
}else if(fromCap === "VND" && toCap === "KRW"){
    vndToKrw();
}
else{
    alert("Please enter a valid currency")
}
*/

//console.log(new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'VND' }).format(number));
//console.log(new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(number));
//console.log(new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'KRW' }).format(number));