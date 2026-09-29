"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function GlobalCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x060210, 0.025);

    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 15);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));

    containerRef.current.appendChild(renderer.domElement);

    // 2. Cinematic Lighting for Floating 3D Geometries
    const ambientLight = new THREE.AmbientLight(0x2e1065, 1.2);
    scene.add(ambientLight);

    const purpleLight = new THREE.PointLight(0xa855f7, 2.5, 30);
    purpleLight.position.set(-8, 6, 8);
    scene.add(purpleLight);

    const cyanLight = new THREE.PointLight(0x38bdf8, 2.0, 30);
    cyanLight.position.set(8, -6, 6);
    scene.add(cyanLight);

    // 3. Floating 3D Motion Graphics (Translucent Glass Prisms & Polyhedrons)
    const floatingGroup = new THREE.Group();
    scene.add(floatingGroup);

    // Geometry 1: Octahedron (Upper Left)
    const octGeom = new THREE.OctahedronGeometry(1.2, 0);
    const glassMat1 = new THREE.MeshPhysicalMaterial({
      color: 0x8b5cf6,
      emissive: 0x4c1d95,
      emissiveIntensity: 0.35,
      roughness: 0.2,
      metalness: 0.8,
      wireframe: false,
      transparent: true,
      opacity: 0.45,
    });
    const octMesh = new THREE.Mesh(octGeom, glassMat1);
    octMesh.position.set(-6.5, 3.5, -2);
    floatingGroup.add(octMesh);

    // Octahedron Wireframe
    const octWireGeom = new THREE.OctahedronGeometry(1.22, 0);
    const octWireMat = new THREE.MeshBasicMaterial({
      color: 0xc084fc,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    const octWire = new THREE.Mesh(octWireGeom, octWireMat);
    octMesh.add(octWire);

    // Geometry 2: Icosahedron (Lower Right)
    const icoGeom = new THREE.IcosahedronGeometry(1.5, 0);
    const glassMat2 = new THREE.MeshPhysicalMaterial({
      color: 0x38bdf8,
      emissive: 0x0369a1,
      emissiveIntensity: 0.3,
      roughness: 0.25,
      metalness: 0.75,
      transparent: true,
      opacity: 0.4,
    });
    const icoMesh = new THREE.Mesh(icoGeom, glassMat2);
    icoMesh.position.set(7, -3, -3);
    floatingGroup.add(icoMesh);

    // Icosahedron Wireframe
    const icoWireGeom = new THREE.IcosahedronGeometry(1.52, 0);
    const icoWireMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });
    const icoWire = new THREE.Mesh(icoWireGeom, icoWireMat);
    icoMesh.add(icoWire);

    // Geometry 3: Orbital Torus Ring (Floating Mid Center)
    const torusGeom = new THREE.TorusGeometry(2.2, 0.03, 16, 80);
    const torusMat = new THREE.MeshStandardMaterial({
      color: 0xa855f7,
      emissive: 0x7c3aed,
      emissiveIntensity: 0.6,
      metalness: 0.9,
      roughness: 0.2,
      transparent: true,
      opacity: 0.7,
    });
    const torusMesh = new THREE.Mesh(torusGeom, torusMat);
    torusMesh.position.set(-4, -5, -4);
    torusMesh.rotation.x = Math.PI / 3;
    floatingGroup.add(torusMesh);

    // Geometry 4: Small Satellite Diamond
    const diaGeom = new THREE.DodecahedronGeometry(0.8, 0);
    const diaMat = new THREE.MeshStandardMaterial({
      color: 0xe0e7ff,
      emissive: 0x818cf8,
      emissiveIntensity: 0.4,
      metalness: 0.85,
      roughness: 0.15,
      transparent: true,
      opacity: 0.5,
    });
    const diaMesh = new THREE.Mesh(diaGeom, diaMat);
    diaMesh.position.set(5.5, 4.5, -4);
    floatingGroup.add(diaMesh);

    // 4. Cosmic Stardust Starfield (Subtle, sparkling stars)
    const starCount = window.innerWidth < 768 ? 400 : 900;
    const starPositions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 50;
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 40;
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }

    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));

    const canvas = document.createElement("canvas");
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      grad.addColorStop(0, "rgba(255, 255, 255, 1)");
      grad.addColorStop(0.3, "rgba(216, 180, 254, 0.9)");
      grad.addColorStop(0.7, "rgba(168, 85, 247, 0.3)");
      grad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 32, 32);
    }
    const starTexture = new THREE.CanvasTexture(canvas);

    const starMaterial = new THREE.PointsMaterial({
      size: 0.18,
      map: starTexture,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const starSystem = new THREE.Points(starGeometry, starMaterial);
    scene.add(starSystem);

    // 5. Mouse and Scroll Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let scrollProgress = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        scrollProgress = Math.min(Math.max(window.scrollY / maxScroll, 0), 1);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // 6. Animation Loop
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (document.hidden) return;

      const elapsedTime = performance.now() * 0.001;

      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      if (!prefersReducedMotion) {
        // Floating 3D Motion Graphics rotations & levitations
        octMesh.rotation.x = elapsedTime * 0.25;
        octMesh.rotation.y = elapsedTime * 0.35;
        octMesh.position.y = 3.5 + Math.sin(elapsedTime * 1.2) * 0.4;

        icoMesh.rotation.y = -elapsedTime * 0.2;
        icoMesh.rotation.z = elapsedTime * 0.15;
        icoMesh.position.y = -3 + Math.sin(elapsedTime * 1.5 + 1) * 0.5;

        torusMesh.rotation.z = elapsedTime * 0.3;
        torusMesh.rotation.x = Math.PI / 3 + Math.sin(elapsedTime * 0.8) * 0.2;

        diaMesh.rotation.x = -elapsedTime * 0.3;
        diaMesh.rotation.y = elapsedTime * 0.4;
        diaMesh.position.y = 4.5 + Math.cos(elapsedTime * 1.1) * 0.35;

        // Subtle star drift
        starSystem.rotation.y = elapsedTime * 0.012 + mouseX * 0.04;
        starSystem.rotation.x = -elapsedTime * 0.006 + mouseY * 0.04;
      }

      // Smooth camera pan along scroll
      const targetCamY = -scrollProgress * 8;
      camera.position.y += (targetCamY - camera.position.y) * 0.05;
      camera.position.x += (mouseX * 0.6 - camera.position.x) * 0.05;

      // Follow cursor with subtle point lights
      purpleLight.position.x = -8 + mouseX * 4;
      purpleLight.position.y = 6 + mouseY * 3;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);

      // Clean cleanup
      octGeom.dispose();
      octWireGeom.dispose();
      glassMat1.dispose();
      octWireMat.dispose();

      icoGeom.dispose();
      icoWireGeom.dispose();
      glassMat2.dispose();
      icoWireMat.dispose();

      torusGeom.dispose();
      torusMat.dispose();

      diaGeom.dispose();
      diaMat.dispose();

      starGeometry.dispose();
      starMaterial.dispose();
      starTexture.dispose();
      renderer.dispose();

      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
}
