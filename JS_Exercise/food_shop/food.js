/*let Pasta = parseInt(document.getElementById("Pasta").value);
let Pizza = parseInt(document.getElementById("Pizza").value);
let Burger = parseInt(document.getElementById("Burger").value);

let Total = 100 * Pasta + 200 * Pizza + 150 * Burger;
console.log("Total=", Total);

let Discount_rate;
if (Total > 3000) {
    Discount_rate = 10;
} else if (Total > 2000) {
    Discount_rate = 5;
} else {
    Discount_rate = 2;
}

let Discount_amount = (Discount_rate * Total) / 100;
let Net_Amount = Total - Discount_amount;

console.log("Discount Amount=", Discount_amount);
console.log("Net Amount=", Net_Amount);*/


let Total;
let Discount_amount;
let Net_Amount;

function calculateTotal() {
    let select = document.getElementById("select-vegi").value;
    let Pasta = parseInt(document.getElementById("Pasta").value);
    let Pizza = parseInt(document.getElementById("Pizza").value);
    let Burger = parseInt(document.getElementById("Burger").value);

    if (select == 'vegi') {
        Total = 50*Pasta+150*Pizza+100*Burger;
    } else {
        Total = 100*Pasta+200*Pizza+150*Burger;
    }
    console.log("Total=",Total);
    alert("Total="+Total);
}
function calculateDiscount() {
    if (Total < 1000) {
        Discount_amount = 0;
    } else if (Total < 2000) {
        Discount_amount = (2*Total)/100;
    } else if (Total < 3000) {
        Discount_amount = (5*Total)/100;
    } else {
        Discount_amount=(10*Total)/100;
    }
    console.log("Discount Amount=", Discount_amount);
   }
function calculateBill() {
    Net_Amount = Total - Discount_amount;
    console.log("Net Amount=", Net_Amount);
}







