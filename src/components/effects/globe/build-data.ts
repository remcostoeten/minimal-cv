import React, { useEffect, useRef, useState } from 'react';
import { useThree, extend } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ThreeGlobe from 'three-globe';
import countries from '@/core/data/globe.json';

// Extend the ThreeGlobe component to be used with react-three-fiber
extend({ ThreeGlobe });

// Assuming GlobeConfig and Position types are defined elsewhere
// and are imported correctly.

export function Globe({ globeConfig, data }) {
 const globeRef = useRef();
 const { size } = useThree();

 useEffect(() => {
    if (globeRef.current) {
      // Assuming _buildData and _buildMaterial are defined elsewhere
      // and are imported correctly.
      _buildData(globeRef.current, data);
      _buildMaterial(globeRef.current, globeConfig);
    }
 }, [globeRef.current, data, globeConfig]);

 return (
    <threeGlobe
      ref={globeRef}
      args={[size.width, size.height]}
      // Add other necessary props here
    />
 );
}

// Assuming _buildData and _buildMaterial functions are defined elsewhere
// and are imported correctly.

export function World({ globeConfig, data }) {
 return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Globe globeConfig={globeConfig} data={data} />
      <OrbitControls />
    </Canvas>
 );
}

// Assuming hexToRgb and genRandomNumbers functions are defined elsewhere
// and are imported correctly.
