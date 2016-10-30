// Brunch automatically concatenates all files in your
// watched paths. Those paths can be configured at
// config.paths.watched in "brunch-config.js".
//
// However, those files will only be executed if
// explicitly imported. The only exception are files
// in vendor, which are never wrapped in imports and
// therefore are always executed.

// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".
import "phoenix_html"

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

// import socket from "./socket"
import * as components from "./components"
import * as c from "./constants"

console.log("app.js")
console.log(c.HEX_RADIUS)

// let sprite = components.createBackgroundSprite()
let sprite = components.createHexagonSprite(2)
sprite.position.set(400, 300);
c.stage.addChild(sprite);
console.log(sprite.width);
console.log(sprite.height);
components.createDot(400, 300);

requestAnimationFrame(animate);

function animate() {

  requestAnimationFrame(animate);

  // render the stage
  c.renderer.render(c.stage);
}
