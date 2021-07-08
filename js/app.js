`use strict`
let name = prompt('Enter your name please');
confirm('Hi ' + name + ' hope you are doing well, welcome to my webpage');
alert('lets play a guessing game');
let answer;
let score = 0;
function question1(a) {
    a = a.toLowerCase();
    if (a == 'yes' || a == 'y') {
        alert('correct');
        score++;
    } else if (a == 'no' || a == 'n') {
        alert('wrong')

    } else {

        while (a != 'yes' && a != 'y' && a != 'no' && a != 'n') {
            a = prompt('please answer with yes/y or no/n');

        }
        question1(a);
    }
    return a;
}
function question2(a) {
    a = a.toLowerCase();
    if (a == 'yes' || a == 'y') {
        alert('wrong');
    } else if (a == 'no' || a == 'n') {
        alert('correct')
        score++;
    } else {
        while (a != 'yes' && a != 'y' && a != 'no' && a != 'n') {
            a = prompt('please answer with yes/y or no/n');

        }
        question2(a);
    }
    return a;
}
function question3(a) {
    a = a.toLowerCase();
    if (a == 'yes' || a == 'y') {
        alert('correct');
        score++;
    } else if (a == 'no' || a == 'n') {
        alert('wrong')

    } else {

        while (a != 'yes' && a != 'y' && a != 'no' && a != 'n') {
            a = prompt('please answer with yes/y or no/n');

        }
        question3(a);
    }
    return a;
}

function question4(a) {
    a = a.toLowerCase();
    if (a == 'yes' || a == 'y') {
        alert('correct');
        score++;
    } else if (a == 'no' || a == 'n') {
        alert('wrong')

    } else {

        while (a != 'yes' && a != 'y' && a != 'no' && a != 'n') {
            a = prompt('please answer with yes/y or no/n');

        }
        question4(a);
    }
    return a;
}

function question5(a) {
    a = a.toLowerCase();
    if (a == 'yes' || a == 'y') {
        alert('correct');
        score++;
    } else if (a == 'no' || a == 'n') {
        alert('wrong')

    } else {

        while (a != 'yes' && a != 'y' && a != 'no' && a != 'n') {
            a = prompt('please answer with yes/y or no/n');

        }
        question5(a);
    }
    return a;
}

answer = prompt('I was born in 1998 ?');
question1(answer);
answer = prompt('I\'ve studied civil engineering');
question2(answer);
answer = prompt('My favourite dish is makhshi?');
question3(answer);
answer = prompt('My dream car is slr mclaren');
question4(answer);
answer = prompt('I love apex legends ?');
question5(answer);
alert('hope you enjoyed my website ' + name)

let number = 1;

function question6(){
for (let i = 1; i <= 4; i++) {
    answer = prompt('guess a number between 0 and 20 ?')
    if (answer == 1) {
        alert('good job, you guessed from the ' + i + ' time');
        score++;
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
}
question6();


let countries = ['USA', 'KSA', 'TURKEY', 'OMAN', 'UAE', 'SYRIA'];
function question7(){
for (let i = 1; i <= 6; i++) {
    answer = prompt('guess one of the countries I\'ve visited ?')
    answer = answer.toUpperCase();
    for (let j = 0; j < countries.length; j++) {
        if (answer == countries[j]) {
            alert('correct');
            i = 7;
            score++;
        }
    }
    if (i != 7) {
        alert('try again')
    }
}
}
question7();

alert('the countries I\'ve visted are [ USA, KSA, TURKEY, OMAN, UAE, SYRIA ]');
alert('your score is '+ score+ '/7');