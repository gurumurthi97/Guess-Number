const displaymess=function (message){
    document.querySelector('.message').textContent=message;
}
const number=function (num){
   document.querySelector('.number').textContent;
}
let secretNumber=Math.floor(Math.random()*20)+1;
number('?')

let score=20;
let highscore=0;
document.querySelector('.check').addEventListener('click',function increment(){
   const guess=Number(document.querySelector('.guess').value);
  
console.log(typeof guess,guess);
   if(!guess){
      displaymess('No Number 😢')
     
    }
  
  else if(guess === secretNumber){
     number(secretNumber)
      displaymess('Congagulations 👍');
      document.querySelector('body').style.backgroundColor="#60b347"
      document.querySelector('.number').style.width="30rem";
      document.querySelector('.number').textContent=secretNumber;
      console.log(secretNumber)
      if(highscore<score){
         highscore=score;
         document.querySelector('.highscore').textContent=score;
      }
    }else if(guess!=secretNumber){
      score--;
      document.querySelector('.score').textContent=score;
      displaymess((guess>secretNumber)?'U are High':'u are low ');
    }
 
})


document.querySelector('.again').addEventListener('click',function(){
   document.querySelector('body').style.backgroundColor="#333"
   document.querySelector('.number').style.width="15rem";
   
   score=20;
   document.querySelector('.score').textContent=score;
   secretNumber=Math.floor(Math.random()*20)+1;
  
   document.querySelector('.number').textContent="?"
   document.querySelector('.guess').value='';
   displaymess('Start guessing...')
})