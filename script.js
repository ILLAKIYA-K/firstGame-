'use strict';

// document.querySelector('.message').textContent
//  = 'correct number';

//  document.querySelector('.number').textContent = 23;
//  document.querySelector('.score').textContent = 19;

let secretNumber = Math.trunc(Math.random()*20) + 1;

let score = 20;
let highscore = 0;






document.querySelector('.check').addEventListener
('click', function(){
const guess = Number(document.querySelector('.guess').value);
console.log(guess);

if(!guess){
document.querySelector('.message').textContent = '.not a number';
}

else if(guess == secretNumber){
    document.querySelector('.message').textContent = 'yeah it is correct number';

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = "green";
    document.querySelector('.number').style.width = '30rem';

    if(score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore; 
    }
    
}

else if(guess > secretNumber){
    if(score > 1){
    document.querySelector('.message').textContent = 'value is too high';
    score--;
    document.querySelector('.score').textContent = score;
    }
 else{
    document.querySelector('.message').textContent = 'you lose';
    document.querySelector('.score').textContent = 0;
    
}
}
  

else if(guess < secretNumber){
    if(score > 1){
    document.querySelector('.message').textContent = 'value is too low';
    score--;
    document.querySelector('.score').textContent = score;
}
 else{
    document.querySelector('.message').textContent = 'you lose';
    document.querySelector('.score').textContent = 0; 
}
}

document.querySelector('.again').addEventListener('click',function(){
let score = 20;
document.querySelector('.message').textContent = 'start guessing';
document.querySelector('.guess').textContent = '';
document.querySelector('.number').textContent = '?';
document.querySelector('.score').textContent = score;

document.querySelector('body').style.backgroundColor = "black";
document.querySelector('.number').style.width = '15rem';

})


})

// Also restore the original background color (#222) and number width (15rem)
