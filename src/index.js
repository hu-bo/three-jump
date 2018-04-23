import { renderer } from './three';
import Game from './Game';

const root = document.getElementById('root');
root.appendChild(renderer.domElement);

const game = new Game();

game.start();

// 禁止移动端长按弹出菜单
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});
document.addEventListener('touchstart', function (e) {
    e.preventDefault();
});
window.ontouchstart = function(e) { 
    e.preventDefault(); 
};