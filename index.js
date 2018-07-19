var ww = window.innerWidth;
var hh = window.innerHeight;
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, ww / hh, 0.1, 1000);
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 20;
var renderer = new THREE.WebGLRenderer();
renderer.setSize(ww, hh);
document.body.appendChild(renderer.domElement);
var box = new THREE.BoxGeometry(4, 4, 4);
var material =[
    new THREE.MeshBasicMaterial({color: 0x00ffff}),
    new THREE.MeshBasicMaterial({color: 0xffff00}),
    new THREE.MeshBasicMaterial({color: 0x0000ff}),
    new THREE.MeshBasicMaterial({color: 0xff0000}),
    new THREE.MeshBasicMaterial({color: 0xf0ff0f}),
    new THREE.MeshBasicMaterial({color: 0x0ffff0})
]
var cube = new THREE.Mesh(box, material);
scene.add(cube);
aminate();
var i=0
function aminate() {
    i++
    cube.rotation.x+=.01
    cube.rotation.y+=.01
    cube.rotation.z+=.01
    renderer.render(scene, camera)
    requestAnimationFrame(aminate)
}