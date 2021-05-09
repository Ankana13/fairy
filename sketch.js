var starImg,bgImg;
var star, starBody;
var fairy,fairyImg,fairyBody;
var ground1;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here

	fairyImg = loadImage("images/fairy.png");
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
fairy = createSprite(200,500);
fairy.addImage(fairyImg);
fairy.scale = 0.2;




//fairyBody = Bodies.rectangle(200,500,50,50,{isStatic:true});
//World.add(world,fairyBody);


ground1 = new Ground(400,730,800,10);


	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

 // console.log(star.y);

 //.x= fairyBody.position.x 
  //fairy.y= fairyBody.position.y 

  //write code to stop star in the hand of fairy
ground1.display();
if(star.y >+ 600 && starBody.position.y >= 600 ){
	Matter.Body.setStatic(starBody,true); 
}

  drawSprites();
  keyPressed();
}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	if(keyCode === RIGHT_ARROW){
		fairy.x = fairy.x + 20;
		
	}
}
