var iss,spacecraft
var bg,issimg,scimg
var hasDocked=false
function preload(){
  bg=loadImage("spacebg.jpg")
  scimg1=loadImage("spacecraft1.png")
  scimg2=loadImage("spacecraft2.png")
  scimg3=loadImage("spacecraft3.png")
  scimg4=loadImage("spacecraft4.png")
  issimg=loadImage("iss.png")
}
function setup(){
  createCanvas(700,400)
  spacecraft=createSprite(285,240)
  spacecraft.addImage(scimg1)
  spacecraft.scale=0.20
  iss=createSprite(330,130)
  iss.addImage(issimg)
  iss.scale=0.55
}
function draw(){
  background(bg)
  spacecraft.addImage(scimg1)
  if(!hasDocked){
    spacecraft.x=spacecraft.x+random(-1,1)
  
  if(keyDown("UP_ARROW")){
    spacecraft.y=spacecraft.y-2
  }
  if(keyDown("LEFT_ARROW")){
    spacecraft.addImage(scimg4)
    spacecraft.x=spacecraft.x-1
  }
  if(keyDown("RIGHT_ARROW")){
    spacecraft.addImage(scimg3)
    spacecraft.x=spacecraft.x+1
  }
  if(keyDown("DOWN_ARROW")){
    spacecraft.addImage(scimg2)
  }

}
if(spacecraft.y<=(iss.y+70)&&spacecraft.x<=(iss.x-10)){
  hasDocked=true
  textSize(25)
  fill("WHITE")
  text("Docking Successfull!!",200,300)
  text("Project is done by S,PonBhuvanesh",300,380)
  textSize(50)
  text("🚀",400,250)
}
drawSprites()
}