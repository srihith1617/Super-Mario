var mario, walkinganimation, lane,boulderanimation,boulder,hi,boulders;
function preload() {
  walkinganimation= loadAnimation("Screenshot 2021-02-13 151626.png","Screenshot 2021-02-13 151722.png","Screenshot 2021-02-13 151820.png",)
  boulderanimation= loadImage("Screenshot 2021-02-13 154346 (1).png")
}
function setup() {
  createCanvas(800,400);
  mario=createSprite(100, 250, 50, 50);
  mario.addAnimation("Mani",walkinganimation);
  mario.scale=0.8;
  hi=0;
  for (var i=0;i<5;i++) {
    lane=createSprite(400, i*100, 800,10);
    lane.shapeColor="green";
  }
  boulders= new Group();
}

function draw() {
  background("red");  
  drawSprites();
  hi-=1;
  rocks();
}
function rocks() {
  if (World.frameCount % 120 === 0) {
    boulder=createSprite(400, randomNumber(0,3)*100+50, 50,50);
    boulder.addAnimation("Bani", boulderanimation);
    boulder.scale=0.5;
    boulder.velocityX=-5;
    boulder.lifetime=100;
    boulders.add(boulder);
    boulder.rotation=hi;
  }
}