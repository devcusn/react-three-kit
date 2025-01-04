import { useCursor } from "@react-three/drei";
import React, { useState } from "react";
import * as THREE from "three";

type CubeProps = {
  size: number;
  color: string;
  pos: [number, number, number];
  transparent?: boolean;
  onClick?: () => void; // Optional onClick handler
};

const Cube: React.FunctionComponent<CubeProps> = ({
  size,
  color,
  pos,
  transparent = false,
  onClick,
}) => {
  const [hovered, setHovered] = useState(false);
  const [currentColor, setCurrentColor] = useState(color);

  useCursor(hovered);

  return (
    <mesh
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

export default Cube;
