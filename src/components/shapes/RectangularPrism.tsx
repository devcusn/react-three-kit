import React from "react";
import * as THREE from "three";

type ReactangularPrismProps = {
  size: [number, number, number];
  color: string;
  pos: [number, number, number];
  transparent?: boolean;
};

const ReactangularPrism: React.FunctionComponent<ReactangularPrismProps> = ({
  size,
  color,
  pos,
  transparent = false,
}) => {
  return (
    <mesh position={pos}>
      <boxGeometry args={size} />
      <meshStandardMaterial
        color={color}
        transparent={transparent}
        opacity={transparent ? 0.3 : 1}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

export default ReactangularPrism;
