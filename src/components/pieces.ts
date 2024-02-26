const LETTERS = ["a", "b", "c", "d", "e", "f", "g", "h"];

/**
 *  Starting setup for pawns
 */
function setupPawns() {
    // White pawns
    const secondRank = document.getElementById("rank-2");

    let i = 1;
    secondRank?.childNodes.forEach((c: Node) => {
        const pawnWhite = document.createElement("img");
        pawnWhite.id = `pawn-${LETTERS[i - 1]}2`;
        pawnWhite.classList.add("piece");

        pawnWhite.dataset.type = "pawn";
        pawnWhite.dataset.side = "white";
        pawnWhite.dataset.rank = "2";
        pawnWhite.dataset.file = LETTERS[i - 1].toString();

        pawnWhite.src = "../../images/pawn-white.svg";
        pawnWhite.draggable = true;

        pawnWhite.addEventListener("dragstart", (e: any) => {
            e.dataTransfer.setData("text", e.target.id);
        });

        c.appendChild(pawnWhite);

        i++;
    });

    // Black pawns
    const seventhRank = document.getElementById("rank-7");

    let k = 1;
    seventhRank?.childNodes.forEach((c: Node) => {
        const pawnBlack = document.createElement("img");
        pawnBlack.id = `pawn-${LETTERS[k - 1]}7`;
        pawnBlack.classList.add("piece");

        pawnBlack.dataset.type = "pawn";
        pawnBlack.dataset.side = "black";
        pawnBlack.dataset.rank = "7";
        pawnBlack.dataset.file = LETTERS[k - 1].toString();

        pawnBlack.src = "../../images/pawn-black.svg";
        pawnBlack.draggable = true;

        pawnBlack.addEventListener("dragstart", (e: any) => {
            e.dataTransfer.setData("text", e.target.id);
        });

        c.appendChild(pawnBlack);

        k++;
    });
}

function setupKingAndQueen() {
    const kingWhite = document.createElement("img");
    kingWhite.id = "king-white";
    kingWhite.classList.add("piece");
    kingWhite.src = "../../images/king-white.svg";
    const e1 = document.getElementById("e1");
    kingWhite.draggable = true;
    e1?.appendChild(kingWhite);
    kingWhite.addEventListener("dragstart", (e: any) => {
        e.dataTransfer.setData("text", e.target.id);
    });

    const kingBlack = document.createElement("img");
    kingBlack.id = "king-black";
    kingBlack.classList.add("piece");
    kingBlack.src = "../../images/king-black.svg";
    const e8 = document.getElementById("e8");
    e8?.appendChild(kingBlack);
    kingBlack.addEventListener("dragstart", (e: any) => {
        e.dataTransfer.setData("text", e.target.id);
    });

    const queenWhite = document.createElement("img");
    queenWhite.id = "queen-white";
    queenWhite.classList.add("piece");
    queenWhite.src = "../../images/queen-white.svg";
    const d1 = document.getElementById("d1");
    d1?.appendChild(queenWhite);
    queenWhite.addEventListener("dragstart", (e: any) => {
        e.dataTransfer.setData("text", e.target.id);
    });

    const queenBlack = document.createElement("img");
    queenBlack.id = "queen-black";
    queenBlack.classList.add("piece");
    queenBlack.src = "../../images/queen-black.svg";
    const d8 = document.getElementById("d8");
    d8?.appendChild(queenBlack);
    queenBlack.addEventListener("dragstart", (e: any) => {
        e.dataTransfer.setData("text", e.target.id);
    });
}

function setupRooks() {
    const rookAWhite = document.createElement("img");
    rookAWhite.id = "rook-a-white";
    rookAWhite.classList.add("piece");
    rookAWhite.src = "../../images/rook-white.svg";
    const a1 = document.getElementById("a1");
    a1?.appendChild(rookAWhite);
    rookAWhite.addEventListener("dragstart", (e: any) => {
        e.dataTransfer.setData("text", e.target.id);
    });

    const rookBWhite = document.createElement("img");
    rookBWhite.id = "rook-b-white";
    rookBWhite.classList.add("piece");
    rookBWhite.src = "../../images/rook-white.svg";
    const h1 = document.getElementById("h1");
    h1?.appendChild(rookBWhite);
    rookBWhite.addEventListener("dragstart", (e: any) => {
        e.dataTransfer.setData("text", e.target.id);
    });

    const rookABlack = document.createElement("img");
    rookABlack.id = "rook-a-black";
    rookABlack.classList.add("piece");
    rookABlack.src = "../../images/rook-black.svg";
    const a8 = document.getElementById("a8");
    a8?.appendChild(rookABlack);
    rookABlack.addEventListener("dragstart", (e: any) => {
        e.dataTransfer.setData("text", e.target.id);
    });

    const rookHBlack = document.createElement("img");
    rookHBlack.id = "rook-h-black";
    rookHBlack.classList.add("piece");
    rookHBlack.src = "../../images/rook-black.svg";
    const h8 = document.getElementById("h8");
    h8?.appendChild(rookHBlack);
    rookHBlack.addEventListener("dragstart", (e: any) => {
        e.dataTransfer.setData("text", e.target.id);
    });
}

function setupMinorPieces() {
    // Knights
    const knightBWhite = document.createElement("img");
    knightBWhite.id = "knight-b-white";
    knightBWhite.classList.add("piece");
    knightBWhite.src = "../../images/knight-white.svg";
    const b1 = document.getElementById("b1");
    b1?.appendChild(knightBWhite);
    knightBWhite.addEventListener("dragstart", (e: any) => {
        e.dataTransfer.setData("text", e.target.id);
    });

    const knightGWhite = document.createElement("img");
    knightGWhite.id = "knight-g-white";
    knightGWhite.classList.add("piece");
    knightGWhite.src = "../../images/knight-white.svg";
    const g1 = document.getElementById("g1");
    g1?.appendChild(knightGWhite);
    knightGWhite.addEventListener("dragstart", (e: any) => {
        e.dataTransfer.setData("text", e.target.id);
    });

    const knightBBlack = document.createElement("img");
    knightBBlack.id = "knight-b-black";
    knightBBlack.classList.add("piece");
    knightBBlack.src = "../../images/knight-black.svg";
    const b8 = document.getElementById("b8");
    b8?.appendChild(knightBBlack);
    knightBBlack.addEventListener("dragstart", (e: any) => {
        e.dataTransfer.setData("text", e.target.id);
    });

    const knightGBlack = document.createElement("img");
    knightGBlack.id = "knight-g-black";
    knightGBlack.classList.add("piece");
    knightGBlack.src = "../../images/knight-black.svg";
    const g8 = document.getElementById("g8");
    g8?.appendChild(knightGBlack);
    knightGBlack.addEventListener("dragstart", (e: any) => {
        e.dataTransfer.setData("text", e.target.id);
    });

    // Bishops
    const bishopCWhite = document.createElement("img");
    bishopCWhite.id = "bishop-c-white";
    bishopCWhite.classList.add("piece");
    bishopCWhite.src = "../../images/bishop-white.svg";
    const c1 = document.getElementById("c1");
    c1?.appendChild(bishopCWhite);
    bishopCWhite.addEventListener("dragstart", (e: any) => {
        e.dataTransfer.setData("text", e.target.id);
    });

    const bishopFWhite = document.createElement("img");
    bishopFWhite.id = "bishop-f-white";
    bishopFWhite.classList.add("piece");
    bishopFWhite.src = "../../images/bishop-white.svg";
    const f1 = document.getElementById("f1");
    f1?.appendChild(bishopFWhite);
    bishopFWhite.addEventListener("dragstart", (e: any) => {
        e.dataTransfer.setData("text", e.target.id);
    });

    const bishopCBlack = document.createElement("img");
    bishopCBlack.id = "bishop-c-black";
    bishopCBlack.classList.add("piece");
    bishopCBlack.src = "../../images/bishop-black.svg";
    const c8 = document.getElementById("c8");
    c8?.appendChild(bishopCBlack);
    bishopCBlack.addEventListener("dragstart", (e: any) => {
        e.dataTransfer.setData("text", e.target.id);
    });

    const bishopFBlack = document.createElement("img");
    bishopFBlack.id = "bishop-f-black";
    bishopFBlack.classList.add("piece");
    bishopFBlack.src = "../../images/bishop-black.svg";
    const f8 = document.getElementById("f8");
    f8?.appendChild(bishopFBlack);
    bishopFBlack.addEventListener("dragstart", (e: any) => {
        e.dataTransfer.setData("text", e.target.id);
    });
}

export function setupPieces() {
    setupPawns();
    setupKingAndQueen();
    setupRooks();
    setupMinorPieces();
}
