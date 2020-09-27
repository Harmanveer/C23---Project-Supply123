class bottom
{
    constructor(x,y)
    {
        var options = 
    {
        'isStatic': true,
    }
    this.body = Bodies.rectangle(x, y, 200, 20, options);
    this.width = 200;
    this.height = 20;
    this.x = x;
    this.y = y;
    
    World.add(world, this.body);
  }
  display()
  {
    var pos = this.body.position;
    rectMode(CENTER);
    fill("red");
    rect(this.x,this.y, this.width, this.height);
  }
};