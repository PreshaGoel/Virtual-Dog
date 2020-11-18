var dogIMG, happyDogIMG, database, foodS, foodStock, dog, happyDog

function preload()
{
dogIMG = loadImage("Dog.png");
happyDogIMG = loadImage("happydog.png");

	//load images here
}

function setup() {

  database = firebase.database()
  createCanvas(500, 500);
  dog = createSprite(250,250,10,10);
  dog.addImage(dogIMG)
  dog.scale = 0.3
  foodStock = database.ref('Food')
  foodStock.on ("value", readStock)

 
  
}


function draw() {  

  background(46, 139, 87)

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(happyDogIMG)

  }

  drawSprites();

  fill ("white")
  textSize (20)
  text( "Food :" + foodS, 200, 100)
  //add styles here

}

function readStock(data) {
foodS = data.val();

}

function writeStock(x) {
if (x <= 0) {
  x=0;
} else{
  x = x - 1
}

database.ref('/').update({
  Food : x
})

}



