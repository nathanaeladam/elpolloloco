class World {


    backgroundObjects = [
        new BackgroungObject('img/3. Background/Layers/5. Water/D1.png', 0),
        new BackgroungObject('img/3. Background/Layers/3.Fondo 1/D1.png', 0),
        new BackgroungObject('img/3. Background/Layers/4.Fondo 2/D1.png', 0),
        new BackgroungObject('img/3. Background/Layers/2. Floor/D1.png', 0),
        new BackgroungObject('img/3. Background/Layers/1. Light/1.png', 0),

        new BackgroungObject('img/3. Background/Layers/5. Water/D2.png', 719),
        new BackgroungObject('img/3. Background/Layers/3.Fondo 1/D2.png', 719),
        new BackgroungObject('img/3. Background/Layers/4.Fondo 2/D2.png', 719),
        new BackgroungObject('img/3. Background/Layers/2. Floor/D2.png', 719),
        new BackgroungObject('img/3. Background/Layers/1. Light/2.png', 719),

        new BackgroungObject('img/3. Background/Layers/5. Water/D1.png', 719 * 2),
        new BackgroungObject('img/3. Background/Layers/3.Fondo 1/D1.png', 719 * 2),
        new BackgroungObject('img/3. Background/Layers/4.Fondo 2/D1.png', 719 * 2),
        new BackgroungObject('img/3. Background/Layers/2. Floor/D1.png', 719 * 2),
        new BackgroungObject('img/3. Background/Layers/1. Light/1.png', 719 * 2),

        new BackgroungObject('img/3. Background/Layers/5. Water/D2.png', 719 * 3),
        new BackgroungObject('img/3. Background/Layers/3.Fondo 1/D2.png', 719 * 3),
        new BackgroungObject('img/3. Background/Layers/4.Fondo 2/D2.png', 719 * 3),
        new BackgroungObject('img/3. Background/Layers/2. Floor/D2.png', 719 * 3),
        new BackgroungObject('img/3. Background/Layers/1. Light/2.png', 719 * 3),

        new BackgroungObject('img/3. Background/Layers/5. Water/D1.png', 719 * 4),
        new BackgroungObject('img/3. Background/Layers/3.Fondo 1/D1.png', 719 * 4),
        new BackgroungObject('img/3. Background/Layers/4.Fondo 2/D1.png', 719 * 4),
        new BackgroungObject('img/3. Background/Layers/2. Floor/D1.png', 719 * 4),
        new BackgroungObject('img/3. Background/Layers/1. Light/1.png', 719 * 4),

        new BackgroungObject('img/3. Background/Layers/5. Water/D2.png', 719 * 5),
        new BackgroungObject('img/3. Background/Layers/3.Fondo 1/D2.png', 719 * 5),
        new BackgroungObject('img/3. Background/Layers/4.Fondo 2/D2.png', 719 * 5),
        new BackgroungObject('img/3. Background/Layers/2. Floor/D2.png', 719 * 5),
        new BackgroungObject('img/3. Background/Layers/1. Light/2.png', 719 * 5),

        new BackgroungObject('img/3. Background/Layers/5. Water/D1.png', 719 * 6),
        new BackgroungObject('img/3. Background/Layers/3.Fondo 1/D1.png', 719 * 6),
        new BackgroungObject('img/3. Background/Layers/4.Fondo 2/D1.png', 719 * 6),
        new BackgroungObject('img/3. Background/Layers/2. Floor/D1.png', 719 * 6),
        new BackgroungObject('img/3. Background/Layers/1. Light/1.png', 719 * 6),

        new BackgroungObject('img/3. Background/Layers/5. Water/D2.png', 719 * 7),
        new BackgroungObject('img/3. Background/Layers/3.Fondo 1/D2.png', 719 * 7),
        new BackgroungObject('img/3. Background/Layers/4.Fondo 2/D2.png', 719 * 7),
        new BackgroungObject('img/3. Background/Layers/2. Floor/D2.png', 719 * 7),
        new BackgroungObject('img/3. Background/Layers/1. Light/2.png', 719 * 7),

        new BackgroungObject('img/3. Background/Layers/5. Water/D1.png', 719 * 8),
        new BackgroungObject('img/3. Background/Layers/3.Fondo 1/D1.png', 719 * 8),
        new BackgroungObject('img/3. Background/Layers/4.Fondo 2/D1.png', 719 * 8),
        new BackgroungObject('img/3. Background/Layers/2. Floor/D1.png', 719 * 8),
        new BackgroungObject('img/3. Background/Layers/1. Light/1.png', 719 * 8),

        new BackgroungObject('img/3. Background/Layers/5. Water/D2.png', 719 * 9),
        new BackgroungObject('img/3. Background/Layers/3.Fondo 1/D2.png', 719 * 9),
        new BackgroungObject('img/3. Background/Layers/4.Fondo 2/D2.png', 719 * 9),
        new BackgroungObject('img/3. Background/Layers/2. Floor/D2.png', 719 * 9),
        new BackgroungObject('img/3. Background/Layers/1. Light/2.png', 719 * 9),

        new BackgroungObject('img/3. Background/Layers/5. Water/D1.png', 719 * 10),
        new BackgroungObject('img/3. Background/Layers/3.Fondo 1/D1.png', 719 * 10),
        new BackgroungObject('img/3. Background/Layers/4.Fondo 2/D1.png', 719 * 10),
        new BackgroungObject('img/3. Background/Layers/2. Floor/D1.png', 719 * 10),
        new BackgroungObject('img/3. Background/Layers/1. Light/1.png', 719 * 10),

        new BackgroungObject('img/3. Background/Layers/5. Water/D2.png', 719 * 11),
        new BackgroungObject('img/3. Background/Layers/3.Fondo 1/D2.png', 719 * 11),
        new BackgroungObject('img/3. Background/Layers/4.Fondo 2/D2.png', 719 * 11),
        new BackgroungObject('img/3. Background/Layers/2. Floor/D2.png', 719 * 11),
        new BackgroungObject('img/3. Background/Layers/1. Light/2.png', 719 * 11),
    ];

    character = new Character();
    enemies = [
        new Fish(),
        new Fish(),
        new Fish(),
        new Fish(),
        new Fish(),
        new Fish(),
        new Fish(),
        new Fish(),
        new Fish(),
        new Fish(),
        new Fish(),
        new Fish(),
        new Fish(),
        new Fish(),
        new Fish(),
        new Fish(),
        new Fish(),
        new Fish(),
        new Fish(),
        new Fish(),
        new Fish(),
        new Fish(),
        new Fish(),
        new Fish(),
    ];
    ctx;
    canvas;
    keyboard;
    world;
    camera_x = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    setWorld() {
        this.character.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.backgroundObjects);
        this.addObjectsToMap(this.enemies);

        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);

        this.ctx.translate(-this.camera_x, 0);

        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(mo => {
            this.addToMap(mo);
        });

    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.ctx.save();
            this.ctx.translate(mo.width, 0);
            this.ctx.scale(-1, 1);
            mo.x = mo.x * -1;
        }

        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);

        if (mo.otherDirection) {
            mo.x = mo.x * -1;
            this.ctx.restore();
        }
    }
}