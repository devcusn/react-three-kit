import { useCursor } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useState, useRef } from "react";
import * as THREE from "three";

type CubeProps = {
  size: number;
  color: string;
  pos: [number, number, number];
  transparent?: boolean;
  onClick?: () => void; // Optional onClick handler
};

const AnimationCube: React.FunctionComponent<CubeProps> = ({
  size,
  color,
  pos,
  transparent = false,
  onClick,
}) => {
  const [hovered, setHovered] = useState(false);
  const [currentColor, setCurrentColor] = useState(color);
  const meshRef = useRef<THREE.Mesh>(null);

  useCursor(hovered);

  // Rotate the cube in the animation loop
  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5; // Rotate on X-axis
      meshRef.current.rotation.y += delta * 0.5; // Rotate on Y-axis
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={pos}
      onPointerOver={() => {
        setHovered(true);
        setCurrentColor("orange");
      }}
      onPointerOut={() => {
        setHovered(false);
        setCurrentColor(color);
      }}
      onClick={onClick}
    >
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial
        color={currentColor}
        transparent={transparent}
        opacity={transparent ? 0.3 : 1}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

export default AnimationCube;
