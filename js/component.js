let myGameArea = {
    canvas: document.createElement("canvas"),
    // Các start()phương pháp tạo ra một <canvas>phần tử và chèn nó như là childnode đầu tiên của <body>phần tử.
    //
    start: function () {
        this.canvas.width = 400;
        this.canvas.height = 500;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 15);

    },
    stop: function () {
        clearInterval(this.interval);

    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
}
function component(img, width, height, color, x, y, type) {
    this.img = new Image();
    this.img.src = img;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.type = type;
    this.update = function () {
        if (this.type == "img") {
            ctx = myGameArea.context;
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        } else {
            ctx = myGameArea.context;
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function () {
        this.x += this.speedX;
        this.y += this.speedY;
    }
    this.crashWith = function (otherobj) {
        let myleft = this.x;
        let myright = this.x + (this.width);
        let mytop = this.y;
        let mybottom = this.y + (this.height);
        let otherleft = otherobj.x;
        let otherright = otherobj.x + (otherobj.width);
        let othertop = otherobj.y;
        let otherbottom = otherobj.y + (otherobj.height);
        let crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }


}


