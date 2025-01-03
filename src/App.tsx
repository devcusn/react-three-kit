import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import classes from "./style.module.css";
import Cylinder from "./components/Cylinder";
import CylinderWall from "./components/CylinderWall";
import Cube from "./components/Cube";
import Torus from "./components/Torus";
import TriangularPrisma from "./components/TriangularPrisma";
import TrapezoidalPrisma from "./components/Trapezodial";

const App = () => {
  return (
    <div className={classes.app_container}>
      <Canvas camera={{ position: [30, 20, 20] }}>
        {/* Shapes */}
        <Cylinder radius={2} length={2} color={"orange"} pos={[0, 0, 0]} />
        <CylinderWall pos={[0, 0, 5]} color={"red"} />
        <Cube size={2} color={"blue"} pos={[0, 0, 10]} />
        <Torus position={[0, 0, 15]} />
        <TriangularPrisma
          pos={[0, 0, 20]}
          geo={{
            width: 4,
            height: 4,
            depth: 4,
          }}
          color={"orange"}
        />
        <TrapezoidalPrisma
          pos={[0, 0, 25]}
          geo={{
            topWidth: 4,
            bottomWidth: 12,
            height: 5,
            depth: 3,
          }}
          color={""}
        />
        {/* Lights */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        {/* Helpers */}
        <axesHelper args={[100]} />
        <gridHelper scale={10} />
        {/* Controls */}
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default App;
