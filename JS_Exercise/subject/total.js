let Sinhala = parseInt(document.getElementById("Sinhala").value);
let English = parseInt(document.getElementById("English").value);
let Maths = parseInt(document.getElementById("Maths").value);
let Total;

Total= Sinhala+English+Maths;
console.log(Total);
let average= Total/3
console.log("Average:-",average);
