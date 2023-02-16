import ReactDOM from "react-dom/client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Box(props) {
  const ref = useRef();
  useFrame((state, delta) => (ref.current.rotation.x += delta));
  return (
    <mesh {...props} ref={ref}>
      <boxGeometry args={[1, 0.3, 1]} />
      <meshStandardMaterial color={"blue"} />
    </mesh>
  );
}

function App() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[2, 10, 10]} />
      <Box position={[-1, 0, 2]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);