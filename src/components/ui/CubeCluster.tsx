import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import * as THREE from "three";

function Cube({ position }: { position: [number, number, number] }) {
  return (
    <mesh position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshPhysicalMaterial
        color="#4db6ff"
        metalness={0.3}
        roughness={0}
        transmission={0.9}
        thickness={0.6}
        clearcoat={1}
        clearcoatRoughness={0.1}
      />
    </mesh>
  );
}

const CubeCluster = () => {
  const cubes: [number, number, number][] = [];

  // Generate clustered cube positions
  for (let x = -2; x <= 2; x++) {
    for (let y = -2; y <= 2; y++) {
      for (let z = -2; z <= 2; z++) {
        if (Math.random() > 0.7) cubes.push([x, y, z]);
      }
    }
  }

  return (
    <Canvas camera={{ position: [6, 6, 6], fov: 45 }}>
      <ambientLight intensity={0.6} />
      <directionalLight intensity={2} position={[5, 5, 5]} />
      <Suspense fallback={null}>
        {cubes.map((pos, i) => (
          <Cube key={i} position={pos} />
        ))}
        <Environment preset="sunset" />
      </Suspense>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
    </Canvas>
  );
};

export default CubeCluster;
