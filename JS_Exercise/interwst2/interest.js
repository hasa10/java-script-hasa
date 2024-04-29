let loanAmount;
let year;
let name;
let rate
let Type;
let interest;
let totalAmount;
let Total;
function calculateInterestRate() {
    name = document.getElementById("name").value;
    loanAmount = parseInt(document.getElementById("loanamount").value);
    year = parseInt(document.getElementById("year").value);
    Type = document.getElementById("Type").value;
    Total = loanAmount;

    if (loanAmount < 10000) {
        rate = 10;
    } else if (loanAmount < 100000) {
        rate = 12;
    } else if (loanAmount < 1000000) {
        rate = 15;
    } else {
        rate = 18;
    }
    alert("Interest Rate: "+rate);
}

function calculateInterest(){
    if (Type == 'Pettyinterest') {
        interest = year * (loanAmount * (rate / 100));
        alert("Name: " + name + "\nInterest: " + interest);
    } else {
        interest = 0;
        let count = 0;
        while (count < year) {
            interest += Total * (rate / 100);
            count++;
        }
        alert("Name: " + name + "\nInterest: " + interest);
    }
}

function totalmoney() {
    calculateInterestRate();
    calculateInterest();
    totalAmount = loanAmount + interest;
    alert("Name: " + name + "\nTotal amount: " + totalAmount);
}
