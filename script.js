
var price;

var percent;


function priceCalculator() {

    result = document.getElementById("extras-text").innerHTML = "";

    price = document.getElementById("price").value;

    percent = document.getElementById("percent").value;


    if(price > 0 && percent > 0) {

        if(percent > 99) {

            result = document.getElementById("extras-text").innerHTML = "*El descuento no puede mayor al 100% porque el producto sería gratis*";

        }

        else {

            result = document.getElementById("calculate-box").style.display = `none`;
            result = document.getElementById("result-box").style.display = `grid`;
            result = document.getElementById("result").innerHTML = `${price - (price * (percent / 100))}`

        }
    }

    else {

        result = document.getElementById("extras-text").innerHTML = "*Los valores tienen que ser mayores a 0*";
        reset ();

    }

}


function reset () {
    
    result = document.getElementById("calculate-box").style.display = `grid`;
    result = document.getElementById("result-box").style.display = `none`;

}