var carinha;
function setup() {
  createCanvas(600,400);

carinha = createSprite (200,200,20, 20);

}

function draw() 
{
  background("lightgrey");

  if (keyDown("space")){
carinha.x = Math.round(random(1,600));
carinha.y = Math.round(random(1,400));
  }

  drawSprites();
}




