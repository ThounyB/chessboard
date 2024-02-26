type Piece = HTMLElement | null;

type DropTarget = HTMLElement | null;

export function movePieces(piece: Piece, dropTarget: DropTarget) {
    movePawn(piece, dropTarget);
}

function isInStartingPosition(piece: Piece) {
    if (piece?.dataset.type === "pawn") {
        if (piece?.dataset.side === "white") {
            if (piece?.dataset.rank === "2") {
                return true;
            }
        }

        if (piece?.dataset.side === "black") {
            if (piece?.dataset.rank === "7") {
                return true;
            }
        }
    } else {
        return false;
    }
}

/**
 * Handles movement of pawn. Adds it to drop target if it's legal move
 * @param piece
 * @param dropTarget
 * @returns
 */
function movePawn(piece: Piece, dropTarget: DropTarget) {
    if (!piece || !dropTarget) {
        return;
    }

    if (piece.dataset.type === "pawn") {
        if (!dropTarget.dataset.rank || !piece.dataset.rank) {
            return;
        }

        if (isInStartingPosition(piece)) {
            if (+dropTarget.dataset.rank - +piece.dataset.rank <= 2) {
                piece.dataset.rank = dropTarget.dataset.rank;

                dropTarget.appendChild(piece);
            }
        } else {
            if (
                piece.dataset.side === "white" &&
                +dropTarget.dataset.rank - +piece.dataset.rank === 1
            ) {
                piece.dataset.rank = dropTarget.dataset.rank;
                dropTarget.appendChild(piece);
            }

            if (
                piece.dataset.side === "black" &&
                +piece.dataset.rank - +dropTarget.dataset.rank === 1
            ) {
                piece.dataset.rank = dropTarget.dataset.rank;
                dropTarget.appendChild(piece);
            }
        }
    }
}
