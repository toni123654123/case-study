function updateGameArea() {
    let x, height, gap, minHeight, maxHeight, minGap, maxGap;
    for (i = 0; i < myObstacles.length; i += 1) {
        if (myGamePiece.crashWith(myObstacles[i])) {
            myGameArea.stop();
            return;
        }
    }
    myGameArea.clear();
    myGameArea.frameNo += 1;
    if (myGameArea.frameNo == 1 || everyinterval(150)) {
        x = myGameArea.canvas.width;
        minHeight = 80;
        maxHeight = 200;
        height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
        minGap = 100;
        maxGap = 200;
        gap = Math.floor(Math.random()*(maxGap-minGap+2)+minGap);
        myObstacles.push(new component("a",20, height, "green",x-maxHeight, 0,"a"));
        myObstacles.push(new component("a",20, x - height, "green", x - minHeight, height + gap,"a"));

    }
    for (i = 0; i < myObstacles.length; i += 1) {
        myObstacles[i].x -= 1;
        myObstacles[i].update();
    }
    myGamePiece.newPos();
    myGamePiece.update();
    scores++;
    document.getElementById('score').innerText= "Your score: "+scores;

}

function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
    return false;
}

