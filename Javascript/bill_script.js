var items = ["Veg Cutlet", "Samosa", "Pav Bhaji", "Dim Sums", "Soup Dumplings", "Kapa Maki", "Margherita Pizza", "Pistachio Panna Cotta", "Tomato Salsa", "Tamales", "Fried Ice Cream"]

var price = [150, 75, 100, 210, 110, 599, 110, 250, 280, 200, 200];

var select = document.getElementById("food-item");

var index = 1;
var totalBill = 0;

var selectedItems = [];
var quantityItem = [];

for (var j = 0; j < items.length; j++) {
    var item = items[j];
    var ele = document.createElement("option");
    ele.textContent = item;
    ele.value = item;
    select.appendChild(ele);
}


function addToCart() {
    var food = document.getElementById("food-item").value;
    var quantity = document.getElementById("quant").value;
    //  console.log(quantity);

    if (food == "Open this select menu") {
        alert("Choose any item");
    }
    else if (quantity == "") {
        alert("Enter quantity");
    }
    else if (quantity <=0) {
        alert("Please enter valid quantity");
    }
    else {
        selectedItems.push(food);
        quantityItem.push(quantity);
        updateTable();
    }
}


function updateTable() {
    var table = document.getElementById("data");
    var row = table.insertRow(index);
    index++;
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    var food = document.getElementById("food-item").value;
    cell1.innerHTML = food;

    var quant = document.getElementById("quant").value;
    cell2.innerHTML = quant;

    var mrp = price[items.indexOf(food)];
    cell3.innerHTML = mrp;
    var cost = mrp * quant;
    cell4.innerHTML = cost;
    totalBill += cost;
}

function resetTable() {

    var len = document.getElementById("data").rows.length;

    while (len != 1) {
        document.getElementById("data").deleteRow(len - 1);
        len = document.getElementById("data").rows.length;
    }
    index = 1;
    selectedItems = [];
    quantityItem = [];
    totalBill = 0;
    document.getElementById("payment").style.display = "none";
    document.getElementById("pay").style.display = "none";
}


function calculateTotalBill() {

    document.getElementById("pay").style.display = "block";
    document.getElementById("top-heading").style.display = "block";


    document.getElementById("total-bill").innerHTML = "Hey Foodies, Your total Bill is Rs. " + totalBill + "<br>Have a nice day !";

}



function showPayment() {
    totalBill = 0;
    document.getElementById("payment").style.display = "block";
}



function addReservation() {

    var name = document.getElementById("exampleName").value;

    var email = document.getElementById("exampleEmail").value;

    if (name == "") {
        alert("Please Enter name");
    }
    else if (email == "") {
        alert("Please enter email");
    }
    else {
        document.getElementById("reserve-content").style.display = "block";
        document.getElementById("reserve-msg").innerHTML = "Hey " + name + " , Your table has been booked successfully.<br>Have a nice day!";
    }



}
