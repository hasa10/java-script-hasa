let Loan = parseInt(document.getElementById("Amount").value);
let Interest = parseFloat(document.getElementById("rate").value); 
let Total = parseInt(document.getElementById("Total").value);
let years = parseInt(document.getElementById("years").value);

Total = Loan + (Loan *(Interest/100));
console.log(Total);

let count = 0;
while (count < years) {
    Total += Total * (Interest / 100);
    count++;
}
console.log( Total);









