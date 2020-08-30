let cvs = document.getElementById("canvas");
let ctx = cvs.getContext("2d");
// Hàm getContext (‘2d’) có các thuộc tính và
// phương thức cho phép chúng ta vẽ và thực hiện nhiều thứ khác nhau trên Canvas;

var bird = new Image(); // con chim
var bg = new Image(); //backgroud
var fg = new Image(); //footed
var pipeNorth = new Image(); // ống trên
var pipeSouth = new Image(); // ống dưới

// hình ảnh;

bird.src = "https://pa1.narvii.com/6611/59dbc31e57077c3e7f46176175d7b31a0d020ec9_00.gif";
bg.src = "image/bg2.png";
fg.src = "image/fg.png";
pipeNorth.src = "image/pipeNorth.png";
pipeSouth.src = "image/pipeSouth.png";

// âm thanh chưa có =)) tính sau;
var fly = new Audio();
var scor = new Audio();

fly.src = "";
scor.src = "";

// tạo khoảng cách giữa chú chim và chướng ngại vật;

let range = 0; //là khoảng cách giữa ống nước phía trên và ống nước phía dưới;

let constant; // xác định tọa độ Y của ống nước phía dưới và nó được tính toán bằng công thêm range vào tọa độ
// ống nước phía trên. Hai ống có chung tọa độ X

let bX = 10;
let bY = 350;
// bX và bY là  tọa độ X và Y của chú chim, giá trị ban đầu là 10 và 150 tương ứng.

let gravity = 1.5; // trọng lực bằng 1.5, khi chú chim rơi xuống sẽ bằng 1.5 pxel

let score = 0; // tính điểm cho người chơi

// muốn điểu khiển chú chim bay lên bằng phím bất kỳ trên bàn phím, chúng ta dùng hàm addEventlistener()

document.addEventListener("mousedown",mouseUp);

function mouseUp(){
    bY -= 30; // là độ bay cao 25 pxel
    fly.play();
}
// lưu lại tọa độ của ống

let pipe = [];

pipe[0] = {
    x : cvs.width,
    y : 0
};

function draw(){

    ctx.drawImage(bg,0,0);


    for(var i = 0; i < pipe.length; i++){

        constant = pipeNorth.height+range;
        ctx.drawImage(pipeNorth,pipe[i].x,pipe[i].y);
        ctx.drawImage(pipeSouth,pipe[i].x,pipe[i].y+constant);

        pipe[i].x--;

        if( pipe[i].x == 125 ){
            pipe.push({
                x : cvs.width,
                y : Math.floor(Math.random()*pipeNorth.height)-pipeNorth.height
            });
        }

        // detect collision

        if( bX + bird.width >= pipe[i].x && bX <= pipe[i].x + pipeNorth.width && (bY <= pipe[i].y +
            pipeNorth.height || bY+bird.height >= pipe[i].y+constant) || bY + bird.height >=  cvs.height - fg.height){
            location.reload(); // reload the page
        }

        if(pipe[i].x == 10){
            score++;
            scor.play();
        }


    }

    ctx.drawImage(fg,0,cvs.height - fg.height);

    ctx.drawImage(bird,bX,bY);

    bY += gravity;

    ctx.fillStyle = "#000";
    ctx.font = "20px Verdana";
    ctx.fillText("Score : "+score,10,cvs.height-20);

    requestAnimationFrame(draw);

}

draw();