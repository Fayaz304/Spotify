let boxes = document.querySelectorAll("button");
let turnO = true;

let winPattrens = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((tic) => {
    tic.addEventListener("click", () => {
        if(turnO) {
            tic.innerText = "O";
            turnO = false;
        } else {
            tic.innerText = "x";
            turnO = true;
        }
        tic.disabled = true;
    });
});

