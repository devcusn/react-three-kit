import { useEffect, useRef } from "react";
import {
  BufferGeometry,
  InstancedMesh,
  Material,
  NormalBufferAttributes,
  Object3D,
} from "three";

const InstancedBoxes = () => {
  const meshRef = useRef<InstancedMesh>(null);

  const tempObject = new Object3D();

  useEffect(() => {
    if (meshRef == null) return;
    if (meshRef.current == null) return;

    let i = 0;
    for (let x = 0; x < 10; x++)
      for (let y = 0; y < 10; y++)
        for (let z = 0; z < 10; z++) {
          const id = i++;
          tempObject.position.set(x, y, z);
          tempObject.scale.set(0.3, 0.3, 0.3);
          tempObject.updateMatrix();
          meshRef.current?.setMatrixAt(id, tempObject.matrix);
        }
    meshRef.current.instanceMatrix.needsUpdate = true;
  }, []);

  return (
    <instancedMesh
      ref={meshRef}
      args={[
        null as unknown as BufferGeometry<NormalBufferAttributes>,
        null as unknown as Material,
        1000,
      ]}
      position={[20, 0, 20]}
    >
      <boxGeometry args={[1, 1, 1]}></boxGeometry>
      <meshBasicMaterial />
    </instancedMesh>
  );
};
export default InstancedBoxes;
