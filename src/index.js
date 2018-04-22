import { renderer } from './three';
import Game from './Game';

const root = document.getElementById('root');
root.appendChild(renderer.domElement);

const game = new Game();

game.start();

// 禁止移动端长按弹出菜单
document.documentElement.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});
document.documentElement.addEventListener('touchstart', function (e) {
    e.preventDefault();
});