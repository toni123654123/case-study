let myGamePiece;
let myObstacles = [];
let scores =+0;

function startGame() {
    myGamePiece = new component("img/pika2.gif",50, 40, "red", 10, 100,"img");
    myGameArea.start();
    window.addEventListener("keydown", key);
}

let myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 800;
        this.canvas.height = 500;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 15);
    },
    stop : function() {
        clearInterval(this.interval);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
function key (event){
    switch (event.keyCode){
        case 37:
            myGamePiece.x -= 10;

            break;
        case 38:
            myGamePiece.y -=10;

            break;
        case 39:
            myGamePiece.x +=10;

            break;
        case 40:
            myGamePiece.y +=10;

            break;
    }

}