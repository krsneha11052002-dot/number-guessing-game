const max = prompt("enter the maximum number");
const rand = Math.floor(Math.random()*(max))+1;
let guess = prompt("guess the number");
while(true){
    if(guess=="quit"){
        console.log("quitting app");
        break;
    }
    else if(guess==rand){
        console.log("you guess the right number congrats the number was",rand);
        break;

    }
    else if(guess<rand){
        guess = prompt("your guess was two small .please try again");
    }
    else{
        guess = prompt("your guess was too large.please try again");
    }
    
}