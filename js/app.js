

'use strict';

// eslint-disable-next-line no-redeclare
var name = prompt('Please enter your name');

var gender = prompt('Please enter your gender (Male/Female)').toUpperCase();

if (gender !== 'MALE' && gender !== 'FEMALE') {

  alert('Please enter either Male or Female');

  gender = prompt('Please enter your gender (Male/Female)').toUpperCase();
}

var age = prompt('Please enter your age');
if (age <= 0) {
  alert('You are not allowed to enter');
  age = prompt('Please enter your age');

}



var message = prompt('Would you like to skip the welcoming Message?').toUpperCase();
if (message === 'YES') {

  // eslint-disable-next-line no-unused-vars
  var confirmation = confirm('Are you sure?');
}
else {
  if (gender === 'MALE') {
    alert(`welcome to Mr. ${name} to the our website`);
  }
  else if (gender === 'FEMALE') {
    alert(`welcome to Mrs. ${name} to the our website`);
  }
  else {
    alert(`welcome ${name} to the our website`);
  }

}












