type CyclinderProps = {
  radius: number;
  length: number;
  color: string;
  pos: [number, number, number];
  transparent?: boolean;
};

const Cylinder: React.FC<CyclinderProps> = ({
  radius,
  length,
  color,
  pos,
  transparent = false,
}) => {
  return (
    <mesh position={pos}>
      <cylinderGeometry args={[radius, radius, length, 32]} />
      <meshStandardMaterial
        color={color}
        transparent={transparent}
        opacity={transparent ? 0.3 : 1}
      />
    </mesh>
  );
};

export default Cylinder;
