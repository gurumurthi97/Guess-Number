let secretNumber=Math.floor(Math.random()*20)+1;
document.querySelector('.number').textContent="?";
let score=20;
let highscore=0;
document.querySelector('.check').addEventListener('click',function increment(){
   const guess=Number(document.querySelector('.guess').value);
   
console.log(typeof guess,guess);
   if(!guess){
      document.querySelector('.message').textContent="NO Value";
    }
  
  else if(guess === secretNumber){
   document.querySelector('.number').textContent=secretNumber;
      document.querySelector('.message').textContent='Congalutations';
      document.querySelector('body').style.backgroundColor="#60b347"
      document.querySelector('.number').style.width="30rem";
      document.querySelector('.number').textContent=secretNumber;
      if(highscore<score){
         highscore=score;
         document.querySelector('.highscore').textContent=score;
      }
    }
    else if(guess>secretNumber){
      if(guess>0){
         score--;
         document.querySelector('.score').textContent=score;
         document.querySelector('.message').textContent='U are High';

      }
    }
    else if(guess<secretNumber){
      if(guess>0){
         score--;
         document.querySelector('.score').textContent=score;
         document.querySelector('.message').textContent='u re loeeee';
      }
    }
})


document.querySelector('.again').addEventListener('click',function(){
   document.querySelector('body').style.backgroundColor="#333"
   document.querySelector('.number').style.width="15rem";
   score=20;
   document.querySelector('.score').textContent=score;
   secretNumber=Math.floor(Math.random()*20)+1;
   document.querySelector('.number').textContent="?";
   document.querySelector('.guess').value='';
})