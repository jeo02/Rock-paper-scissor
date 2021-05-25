let computerScore = 0;
let playerScore = 0;
let submit = false, rock = false, paper = false, scissor = false;
function computerPlay(){
    let random = parseInt(Math.random()*3);
    if(random == 0)
        return "rock";
    else if(random == 1)
        return "paper";
    else
        return "scissor";
}
function checkRock(){
    //updating the values
    rock = true;
    scissor = false;
    paper = false;

    //updating the styling
    document.getElementById("rock").style.backgroundColor = "#86C5D8";
    document.getElementById("paper").style.backgroundColor = "";
    document.getElementById("scissor").style.backgroundColor = "";
                
}
function checkPaper(){
    rock = false;
    scissor = false;
    paper = true;

    //updating the styling
    document.getElementById("rock").style.backgroundColor = "";
    document.getElementById("paper").style.backgroundColor = "#86C5D8";
    document.getElementById("scissor").style.backgroundColor = "";
}
function checkScissor(){
    rock = false;
    scissor = true;
    paper = false;

    //updating the styling
    document.getElementById("rock").style.backgroundColor = "";
    document.getElementById("paper").style.backgroundColor = "";
    document.getElementById("scissor").style.backgroundColor = "#86C5D8";
}
function roundPlay(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    let win = false;
    if(playerSelection === computerSelection)
        return "Tie! " + playerSelection + " ties " + computerSelection+".";
    else if(playerSelection === "rock" && computerSelection === "scissor"
    || playerSelection === "paper" && computerSelection === "rock"
    || playerSelection === "scissor" && computerSelection === "paper"){
        win = true;
        playerScore++;
    }
    else{
        computerScore++;
    }
        
            
    if(win)
        return "You won! " + playerSelection + " beats " + computerSelection;
    return "You lose :( " + computerSelection + " beats " + playerSelection;   
}

function valid(){
    let count = 0;
    if(rock == true)
        count++;
    else if(paper == true)
        count++;
    else if(scissor == true)
        count++;
                
    if(count == 1)
        return true;
    return false;
}
function game(){
    if(valid()){
        //removing previous result, if any
        let remove = document.getElementById("theResult");
        let remove2 = document.getElementById("score");
        if(remove != null)
            remove.remove();
        if(remove2 != null){
            remove2.remove();
        }
        //computer and users play
        let computer = computerPlay();
        let player = 'rock';
        if(paper == true)
            player = 'paper';
        else if(scissor == true)
            player = 'scissor';
                    
        //adding round result element
        let tag = document.createElement("p");
        tag.setAttribute("id", "theResult");
        let text = document.createTextNode(roundPlay(player, computer));
        tag.appendChild(text);
        document.getElementById("result").appendChild(tag);

        //adding score element
        let score = document.createElement("p");
        score.setAttribute("id", "score");

        //displaying the score,determining if the player won/lost the rounds
        if(playerScore >= 3){
            text = document.createTextNode("You win! Computer: " +computerScore+ " Player: "+playerScore);
            score.appendChild(text);
            document.getElementById("result").appendChild(score);
            playerScore = 0;
            computerScore = 0;
        }
        else if(computerScore >= 3){
            text = document.createTextNode("You lose :( Computer: " +computerScore+ " Player: "+playerScore);
            score.appendChild(text);
            document.getElementById("result").appendChild(score);
            playerScore = 0;
            computerScore = 0;
        }
        else{
            text = document.createTextNode("Computer: " +computerScore+ " Player: "+playerScore);
            score.appendChild(text);
            document.getElementById("result").appendChild(score);
        }

        
        //updating the styling
        document.getElementById("rock").style.backgroundColor = "";
        document.getElementById("paper").style.backgroundColor = "";
        document.getElementById("scissor").style.backgroundColor = "";

        //updating the elements
        rock = false;
        paper = false;
        scissor = false;
    }
}