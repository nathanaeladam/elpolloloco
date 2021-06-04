class MoveableObject {
    x = 170;
    y = 285;
    img;
    width = 100;
    height = 150;
    imageCache = {};
    currentImage = 0;
    speed = 0.15;

    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;

    }

    moveRight() {
        
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }
}