import React from "react";
import * as THREE from "three";

type CubeProps = {
  size: number;
  color: string;
  pos: [number, number, number];
  transparent?: boolean;
};

const Cube: React.FunctionComponent<CubeProps> = ({
  size,
  color,
  pos,
  transparent = false,
}) => {
  return (
    <mesh position={pos}>
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial
        color={color}
        transparent={transparent}
        opacity={transparent ? 0.3 : 1}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

export default Cube;
