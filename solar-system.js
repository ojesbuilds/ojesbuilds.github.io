let scene, camera, renderer;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / 400, 0.1, 1000);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, 400);
    document.getElementById('solar-system-canvas').appendChild(renderer.domElement);

    // Create the Sun
    const sunGeometry = new THREE.SphereGeometry(5, 32, 32);
    const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    scene.add(sun);

    // Create planets
    const planetData = [
        { name: "Mercury", color: 0xaaaaaa, distance: 10, size: 0.5 },
        { name: "Venus", color: 0xffa500, distance: 15, size: 1 },
        // Add other planets similarly
    ];

    planetData.forEach((planet, index) => {
        const planetGeometry = new THREE.SphereGeometry(planet.size, 32, 32);
        const planetMaterial = new THREE.MeshBasicMaterial({ color: planet.color });
        const planetMesh = new THREE.Mesh(planetGeometry, planetMaterial);
        planetMesh.position.x = planet.distance;
        scene.add(planetMesh);
    });

    camera.position.z = 30;
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

init();
animate();
