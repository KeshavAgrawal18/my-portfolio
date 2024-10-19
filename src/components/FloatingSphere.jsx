import React from "react";
import { Canvas } from "@react-three/fiber";

// Floating Sphere: Enhanced 3D visual for the hero section
const FloatingSphere = () => (
    <Canvas style={{ height: "350px", width: "100%" }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <mesh rotation={[30, 10, 0]}>
            <sphereGeometry args={[2, 64, 64]} />
            <meshStandardMaterial color="#007bff" wireframe />
        </mesh>
    </Canvas>
);
export default FloatingSphere;
