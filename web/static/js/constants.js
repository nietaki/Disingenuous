export let HEX_RADIUS = 30
export let MARK_RADIUS = 18

export let symbolColors = [0x06B9FE, 0xB93EFF, 0xF70C1C, 0xFF7C06, 0xBE4CFF, 0xBE4CFF, 0x39ED35]
export let tileColor = 0x1B1B1B

export let edgeColor = 0x5AB6CD

export let backgroundColor = 0x026072

export let renderer = PIXI.autoDetectRenderer(800, 600);
// document.body.appendChild(renderer.view);
$("#game_container").append(renderer.view);

// create the root of the scene graph
export let stage = new PIXI.Container();
