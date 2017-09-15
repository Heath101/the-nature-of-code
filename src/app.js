require('./styles/base/layout.scss')

// import Playground from './js/Playground.js'
import Walker from './js/Walker.js'

const canvas = document.getElementById('my-canvas');
const context = canvas.getContext('2d');

const walker = new Walker(context)

window.requestAnimFrame = (function(callback) {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
  function(callback) {
    window.setTimeout(callback, 1000 / 60);
  };
})();

function run() {

  walker.render()

  requestAnimFrame(function() {
    run();
  });
}


// wait one second before starting animation
setTimeout(function() {
  run();
}, 1000);