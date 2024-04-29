function calculatePrice() {
    let Name = document.getElementById("Name").value;
    let Destination = parseInt(document.getElementById("Destination").value);
    let Type = document.getElementById("Type").value;
    let Price;
    let time;
    if (Type == 'car') {
        if (Destination == 1) {
           Price = 200;
           time = 3 * Destination;
        } else {
           Price = (75 * Destination) + 125;
           time = 3 * Destination;
        }
    } else {
        if (Destination == 1) {
            Price = 150;
            time = 5 * Destination;
        } else {
            Price = (50*Destination) + 100; 
            time = 5 * Destination;
        }
    }
    
    alert("Name: "+Name + "  Price: Rs." + Price + " Time: " + time + " minutes");

}

