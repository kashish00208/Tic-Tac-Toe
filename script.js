let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");

let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

let turn0 = true;
const winPatterns = [
    [0 ,1 ,2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

const resetGame  = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
const changeColor = (box) =>{
    if(box.innerText = "O"){
        box.style.color = "black";
    }
}
boxes.forEach((box) =>{
    box.addEventListener("click",() => {
        if(turn0){
            box.innerText = "O";
            turn0 = false;
            changeColor(box);
        }else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    })
})


const DisableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner) => {
    msg.innerText = `congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    DisableBoxes();
}
const checkWinner = () => {
    for(pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1 !="" && pos2 !="" && pos3 !=""){
            if(pos1 === pos2 && pos2=== pos3){
                console.log('winner',pos1)
                showWinner(pos1);
            }
        }
    }
}

newGamebtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame)