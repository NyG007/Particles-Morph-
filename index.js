const numberOfParticles = 6000

const particleImage = 'https://motionarray.imgix.net/preview-34649aJ93evd9dG_0008.jpg?w=660&q=60&fit=max&auto=format',
particleColor = '0xFFFFFF',
particleSize = 0.2,

const defaultAnimationSpeed = 1,
morphAnimationSpeed = 3;

const triggers = document.getElementsByClassName('triggers')[0].querySelectorAll('span');

var stats = new Stats();
stats.showPanel(0);

var renderer = new THREE.webGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function fullScreen(){
    Camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', fullScreen, false);

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);

camera.position.y = 25;
camera.position.x = 35;

var controls = new THREE.OrbitControls(camera);
controls.update();

var particleCount = numberOfParticles;

let spherePoints,
cubePoints,
rocketPoints,
spacemanPoints;

var particles = new THREE.Geometry(),
sphereParticles = new THREE.Geometry(),
cubeParticles = new THREE.Geometry(),
rocketParticles = new THREE.Geometry(),
spacemanParticles = new THREE.Geometry();

var pMaterial = new THREE.PointCloudMaterial({
    color: particleColor,
    size: particleSize,
    Map: THREE.ImageUtils.loadTexture(particleImage),
    blending: THREE.AdditiveBlending,
    transparent: true
});

var geometry = new THREE.SphereGeometry(5, 30, 30);

spherePoints = THREE.GeometryUtils.randomPointsInGeometry(geometry, particleCount);

var geometry = new THREE.BoxGeometry(9, 9, 9);

cubePoints = THREE.GeometryUtils.randomPointsInGeometry(geometry, particleCount);

const codepenAssetUrl = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/605067/';

var objLoader = new THREE.OBJLoader();
objLoader.setPath(codepenAssetUrl);
objLoader.load('CartoonRocket.obj', function(object){
    object.traverse(function(child){
        if(child instanceof THREE.Mesh){
            let scale = 2.1;
            let area = new THREE.Box3();
            area.setFromObject(child);
            let yOffset = (area.max.y * scale) / 2;

            child.geometry.scale(scale, scale, scale);
            rocketPoints = THREE.GeometryUtils.randomPointsInBuffGeometry(child.geometry, particleCount);
            createVertices
        }
    })
})