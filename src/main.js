import * as THREE from "three"
import { ARButton } from "three/examples/jsm/Addons.js"
import { GLTFLoader } from "three/examples/jsm/Addons.js"

export default function AR(){
    document.addEventListener("DOMContentLoaded", () => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const light = new THREE.HemisphereLight(0xffffff,0xbbbbff,1);

        //ringGeometry
        const ring = new THREE.RingGeometry(0.15,0.2,32)
        ring.rotateX(Math.PI/2)

        const material = new THREE.MeshStandardMaterial({color:0x00ff00})
        const ringMesh = new THREE.Mesh(ring,material)
        ringMesh.matrixAutoUpdate = false
        ringMesh.visible = false
        scene.add(ringMesh)
        camera.position.z = 5

        //Renderer
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        })
        renderer.setPixelRatio(window.devicePixelRatio)
        renderer.setSize(window.innerWidth,window.innerHeight)
        renderer.xr.enabled = true
        
    })
}
