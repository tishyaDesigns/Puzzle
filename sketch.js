
function preload() {
  b1= loadImage("boys/image_part_001.jpg");
  b2= loadImage("boys/image_part_002.jpg");
  b3= loadImage("boys/image_part_003.jpg");
  b4= loadImage("boys/image_part_004.jpg");
  b5= loadImage("boys/image_part_005.jpg");
  b6= loadImage("boys/image_part_006.jpg");
  b7= loadImage("boys/image_part_007.jpg");
  b8= loadImage("boys/image_part_008.jpg");
  b9= loadImage("boys/image_part_009.jpg");
}

function setup() {
  createCanvas(1000,500);
  p1 = createSprite(143,132,20,20);
  p1.addImage(b3);
  p2 = createSprite(243,132,20,20);
  p2.addImage(b6)
  p3 = createSprite(343,132,20,20);
  p3.addImage(b2);
  p4 = createSprite(443,132,20,20);
  p4.addImage(b1);
  p5 = createSprite(543,132,20,20);
  p5.addImage(b7);
}

function draw() {
  background("aqua");
 
   p1.display();
   p2.display();
   p3.display();
   p4.display();
   p5.display();
   if(mousePressedOver(p1)){
      console.log("here")
    }
    drawSprites();
  }
   

