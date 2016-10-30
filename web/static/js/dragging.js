console.log("dragging.js")

let Graphics = PIXI.Graphics

var renderer = PIXI.autoDetectRenderer(800, 600);
// document.body.appendChild(renderer.view);
$("#game_container").append(renderer.view);

// create the root of the scene graph
var stage = new PIXI.Container();

// create a texture from an image path
var texture = PIXI.Texture.fromImage('images/bunny.png');

for (var i = 0; i < 10; i++)
{
  createBunny(Math.floor(Math.random() * 800) , Math.floor(Math.random() * 600));
}

let hexTex = createHexagonTexture();
console.log(hexTex)

let sprite = new PIXI.Sprite(hexTex);
sprite.anchor.set(0.5, 0.5)
sprite.position.set(400, 300);
stage.addChild(sprite);
console.log(sprite);
console.log("dupa");
createDot(400, 300);

function createHexagonTexture()
{
  let hex = new Graphics();
  hex.beginFill(0x0000DD);
  hex.lineStyle(0);
  hex.moveTo(0, 0);
  hex.lineTo(50, 0);
  hex.lineTo(50, 50);
  hex.lineTo(0, 50);
  hex.lineTo(0, 0);
  hex.endFill();
  console.log(hex);
  return renderer.generateTexture(hex);
}

function createDot(x, y)
{
  let dot = new Graphics();
  dot.beginFill(0xDD0000);
  dot.lineStyle(0);
  dot.drawCircle(0, 0, 2)
  dot.endFill();

  dot.position.set(x, y)

  stage.addChild(dot)
}

function createBunny(x, y)
{
  // create our little bunny friend..
  var bunny = new PIXI.Sprite(texture);

  // enable the bunny to be interactive... this will allow it to respond to mouse and touch events
  bunny.interactive = true;

  // this button mode will mean the hand cursor appears when you roll over the bunny with your mouse
  bunny.buttonMode = true;

  // center the bunny's anchor point
  bunny.anchor.set(0.5);

  // make it a bit bigger, so it's easier to grab
  bunny.scale.set(3);

  // setup events
  bunny
    // events for drag start
    .on('mousedown', onDragStart)
    .on('touchstart', onDragStart)
    // events for drag end
    .on('mouseup', onDragEnd)
    .on('mouseupoutside', onDragEnd)
    .on('touchend', onDragEnd)
    .on('touchendoutside', onDragEnd)
    // events for drag move
    .on('mousemove', onDragMove)
    .on('touchmove', onDragMove);

  // move the sprite to its designated position
  bunny.position.x = x;
  bunny.position.y = y;

  // add it to the stage
  stage.addChild(bunny);
}

requestAnimationFrame( animate );

function animate() {

  requestAnimationFrame(animate);

  // render the stage
  renderer.render(stage);
}

function onDragStart(event)
{
  // store a reference to the data
  // the reason for this is because of multitouch
  // we want to track the movement of this particular touch
  console.log(event);
  this.data = event.data;
  this.alpha = 0.5;
  this.dragging = true;
}

function onDragEnd()
{
  this.alpha = 1;

  this.dragging = false;

  // set the interaction data to null
  this.data = null;
}

function onDragMove()
{
  if (this.dragging)
  {
    console.log(this.data);
    var newPosition = this.data.getLocalPosition(this.parent);
    this.position.x = newPosition.x;
    this.position.y = newPosition.y;
  } else {
    // console.log("not dragging")
  }
}
