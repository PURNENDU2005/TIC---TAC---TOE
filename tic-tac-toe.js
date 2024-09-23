let boxs = document.querySelectorAll(".box");
let resetButton = document.querySelector(".reset");
let newGameBtn = document.querySelector("#new-Btn");
let msgContainer = document.querySelector(".msg-container");
let hider = document.querySelector(".hide");
let msg = document.querySelector("#msg");

let turno = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

const resetGame = () => {
    turno = true;
    enableBoxes();
    hider.classList.add("hide");
    resetButton.style.visibility = "visible";
}

boxs.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box Clicked !");
        if (turno) {
            box.innerText = "O";
            turno = false;
        }

        else {
            box.innerText = "X";
            turno = true;
        }
        box.disabled = true;

        checkWinner();

    });
});

const disableBoxes = () => {
    for (let box of boxs) {
        box.disabled = true;

    }
}

const enableBoxes = () => {
    for (let box of boxs) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations! Winner is ${winner}`;
    hider.classList.remove("hide");
    disableBoxes();
    resetButton.style.visibility = "hidden"; 
}

const checkWinner = () => {
    for (let patterns of winPatterns) {
        // console.log(patterns[0],patterns[1],patterns[2]);
        // console.log(boxs[patterns[0]].innerText,boxs[patterns[1]].innerText,boxs[patterns[2]].innerText);

        let pos1Val = boxs[patterns[0]].innerText;
        let pos2Val = boxs[patterns[1]].innerText;
        let pos3Val = boxs[patterns[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("WINNER", pos1Val);
                showWinner(pos1Val);
            
            }
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetButton.addEventListener("click", resetGame);
