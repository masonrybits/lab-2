'use strict';

var name = prompt('What is your name?');

alert('Hello ' + name + '! ' + 'This is Ting. Please guess y/n or yes/no to the following 5 questions about me.');


var cat = prompt('Do I have cats?');
var counter = 0;

if (cat.toLowerCase() === 'yes' || cat.toLowerCase() === 'y') {
  console.log('Correct!');
  counter = counter + 1;
  alert('Correct!');
} else if (cat.toLowerCase() === 'no' || cat.toLowerCase() === 'n') {
  console.log('Incorrect!');
  alert('Incorrect!');
} else {
  console.log('Please input y/n or yes/no');
  alert('Please input y/n or yes/no');
}


var dog = prompt('Do I have dogs?');

if (dog.toLowerCase() === 'yes' || dog.toLowerCase() === 'y') {
  console.log('Incorrect!');
  alert('Incorrect!');
} else if (dog.toLowerCase() === 'no' || dog.toLowerCase() === 'n') {
  console.log('Correct!');
  counter = counter + 1;
  alert('Correct!');
} else {
  console.log('Please input y/n or yes/no');
  alert('Please input y/n or yes/no');
}

var icecream = prompt('Do I like ice cream?');

if (icecream.toLowerCase() === 'yes' || icecream.toLowerCase() === 'y') {
  console.log('Correct!');
  counter = counter + 1;
  alert('Correct!');
} else if (icecream.toLowerCase() === 'no' || icecream.toLowerCase() === 'n') {
  console.log('Incorrect!');
  alert('Incorrect!');
} else {
  console.log('Please input y/n or yes/no');
  alert('Please input y/n or yes/no');
}

var surf = prompt('Do I surf?');

if (surf.toLowerCase() === 'yes' || surf.toLowerCase() === 'y') {
  console.log('Incorrect!');
  alert('Incorrect!');
} else if (surf.toLowerCase() === 'no' || surf.toLowerCase() === 'n') {
  console.log('Correct!');
  counter = counter + 1;
  alert('Correct!');
} else {
  console.log('Please input y/n or yes/no');
  alert('Please input y/n or yes/no');
}

var tea = prompt('Do I drink tea?');

if (tea.toLowerCase() === 'yes' || tea.toLowerCase() === 'y') {
  console.log('Correct!');
  counter = counter + 1;
  alert('Correct!');
} else if (tea.toLowerCase() === 'no' || tea.toLowerCase() === 'n') {
  console.log('Incorrect!');
  alert('Incorrect!');
} else {
  console.log('Please input y/n or yes/no');
  alert('Please input y/n or yes/no');
}

var age = parseInt(prompt('Guess my age!'));

for (var i = 1; i < 4; i++) {
  if (age < 30) {
    age = parseInt(prompt('Too low! Guess again.'));
    console.log('Low!');
  } else if (age > 30) {
    age = parseInt(prompt('Too high! Guess again.'));
    console.log('High!');
  } else if (age === 30) {
    alert('Correct!');
    counter = counter + 1;
    console.log('Correct!');
    break;
  } else {
    age = parseInt(prompt('Type in number!'));
    console.log('Type number!');
  }
}

alert('The correct answer is 30!');

var flavor = prompt('Guess my ice cream flavor.').toLowerCase();
var myFlavor = ['strawberry', 'chocolate', 'vanilla', 'coffee'];


for (var i = 0; i < 5; i++) {
  if (flavor === myFlavor[0] || flavor === myFlavor[1] || flavor === myFlavor[2] || flavor === myFlavor[3]) {
    alert('Correct!');
    counter = counter + 1;
    console.log('Correct!');
    break;
  } else {
    flavor = prompt('Guess again!').toLowerCase();
    console.log('Again!');
  }
}

alert('The possible correct answers are: strawberry, chocolate, vanilla and coffee.');

alert ('You got ' + counter + ' out of the 7 questions correct');
