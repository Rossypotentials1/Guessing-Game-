function guessingGame(usersRange, userName) {


  for (i = 0; i < usersRange; i++) {
    let usersInput = Number(prompt(`${userName} guess the number`));
    let generatedNum = Math.floor(Math.random() * 2) + 1;
    console.log(generatedNum);

    if (usersInput === generatedNum) {
      alert(`Correct! ${userName} You have been awarded a point! bravo`);
      usersRange = usersRange + 1;
      console.log(usersRange);

      let playAgain = confirm(`${userName} You have entered the next level`);

      break;
    } else {
      alert('Wrong! Please try again');
      if (i === usersRange - 1) {
        alert('Game Over')
      }
    }
  }

}

let userName = prompt('Please input your name');

let usersRange = Number(prompt('How many times do you want to guess'));

guessingGame(usersRange, userName);
Footer
