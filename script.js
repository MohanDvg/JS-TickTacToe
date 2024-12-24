let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let NewGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");


let turnO=true;
let count=0;

const winPatterns= [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame=() =>{
    turnO=true;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");
};

const enableBoxes=()=>{
    for (let box of boxes) {
        box.disabled= false;
        box.innerText="";
    }
};

const disableBoxes=()=>{
    for (let box of boxes) {
        box.disabled= true;
    }
};

const showWinner=(winner)=>{
    msg.innerText=`Congradulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const gameDraw=()=>{
    msg.innerText="match is drawn";
    msgContainer.classList.remove("hide");
    // msgContainer.style.backgroundColor="red";
    disableBoxes();
};


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("box was clicked");
        if(turnO){
            box.innerText="O";
            box.style.color="red";
            turnO =false;
        }else{
            box.innerText ="X";
            box.style.color="blue"
            turnO=true;
        }
        box.disabled=true;
        count++;

        let isWinner = checkWinner();

        if (count === 9 && !isWinner) {
          gameDraw();
        }

    }); 
});

const checkWinner=() =>{
    for(pattern of winPatterns) {
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(
        //     boxes[pattern[0]].innerText, 
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        // );
        let pos1Val = boxes[pattern[0]].innerText; 
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !=""&& pos2Val!="" && pos3Val !="") {
            if (pos1Val===pos2Val && pos2Val===pos3Val){
                // console.log("Winner", pos1Val);
                showWinner(pos1Val);
                
            }

        }
}};


// 

NewGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);