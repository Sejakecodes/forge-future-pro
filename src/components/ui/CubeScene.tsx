// src/components/CubeScene.tsx
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface CubeSceneProps {
  color?: string;
  lightColor?: string;
  bgColor?: string;
}

const RotatingCube: React.FC<{ color: string }> = ({ color }) => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} metalness={0.5} roughness={0.3} />
    </mesh>
  );
};

const CubeScene: React.FC<CubeSceneProps> = ({
  color = "#4f46e5",
  lightColor = "#ffffff",
  bgColor = "#0f0f0f",
}) => {
  return (
    <div className="w-[200px] h-[200px] rounded-lg overflow-hidden shadow-lg">
      <Canvas
        style={{ background: bgColor }}
        camera={{ position: [2.5, 2, 3] }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[2, 3, 4]} intensity={1.5} color={lightColor} />
        <pointLight position={[-2, -2, -2]} intensity={0.5} color={lightColor} />
        <RotatingCube color={color} />
      </Canvas>
    </div>
  );
};

export default CubeScene;
