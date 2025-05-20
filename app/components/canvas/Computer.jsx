import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

// Create a context to communicate the loading state
import { useModelLoadContext } from "@/context/model-load-context";

const Computers = ({ isMobile }) => {
  const { modelLoaded, setModelLoaded } = useModelLoadContext();
  const computer = useGLTF("./desktop_pc/scene.gltf");

  useEffect(() => {
    // Once model is loaded (since this hook won't run until it's ready)
    if (computer && computer.scene && !modelLoaded) {
      setModelLoaded(true);
    }
  }, [computer, modelLoaded, setModelLoaded]);

  return (
    <mesh>
      <hemisphereLight intensity={3} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.9 : 0.75}
        position={[0, -1.75, -0.8]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Preload the model when the component mounts
    useGLTF.preload("./desktop_pc/scene.gltf");
    
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div className="xl:flex-1 xl:h-auto md:h-[400px] h-[200px]">
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={null}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            autoRotate
            autoRotateSpeed={1.5}
            enableDamping
            dampingFactor={0.05}
          />
          <Computers isMobile={isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;