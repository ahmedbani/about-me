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
    if (a == 'yes' || a=='y') {
        alert('correct');
        console.log('correct');
    } else if (a == 'no' || a== 'n') {
        alert('wrong')
    } else {
       
        while(a != 'yes' && a!='y' && a!='no' && a!='n'){
            a=prompt('please answer with yes/y or no/n');

        }
        checkTrue(a);
    }
    return a;
}
function checkFalse(a) {
    a = a.toLowerCase();
    if (a == ('yes' || 'y')) {
        alert('wrong');
        console.log('wrong');
    } else if (a == ('no' || 'n')) {
        alert('correct')
    } else {
        alert('please answer with yes/y or no/n')
    }
    return a;
}
answer = prompt('I was born in 1998 ?');
checkTrue(answer);
console.log('yes');
answer = prompt('I\'ve studied civil engineering');
checkFalse(answer);
console.log('nah computer science');
answer = prompt('My favourite dish is makhshi?');
checkTrue(answer);
console.log('sure');
answer = prompt('My dream car is slr mclaren');
checkTrue(answer);
console.log('hell yeah');
answer = prompt('I love apex legends ?');
checkTrue(answer);
console.log('oh yeah');

