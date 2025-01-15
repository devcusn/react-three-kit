import Cube from "./shapes/Cube";
import ReactangularPrism from "./shapes/RectangularPrism";
import TriangularPrisma from "./shapes/TriangularPrism";

const Home3D = () => {
  const arr = [];
  for (let x = 0; x < 100; x++) {
    for (let y = 0; y < 100; y++) {
      for (let z = 0; z < 100; z++) {
        arr.push([x, y, z]);
      }
    }
  }

  return (
    <group position={[0, 0, -20]}>
      <Cube size={10} color="sandybrown" pos={[0, 5, 0]} />
      <TriangularPrisma
        pos={[0, 10.1, 0]}
        geo={{
          width: 12,
          height: 6,
          depth: 10,
        }}
        color="maroon"
      />
      <ReactangularPrism size={[2, 4, 1]} color="brown" pos={[0, 2, 5.5]} />
      <ReactangularPrism size={[2, 2, 1]} color="skyblue" pos={[-3, 7, 5.5]} />
      <ReactangularPrism size={[2, 2, 1]} color="skyblue" pos={[3, 7, 5.5]} />
    </group>
  );
};

export default Home3D;
