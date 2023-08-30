const gameBoard = (() => {
    const row = 3;
    const col = 3;
    const cel = [];

    for (let i = 0; i < row; i++) {
        cel[i] = [];
        for (let j = 0; j < col; j++) {
            cel[i].push("X");
        }
    }

    const getBoard = () => cel;

    const getCell = (indexOne, indexTwo) => cel[indexOne][indexTwo];

    return { getBoard, getCell }
})();

//players factory
const playerFactory =  (name) => {
    const getPlayerName = () => name;

    return { getPlayerName }
}

const playerOne = playerFactory("rezha");

//displayController module

//render gameBoard.getBoard() with DOM to HTML

//build functions for clicking that board cell then
//marking it with the player's symbol

//hint: each little piece of cuntionality should be able to fit in
//the game, player or gameboard objects.

//build logic that check for game over (3 in a row & tie)

//input for player names
//button for start/restart the game
//add a display element that congratulate winning player