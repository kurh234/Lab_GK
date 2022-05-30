let canvas = document.getElementById("glcanvas");

const scene = new THREE.Scene({color: 0xfff});

const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 1, 1000);

const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

var light;  // Światło padające z kierunku kamery; porusza się wraz z aparatem.
light = new THREE.DirectionalLight();
light.position.set(-10, -2, 1);
camera.add(light);
scene.add(camera);

const material = new THREE.MeshPhongMaterial(
    {
        color: 0x000000, 
    });

const baseGeometry = new THREE.CylinderGeometry(1, 1, 0.2, 6);

const base = new THREE.Mesh(baseGeometry, material);

let group = new THREE.Group();
const Lacznik = new THREE.CylinderGeometry(0.5, 0.5, 0.1, 100);
const Lacznik_def = new THREE.Mesh(Lacznik, material);
const czesc_1 = new THREE.CylinderGeometry(0.5, 0.8, 0.8, 100);
const czesc1 = new THREE.Mesh(czesc_1, material);   
const czesc_2 = new THREE.CylinderGeometry(0.5, 0.5, 0.3, 100);
const czesc2 = new THREE.Mesh(czesc_2, material); 
const czesc_3 = new THREE.CylinderGeometry(0.6, 0.5, 0.7, 100);
const czesc3 = new THREE.Mesh(czesc_3, material); 
const czesc_4 = new THREE.CylinderGeometry(0.65, 0.65, 0.1, 100);
const czesc4 = new THREE.Mesh(czesc_4, material); 
const czesc_5 = new THREE.CylinderGeometry(0.7, 0.7, 0.2, 100);
const czesc5 = new THREE.Mesh(czesc_5, material); 

    
    base.position.y = 0.2;
    Lacznik_def.position.y=0.3;
    czesc1.position.y=0.75;
    czesc2.position.y=1.29;
    czesc3.position.y=1.79;
    czesc4.position.y=2.1;
    czesc5.position.y=2.25;
   

    group.add(base);
    group.add(Lacznik_def);
    group.add(czesc1);
    group.add(czesc2);
    group.add(czesc3);
    group.add(czesc4);
    group.add(czesc5);
  


    group.position.set(0, -3.8, 0);
    //group.scale.set(3, 2.5, 1);

    scene.add(group);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

camera.position.z = 5;

animate();
