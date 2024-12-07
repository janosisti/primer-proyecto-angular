import { Component, OnInit, ViewChild, ElementRef, } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
@Component({
  selector: 'app-three-model',
  standalone: true,
  imports: [],
  templateUrl: './three-model.component.html',
  styleUrl: './three-model.component.css',
})
export class ThreeModelComponent implements OnInit {
  @ViewChild('canvasContainer', { static: true }) canvasContainer!: ElementRef;
  

  
  ngOnInit() {
    // Crear la escena
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      90,
      Math.min(window.innerWidth, 900) / window.innerHeight,
      0.1,
      100
    );
    
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(350, 350);
    this.canvasContainer.nativeElement.appendChild(renderer.domElement);
   
    const ambientLight = new THREE.AmbientLight(0x404040, 100);
    scene.add(ambientLight);

    // Cargar el modelo GLB
    const loader = new GLTFLoader();
    loader.load(
      '/assets/models/mono.glb', // Ruta de tu modelo GLB
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(4,4,4); 
        model.position.set(0, 0, 0); 
        model.rotation.set(0,-Math.PI/2,0);

        // Añadir el modelo a la escena
        scene.add(model);

        // Animar el modelo (rotación)
        function animate() {
          requestAnimationFrame(animate);
          model.rotation.y += 0.001;
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
    camera.position.z = 3;
    
    
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Suaviza los movimientos de rotación
    controls.dampingFactor = 0.25; // Factor de suavizado
    controls.screenSpacePanning = false; // Evita que la cámara se mueva hacia los lados


    
  }
  
}

