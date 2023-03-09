const cnvs = document.querySelector('canvas');
const cnt = cnvs.getContext('2d');
const width = cnvs.width = window.innerWidth;
const height = cnvs.height = window.innerHeight;
var cakeCount = 34;
let cakes = [];
var fireworks = false;

cakes = Cake.generateCakes();
cnvs.addEventListener("click", click, false);
loop();

function click(e) {
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
        cnt.clearRect(0, 0, cnvs.width, cnvs.height);
        cakes.forEach(c => {
            cake.width = c.size;
            c.update();
            cnt.drawImage(cake, c.x, c.y);
        })
        if (cakeCount) {
            cnt.fillStyle = "Black";
            cnt.font = "3.5rem Times"
            cnt.fillText("Tartas restantes: " + cakeCount, 40, 80);
        } else {
            if (!fireworks) {
                loadFireworks();
                fireworks = true;
            }
            cnt.fillStyle = "white";
            cnt.font = "4rem Times"
            cnt.textAlign = "center";
            cnt.fillText("¡Feliz cumpleaños!", cnvs.width / 2, cnvs.height / 2);
        }
    }
    requestAnimationFrame(loop);
}

function loadFireworks() {
    let script = document.createElement('script');
    script.src = "fireworks.js";
    document.body.append(script);
    document.body.classList.add('dark')
}

function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}