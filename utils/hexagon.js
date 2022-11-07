import * as THREE from 'three'
import { HEX_H, SCALE } from './config.js';

const SIDES = 6
const HEIGHT = 100

const meshMaterial = new THREE.MeshPhongMaterial ({
    color: 0xffffff,
    flatShading: true,
    opacity: 0.3,
    side: THREE.DoubleSide,
    transparent: true,
    emissive: 0x0000FF,
    emissiveIntensity: 5.0,
})

export function CreateHexagon(scene){
    return _CreateHexagon(HEX_H * SCALE)
}

function _CreateHexagon(h){

    const root = new THREE.Object3D()

    const sideLength = h * Math.tan(30 * Math.PI / 180)
    const radius = h / 2

    for(let i = 0; i < SIDES; i++){

        const side = new THREE.PlaneGeometry(sideLength, HEIGHT, 2, 2);
        const theta = i * (2 * Math.PI / SIDES)

        side.rotateY(theta)

        const hexMesh = new THREE.Mesh(side, meshMaterial)

        hexMesh.position.z += radius * Math.cos(theta)
        hexMesh.position.x += radius * Math.sin(theta)

        root.add(hexMesh)

    }

    root.rotation.y += 30 * Math.PI / 180
      
    return root

}