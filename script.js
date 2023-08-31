const gameBoard = (() => {
    const row = 3;
    const col = 3;
    const cel = [];
    let counter = 0;

    for (let i = 0; i < row; i++) {
        cel[i] = [];
        for (let j = 0; j < col; j++) {
            cel[i].push(counter);
            counter++;
        }
    }

    const drawBoard = () => cel.forEach((row) => {
        row.forEach(col => {
            const main = document.querySelector("main");
            const square = document.createElement("div");
            square.setAttribute("id", `${col}`);
            square.setAttribute("value", "0");
            main.appendChild(square);
        })
    })

    let turnBaseCounter = 1;
    let playerOneScore = [];
    let playerTwoScore = [];

    const checkWinner = () => {
        let hor = ["0", "1", "2"];
        if (hor.every(i => playerOneScore.includes(i))) {
            console.log("WIN");
        } else {
            console.log("No winner yet...")
        }
    }

    const drawMark = () => {
        const square = document.querySelectorAll("div");
        square.forEach(box => {
            box.addEventListener("click", () => {
                if (box.getAttribute("value") == "0") {
                    if (turnBaseCounter % 2 === 0) {
                        playerOneScore.push(box.id);
                        box.setAttribute("value", "1");
                        turnBaseCounter++;
                        checkWinner();
                    } else {
                        playerTwoScore.push(box.id);
                        box.setAttribute("value", "2");
                        turnBaseCounter++;
                        checkWinner();
                    }
                } else { }
                console.log(turnBaseCounter);
                console.log(playerOneScore);
                console.log(playerTwoScore);
            })
        })
    }

    drawBoard();
    drawMark();
})();

const playerFactory =  (name, playerMark) => {
    let playerCount = 0;

    const getPlayerName = () => name;

    const playerTurn = () => gameBoard.drawMark(2);

    const mark = () => playerMark;

    let playerScore = [];

    return { getPlayerName, playerTurn, mark, playerScore }
}