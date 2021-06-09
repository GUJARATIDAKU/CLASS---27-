class Chain{
    constructor(bodyA,bodyB) {
        var options = {
            stiffness : 0.5,
            length : 100,
            bodyA : bodyA,
            bodyB : bodyB
            }  
            this.body = Constraint.create(options)
            World.add(world,this.body);
    } display (){
        push();
        strokeWeight(5)
        line(this.body.bodyA.position.x , this.body.bodyA.position.y , this.body.bodyB.position.x , this.body.bodyB.position.y)
        pop();
    }
}