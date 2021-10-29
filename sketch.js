var bow , arrow,  background;
var bowImage, arrowImage;
var arrowGroup, bowGroup;

var green_balloonImage, red_ballonAnimation, pink_balloonImage  ,blue_balloonAnimation, backgroundImage,score;
var greenGroup,redGroup,blueGroup,pinkGroup;
var red,green,blue,pink;

function preload(){
  
  backgroundImage = loadImage("background.png");
  arrowImage = loadImage("fire.png");
  bowImage = loadImage("megaman.png");  
  red_balloonAnimation=loadAnimation("kirby3.png","kirby.png","kirby2.png");  
  blue_balloonAnimation=loadAnimation("pacman.png","pacman2.png");
green_balloonImage=loadImage("diamond.png");
  pink_balloonImage=loadAnimation("duck.png","duck2.png");
}


function setup() {
  createCanvas(400, 400);
  
  //crea el fondo
  scene = createSprite(0,80,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 1
  
  //crea el arco para disparar las flechas
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale =0.3;
  
 redGroup = new Group();
 blueGroup= new Group();
 greenGroup= new Group();
 pinkGroup = new Group();
 arrowGroup= new Group(); 
 score=0
}

function draw() {
 background(0);
    scene.velocityX = -3 

if (scene.x < 0){
  scene.x = scene.width/2; }
  
  bow.y = World.mouseY
  
  if (keyDown("space")) {
    createArrow();  }
  
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 20 == 0) {
    if (select_balloon == 1) { 
      redBalloon();
    }
  }
   if (World.frameCount % 20 == 0) {
    if (select_balloon == 1) { 
      blueBalloon();
    }
  }  
     if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) { 
      greenBalloon();
    }  
  }    
       if (World.frameCount % 50 == 0) {
    if (select_balloon == 1) { 
      pinkBalloon();  }
       }  
    if(arrowGroup.isTouching(redGroup)){
  redGroup.destroyEach();
  arrowGroup.destroyEach();
  score=score+4;}
      
  if(arrowGroup.isTouching(blueGroup)){
  blueGroup.destroyEach();
  arrowGroup.destroyEach();
  score=score+6;
  }  
  if(arrowGroup.isTouching(greenGroup)){
  greenGroup.destroyEach();
  arrowGroup.destroyEach();
  score=score+8;
  }
    if(arrowGroup.isTouching(pinkGroup)){
  pinkGroup.destroyEach();
  arrowGroup.destroyEach();
  score=score+2;
  }  
  drawSprites();
  fill("white")
  text("score:"+score,270,30)
}
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -100;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrow.lifetime = 300;
  arrowGroup.add(arrow);
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addAnimation("levitating",red_balloonAnimation);
  red.velocityX = 5;
  red.lifetime = 150;
  red.scale = 0.6;
  red.lifetime = 300;
 redGroup.add(red);
}
function blueBalloon() {
    var blue = createSprite(0,Math.round(random(20, 320)), 10, 10); blue.addAnimation("levitating2",blue_balloonAnimation);
  blue.velocityX = 6;   
  blue.lifetime = 150;
  blue.scale = 0.8;
  blue.lifetime = 300;
 blueGroup.add(blue);
}
function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 320)), 10, 10);
  green.addAnimation("levitating3",green_balloonImage);
  green.velocityX = 10;
  green.lifetime = 150;
  green.scale = 0.3;
  green.lifetime = 300;
  greenGroup.add(green);
}
function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 250)), 10, 10);
  pink.addAnimation("levitating4",pink_balloonImage);
  pink.velocityX = 4;
  pink.lifetime = 150;
  pink.scale = 0.2; 
  pink.lifetime = 300;
  pinkGroup.add(pink);
}
