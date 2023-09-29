export function initBoard() {
    const view = document.getElementById("view");

    const board = document.createElement("div");
    board.classList.add("board");

    view?.appendChild(board);

    const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

    let rank = 8;
    for (rank; rank >= 1; rank--) {
        const rankWrapper = document.createElement("div");

        rankWrapper.classList.add("rank");
        rankWrapper.classList.add(`${rank.toString()}`);

        for (let i = 1; i <= 8; i++) {
            const square = document.createElement("div");

            const location = `${letters[i - 1]}${rank}`;

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

            if (rank === 1) {
                square.textContent = letters[i - 1];
            }
        }

        board.appendChild(rankWrapper);
    }
}
