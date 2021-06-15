class Character extends MovableObject {

    x = 0;
    y = 60;
    width = 300;
    height = 300;
    IMAGES_SWIM = [
        'img/1.Sharkie/3.Swim/1.png',
        'img/1.Sharkie/3.Swim/2.png',
        'img/1.Sharkie/3.Swim/3.png',
        'img/1.Sharkie/3.Swim/4.png',
        'img/1.Sharkie/3.Swim/5.png',
        'img/1.Sharkie/3.Swim/6.png',
    ];
    world;
    speed = 5;

    constructor() {
        super().loadImage('img/1.Sharkie/3.Swim/1.png');
        this.loadImages(this.IMAGES_SWIM);

        this.animate();
    }

    animate() {
        setInterval(() => {

            if (this.world.keyboard.SPACE) {
                this.speed = 10;
            } else {
                this.speed = 5;
            }

            if (this.world.keyboard.RIGHT) {
                this.x += this.speed;
                this.otherDirection = false;

                if (this.world.keyboard.UP) {
                    this.y -= this.speed
                }

                if (this.world.keyboard.DOWN) {
                    this.y += this.speed;
                }
            }

            if (this.world.keyboard.LEFT) {
                this.x -= this.speed;
                this.otherDirection = true;

                if (this.world.keyboard.UP) {
                    this.y -= this.speed
                }

                if (this.world.keyboard.DOWN) {
                    this.y += this.speed;
                }
            }

            this.world.camera_x = -this.x;
        }, 1000 / 60);

        setInterval(() => {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                let i = this.currentImage % this.IMAGES_SWIM.length;

                let path = this.IMAGES_SWIM[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }
        }, 80);
    }
}