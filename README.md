# three-jump
基于three.js的跳一跳</br>
<a href="https://hb-bobo.github.io/three-jump/"> 在线试一试 </a>

# three 必要
scene, camera and renderer,
```javascript
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
```

# 添加一个3D对象的必要步骤

```javascript
var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );
```

# 当看不到物体时，尝试设置相机位置(step-1)

```javascript
camera.position.set(0, 0, 25);
camera.position.z = 25;
```

# 利用editor调整相机位置

```javascript
camera.position.set(-7.97, 16.97, 17.59);
lookAt
```

# 利用插件调整相机(step-2)
```javascript
import OrbitControls from 'three-orbitcontrols';
var controls = new OrbitControls(camera, renderer.domElement);
```


# loader
```javascript
// instantiate a loader
var loader = new THREE.JSONLoader();

// load a resource
loader.load(
	// resource URL
	'models/animated/monster/monster.js',

	// onLoad callback
	function ( geometry, materials ) {
		var material = materials[ 0 ];
		var object = new THREE.Mesh( geometry, material );
		scene.add( object );
	},

	// onProgress callback
	function ( xhr ) {
		console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
	},

	// onError callback
	function( err ) {
		console.log( 'An error happened' );
	}
);

loader.parse  ---> .js

ObjectLoader.prototype.parse  ---> .json
```

# 灯光

```javascript
DirectionalLigh + AmbientLight
```



# 阴影(都必须设置阴影才有效)
```javascript
renderer.shadowMap.enabled = true;
Light.castShadow = true;
cube.castShadow = true; // Mesh
```


# 游戏逻辑(step-3)
 1. 缩小身体
 2. 跳跃， 方块创建方向 = 跳跃方向， 跳跃动画
 3. 检测是否跳到方块上
 4. 倒地方向
 5. 移动相机，移动灯光（未做）
 6. 删除不可见的方块
![计算落地状态](https://github.com/hb-bobo/three-jump/blob/master/%E8%AE%A1%E7%AE%97%E8%90%BD%E5%9C%B0%E7%8A%B6%E6%80%81.png?raw=true)















