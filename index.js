const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
var clickPulsado = false;
var cakeCount = 3;
let cakes = [];

cakes = Cake.generateCakes();
canvas.addEventListener("click", hacerClick, false);
loop();

function hacerClick(e) {
    console.log(cakes)
    console.log(e.x)
    console.log(e.y)
    for (let i = 0; i < cakes.length; i++) {
        if ((e.x > cakes[i].x && e.x < cakes[i].x + 50) && (e.y > cakes[i].y && e.y < cakes[i].y + 50)) {//
            cakes.splice(i, 1);
            cakeCount--;
        }
    }
}

function loop() {
    var cake = new Image();
    cake.src = "cake.png";
    cake.onload = function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        cakes.forEach(b => {
            cake.width = b.size;
            b.update();
            ctx.drawImage(cake, b.x, b.y);
        })
        ctx.fillStyle = "Black";
        ctx.font = "50px Times"
        ctx.fillText("Regalos restantes: " + cakeCount, 40, 40);
        if (!cakeCount) {
            ctx.fillStyle = "Black";
            ctx.font = "80px Times"
            ctx.textAlign = "center";
            ctx.fillText("¡Feliz cumpleaños!", canvas.width / 2, canvas.height / 2);
        }
    }
    requestAnimationFrame(loop);
}

function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}