class Cloud extends MoveableObject {

    width = 500;
    height = 250;
    y = 20;

    constructor() {
        super().loadImage('/img/5.Fondo/Capas/4.nubes/1.png');

        this.x = 200 + Math.random() * 500;
    }

}