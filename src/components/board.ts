const LETTERS = ["a", "b", "c", "d", "e", "f", "g", "h"];

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

function setupPawns() {
    // const image = document.createElement("img");
    // image.id = "pawn-a2";
    // image.src = "../../images/pawn-white.svg";

    // const pawn = document.getElementsByName("pawn")[0];

    // pawn.draggable = true;

    // image.addEventListener("dragstart", () => console.log("hello"));

    // const a2 = document.getElementById("a2");

    // a2?.appendChild(image);

    // White pawns
    const secondRank = document.getElementById("rank-2");

    let i = 1;
    secondRank?.childNodes.forEach((c: any) => {
        const image = document.createElement("img");
        image.id = `pawn-${LETTERS[i - 1]}2`;
        image.classList.add("piece");
        image.src = "../../images/pawn-white.svg";

        c.appendChild(image);

        i++;
    });

    const seventhRank = document.getElementById("rank-7");

    let k = 1;
    seventhRank?.childNodes.forEach((c: any) => {
        const image = document.createElement("img");
        image.id = `pawn-${LETTERS[k - 1]}7`;
        image.classList.add("piece");
        image.src = "../../images/pawn-black.svg";

        c.appendChild(image);

        k++;
    });
}

function setupKingAndQueen() {
    const kingWhite = document.createElement("img");
    kingWhite.id = "king-white";
    kingWhite.classList.add("piece");
    kingWhite.src = "../../images/king-white.svg";
    const e1 = document.getElementById("e1");
    e1?.appendChild(kingWhite);

    const kingBlack = document.createElement("img");
    kingBlack.id = "king-white";
    kingBlack.classList.add("piece");
    kingBlack.src = "../../images/king-black.svg";
    const e8 = document.getElementById("e8");
    e8?.appendChild(kingBlack);

    const queenWhite = document.createElement("img");
    queenWhite.id = "queen-white";
    queenWhite.classList.add("piece");
    queenWhite.src = "../../images/queen-white.svg";
    const d1 = document.getElementById("d1");
    d1?.appendChild(queenWhite);

    const queenBlack = document.createElement("img");
    queenBlack.id = "queen-black";
    queenBlack.classList.add("piece");
    queenBlack.src = "../../images/queen-black.svg";
    const d8 = document.getElementById("d8");
    d8?.appendChild(queenBlack);
}

function setupRooks() {
    const rookAWhite = document.createElement("img");
    rookAWhite.id = "rook-a-white";
    rookAWhite.classList.add("piece");
    rookAWhite.src = "../../images/rook-white.svg";
    const a1 = document.getElementById("a1");
    a1?.appendChild(rookAWhite);

    const rookBWhite = document.createElement("img");
    rookBWhite.id = "rook-b-white";
    rookBWhite.classList.add("piece");
    rookBWhite.src = "../../images/rook-white.svg";
    const h1 = document.getElementById("h1");
    h1?.appendChild(rookBWhite);

    const rookABlack = document.createElement("img");
    rookABlack.id = "rook-a-black";
    rookABlack.classList.add("piece");
    rookABlack.src = "../../images/rook-black.svg";
    const a8 = document.getElementById("a8");
    a8?.appendChild(rookABlack);

    const rookHBlack = document.createElement("img");
    rookHBlack.id = "rook-h-black";
    rookHBlack.classList.add("piece");
    rookHBlack.src = "../../images/rook-black.svg";
    const h8 = document.getElementById("h8");
    h8?.appendChild(rookHBlack);
}

function setupMinorPieces() {
    // Knights
    const knightBWhite = document.createElement("img");
    knightBWhite.id = "knight-b-white";
    knightBWhite.classList.add("piece");
    knightBWhite.src = "../../images/knight-white.svg";
    const b1 = document.getElementById("b1");
    b1?.appendChild(knightBWhite);

    const knightGWhite = document.createElement("img");
    knightGWhite.id = "knight-g-white";
    knightGWhite.classList.add("piece");
    knightGWhite.src = "../../images/knight-white.svg";
    const g1 = document.getElementById("g1");
    g1?.appendChild(knightGWhite);

    const knightBBlack = document.createElement("img");
    knightBBlack.id = "knight-b-black";
    knightBBlack.classList.add("piece");
    knightBBlack.src = "../../images/knight-black.svg";
    const b8 = document.getElementById("b8");
    b8?.appendChild(knightBBlack);

    const knightGBlack = document.createElement("img");
    knightGBlack.id = "knight-b-black";
    knightGBlack.classList.add("piece");
    knightGBlack.src = "../../images/knight-black.svg";
    const g8 = document.getElementById("g8");
    g8?.appendChild(knightGBlack);

    // Bishops
    const bishopCWhite = document.createElement("img");
    bishopCWhite.id = "bishop-c-white";
    bishopCWhite.classList.add("piece");
    bishopCWhite.src = "../../images/bishop-white.svg";
    const c1 = document.getElementById("c1");
    c1?.appendChild(bishopCWhite);

    const bishopFWhite = document.createElement("img");
    bishopFWhite.id = "bishop-f-white";
    bishopFWhite.classList.add("piece");
    bishopFWhite.src = "../../images/bishop-white.svg";
    const f1 = document.getElementById("f1");
    f1?.appendChild(bishopFWhite);

    const bishopCBlack = document.createElement("img");
    bishopCBlack.id = "bishop-c-black";
    bishopCBlack.classList.add("piece");
    bishopCBlack.src = "../../images/bishop-black.svg";
    const c8 = document.getElementById("c8");
    c8?.appendChild(bishopCBlack);

    const bishopFBlack = document.createElement("img");
    bishopFBlack.id = "bishop-f-white";
    bishopFBlack.classList.add("piece");
    bishopFBlack.src = "../../images/bishop-black.svg";
    const f8 = document.getElementById("f8");
    f8?.appendChild(bishopFBlack);
}

function setupPieces() {
    setupPawns();
    setupKingAndQueen();
    setupRooks();
    setupMinorPieces();
}

export function initBoard() {
    setupBoard();
    setupPieces();
}
