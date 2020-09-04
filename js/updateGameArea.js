function updateGameArea() {
    let x, height, gap, minHeight, maxHeight, minGap, maxGap;
    for (let i = 0; i < myObstacles.length; i += 1) {
        if (myGamePiece.crashWith(myObstacles[i])) {
            myGameArea.stop();
            audio.src = "";
            alert("Gameover");
            return;
        }
    }
    myGameArea.clear();

    myGameArea.frameNo += 1;
// khai báo biến chướng ngại vật dưới dạng một mảng.
    if (myGameArea.frameNo == 1 || everyinterval(150)) {
        x = myGameArea.canvas.width;
        minHeight = 80;
        maxHeight = 200;
        height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
        minGap = 100;
        maxGap = 150;
        gap = Math.floor(Math.random() * (maxGap - minGap + 2) + minGap);
        // gap = 100;
        myObstacles.push(new component("a", 20, height, "white", x, 0, "a"));
        myObstacles.push(new component("a", 20, x - height, "white", x , height + gap, "a"));

    }
    for (i = 0; i < myObstacles.length; i += 1) {
        myObstacles[i].x -= 1;
        myObstacles[i].update();
    }
    myGamePiece.newPos();

    myGamePiece.update();

    document.getElementById('score').innerText = "Your score: " + myGameArea.frameNo

    if (myGameArea.frameNo > 500){
        clearInterval(this.interval);
        this.interval = setInterval(updateGameArea, 5);
    }

}

// Hàm everyinterval trả về true nếu số khung hiện tại tương ứng với khoảng thời gian nhất định.
function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {
        return true;
    }
    return false;
}


// tach doi tuong xu ly rieng + dat ten file + clear code