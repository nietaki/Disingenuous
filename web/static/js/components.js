console.log("dragging.js")

import * as c from "./constants"

let Graphics = PIXI.Graphics

export let tileTextures = c.symbolColors.map(function(color) {return createHexagonTexture(color);})
export let backgroundTexture = createHexagonTexture(c.backgroundColor, c.backgroundColor, 0x000000)

export function angle(x)
{
  return (2 * x + 1) * Math.PI / 6
}

export function circle_x(a)
{
  return Math.cos(a) * c.HEX_RADIUS;
}

export function circle_y(a)
{
  return Math.sin(a) * c.HEX_RADIUS;
}

export function createHexagonTexture(markColor, tileColor = c.tileColor, edgeColor = c.edgeColor, )
{
  let hex = new Graphics();
  hex.beginFill(tileColor);
  hex.lineStyle(1, edgeColor, 1.0);
  hex.moveTo(circle_x(angle(5)), circle_y(angle(5)));
  for (var i = 0; i <= 5; i++) {
    let x = circle_x(angle(i))
    let y = circle_y(angle(i))
    hex.lineTo(x, y);
  }
  hex.endFill();

  // mark
  hex.lineStyle(0)
  hex.beginFill(markColor)
  hex.drawCircle(0, 0, c.MARK_RADIUS)
  hex.endFill()

  return c.renderer.generateTexture(hex);
}

export function createHexagonSprite(markNumber)
{
  let sprite = new PIXI.Sprite(tileTextures[markNumber]);
  sprite.anchor.set(0.5, 0.5)
  sprite.position.set(400, 300); //that's not necessary most of the time.
  c.stage.addChild(sprite)
  return sprite
}

export function createBackgroundSprite()
{
  let sprite = new PIXI.Sprite(backgroundTexture);
  sprite.anchor.set(0.5, 0.5)
  c.stage.addChild(sprite)
  return sprite
}


export function createDot(x, y)
{
  let dot = new Graphics();
  dot.beginFill(0xDD0000);
  dot.lineStyle(0);
  dot.drawCircle(0, 0, 2)
  dot.endFill();

  dot.position.set(x, y)

  c.stage.addChild(dot)
}
