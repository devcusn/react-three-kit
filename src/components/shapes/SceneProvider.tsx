import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const ThreeScene: React.FunctionComponent<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Canvas camera={{ position: [30, 20, 20] }}>
      {children}
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      {/* Helpers */}
      <axesHelper args={[100]} />
      <gridHelper scale={10} />
      {/* Controls */}
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeScene;
