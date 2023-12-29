 /* function makes our code easier to update, function creates a scope{}, while naming a function name use verb(action words) to name it, examples: pickComputerMove && playGame is an action word */
    
    //Updating scores using object {} 
    let score = /* if the left side is true then it has a score but if falsy it runs the right code(!score) and shows 0 */ 
JSON.parse(localStorage.getItem('score')) || {
      wins: 0,
      losses: 0,
      ties: 0,
    };
    
 /* we're loading(getting) the score we just saved at line 83 using localStorage.setItem() and the score will be saved as JSON string so we converted it back to object using JSON.parse(), so that's how we use JSON.parse() && localStorage() to save our score more permanently */
      
    
    updateScoreElement(); /* This line of code shows the result on the webpage and not on popup */
    
    /* if (score === null) {. same as the code in line 5 -  9 (shortcut is there) 
      score = {
        wins: 0,
        losses: 0,
        ties: 0,
      };
    } 
    */
    
   /* Summary: when we call the playGame() function it goes inside and calls pickComputerMove() function too and goes inside again and runs all the code inside the pickComputerMove() function and return back to where we call it computerMove = pickComputerMove() function and run the rest of the code both the result and alert and returns back again to playGame() function being called in the buttons above  */
   
    /* So by using a function(playGame) with a parameter(playerMove) we're able to reuse all of the code in our button and it makes the code more cleaner  */
    function playGame(playerMove) {
      const computerMove = pickComputerMove();
      // 2. Compare the moves to get result, 
      
        let result = '';
        
      if (playerMove === 'scissors') { 
        if (computerMove === 'rock') {
          result = 'You lose.';
        } else if (computerMove === 'paper') {
          result = 'You win.';
        } else if (computerMove ===
          'scissors') {
          result = 'Tie.';
        } 
        
      } else if (playerMove === 'paper') {
         if (computerMove === 'rock') {
           result = 'You win.';
         } else if (computerMove === 'paper') {
           result = 'Tie.';
         } else if (computerMove === 'scissors') {
           result = 'You lose.';
         }
          
      } else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
           result = 'Tie.';
         } else if (computerMove === 'paper') {
           result = 'You lose.';
         } else if (computerMove === 'scissors') {
           result = 'You win.';
         } 
      }
      
      /* The scores will be increasing by 1 anything we click it using (+= 1) */
      if (result === 'You win.') {
        score.wins += 1;
      } else if (result === 'You lose.') {
        score.losses += 1;
      } else if (result === 'Tie.') {
        score.ties += 1;
      } // updating the score 
      
      updateScoreElement(); /* calling the function name to update the score on the webpage not on popup */
      
document.querySelector('.js-result')
     .innerHTML = result; /* This line of code will display the result on the webpage */
     
document.querySelector('.js-moves')
       .innerHTML = `You
      <img src="../image/${playerMove}.png" class="move-icons">
      <img src="../image/${computerMove}.png" class="move-icons">
    Computer`;
      
      localStorage.setItem('score', JSON.stringify(score)); /* After updating our score we saved it to localStorage using localStorage.setItem(), localStorage.setItem() only support strings, so we have to convert our score object into a JSON string using JSON.stringify(), and then after we saved JSON.stringify() into the localStorage.setItem(), when we load the page in line 5 */
      
      // 3. Display the result in a popup 
      
      /* alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result} 
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);   This is a popup being commented out so it will not be showed on the webpage */
    }  // Multi-line strings || (template string) 
    
    function updateScoreElement() {
      document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`; 
    };
    
    /* Algorithm (Rock Paper Scissors) Steps: when we click a button, 1. Computer randomly selects a move, 2. Compare the moves to get result, 3. Display result and score in a popup  */
   
   /* Best practice: Put(keep) a variable inside a scope */
    function pickComputerMove() {
      const randomNumber = Math.random();
      let computerMove = ''; // Global variable 
      
     // 1. Computer randomly selects a move, 
     
      /* Strategy for JavaScript: 1. Think about what steps we need (algorithm); 2. Converts those steps into code */
      if (randomNumber >= 0 && randomNumber < 1/3 ) {
        computerMove = 'rock';
      } else if (randomNumber >= 1/3 && randomNumber < 2/3 ) {
        computerMove = 'paper';
      } else if (randomNumber >= 2/3 && randomNumber < 1 ) {
        computerMove = 'scissors';
      }  
        return computerMove; /* return statement allows us to get a value out of the function, when we use a return statement, it ends the function immediately */
    }  