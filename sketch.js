function setup() {
  createCanvas(950, 642);
  background(214, 214, 205);
  noLoop();
}

function draw() {
  
  fill(0)
  strokeWeight(20);
  line (0, 169, 437, 550);
  
  
  //console. log(mouseX, mouseY);

  

  fill(255);
  textSize(16);
  text(mouseX +"," + mouseY, mouseX, mouseY);
}



    
  








