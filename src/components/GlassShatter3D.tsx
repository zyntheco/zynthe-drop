import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";

const ShatteringGlass = ({ shatter }: { shatter: boolean }) => {
  const glassRef = useRef<THREE.Mesh>(null);
  const [fragments, setFragments] = useState<Array<{ position: THREE.Vector3; rotation: THREE.Euler; velocity: THREE.Vector3 }>>([]);

  useEffect(() => {
    if (shatter && !fragments.length) {
      const newFragments = [];
      for (let i = 0; i < 50; i++) {
        const x = (Math.random() - 0.5) * 8;
        const y = (Math.random() - 0.5) * 8;
        newFragments.push({
          position: new THREE.Vector3(x, y, 0),
          rotation: new THREE.Euler(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI),
          velocity: new THREE.Vector3(
            (Math.random() - 0.5) * 0.3,
            (Math.random() - 0.5) * 0.3,
            Math.random() * 0.5 + 0.2
          ),
        });
      }
      setFragments(newFragments);
    }
  }, [shatter, fragments.length]);

  useEffect(() => {
    if (fragments.length > 0) {
      const interval = setInterval(() => {
        setFragments(prev =>
          prev.map(frag => ({
            ...frag,
            position: frag.position.clone().add(frag.velocity),
            rotation: new THREE.Euler(
              frag.rotation.x + 0.1,
              frag.rotation.y + 0.1,
              frag.rotation.z + 0.1
            ),
            velocity: frag.velocity.clone().add(new THREE.Vector3(0, -0.01, 0)),
          }))
        );
      }, 50);
      return () => clearInterval(interval);
    }
  }, [fragments.length]);

  if (shatter && fragments.length > 0) {
    return (
      <group>
        {fragments.map((frag, i) => (
          <mesh key={i} position={frag.position} rotation={frag.rotation}>
            <planeGeometry args={[Math.random() * 0.8 + 0.4, Math.random() * 0.8 + 0.4]} />
            <meshPhysicalMaterial
              color="#ffffff"
              transparent
              opacity={0.3}
              metalness={0.1}
              roughness={0.1}
              transmission={0.9}
              thickness={0.5}
            />
          </mesh>
        ))}
      </group>
    );
  }

  return (
    <mesh ref={glassRef} position={[0, 0, 0]}>
      <planeGeometry args={[8, 8]} />
      <meshPhysicalMaterial
        color="#ffffff"
        transparent
        opacity={0.2}
        metalness={0.0}
        roughness={0.1}
        transmission={0.95}
        thickness={1}
      />
    </mesh>
  );
};

const ProjectileObject = ({ onShatter }: { onShatter: () => void }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [position, setPosition] = useState(-15);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(prev => {
        const next = prev + 0.3;
        if (next > 0 && next < 0.5) {
          onShatter();
        }
        return next > 15 ? -15 : next;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onShatter]);

  return (
    <mesh ref={meshRef} position={[position, 0, -2]}>
      <cylinderGeometry args={[0.3, 0.6, 3, 32]} />
      <meshStandardMaterial
        color="hsl(18, 90%, 55%)"
        metalness={0.8}
        roughness={0.2}
        emissive="hsl(18, 90%, 55%)"
        emissiveIntensity={0.3}
      />
    </mesh>
  );
};

export const GlassShatter3D = () => {
  const [shattered, setShattered] = useState(false);

  const handleShatter = () => {
    if (!shattered) {
      setShattered(true);
      setTimeout(() => setShattered(false), 3000);
    }
  };

  return (
    <div className="w-full h-screen bg-background">
      <Canvas camera={{ position: [0, 0, 12], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="hsl(18, 90%, 55%)" />
        
        <ProjectileObject onShatter={handleShatter} />
        <ShatteringGlass shatter={shattered} />
        
        <Environment preset="sunset" />
        <OrbitControls enableZoom={true} enablePan={false} />
      </Canvas>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
        <p className="text-muted-foreground text-sm font-mono">
          Drag to rotate • Scroll to zoom
        </p>
      </div>
    </div>
  );
};
