const image = document.createElement("img");
image.classList.add("pawn");
image.src = "../../images/pawn-white.svg";

export const a2 = document.getElementById("a2");

a2?.appendChild(image);
