let boxes = document.querySelectorAll(".box");
let msg = document.getElementById("msg");
let winnerDiv = document.getElementById("winner");
let gifContainer = document.querySelector(".img-container"); 

let turnO = true;

const winningPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerHTML === "") {
            if (turnO) {
                box.innerHTML = "O"; 
                turnO = false; 
            } else {
                box.innerHTML = "X"; 
                turnO = true; 
            }
            checkWinner(); 
        }
    });
});

const showWinner = (winner) => {
    msg.innerHTML = `Congratulations, Winner is ${winner}!`; 
    winnerDiv.classList.remove("hide"); 
    gifContainer.classList.remove("hide"); 
};

const showTie = () => {
    msg.innerHTML = `It's a Tie! Play New Game`; 
    winnerDiv.classList.remove("hide"); 
    gifContainer.classList.add("hide"); 
};

const checkWinner = () => {
    let isFull = true; 

    for (let pattern of winningPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos1val === pos2val && pos2val === pos3val) {
            showWinner(pos1val); 
            return; 
        }
    }

    
    boxes.forEach((box) => {
        if (box.innerText === "") {
            isFull = false; 
        }
    });

    
    if (isFull) {
        showTie();
    }
};

function newgame() {
    boxes.forEach((box) => {
        box.innerHTML = ""; 
    });
    winnerDiv.classList.add("hide"); 
    gifContainer.classList.add("hide"); 
    turnO = true; 
}







 

