class Ground {

    constructor(x, y, width, height) {
        var ground_options = {
            isStatic:true
        }

        this.w = width;
        this.h = height;

        this.body = Bodies.rectangle(x, y, width, height, ground_options);
        World.add(world, this.body);
    }

    display() {

        var pos = this.body.position
        rectMode(CENTER);
        rect(pos.x, pos.y, this.w, this.h);

    }

}