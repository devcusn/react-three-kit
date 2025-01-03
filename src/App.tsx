import Cylinder from "./components/shapes/Cylinder";
import CylinderWall from "./components/shapes/CylinderWall";
import Cube from "./components/shapes/Cube";
import Torus from "./components/shapes/Torus";
import TriangularPrism from "./components/shapes/TriangularPrism";
import TrapezoidalPrism from "./components/shapes/TrapezodialPrism";
import ThreeScene from "./components/shapes/SceneProvider";
import classes from "./style.module.css";
import Home3D from "./components/Home";

const App = () => {
  return (
    <div className={classes.app_container}>
      <ThreeScene>
        <Cylinder radius={2} length={2} color={"orange"} pos={[0, 0, 0]} />
        <CylinderWall pos={[0, 0, 5]} color={"red"} />
        <Cube size={2} color={"blue"} pos={[0, 0, 10]} />
        <Torus position={[0, 0, 15]} />
        <TriangularPrism
          pos={[0, 0, 20]}
          geo={{
            width: 4,
            height: 4,
            depth: 4,
          }}
          color={"orange"}
        />
        <TrapezoidalPrism
          pos={[0, 0, 25]}
          geo={{
            topWidth: 4,
            bottomWidth: 12,
            height: 5,
            depth: 3,
          }}
          color={""}
        />
        <Home3D />
      </ThreeScene>
    </div>
  );
};

export default App;
