import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
@Component({
  selector: 'app-three-model',
  standalone: true,
  imports: [],
  templateUrl: './three-model.component.html',
  styleUrl: './three-model.component.css',
})
export class ThreeModelComponent implements OnInit {
  @ViewChild('canvasContainer', { static: true }) canvasContainer!: ElementRef;
  
  private mouse = new THREE.Vector2(); // Coordenadas del mouse
  private model!: THREE.Object3D; // Referencia al modelo

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    // Normalizar posición del mouse (rango -1 a 1)
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  }

  ngOnInit() {
    // Crear la escena
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(350, 350);
    this.canvasContainer.nativeElement.appendChild(renderer.domElement);
   
    const ambientLight = new THREE.AmbientLight(0x404040, 100);
    scene.add(ambientLight);

    // Añadir luz
    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(10, 10, 10);
    scene.add(light);

    // Cargar el modelo GLB
    const loader = new GLTFLoader();
    loader.load(
      '/assets/models/mono.glb', // Ruta de tu modelo GLB
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(5,5,5); // Ajustar el tamaño del modelo
        model.position.set(0, 0, 0); // Ajustar la posición

        // Añadir el modelo a la escena
        scene.add(model);

        // Animar el modelo (rotación)
        function animate() {
          requestAnimationFrame(animate);
          model.rotation.y += 0.008;
          renderer.render(scene, camera);
        }
        animate();
      },
      undefined,
      (error) => {
        console.error('Error al cargar el modelo:', error);
      }
    );

    // Ajustar la cámara
    camera.position.z = 5;
    
    
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Suaviza los movimientos de rotación
    controls.dampingFactor = 0.25; // Factor de suavizado
    controls.screenSpacePanning = false; // Evita que la cámara se mueva hacia los lados
  }
}

