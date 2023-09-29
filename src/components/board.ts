import { setupPieces } from "./pieces";

const LETTERS = ["a", "b", "c", "d", "e", "f", "g", "h"];

function dragHandler(ev: any) {
    ev.preventDefault();

    ev.dataTransfer.dropEffect = "move";
}

function dropHandler(event: any) {
    event.preventDefault();

    const data = event.dataTransfer.getData("text");

    console.log(event.target.id, data);

    if (data.includes("pawn")) {
        console.log("yep");
    }

    // event.target.appendChild(document.getElementById(data));
}

function setupBoard() {
    const view = document.getElementById("view");

    const board = document.createElement("div");
    board.classList.add("board");

    view?.appendChild(board);

    let rank = 8;
    for (rank; rank >= 1; rank--) {
        const rankWrapper = document.createElement("div");

        rankWrapper.classList.add("rank");
        rankWrapper.id = `rank-${rank.toString()}`;

        for (let i = 1; i <= 8; i++) {
            const square = document.createElement("div");

            const location = `${LETTERS[i - 1]}${rank}`;

            square.id = location;

            square.ondrop = dropHandler;

            square.ondragover = dragHandler;

            if (rank % 2 === 0) {
                if (i % 2 === 0) {
                    square.classList.add("dark");
                } else {
                    square.classList.add("light");
                }
            } else {
                if (i % 2 === 0) {
                    square.classList.add("light");
                } else {
                    square.classList.add("dark");
                }
            }

            rankWrapper.appendChild(square);

            // if (rank === 1) {
            //     const letter = document.createElement("p");
            //     letter.textContent = LETTERS[i - 1];
            //     square.setAttribute("position", "absolute");

            //     square.appendChild(letter);
            // }
        }

        board.appendChild(rankWrapper);
    }
}

export function initBoard() {
    setupBoard();
    setupPieces();
}
