

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
    alert('welcomee to the our website');
  }

}




function survey (questions) {
  let answers = [];
  for (let index = 0; index < questions.length; index++) {

    // eslint-disable-next-line no-unused-vars
    let firstAnswers = prompt(questions[index]).toLowerCase();
    if (firstAnswers === ''){
      answers.push('Invalid');}
    else if(firstAnswers === 'yes' || firstAnswers === 'no'){
      answers.push(firstAnswers);}
    else{
      alert('Invalid entry');
    }
    // console.log(answers);
  }
  for (let index = 0 ; index < answers.length; index++) {
    console.log(`Answer ${index+1}: ${answers[index]}`);

  }

}

survey(['Do you like food?',
  'Do think coding is easy?','Do you speak English?']);
