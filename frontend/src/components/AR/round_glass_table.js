import * as THREE from "three"
import { ARButton } from "three/examples/jsm/webxr/ARButton"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

// Create a container for the HTML overlay
const overlayContainer = document.createElement('div');
overlayContainer.id = 'ar-html-overlay';
document.body.appendChild(overlayContainer);

document.addEventListener("DOMContentLoaded", () => {
    const initialize = async () => {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.xr.enabled = true;
      document.body.appendChild(renderer.domElement);
      
      // Add lighting
      const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
      scene.add(light);
      
      // Create placement indicator
      const ringGeometry = new THREE.RingGeometry(0.15, 0.2, 32).rotateX(-Math.PI / 2);
      const ringMaterial = new THREE.MeshBasicMaterial();
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.matrixAutoUpdate = false;
      ring.visible = false;
      scene.add(ring);
      
      // Setup controller
      const controller = renderer.xr.getController(0);
      scene.add(controller);
      
      // Load the 3D model
      const loader = new GLTFLoader();
      
      const loadModel = (position) => {
        loader.load(
          './models/round_glass_table.glb',
          (gltf) => {
            const model = gltf.scene;
            model.position.copy(position);
            model.scale.set(1, 1, 1);
            scene.add(model);
          },
          undefined,
          (error) => console.error('Error loading model:', error)
        );
      };
      
      // Handle model placement
      controller.addEventListener('select', () => {
        if (ring.visible) {
          const position = new THREE.Vector3();
          position.setFromMatrixPosition(ring.matrix);
          loadModel(position);
        }
      });
      
      // AR session setup
      renderer.xr.addEventListener('sessionstart', async () => {
        const session = renderer.xr.getSession();
        const viewerReferenceSpace = await session.requestReferenceSpace('viewer');
        const hitTestSource = await session.requestHitTestSource({
          space: viewerReferenceSpace,
        });
        
        // Animation loop
        renderer.setAnimationLoop((timestamp, frame) => {
          if (!frame) return;
          
          const hitTestResults = frame.getHitTestResults(hitTestSource);
          
          if (hitTestResults.length) {
            const hit = hitTestResults[0];
            const referenceSpace = renderer.xr.getReferenceSpace();
            const hitPose = hit.getPose(referenceSpace);
            
            ring.visible = true;
            ring.matrix.fromArray(hitPose.transform.matrix);
          } else {
            ring.visible = false;
          }
          
          renderer.render(scene, camera);
        });
      });
      
      // Add AR button
      const arButton = ARButton.createButton(renderer, {
        requiredFeatures: ['hit-test'],
        optionalFeatures: ['dom-overlay'],
        domOverlay: { root: document.body },
      });
      document.body.appendChild(arButton);
      
      // Handle session end
      renderer.xr.addEventListener('sessionend', () => {
        console.log('AR session ended');
      });
    };
    
    // Load HTML content
    fetch('../HTMLs/round_glass_table.html')
      .then((response) => response.text())
      .then((html) => {
        overlayContainer.innerHTML = html;
      })
      .catch((error) => console.error('Error loading HTML:', error));
    
    initialize();
  });  

