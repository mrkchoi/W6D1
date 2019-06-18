const MovingObject = require("./moving_object.js");

document.addEventListener("DOMContentLoaded", function () {
  let canvas = document.getElementById("game-canvas");
  canvas.width = 500;
  canvas.height = 500;

  const ctx = canvas.getContext("2d");
  let mo = new MovingObject(
    { pos: [200, 200], vel: [10, 10], radius: 150, color: "pink" }
  );
  let bo = new MovingObject(
    { pos: [100, 100], vel: [10, 10], radius: 100, color: "turquoise" }
  );
  let po = new MovingObject(
    { pos: [65, 120], vel: [10, 10], radius: 15, color: "white" }
  );
  let no = new MovingObject(
    { pos: [115, 75], vel: [10, 10], radius: 15, color: "white" }
  );

  mo.draw(ctx);
  bo.draw(ctx);
  po.draw(ctx);
  no.draw(ctx);
});
  
  

// window.MovingObject = MovingObject;


