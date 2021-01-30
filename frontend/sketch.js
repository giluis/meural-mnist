const grid = new Grid(400,400,28,28,{x:0,y:0});
function setup() {
  // put setup code here
  createCanvas(400,400);
}

function draw() {
  // frameRate(0.8);
  // put drawing code here
  if(mouseIsPressed)grid.activate(mouseX,mouseY,0);
  grid.render();
}

function guess(){
  fetch(url,{
    method:'get',
    body: grid.cells
  })
  .then(g=> console.log(g))
}