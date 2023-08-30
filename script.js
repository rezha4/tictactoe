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

    const getBoard = () => cel;

    const getCell = (indexOne, indexTwo) => cel[indexOne][indexTwo];

    const drawBoard = () => cel.forEach((row) => {
        row.forEach(col => {
            const main = document.querySelector("main");
            const square = document.createElement("div");
            square.setAttribute("id", `${col}`);
            square.setAttribute("value", "0");
            main.appendChild(square);
        })
    })

    let turnBaseCounter = 0;
    let playerOneScore = [];

    const drawMark = () => {
        const square = document.querySelectorAll("div");
        square.forEach(box => {
            box.addEventListener("click", () => {
                if (box.getAttribute("value") == "0") {
                    if (turnBaseCounter % 2 == 0) {
                        playerOneScore.push(box.id);
                        box.setAttribute("value", "1");
                        turnBaseCounter++;
                        console.log(playerOneScore);
                    } else if (turnBaseCounter % 2 != 0) {
                        box.setAttribute("value", "2");
                        turnBaseCounter++;
                    }
                } else {

                }
                console.log(turnBaseCounter)
                
                //get the id and put it inside player
            })
        })
    }

    return { getBoard, getCell, drawBoard, drawMark }
})();

//players factory
const playerFactory =  (name, playerMark) => {
    let playerCount = 0;

    const getPlayerName = () => name;

    const playerTurn = () => gameBoard.drawMark(2);

    const mark = () => playerMark;

    let playerScore = [];

    return { getPlayerName, playerTurn, mark, playerScore }
}

//displayController module
const gameMaster = (() => {
    gameBoard.drawBoard();

    const playerOne = playerFactory("rezha", 1);
    const playerTwo = playerFactory("computer", 2);

    let turnCount = 0;

    return { playerOne, playerTwo }
})();

gameBoard.drawMark();

//render gameBoard.getBoard() with DOM to HTML

//build functions for clicking that board cell then
//marking it with the player's symbol

//hint: each little piece of cuntionality should be able to fit in
//the game, player or gameboard objects.

//build logic that check for game over (3 in a row & tie)

//input for player names
//button for start/restart the game
//add a display element that congratulate winning player