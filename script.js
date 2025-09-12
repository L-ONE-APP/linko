window.onload = function() {
    // Инициализация сцены, камеры и рендерера
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    // Настройка рендерера
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Создание 3D-объекта (геометрия и материал)
    const geometry = new THREE.TorusGeometry(2, 0.8, 16, 100);
    const material = new THREE.MeshStandardMaterial({
        color: 0x6a0dad, // Фиолетовый цвет
        roughness: 0.5,
        metalness: 0.8
    });
    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus);

    // Добавление света
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffc94b, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0x0a192f, 1);
    pointLight2.position.set(-5, -5, -5);
    scene.add(pointLight2);

    // Позиционирование камеры
    camera.position.z = 5;

    // Анимационный цикл
    function animate() {
        requestAnimationFrame(animate);

        // Вращение объекта
        torus.rotation.x += 0.005;
        torus.rotation.y += 0.005;

        renderer.render(scene, camera);
    }

    // Обработка изменения размера окна
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Запускаем анимацию
    animate();
};
