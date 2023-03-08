class Cake {
    constructor(x, y, velX, velY, color, size) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.color = color;
        this.size = size;
    }

    static generateCakes() {
        var cakes = [];
        while (cakes.length < cakeCount) {
            const size = 80;
            let cake = new Cake(
                random(size, width - size),
                random(size, height - size),
                random(-7, 7),
                random(-7, 7),

                'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')',
                size
            );
            cakes.push(cake);
        }
        return cakes;
    }

    update() {
        if ((this.x + this.size) >= width) {
            this.velX = -(this.velX);
        }
        if ((this.x - this.size) <= 0) {
            this.velX = -(this.velX);
        }
        if ((this.y + this.size) >= height) {
            this.velY = -(this.velY);
        }
        if ((this.y - this.size) <= 0) {
            this.velY = -(this.velY);
        }
        this.x += this.velX;
        this.y += this.velY;
    };
}