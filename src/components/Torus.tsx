import React from "react";
import { MeshProps } from "@react-three/fiber";

interface TorusProps extends MeshProps {
  radius?: number;
  tube?: number;
  radialSegments?: number;
  tubularSegments?: number;
  color?: string;
}

const Torus: React.FC<TorusProps> = ({
  radius = 1,
  tube = 0.5,
  radialSegments = 16,
  tubularSegments = 60,
  color = "orange",
  position = [0, 0, 0],
  rotation = [Math.PI / 2, 0, 0],
  ...rest
}) => {
  return (
    <mesh position={position} rotation={rotation} {...rest}>
      <torusGeometry args={[radius, tube, radialSegments, tubularSegments]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default Torus;
