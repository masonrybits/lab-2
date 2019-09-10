'use strict';

var name = prompt ('What is your name?');

alert('Hello ' + name + '! ' + 'This is Ting. Please guess y/n or yes/no to the following 5 questions about me.');


var cat = prompt ('Do I have cats?');

if(cat.toLowerCase() === 'yes' || cat.toLowerCase() === 'y')
{
  console.log('Correct!');
  alert('Correct!');
} else if(cat.toLowerCase() === 'no' || cat.toLowerCase() === 'n')
{
  console.log('Incorrect!');
  alert('Incorrect!');
} else {
  console.log('Please input y/n or yes/no');
  alert('Please input y/n or yes/no');
}


var dog = prompt ('Do I have dogs?');

if(dog.toLowerCase() === 'yes' || dog.toLowerCase() === 'y')
{
  console.log('Incorrect!');
  alert('Incorrect!');
} else if(dog.toLowerCase() === 'no' || dog.toLowerCase() === 'n')
{
  console.log('Correct!');
  alert('Correct!');
} else {
  console.log('Please input y/n or yes/no');
  alert('Please input y/n or yes/no');
}

var icecream = prompt ('Do I like ice cream?');

if(icecream.toLowerCase() === 'yes' || icecream.toLowerCase() === 'y')
{
  console.log('Correct!');
  alert('Correct!');
} else if(icecream.toLowerCase() === 'no' || icecream.toLowerCase() === 'n')
{
  console.log('Incorrect!');
  alert('Incorrect!');
} else {
  console.log('Please input y/n or yes/no');
  alert('Please input y/n or yes/no');
}

var surf = prompt ('Do I surf?');

if(surf.toLowerCase() === 'yes' || surf.toLowerCase() === 'y')
{
  console.log('Incorrect!');
  alert('Incorrect!');
} else if(surf.toLowerCase() === 'no' || surf.toLowerCase() === 'n')
{
  console.log('Correct!');
  alert('Correct!');
} else {
  console.log('Please input y/n or yes/no');
  alert('Please input y/n or yes/no');
}

var tea = prompt ('Do I drink tea?');

if(tea.toLowerCase() === 'yes' || tea.toLowerCase() === 'y')
{
  console.log('Correct!');
  alert('Correct!');
} else if(tea.toLowerCase() === 'no' || tea.toLowerCase() === 'n')
{
  console.log('Incorrect!');
  alert('Incorrect!');
} else {
  console.log('Please input y/n or yes/no');
  alert('Please input y/n or yes/no');
}

