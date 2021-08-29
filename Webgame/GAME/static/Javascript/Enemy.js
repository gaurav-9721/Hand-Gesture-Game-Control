class Enemy{
    constructor(x) {
        this.x = x;
        this.y = 600-150;
        this.w = 100;
        this.h = 190;

        this.body = Matter.Bodies.rectangle(this.x, this.y, this.w, this.h);
    }

    setProperties(){
        this.body.isStatic = false;
        // let sprite = this.body.render.sprite
        // //sprite.texture = towerImage;
        // sprite.xScale = 1;
        // sprite.yScale = 1


    }

    move(){
        Body.applyForce(this.body,
            {
            x: 0,
            y: windowHeight-100
            },
            {
                x:0.8,
                y:0
            }

        );
    }

    show(){
        World.add(engine.world, this.body);
    }
}

