import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function CarModel() {
  const group = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  const bodyMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: new THREE.Color("hsl(220, 15%, 12%)"),
    metalness: 0.9,
    roughness: 0.2,
  }), []);

  const glowMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: new THREE.Color("hsl(145, 100%, 50%)"),
    emissive: new THREE.Color("hsl(145, 100%, 50%)"),
    emissiveIntensity: 0.5,
    metalness: 0.8,
    roughness: 0.1,
  }), []);

  const glassMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: new THREE.Color("hsl(200, 30%, 20%)"),
    metalness: 1,
    roughness: 0,
    transparent: true,
    opacity: 0.4,
  }), []);

  return (
    <Float speed={2} rotationIntensity={0.1} floatIntensity={0.3}>
      <group ref={group} position={[0, -0.3, 0]}>
        {/* Car body - sleek shape */}
        <mesh material={bodyMaterial} position={[0, 0.35, 0]}>
          <boxGeometry args={[2.8, 0.5, 1.2]} />
        </mesh>
        {/* Cabin */}
        <mesh material={glassMaterial} position={[0, 0.75, 0]}>
          <boxGeometry args={[1.6, 0.4, 1.0]} />
        </mesh>
        {/* Front accent */}
        <mesh material={glowMaterial} position={[1.35, 0.35, 0]}>
          <boxGeometry args={[0.12, 0.08, 1.1]} />
        </mesh>
        {/* Rear accent */}
        <mesh material={glowMaterial} position={[-1.35, 0.35, 0]}>
          <boxGeometry args={[0.12, 0.06, 1.1]} />
        </mesh>
        {/* Wheels */}
        {[[-0.85, 0.1, 0.65], [-0.85, 0.1, -0.65], [0.85, 0.1, 0.65], [0.85, 0.1, -0.65]].map((pos, i) => (
          <mesh key={i} position={pos as [number, number, number]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.2, 0.2, 0.12, 16]} />
            <meshStandardMaterial color="hsl(0, 0%, 15%)" metalness={0.8} roughness={0.3} />
          </mesh>
        ))}
        {/* Ground glow */}
        <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[3.5, 2]} />
          <meshStandardMaterial 
            color={new THREE.Color("hsl(145, 100%, 50%)")}
            transparent 
            opacity={0.03}
          />
        </mesh>
      </group>
    </Float>
  );
}

function GridFloor() {
  const gridRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.position.z = (state.clock.elapsedTime * 0.5) % 2;
    }
  });

  const lines = useMemo(() => {
    const arr: JSX.Element[] = [];
    for (let i = -10; i <= 10; i++) {
      arr.push(
        <mesh key={`h${i}`} position={[0, -0.5, i * 2]} rotation={[0, 0, 0]}>
          <boxGeometry args={[40, 0.005, 0.005]} />
          <meshBasicMaterial color="hsl(145, 100%, 50%)" transparent opacity={0.06} />
        </mesh>
      );
      arr.push(
        <mesh key={`v${i}`} position={[i * 2, -0.5, 0]} rotation={[0, 0, 0]}>
          <boxGeometry args={[0.005, 0.005, 40]} />
          <meshBasicMaterial color="hsl(145, 100%, 50%)" transparent opacity={0.06} />
        </mesh>
      );
    }
    return arr;
  }, []);

  return <group ref={gridRef}>{lines}</group>;
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [3, 2, 5], fov: 35 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} color="hsl(0, 0%, 100%)" />
        <pointLight position={[0, 2, 0]} intensity={0.5} color="hsl(145, 100%, 50%)" />
        <pointLight position={[-3, 1, -2]} intensity={0.3} color="hsl(170, 80%, 45%)" />
        <CarModel />
        <GridFloor />
      </Canvas>
    </div>
  );
}
