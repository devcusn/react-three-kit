import React from "react";
import { useMemo } from "react";
import * as THREE from "three";

interface TrapezoidalPrismProps {
  pos: [number, number, number];
  geo: {
    topWidth: number;
    bottomWidth: number;
    height: number;
    depth: number;
  };
  color: string;
}

const TrapezoidalPrisma: React.FC<TrapezoidalPrismProps> = ({
  pos,
  geo,
  color,
}) => {
  const { topWidth, bottomWidth, height, depth } = geo;

  // Calculate vertices for the trapezoidal prism
  const vertices = useMemo(() => {
    const halfTop = topWidth / 2;
    const halfBottom = bottomWidth / 2;
    const halfDepth = depth / 2;

    return [
      // Bottom face
      [-halfBottom, -height / 2, -halfDepth],
      [halfBottom, -height / 2, -halfDepth],
      [halfBottom, -height / 2, halfDepth],
      [-halfBottom, -height / 2, halfDepth],

      // Top face
      [-halfTop, height / 2, -halfDepth],
      [halfTop, height / 2, -halfDepth],
      [halfTop, height / 2, halfDepth],
      [-halfTop, height / 2, halfDepth],
    ];
  }, [topWidth, bottomWidth, height, depth]);

  // Define faces for the trapezoidal prism
  const indices = [
    // Bottom face
    0, 1, 2, 0, 2, 3,

    // Top face
    4, 5, 6, 4, 6, 7,

    // Front face
    0, 1, 5, 0, 5, 4,

    // Back face
    3, 2, 6, 3, 6, 7,

    // Left face
    0, 3, 7, 0, 7, 4,

    // Right face
    1, 2, 6, 1, 6, 5,
  ];

  return (
    <mesh position={pos}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={new Float32Array(vertices.flat())}
          count={vertices.length}
          itemSize={3}
        />
        <bufferAttribute
          attach="index"
          array={new Uint16Array(indices)}
          count={indices.length}
          itemSize={1}
        />
      </bufferGeometry>
      <meshStandardMaterial color={color} side={THREE.DoubleSide} />
    </mesh>
  );
};

export default TrapezoidalPrisma;
