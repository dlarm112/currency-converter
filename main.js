let amount = prompt("How much money")

let from = prompt("What currency do you have?")

let to = prompt("What currency do you want to convert to?")

vndRate = 23400;
usdRate = 1;
krwRate = 1222;

function vndToUsd() {
    let result = amount / vndRate;
    console.log(from, " to ", to, "is ", (new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(result)));
}
function usdToVnd() {
    let result = amount * vndRate;
    console.log(from, " to ", to, "is ", (new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'VND' }).format(result)));
}
function usdToKrw() {
    let result = amount * krwRate;
    console.log(from, " to ", to, "is ", console.log(new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'KRW' }).format(result)));
}
function krwToUsd() {
    let result = amount / krwRate;
    console.log(from, " to ", to, "is ", (new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(result)));
}
function krwToVnd() {
    let result = (amount/krwRate) * vndRate;
    console.log(from, " to ", to, "is ", (new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'VND' }).format(result)));
}
function vndToKrw() {
    let result = (amount/vndRate) * krwRate;
    console.log(from, " to ", to, "is ", console.log(new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'KRW' }).format(result)));
}

if (from === "vnd" && to === "usd"){
    vndToUsd();
}
else if(from === "usd" && to === "vnd"){
    usdToVnd();
}else if(from === "usd" && to === "krw"){
    usdToKrw();
}else if(from === "krw" && to === "usd"){
    krwToUsd();
}else if(from === "krw" && to === "vnd"){
    krwToVnd();
}else if(from === "vnd" && to === "krw"){
    vndToKrw();
}
else{
    alert("Please enter a valid currency")
}


  //console.log(new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'VND' }).format(number));
  //console.log(new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(number));
  //console.log(new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'KRW' }).format(number));

