// sizes

export let HEX_RADIUS = 30
export let MARK_RADIUS = 17

// board layout

export let xSpacing = 2 * (HEX_RADIUS * Math.sqrt(3)) / 2
export let ySpacing = HEX_RADIUS * 1.5

export let FIRST_TILE_X = 250
export let FIRST_TILE_Y = 200

export function tilePosition(row, slashColumn)
{
  let y = row * ySpacing
  let x = slashColumn * xSpacing - row * HEX_RADIUS * Math.sqrt(3) / 2
  return new PIXI.Point(FIRST_TILE_X + x, FIRST_TILE_Y + y)
}

// colors

export let symbolColors = [0x06B9FE, 0xB93EFF, 0xF70C1C, 0xFF7C06, 0xBE4CFF, 0xBE4CFF, 0x39ED35]
export let tileColor = 0x1B1B1B

export let edgeColor = 0x101010

export let backgroundColor = 0x026072

// all the globals used everywhere

export let renderer = PIXI.autoDetectRenderer(800, 600);
// document.body.appendChild(renderer.view);
$("#game_container").append(renderer.view);

// create the root of the scene graph
export let stage = new PIXI.Container();
