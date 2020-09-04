let myGamePiece; // phương pháp tạo ra một <canvas>phần tử và chèn nó như là childnode đầu tiên của <body>phần tử.
let myObstacles = [];
let audio = new Audio('Pikachu.mp3');

// Hàm startGame()gọi phương thức start()của myGameAreađối tượng.
function startGame() {
    myGamePiece = new component("img/pika2.gif", 50, 40, "", 10, 100, "img");
    myGameArea.start();
    window.addEventListener("keydown", key);
    audio.play();
}

function key(event) {
    switch (event.keyCode) {
        case 37:
            myGamePiece.x -= 10;

            break;
        case 38:
            myGamePiece.y -= 10;

            break;
        case 39:
            myGamePiece.x += 10;

            break;
        case 40:
            myGamePiece.y += 10;
            break;
    }

}