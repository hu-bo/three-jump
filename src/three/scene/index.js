import { Scene } from 'three';
import { directionalLight, ambientLight } from './light';
import floor from './floor';

var scene = new Scene();

scene.add(directionalLight);
scene.add(floor);
scene.add(ambientLight);


// scene.add(jumper);
export default scene
