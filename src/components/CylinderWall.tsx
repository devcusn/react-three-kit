import * as THREE from "three";
type CylinderWallProps = {
  outerRadius?: number;
  innerRadius?: number;
  height?: number;
  pos: [number, number, number];
  color: string;
};

const CylinderWall: React.FunctionComponent<CylinderWallProps> = ({
  outerRadius = 0.7,
  innerRadius = 0.9,
  height = 3,
  pos = [0, 0, 0],
  color = "red",
}) => {
  return (
    <group position={pos}>
      {/* Outer Cylinder */}
      <mesh>
        <cylinderGeometry
          args={[outerRadius, outerRadius, height, 32, 1, true]}
        />
        <meshStandardMaterial
          color={color}
          side={THREE.DoubleSide}
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* Inner Cylinder */}
      <mesh>
        <cylinderGeometry
          args={[innerRadius, innerRadius, height, 32, 1, true]}
        />
        <meshStandardMaterial
          color={color}
          side={THREE.DoubleSide}
          transparent
          opacity={0.4}
        />
      </mesh>
      {/* Top Cap */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, height / 2, 0]}>
        <ringGeometry args={[innerRadius, outerRadius, 32]} />
        <meshStandardMaterial color={color} side={THREE.DoubleSide} />
      </mesh>
      {/* Bottom Cap */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -height / 2, 0]}>
        <ringGeometry args={[innerRadius, outerRadius, 32]} />
        <meshStandardMaterial color={color} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};

export default CylinderWall;
