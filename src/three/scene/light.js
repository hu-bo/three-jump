import { PointLight, DirectionalLight, AmbientLight } from 'three'
// 平行光
const directionalLight = new PointLight(0xffffff, 1);
directionalLight.position.y = 150;
directionalLight.position.x = -50;
directionalLight.position.z = 150;

directionalLight.castShadow = true;
// directionalLight.shadowCameraNear = 2;
// directionalLight.shadowCameraFar = 10;
// directionalLight.shadowCameraFov = 30;
directionalLight.shadowCameraVisible = true;

directionalLight.shadowMapWidth = 2024;
directionalLight.shadowMapHeight = 2024;
// directionalLight.shadowDarkness = 0.3;
// 环境光
const ambientLight = new AmbientLight( 0xffffff, 0.3 );

export {
    directionalLight,
    ambientLight,
}