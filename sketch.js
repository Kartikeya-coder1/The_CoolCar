const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

// var world
var carA,carB,ground,ground1,ground2,c,cloud,cloud1,cloud2;
var meteor1,m1,over,bgImg
function preload(){
  c = loadImage("car.png")
  m = loadImage("m3.png")
  cl = loadImage("cloud.png")
  // bg = loadImage("")
  
}

function setup() {
  createCanvas(1000,600);
  // createCanvas(1000,600)
  
  // ground =  createSprite(500, 590, 1000, 10);
  // ground.shapeColor("black")
 
  carB = createSprite(900,550,200,80);
  carB.scale = 0.15
  cloud = createSprite(150,50,100,40);
  cloud1 = createSprite(500,50,100,40);
  cloud2 = createSprite(850,50,100,40);

}

function draw() {
  // background("orange");
  // ground.display(); 
  // if(m1.x>=carB.x){
  //   over = createSprite(500,300,1000,600)
  // }
  // text("SUPER CAR!!!",500,300)
  if (bgImg){
    background(bgImg);  
}
// carer()
 
  carB.addImage(c)
  cloud.addImage(cl)
  cloud1.addImage(cl)
  cloud2.addImage(cl)
  
  if(frameCount%30===0){
    // meteorer();
  }
  if(keyDown("left")){
    carB.x = carB.x-20
    c = loadImage("car.png")
  }

if(keyDown("right")){
  // carA.x = carA.x+20
  carB.x = carB.x+20
  c = loadImage("car.png")
}
  if(keyDown("up")){
    
    carB.y = carB.y-2
    c = loadImage("carback.png")
    carB.scale = carB.scale - 0.002
    // "carback.png".scale = 0.1
  }

  if(keyDown("down")){
    carB.y = carB.y +2
    c = loadImage("carback.png")
    carB.scale = carB.scale + 0.002
  }
  if(carB.y < 250){
    carB.y = 550
  }
  
  getTime();
  drawSprites();
}



function meteorer(){
  m1 = createSprite(random(10,990),random(5,20),50,50)
  m1.addImage(m)
  // this.x =x
  m1.scale = 0.25
  m1.velocityY = round(random(10,20))
  m1.velocityX = round(random(-10,10))
}
// function isTouching(object1,object2){
//   if(object1.x - object2.x < object2.width/2 + object1.width/2
//     && object2.x - object1.x < object2.width/2 + object1.width/2
//     && object1.y - object2.y < object2.height/2 + object1.height/2
//     && object2.y - object1.y < object2.height/2 + object1.height/2){ 
//       carB.destroy()     
//   }
// }
  



// //}

async function getTime(){
  var res = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
 var resJson =await res.json();
 var datetime=resJson.datetime;
var hour =  datetime.slice(11,13)
console.log(hour)
  if (hour>=6 && hour<=18){
      // carB = "car.png"
      // m1 = "mt.png"
      bg = "morn.jpg"
      bg.scale = 200

  }
  else{
      // carB = "car2.jpg"
      // m1 = "mt2.png"
      bg = "night.jpg"
  }
  // m = loadImage(m1)
  // c = loadImage(carB)
  bgImg = loadImage(bg)
}



  function carer(){
    
  }