let uscore = 0;
let cscore = 0;

const choices = document.querySelectorAll(".choice");
const playMoveParagraph = document.getElementById("opt");
const userScoreParagraph = document.getElementById("u_id");
const compScoreParagraph = document.getElementById("c_id");

const computerChoice = () => {
    let choicearray = ["rock", "paper", "scissor"];
    let indx = Math.floor(Math.random() * 3);
    return choicearray[indx];
};

const drawGame = () => {
    playMoveParagraph.textContent = "The round is a draw!";
    playMoveParagraph.style.backgroundColor = "";
};

const gameResult = (winwin) => {
    if (winwin) {
        playMoveParagraph.textContent = "You Win!";
        playMoveParagraph.style.backgroundColor = "green";
        uscore++;
        userScoreParagraph.textContent = uscore;
    } else {
        playMoveParagraph.textContent = "You Lose...";
        playMoveParagraph.style.backgroundColor = "red";
        cscore++;
        compScoreParagraph.textContent = cscore;
    }

    if (uscore === 10 || cscore === 10) {
        if (uscore === 10) {
            playMoveParagraph.textContent = "You are the overall winner!";
            playMoveParagraph.style.backgroundColor = "green";
        } else {
            playMoveParagraph.textContent = "Computer is the overall winner!";
            playMoveParagraph.style.backgroundColor = "red";
        }

        uscore = 0;
        cscore = 0;
        userScoreParagraph.textContent = uscore;
        compScoreParagraph.textContent = cscore;

        setTimeout(() => {
            location.reload();
        }, 5000); 
    }
};

const playGame = (c) => {
    playMoveParagraph.textContent = `Your choice is ${c}`;
    let comp = computerChoice();
    playMoveParagraph.textContent += `, Computer's choice is ${comp}`;

    if (c === comp) {
        drawGame();
    } else {
        let winwin = true;
        if (c === "rock") {
            winwin = comp === "paper" ? false : true;
        } else if (c === 'paper') {
            winwin = comp === "scissor" ? false : true;
        } else if (c === 'scissor') {
            winwin = comp === "rock" ? false : true;
        }
        gameResult(winwin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let c = choice.getAttribute("id");
        playGame(c);
    });
});
