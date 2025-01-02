import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import classes from "./style.module.css";
import Cylinder from "./components/Cylinder";
import CylinderWall from "./components/CylinderWall";

const App = () => {
  return (
    <div className={classes.app_container}>
      <Canvas camera={{ position: [30, 20, 20] }}>
        <Cylinder radius={2} length={2} color={"red"} pos={[0, 0, 0]} />
        <CylinderWall pos={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <axesHelper args={[100]} />
        <gridHelper scale={10} />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default App;
