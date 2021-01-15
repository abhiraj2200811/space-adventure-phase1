var astronaut,platform,platform_breakable,aliens;
var astronautImg,platform_breakIMG,aliensIMG,platform_image;
var backGround;
var backgroundImg;
var platform2,platform3,platform4,platform5,platform6,platform7,platform8,platform9,platform10,platform11;

function preload(){

astronautImg=loadImage("IMAGES/ASTRONAUT.png")
backgroundImg=loadImage("IMAGES/Untitled.png")
platformImg=loadImage("IMAGES/platform.png")

}




function setup() {
  createCanvas(400,800);

  backGround=createSprite(200,400,800,800000)
  backGround.addImage(backgroundImg);
  backGround.scale=100


  astronaut=createSprite(200, 200, 20, 50);
  astronaut.addImage(astronautImg);
  astronaut.scale=0.25

  platform=createSprite(200,350,800,20)
   platform.fill="164,64,21"

   platform2=createSprite(200,370,50,20)
   platform2.addImage(platformImg);
}

function draw() {
  background(255,255,255);  

  //backGround.velocityY=-2

  if(keyWentDown(UP_ARROW)  ) {

    astronaut.velocityY=-20
  

  }

  astronaut.velocityY=astronaut.velocityY+0.8

  //if(keyWentUp(UP_ARROW)){

    //astronaut.velocityY=0

 // }
  
camera.position.y=astronaut.y
camera.position.x=astronaut.x

astronaut.collide(platform)
astronaut.collide(platform2)

if (backGround.y<50 && backGround.y>400  ){

backGround.y=backGround.height/2

}

console.log(astronaut.y)

  drawSprites();
}