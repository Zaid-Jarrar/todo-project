`use strict`;

var name = prompt("Please enter your name");

var gender = prompt("Please enter your gender (Male/Female)").toUpperCase();

if (gender !== "MALE" && gender !== "FEMALE") {

    alert("Please enter either Male or Female")
    var gender = prompt("Please enter your gender (Male/Female)").toUpperCase();
}

var age = prompt("Please enter your age")
if (age <= 0) {

    alert("Please enter your age")
    var age = prompt("Please enter your age")

}



var message = prompt("Would you like to skip the welcoming Message?").toUpperCase()
if (message === "YES") {
    var confirmation = confirm("Are you sure?")
}
else {
    if (gender === "MALE") {
        alert(`welcome to Mr. ${name} the website`)
    }
    else if (gender === "FEMALE") {
        alert(`welcome to Mrs. ${name} the website`)
    }
    else {
        alert(`welcome ${name} to the website`)
    }

}











