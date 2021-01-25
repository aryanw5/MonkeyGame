
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var PLAY = 1
var END = 0;
var gameState =PLAY;
var survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
monkey = createSprite(50,313,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  
  
  
}


function draw() {
  
background(255);
  

  textSize(20);
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time:" + survivalTime ,130,80);
  
  if(gameState === PLAY) {
    
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
    var select_obstacle = Math.round(random(1));
  
  if(World.frameCount % 110 === 0) {
   if(select_obstacle ==1) {
     obstacle();
     }
 }
    
    var select_banana = Math.round(random(1));
    
  if(World.frameCount % 60 === 0) {
   if(select_banana ==1) {
     banana();
     }
 }
    
    
    if(keyDown("space")) {
      monkey.velocityY = -13;
    }
    
    monkey.velocityY = monkey.velocityY + 0.8;
    
    monkey.collide(ground);
    
    
   }
 
 
  

  
  
  drawSprites();
}

function obstacle() {
  var obstacle = createSprite(450,330,10,40);
  obstacle.addImage(obstacleImage);
  obstacle.velocityX = -6;
  obstacle.lifetime = 150;
  obstacle.scale = 0.1;
}


function banana() {
  var banana = createSprite(450,Math.round(random(60,250)),10,10);
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  banana.velocityX = -3
}

