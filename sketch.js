var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var topgroup,bottomgroup,bargroup
var score=0

function preload(){
bgImg = loadImage("assets/bg.png")
obs_top1=loadImage("assets/obstop1.png")
obs_top2=loadImage("assets/obstop2.png")
obs_bot1=loadImage("assets/obsbottom1.png")
obs_bot2=loadImage("assets/obsbottom2.png")
obs_bot3=loadImage("assets/obsbottom3.png")
balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
}

function setup(){
createCanvas(400,400)
//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;

topgroup=new Group()
bottomgroup=new Group()
bargroup=new Group()

}

function draw() {
  
  background("black");
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY = -6 ;
            
          }

          //adding gravity
           balloon.velocityY = balloon.velocityY + 2;

           spawnObstaclesTop()
           spawnObstaclesBottom()
          bars();

        drawSprites();
        Score();
        
}
function spawnObstaclesTop()
{
  if(World.frameCount%100===0){
  obs_topS = createSprite(400,30,1,1);

  obs_topS.y = Math.round(random(20,90));

  var r = Math.round(random(1,2));
  obs_topS.scale=0.1;
  obs_topS.velocityX=-3
  obs_topS.lifetime=110;

  switch(r){
    case 1: 
    obs_topS.addImage(obs_top1);
    break;

    case 2:
      obs_topS.addImage(obs_top2)
      break;

  }
  topgroup.add(obs_topS)
  }
  

}

function spawnObstaclesBottom(){
  if(World.frameCount%100===0){ 
  obs_bottomS=createSprite(400,400)
   
  obs_bottomS.scale=0.2;
  obs_bottomS.velocityX=-3
  var r = Math.round(random (1,3))
  obs_bottomS.lifetime=110;
   
  switch(r){
    case 1:
    obs_bottomS.addImage(obs_bot1);
    break;

    case 2:
    obs_bottomS.addImage(obs_bot2);
    break;

    case 3:
    obs_bottomS.addImage(obs_bot3);
    break;
  }
  bottomgroup.add(obs_bottomS)
  }

}
function bars(){
if(World.frameCount%60===0){
bar=createSprite(400,200,10,400)
bar.velocityX=-5
bar.depth=balloon.depth;
bar.lifetime=80
bargroup.add(bar)
}

}

function Score(){
  textSize(25)
  fill("red")
text("score:"+score,300,50)
if(balloon.isTouching(bargroup)){
  score=score+1
}

}
