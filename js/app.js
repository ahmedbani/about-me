`use strict`
let name = prompt('Enter your name please');
let feeling = confirm('Hi ' + name + ' hope you are doing well, welcome to my webpage');
if (feeling) {
    console.log('that\'s great');
} else {
    console.log('hope you\'ll feel better');
}
alert('lets play a guessing game');
let answer;
function checkTrue(a) {
    a = a.toLowerCase();
    if (a == 'yes' || a == 'y') {
        //console.log('correct');
        alert('correct');
    } else if (a == 'no' || a == 'n') {
        //console.log('wrong');
        alert('wrong')

    } else {

        while (a != 'yes' && a != 'y' && a != 'no' && a != 'n') {
            //console.log('please answer with yes/y or no/n');
            a = prompt('please answer with yes/y or no/n');

        }
        checkTrue(a);
    }
    return a;
}
function checkFalse(a) {
    a = a.toLowerCase();
    if (a == 'yes' || a == 'y') {
        //console.log('wrong');
        alert('wrong');
    } else if (a == 'no' || a == 'n') {
        //console.log('correct');
        alert('correct')
    } else {
        while (a != 'yes' && a != 'y' && a != 'no' && a != 'n') {
            //console.log('please answer with yes/y or no/n');
            a = prompt('please answer with yes/y or no/n');

        }
        checkFalse(a);
    }
    return a;
}
answer = prompt('I was born in 1998 ?');
checkTrue(answer);
//console.log('yes');
answer = prompt('I\'ve studied civil engineering');
checkFalse(answer);
//console.log('nah computer science');
answer = prompt('My favourite dish is makhshi?');
checkTrue(answer);
//console.log('sure');
answer = prompt('My dream car is slr mclaren');
checkTrue(answer);
//console.log('hell yeah');
answer = prompt('I love apex legends ?');
checkTrue(answer);
//console.log('oh yeah');
alert('hope you enjoyed my website ' + name)

let number = 1;

for (let i = 1; i <= 4; i++) {
    answer = prompt('guess a number between 0 and 20 ?')
    if (answer == 1) {
        alert('good job, you guessed from the ' + i + ' time');
        break;
    } else if (answer > 1) {
        alert('too high');
    } else {
        alert('too low');
    }
}
if (answer != 1) {
    alert('the correct answer is 1');
}
let countries = ['USA', 'KSA', 'TURKEY', 'OMAN', 'UAE', 'SYRIA'];
for (let i = 1; i <= 6; i++) {
    answer = prompt('guess one of the countries I\'ve visited ?')
    answer = answer.toUpperCase();
    for (let j = 0; j < countries.length; j++) {
        if (answer == countries[j]) {
            alert('correct');
            i = 7;
        }
    }
    if (i != 7) {
        alert('try again')
    }
}
alert('the countries I\'ve visted are [ USA, KSA, TURKEY, OMAN, UAE, SYRIA ]');