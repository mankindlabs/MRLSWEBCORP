"use client";

import { useEffect, useRef } from "react";

export default function GitHubGlobe() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current) return;

    // Load Three.js from CDN
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
    script.async = true;
    
    script.onload = () => {
      initGlobe();
    };
    
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const initGlobe = () => {
    if (!containerRef.current) return;
    
    const THREE = (window as any).THREE;
    if (!THREE) return;

    const container = containerRef.current;
    const scene = new THREE.Scene();

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(container.offsetHeight, container.offsetHeight);
    container.appendChild(renderer.domElement);

    // Lights
    const light1 = new THREE.PointLight(0x5a54ff, 0.75);
    light1.position.set(-150, 150, -50);
    const light2 = new THREE.PointLight(0x4158f6, 0.75);
    light2.position.set(-400, 200, 150);
    const light3 = new THREE.PointLight(0x803bff, 0.7);
    light3.position.set(100, 250, -100);
    scene.add(light1, light2, light3);

    // Atmosphere shader
    const atmosphereShader = {
      uniforms: {},
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize( normalMatrix * normal );
          gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow( 0.99 - dot( vNormal, vec3( 0, 0, 1.0 ) ), 6.0 );
          gl_FragColor = vec4( .28, .48, 1.0, 1.0 ) * intensity;
        }
      `
    };

    const atmosphereGeometry = new THREE.SphereGeometry(2, 64, 64);
    const atmosphereMaterial = new THREE.ShaderMaterial({
      uniforms: THREE.UniformsUtils.clone(atmosphereShader.uniforms),
      vertexShader: atmosphereShader.vertexShader,
      fragmentShader: atmosphereShader.fragmentShader,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      transparent: true
    });
    const atm = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    atm.scale.set(1.05, 1.05, 1.05);
    atm.position.set(-0.1, 0.1, 0);
    scene.add(atm);

    // Globe
    const sphereGeometry = new THREE.SphereGeometry(2, 64, 64);
    const sphereMaterial = new THREE.MeshLambertMaterial({ color: 0xeeeeee });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.castShadow = true;
    sphere.receiveShadow = true;
    scene.add(sphere);

    // Map overlay
    const loader = new THREE.TextureLoader();
    const overlayMaterial = new THREE.MeshBasicMaterial({
      map: loader.load('https://i.imgur.com/JLFp6Ws.png'),
      transparent: true
    });
    const overlaySphereGeometry = new THREE.SphereGeometry(2.003, 64, 64);
    const overlaySphere = new THREE.Mesh(overlaySphereGeometry, overlayMaterial);
    overlaySphere.castShadow = true;
    overlaySphere.receiveShadow = true;
    sphere.add(overlaySphere);

    // Bezier curves
    const numPoints = 100;
    const tubeMaterial = new THREE.MeshBasicMaterial({ color: 0xd965fa });
    
    const curves = [
      { start: [0, 1.5, 1.3], middle: [0.6, 0.6, 3.2], end: [1.5, -1, 0.8], rot: [0, 0, 0] },
      { start: [0, 1.5, 1.3], middle: [0.6, 0.6, 3.2], end: [1.5, -1, 0.8], rot: [-.1, .75, .75] },
      { start: [0, 1.5, 1.3], middle: [0.6, 0.6, 3.2], end: [1.5, -1, 0.8], rot: [.2, 2.1, .5] },
      { start: [0, 1.5, 1.3], middle: [0.6, 0.6, 3.2], end: [1.5, -1, 0.8], rot: [.2, 2.3, .8] },
      { start: [0, 1.5, 1.3], middle: [0.6, 0.6, 3.2], end: [1.5, -1, 0.8], rot: [2, 2.9, 1.1] },
      { start: [0, 1.5, 1.3], middle: [0.6, 0.6, 3.2], end: [1.5, -1, 0.8], rot: [4.4, 7.1, 1] },
      { start: [0, 1.5, 1.3], middle: [0.6, 0.6, 3.2], end: [1.5, -1, 0.8], rot: [4.4, 2.1, 3] },
      { start: [0, 1.5, 1.3], middle: [0.6, 0.6, 3.2], end: [1.5, -1, 0.8], rot: [1.1, 2.5, 1] }
    ];

    const tubes: any[] = [];
    curves.forEach((c, i) => {
      const curve = new THREE.QuadraticBezierCurve3(
        new THREE.Vector3(...c.start),
        new THREE.Vector3(...c.middle),
        new THREE.Vector3(...c.end)
      );
      const tube = new THREE.TubeGeometry(curve, numPoints, 0.01, 20, false);
      tube.setDrawRange(0, 10000);
      const curveMesh = new THREE.Mesh(tube, tubeMaterial);
      curveMesh.rotation.set(c.rot[0], c.rot[1], c.rot[2]);
      sphere.add(curveMesh);
      tubes.push(tube);
    });

    // Spires
    const cylinderGeometry = new THREE.CylinderGeometry(0.01, 0.01, 4.25, 32);
    const cylinderMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ddff,
      transparent: true,
      opacity: 0.5
    });

    const spires = [
      [.75, 0, 0],
      [.74, 0, -.05],
      [.72, 0, -.07],
      [-1, 0, 2],
      [.8, 0, .5],
      [1.05, 0, 0],
      [2, 0, 3],
      [.8, 0, 2.5]
    ];

    spires.forEach(rot => {
      const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
      cylinder.rotation.set(rot[0], rot[1], rot[2]);
      sphere.add(cylinder);
    });

    // Camera
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 6;

    // Mouse interaction
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    container.addEventListener('mousedown', () => {
      isDragging = true;
    });

    container.addEventListener('mousemove', (e) => {
      const deltaMove = {
        x: e.offsetX - previousMousePosition.x
      };

      if (isDragging) {
        sphere.rotation.y += deltaMove.x * 0.004;
      }

      previousMousePosition = {
        x: e.offsetX,
        y: e.offsetY
      };
    });

    document.addEventListener('mouseup', () => {
      isDragging = false;
    });

    // Animation
    let renderCount = 0;
    let currentGrowing = 0;

    const growTube = (index: number, count: number) => {
      count = Math.ceil(count / 3) * 3;
      tubes[index].setDrawRange(0, count);
      if (index > 2) {
        tubes[index - 3].setDrawRange(count, 10000);
      } else {
        tubes[(tubes.length - 3) + index].setDrawRange(count, 10000);
      }
    };

    const animate = () => {
      if (renderCount < 10000) {
        renderCount += 80;
        growTube(currentGrowing, renderCount);
      } else {
        renderCount = 0;
        if (currentGrowing >= tubes.length - 1) {
          currentGrowing = 0;
        } else {
          currentGrowing++;
        }
      }

      requestAnimationFrame(animate);

      if (!isDragging) {
        sphere.rotation.y += 0.0005;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const onResize = () => {
      if (container) {
        renderer.setSize(container.offsetHeight, container.offsetHeight);
      }
    };
    window.addEventListener('resize', onResize);
  };

  return (
    <div className="relative w-full py-12 md:py-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <img 
          src="https://github.githubassets.com/images/modules/site/home/hero-glow.svg" 
          alt="Glow" 
          className="absolute top-1/2 left-1/2 w-[200%] -translate-x-1/2 -translate-y-1/2 opacity-60"
        />
      </div>
      <div 
        ref={containerRef}
        className="relative z-10 mx-auto"
        style={{ height: '500px', maxWidth: '500px' }}
      />
    </div>
  );
}
