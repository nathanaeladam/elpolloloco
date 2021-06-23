class Character extends MovableObject {

    x = 0;
    y = 0;
    width = 420;
    height = 480;
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
    limitTop = -220;
    limitBottom = 110;
    background_sound = new Audio('audio/underwater2.mp3');


    constructor(world) {
        super().loadImage('img/1.Sharkie/3.Swim/1.png');
        this.loadImages(this.IMAGES_SWIM);
        this.animate();
        this.world = world;
    }

    animate() {

        setInterval(() => {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.playAnimation(this.IMAGES_SWIM);
            }
        }, 80);

        setInterval(() => {
            ///////////////// reset y and x

            if (this.y < this.limitTop) {
                this.y = this.limitTop + 1;
            }

            if (this.y > this.limitBottom) {
                this.y = this.limitBottom - 1;
            }

            ////////// set nitro
            if (this.world.keyboard.SPACE) {
                this.speed = 10;
            } else {
                this.speed = 5;
            }


            /////////////// right

            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.x += this.speed;
                this.background_sound.play();
                this.otherDirection = false;

                if (this.y >= this.limitTop && this.y <= this.limitBottom) {
                    if (this.world.keyboard.UP) {
                        this.y -= this.speed;
                    }

                    if (this.world.keyboard.DOWN) {
                        this.y += this.speed;
                    }
                }
            }

            //////////////////////////////   left
            if (this.world.keyboard.LEFT && this.x > 0) {
                this.x -= this.speed;
                this.otherDirection = true;

                if (this.y >= this.limitTop && this.y <= this.limitBottom) {
                    if (this.world.keyboard.UP) {
                        this.y -= this.speed;
                    }

                    if (this.world.keyboard.DOWN) {
                        this.y += this.speed;
                    }
                }
            }
            this.world.camera_x = -this.x;
        }, 1000 / 60);
    }
}