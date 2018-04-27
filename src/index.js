import { renderer } from './three';
import Game from './Game';

const root = document.getElementById('root');
const restart = document.documentElement.querySelector('.confirm button');
const result = document.documentElement.querySelector('.result-wrap');
root.appendChild(renderer.domElement);

const game = new Game();

game.start();

game.onFail = function () {
    result.style.display = 'block';
    result.querySelector('.grade').innerHTML = `得分${game.grade}`
}

restart.onclick = function () {
    game.restart();
    result.style.display = 'none';
}


// 禁止移动端长按弹出菜单
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});
// document.addEventListener('touchstart', function (e) {
//     e.preventDefault();
// });
