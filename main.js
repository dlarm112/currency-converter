let amount = prompt("How much money")

let from = prompt("What currency do you have?")

let to = prompt("What currency do you want to convert to?")

vndRate = 23400;
usdRate = 1;
krwRate = 1222;

let fromCap = from.toUpperCase();
let toCap = to.toUpperCase();

function vndToUsd() {
    let result = amount / vndRate;
    console.log(fromCap, " to ", toCap, "is ", (new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(result)));
}
function usdToVnd() {
    let result = amount * vndRate;
    console.log(fromCap, " to ", toCap, "is ", (new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'VND' }).format(result)));
}
function usdToKrw() {
    let result = amount * krwRate;
    console.log(fromCap, " to ", toCap, "is ", (new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'KRW' }).format(result)));
}
function krwToUsd() {
    let result = amount / krwRate;
    console.log(fromCap, " to ", toCap, "is ", (new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(result)));
}
function krwToVnd() {
    let result = (amount/krwRate) * vndRate;
    console.log(fromCap, " to ", toCap, "is ", (new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'VND' }).format(result)));
}
function vndToKrw() {
    let result = (amount/vndRate) * krwRate;
    console.log(fromCap, " to ", toCap, "is ", (new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'KRW' }).format(result)));
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


  //console.log(new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'VND' }).format(number));
  //console.log(new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(number));
  //console.log(new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'KRW' }).format(number));

