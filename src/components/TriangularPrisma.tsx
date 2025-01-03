import React, { useMemo } from "react";

interface TriangularPrismProps {
  pos: [number, number, number];
  geo: {
    width: number;
    height: number;
    depth: number;
  };
  color: string;
}

const TriangularPrisma: React.FC<TriangularPrismProps> = ({
  pos,
  geo,
  color,
}) => {
  const { width, height, depth } = geo;

  const vertices = useMemo(() => {
    const halfWidth = width / 2;
    const halfDepth = depth / 2;

    return [
      // Front triangle (bottom-left, bottom-right, top)
      [-halfWidth, 0, -halfDepth], // Vertex 0
      [halfWidth, 0, -halfDepth], // Vertex 1
      [0, height, -halfDepth], // Vertex 2

      // Back triangle (bottom-left, bottom-right, top)
      [-halfWidth, 0, halfDepth], // Vertex 3
      [halfWidth, 0, halfDepth], // Vertex 4
      [0, height, halfDepth], // Vertex 5
    ];
  }, [width, height, depth]);

  // Define faces for the triangular prism
  const indices = [
    // Front face
    0, 1, 2,

    // Back face
    3, 5, 4,

    // Bottom face
    0, 3, 1, 1, 3, 4,

    // Left face
    0, 2, 3, 3, 2, 5,

    // Right face
    1, 4, 2, 2, 4, 5,
  ];

  return (
    <mesh position={pos} rotation={[0.1, 0, 0.9]}>
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
      <meshStandardMaterial color={color} opacity={0.8} transparent />
    </mesh>
  );
};

export default TriangularPrisma;
