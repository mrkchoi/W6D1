

function MovingObject(arg){
  this.pos = arg.pos;
  this.vel = arg.vel;
  this.radius = arg.radius;
  this.color = arg.color;
}


MovingObject.prototype.draw = function(ctx){
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);
  ctx.strokeStyle = "orangered";
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.fillStyle = this.color;
  ctx.fill();
}






module.exports = MovingObject;