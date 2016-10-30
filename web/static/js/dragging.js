console.log("dragging.js")

// constants
let HEX_RADIUS = 30
let MARK_RADIUS = 20

let Graphics = PIXI.Graphics

var renderer = PIXI.autoDetectRenderer(800, 600);
// document.body.appendChild(renderer.view);
$("#game_container").append(renderer.view);

// create the root of the scene graph
var stage = new PIXI.Container();

let hexTex = createHexagonTexture(0x00EE00);
console.log(hexTex)

let sprite = new PIXI.Sprite(hexTex);
sprite.anchor.set(0.5, 0.5)
sprite.position.set(400, 300);
stage.addChild(sprite);
console.log(sprite.width);
console.log(sprite.height);
createDot(400, 300);

function angle(x)
{
  return (2 * x + 1) * Math.PI / 6
}

function circle_x(a)
{
  return Math.cos(a) * HEX_RADIUS;
}

function circle_y(a)
{
  return Math.sin(a) * HEX_RADIUS;
}

function createHexagonTexture(circleColor)
{
  let hex = new Graphics();
  hex.beginFill(0x555555);
  hex.lineStyle(1, 0xEEEEEE, 1.0);
  hex.moveTo(circle_x(angle(5)), circle_y(angle(5)));
  for (var i = 0; i <= 5; i++) {
    let x = circle_x(angle(i))
    let y = circle_y(angle(i))
    hex.lineTo(x, y);
  }
  hex.endFill();

  // mark
  hex.lineStyle(0)
  hex.beginFill(circleColor)
  hex.drawCircle(0, 0, MARK_RADIUS)
  hex.endFill()

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

requestAnimationFrame(animate);

function animate() {

  requestAnimationFrame(animate);

  // render the stage
  renderer.render(stage);
}
