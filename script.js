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

    const checkWinner = (player) => {
        const hor0 = ["0", "1", "2"];
        const hor1 = ["3", "4", "5"];
        const hor2 = ["6", "7", "8"];
        const ver0 = ["0", "3", "6"];
        const ver1 = ["1", "4", "7"];
        const ver2 = ["2", "5", "8"];
        const dia0 = ["0", "4", "8"];
        const dia1 = ["2", "4", "6"];
        if (hor0.every(i => player.includes(i))) {
            annouceWinner(player);
        } else if (hor1.every(i => player.includes(i))) {
            annouceWinner(player);
        } else if (hor2.every(i => player.includes(i))) {
            annouceWinner(player);
        } else if (ver0.every(i => player.includes(i))) {
            annouceWinner(player);
        } else if (ver1.every(i => player.includes(i))) {
            annouceWinner(player);
        } else if (ver2.every(i => player.includes(i))) {
            annouceWinner(player);
        } else if (dia0.every(i => player.includes(i))) {
            annouceWinner(player);
        } else if (dia1.every(i => player.includes(i))) {
            annouceWinner(player);
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
                        checkWinner(playerOneScore);
                    } else {
                        playerTwoScore.push(box.id);
                        box.setAttribute("value", "2");
                        turnBaseCounter++;
                        checkWinner(playerTwoScore);
                    }
                } else { }
            })
        })
    }

    const resetBoard = () => {
        while (document.querySelector("main").firstChild) {
            document.querySelector("main").removeChild(document.querySelector("main").firstChild);
        }
        drawBoard();
        drawMark();
        turnBaseCounter = 1;
        playerOneScore = [];
        playerTwoScore = [];
    }

    const annouceWinner = (player) => {
        setTimeout(() => {
            document.querySelector("dialog").showModal();
        }, 100)
        document.querySelector("button").addEventListener("click", (event) => {
            event.preventDefault();
            document.querySelector("dialog").close();
            resetBoard();
        })
    }

    drawBoard();
    drawMark();
})();

const playerFactory =  (name) => {

    const getPlayerName = () => name;

    return { getPlayerName }
}