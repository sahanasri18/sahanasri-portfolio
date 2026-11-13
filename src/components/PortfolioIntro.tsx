import { useEffect, useRef, useState } from 'react';
import { SkipForward } from 'lucide-react';

const PortfolioIntro = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  const finish = () => {
    setLeaving(true);
    window.setTimeout(() => setVisible(false), 650);
  };

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(false);
      return;
    }

    let renderer: { dispose: () => void; setSize: (w: number, h: number) => void; render: (s: any, c: any) => void; setPixelRatio: (n: number) => void; domElement: HTMLCanvasElement } | undefined;
    let frame = 0;
    let resize: (() => void) | undefined;
    let scene: any;
    let camera: any;
    let core: any;
    let particles: any;
    let disposed = false;
    const started = performance.now();
    const moduleUrl = 'https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.js';

    import(/* @vite-ignore */ moduleUrl).then((THREE: any) => {
      if (disposed || !canvasRef.current) return;
      scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x05080d, 0.035);
      camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 160);
      camera.position.set(0, 0, 18);
      renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: false, antialias: true, powerPreference: 'high-performance' });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.7));
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x05080d, 1);

      const ambient = new THREE.PointLight(0x00e5c3, 95, 45);
      ambient.position.set(0, 2, 1);
      scene.add(ambient);
      const warmLight = new THREE.PointLight(0xff9b54, 70, 35);
      warmLight.position.set(-5, -2, -5);
      scene.add(warmLight);

      core = new THREE.Group();
      const shell = new THREE.Mesh(
        new THREE.IcosahedronGeometry(3.15, 2),
        new THREE.MeshStandardMaterial({ color: 0x071d24, metalness: 0.85, roughness: 0.22, wireframe: true, emissive: 0x00bfa6, emissiveIntensity: 0.75 })
      );
      core.add(shell);
      const inner = new THREE.Mesh(
        new THREE.IcosahedronGeometry(1.65, 1),
        new THREE.MeshStandardMaterial({ color: 0x18e0c0, metalness: 0.65, roughness: 0.18, wireframe: true, emissive: 0x00a98f, emissiveIntensity: 1.2 })
      );
      core.add(inner);
      scene.add(core);

      const count = window.innerWidth < 700 ? 850 : 1700;
      const positions = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = 5 + Math.random() * 19;
        positions[i * 3] = Math.cos(angle) * radius;
        positions[i * 3 + 1] = Math.sin(angle) * radius;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 110;
        const warm = Math.random() > 0.82;
        colors[i * 3] = warm ? 1 : 0.08;
        colors[i * 3 + 1] = warm ? 0.48 : 0.9;
        colors[i * 3 + 2] = warm ? 0.2 : 0.78;
      }
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      particles = new THREE.Points(geometry, new THREE.PointsMaterial({ size: 0.075, vertexColors: true, transparent: true, opacity: 0.9, sizeAttenuation: true }));
      scene.add(particles);

      const rings = new THREE.Group();
      [5.2, 6.4, 7.6].forEach((radius, index) => {
        const ring = new THREE.Mesh(
          new THREE.TorusGeometry(radius, 0.012, 8, 180),
          new THREE.MeshBasicMaterial({ color: index === 1 ? 0xff9b54 : 0x00d9bb, transparent: true, opacity: 0.48 })
        );
        ring.rotation.x = Math.PI * (0.35 + index * 0.13);
        ring.rotation.y = index * 0.7;
        rings.add(ring);
      });
      scene.add(rings);

      resize = () => {
        if (!renderer || !camera) return;
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener('resize', resize);

      const animate = (now: number) => {
        if (disposed || !renderer) return;
        const elapsed = (now - started) / 1000;
        const rush = Math.min(elapsed / 4.8, 1);
        camera.position.z = 18 - rush * 12;
        camera.position.x = Math.sin(elapsed * 0.42) * 0.55;
        camera.position.y = Math.cos(elapsed * 0.32) * 0.28;
        camera.lookAt(0, 0, -2);
        core.rotation.x = elapsed * 0.18;
        core.rotation.y = elapsed * 0.32;
        core.scale.setScalar(0.72 + Math.min(elapsed / 3, 1) * 0.28);
        rings.rotation.z = elapsed * 0.12;
        particles.rotation.z = elapsed * 0.018;
        const pos = geometry.attributes.position.array as Float32Array;
        for (let i = 2; i < pos.length; i += 3) {
          pos[i] += 0.24 + rush * 0.48;
          if (pos[i] > 24) pos[i] = -86;
        }
        geometry.attributes.position.needsUpdate = true;
        renderer.render(scene, camera);
        frame = requestAnimationFrame(animate);
      };
      frame = requestAnimationFrame(animate);
    }).catch(() => {
      // Keep the title sequence usable if the optional 3D module cannot load.
    });

    const autoFinish = window.setTimeout(finish, 6200);
    return () => {
      disposed = true;
      window.clearTimeout(autoFinish);
      cancelAnimationFrame(frame);
      if (resize) window.removeEventListener('resize', resize);
      renderer?.dispose();
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`portfolio-intro ${leaving ? 'portfolio-intro-exit' : ''}`} role="dialog" aria-label="Portfolio opening sequence">
      <canvas ref={canvasRef} className="portfolio-intro-canvas" aria-hidden="true" />
      <div className="intro-vignette" />
      <div className="intro-topline"><span>AI / ML DEVELOPER</span><span>PORTFOLIO · 2026</span></div>
      <div className="intro-center">
        <p className="intro-overline">THE NEXT GENERATION OF IDEAS</p>
        <h1 className="intro-title"><span>SAHANA</span><span className="intro-title-second">SRI<span className="intro-dot">.</span></span></h1>
        <div className="intro-impact-line"><span /> <b>BUILDING INTELLIGENT EXPERIENCES</b> <span /></div>
        <p className="intro-subtitle">ARTIFICIAL INTELLIGENCE <i>×</i> MACHINE LEARNING</p>
      </div>
      <div className="intro-bottomline"><span>DESIGN · CODE · INTELLIGENCE</span><span className="intro-loading"><i /> INITIALIZING</span></div>
      <button className="intro-skip" onClick={finish} type="button"><SkipForward size={14} /> SKIP INTRO</button>
    </div>
  );
};

export default PortfolioIntro;
