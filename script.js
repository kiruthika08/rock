const buttons=document.querySelectorAll('.btn-circle');
const scoreE1=document.getElementById('score');
const main=document.getElementById('main');
const selection=document.getElementById('selection');

const choices=['paper','rock','scissors'];
 let score=0;
 let userChoice=undefined;

 buttons.forEach((button) => {
button.addEventListener('click',() =>{
    userChoice=button.getAttribute('data-choice');
     main.style.display='none';
     selection.style.display='flex';
   
   
    checkWinner();
});
});
function checkWinner()
{
    const computerChoice=pickRandomChoice();
    if(userChoice===computerChoice)
    {

    }
    else if(userChoice==='paper'&&computerChoice==='rock' ||
     userchoice==='rock'&& computerChoice==='scissors'||userChoice==='scissors'&&('paper')
     {
     updateScore(1);
     }
     else{
  updateScore(-1);
     }
}
function updateScore(value){
    score+=value;
    scoreE1.innertext=score;
}
function pickRandomChoice()
{

}
