const min = 1;
      max = 10;
      winningnum = 4;
      guessleft = 3;
      left = 1,3,4,5,6,7,8,9,10;


const game = document.querySelector(".game");
      minNum = document.querySelector(".min-num");
      maxNum = document.querySelector(".max-num");
      guessinput = document.querySelector(".guessinput");
      btn = document.querySelector("#btn");
      message = document.querySelector(".message");

//values 

minNum.textContent = min;
maxNum.textContent = max;

btn.addEventListener('click', function(){
     let guess = parseInt(guessinput.value);

     if(isNaN(guess) || guess < min || guess > max){
           setMessage(`Please enter the number between ${min} and ${max}`, `red`)
     }

     if (guess === winningnum){
           guessinput.disabled = true;
           setMessage(`${winningnum} right,You win` , `darkgreen`);
     } else {
      setMessage(`Enter another value  ${guessleft} guesses are left`,'red');
      guessinput.value = '';
           guessleft = guessleft - 1;
     }

     if(guessleft === 0){

           guessinput.disabled = true;

           setMessage(`Oops try again , Answer is ${winningnum}`,`red`);
     }
//      else
//      {
//       setMessage(`Enter another value  ${guessleft} guesses are left`,'red');
//       guessinput.value = '';
//      }
})

function setMessage(msg , color){
      message.style.color = color;
      message.textContent = msg;
}