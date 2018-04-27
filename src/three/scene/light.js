import { DirectionalLight, AmbientLight } from 'three'
// 平行光
const directionalLight = new DirectionalLight(0xffffff, 1);
directionalLight.position.y = 150;
directionalLight.position.x = -50;
directionalLight.position.z = 150;

// directionalLight.castShadow = true;

// 环境光
const ambientLight = new AmbientLight( 0xffffff, 0.3 );

export {
    directionalLight,
    ambientLight,
}