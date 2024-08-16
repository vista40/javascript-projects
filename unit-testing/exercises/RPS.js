function whoWon(player1,player2){

   if (player1 === player2){
     return 'TIE!';
   }
   
   if (player1 === 'rock' && player2 === 'paper'){
     return 'Player 2 wins!';
   }
   
   if (player1 === 'paper' && player2 === 'scissors'){
     return 'Player 2 wins!';
   }
   
   if (player1 === 'scissors' && player2 === 'rock'){
     return 'Player 2 wins!';
   }

   if (player1 !== 'scissors' || player1 !== 'paper' || player1 !== 'rock') {
    return 'Not a legal move, player 1!';
   };
 
   return 'Player 1 wins!';
 };

 module.exports = whoWon;