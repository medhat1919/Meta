import React, { useRef, useLayoutEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Stars, Float } from '@react-three/drei';
import gsap from 'gsap';
import * as THREE from 'three';

// Particle System Component
const ParticleField = () => {
    const points = useRef();

    const particlesPosition = useMemo(() => {
        const positions = new Float32Array(2000 * 3);
        for (let i = 0; i < 2000; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 50;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
        }
        return positions;
    }, []);

    useFrame((state) => {
        if (points.current) {
            points.current.rotation.y = state.clock.elapsedTime * 0.05;
        }
    });

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particlesPosition.length / 3}
                    array={particlesPosition}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.1}
                color="#ae67fa"
                sizeAttenuation
                transparent
                opacity={0.8}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
};

// Animated 3D Sphere
const AnimatedSphere = ({ position, color, scale }) => {
    const meshRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
            meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.3;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <Sphere ref={meshRef} args={[1, 64, 64]} position={position} scale={scale}>
                <MeshDistortMaterial
                    color={color}
                    attach="material"
                    distort={0.6}
                    speed={3}
                    roughness={0.1}
                    metalness={0.8}
                />
            </Sphere>
        </Float>
    );
};

// Main 3D Scene
const Hero3D = () => {
    return (
        <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
            <ambientLight intensity={0.3} />
            <directionalLight position={[5, 5, 5]} intensity={1.5} />
            <pointLight position={[-5, -5, -5]} intensity={1} color="#1892f6" />

            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <ParticleField />

            <AnimatedSphere position={[-3, 0, -2]} color="#ae67fa" scale={1.2} />
            <AnimatedSphere position={[3, 1, -3]} color="#1892f6" scale={0.8} />
            <AnimatedSphere position={[0, -2, -4]} color="#f472b6" scale={1} />

            <OrbitControls
                enableZoom={false}
                enablePan={false}
                autoRotate
                autoRotateSpeed={0.5}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
            />
        </Canvas>
    );
};

// Scroll Indicator
const ScrollIndicator = () => {
    const indicatorRef = useRef(null);

    useLayoutEffect(() => {
        gsap.to(indicatorRef.current, {
            y: 10,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });
    }, []);

    return (
        <div ref={indicatorRef} className="scroll-indicator">
            <div className="scroll-arrow"></div>
            <span>Scroll to Explore</span>
        </div>
    );
};

const Hero = () => {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const ctaRef = useRef(null);
    const heroRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            // Stagger entrance animations
            tl.from(titleRef.current.children, {
                y: 150,
                opacity: 0,
                rotationX: -90,
                duration: 1.2,
                stagger: 0.2,
                ease: "power4.out"
            })
                .from(subtitleRef.current, {
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out"
                }, "-=0.6")
                .from(ctaRef.current.children, {
                    scale: 0,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "back.out(1.7)"
                }, "-=0.4");

            // Floating animation for hero content
            gsap.to(heroRef.current, {
                y: -20,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <section className="hero-section">
            {/* 3D Background */}
            <div className="hero-3d-background">
                <Hero3D />
            </div>

            {/* Gradient Overlays */}
            <div className="hero-gradient hero-gradient-1" />
            <div className="hero-gradient hero-gradient-2" />
            <div className="hero-gradient hero-gradient-3" />

            {/* Content */}
            <div ref={heroRef} className="hero-content">
                <div ref={titleRef} className="hero-title-container">
                    <h1 className="hero-title-line">
                        <span className="hero-title-word">ENTER</span>
                    </h1>
                    <h1 className="hero-title-line">
                        <span className="hero-title-word hero-title-gradient">THE METAVERSE</span>
                    </h1>
                    <h1 className="hero-title-line">
                        <span className="hero-title-word hero-title-outline">MADNESS</span>
                    </h1>
                </div>

                <p ref={subtitleRef} className="hero-subtitle">
                    Step beyond reality into a universe where imagination knows no bounds.
                    <br />
                    Experience the future of digital worlds, today.
                </p>

                <div ref={ctaRef} className="hero-cta-container">
                    <button className="hero-cta-primary">
                        <span>Start Your Journey</span>
                        <div className="hero-cta-shine"></div>
                    </button>
                    <button className="hero-cta-secondary">
                        <span>Watch Demo</span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M6.66669 5L13.3334 10L6.66669 15V5Z" fill="currentColor" />
                        </svg>
                    </button>
                </div>
            </div>

            <ScrollIndicator />
        </section>
    );
};

export default Hero;
