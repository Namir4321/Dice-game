// selecting the elemting
const player0El=document.querySelector('.player--0');
const player1El=document.querySelector('.player--1');  
const score0El=document.querySelector('#score--0 ');
const score1El=document.querySelector('#score--1 ');
const diceEl=document.querySelector('.dice');
const btnNew=document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');
// Player when playing
const current0El=document.getElementById('current--0');
const current1El=document.getElementById('current--1');

let currentScore,activePlayer,playing;
// starting condition  
const init=function(){
  scores=[0,0];
   currentScore=0;
   activePlayer=0;
   playing=true;
  
  score0El.textContent=0;
  score1El.textContent=0;
  current0El.textContent=0;
  current1El.textContent=0;
  diceEl.classList.add('hidden');
  player0El.classList.remove(`player--winner`);
   player1El.classList.remove(`player--winner`);
   player0El.classList.add(`player--active`);
   player1El.classList.remove(`player--active`);
};
init();


const switchplayer=function(){
  document.getElementById(`current--${activePlayer}`)
  .textContent=0; 
  currentScore=0;
  activePlayer=activePlayer===0?1:0;     
  player0El.classList.toggle('player--active'); 
  player1El.classList.toggle('player--active');
};
// rolling the dice
btnRoll.addEventListener('click',function(){
  if(playing){
        // genearting a new number
        const dice=Math.trunc(Math.random()*6)+1;
        console.log(dice);
        // display dice
        diceEl.classList.remove('hidden');
      diceEl.src=`dice-${dice}.png`;
        // check for rolled 1 is true :switch to the next
    if(dice!==1){
    // Add the dice to current score
    currentScore += dice;
    document.getElementById(
      `current--${activePlayer}`)
    .textContent=currentScore;
    }else{
      // switch to the next player
    switchplayer();
    
      }
  }
});
btnHold.addEventListener('click',function(){
  if(playing){
    // Add current score to active player
  scores[activePlayer]+=currentScore;
  document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];
  // check if score is more than 100
  if(scores[activePlayer]>=100){
// finish the Game
playing=false;
diceEl.classList.add('hidden');
document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
  }else{

// switch the player
switchplayer();
  }

  }
  
});
btnNew.addEventListener('click',init)