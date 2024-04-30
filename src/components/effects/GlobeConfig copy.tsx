import React, { useEffect, useRef, useState } from "react";
import { useThree, extend, Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ThreeGlobe from "three-globe";
import countries from "@/core/data/globe.json";

// Extend the ThreeGlobe component to be used with react-three-fiber
extend({ ThreeGlobe });

// Assuming GlobeConfig and Position types are defined elsewhere
// and are imported correctly.

export function Globe({ globeConfig, data }) {
  const globeRef = useRef();
  const { size } = useThree();

  const _buildData = () => {
    const arcs = data;
    let points = [];
    for (let i = 0; i < arcs.length; i++) {
      const arc = arcs[i];
      const rgb = hexToRgb(arc.color) as { r: number; g: number; b: number };
      points.push({
        size: defaultProps.pointSize,
        order: arc.order,
        color: (t: number) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
        lat: arc.startLat,
        lng: arc.startLng,
      });
      points.push({
        size: defaultProps.pointSize,
        order: arc.order,
        color: (t: number) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
        lat: arc.endLat,
        lng: arc.endLng,
      });
    }

    // Add a point for the Netherlands
    points.push({
      size: defaultProps.pointSize,
      color: (t: number) => `rgba(255, 0, 0, ${1 - t})`, // Red color
      lat: 52.1326, // Latitude of the Netherlands
      lng: 5.2913, // Longitude of the Netherlands
    });

    // remove duplicates for same lat and lng
    const filteredPoints = points.filter(
      (v, i, a) =>
        a.findIndex((v2) =>
          ["lat", "lng"].every(
            (k) => v2[k as "lat" | "lng"] === v[k as "lat" | "lng"],
          ),
        ) === i,
    );

    setGlobeData(filteredPoints);
  };

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
