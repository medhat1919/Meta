import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const cards = cardsRef.current;

        gsap.fromTo(
            cards,
            { y: 100, opacity: 0, scale: 0.8 },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse',
                },
            }
        );
    }, []);

    const features = [
        {
            icon: '🌐',
            title: 'Infinite Worlds',
            description: 'Explore countless virtual realms, each with unique landscapes and experiences.',
        },
        {
            icon: '🎮',
            title: 'Immersive Gaming',
            description: 'Play next-gen games with cutting-edge graphics and physics.',
        },
        {
            icon: '🤝',
            title: 'Social Connection',
            description: 'Meet people from around the globe in stunning virtual environments.',
        },
        {
            icon: '🎨',
            title: 'Creative Freedom',
            description: 'Build, design, and customize your own virtual spaces and avatars.',
        },
    ];

    return (
        <section ref={sectionRef} className="section about-section" id="about">
            <div className="section-header">
                <h2 className="section-title">Why Choose Metaverse?</h2>
                <p className="section-subtitle">
                    Experience the next evolution of digital interaction
                </p>
            </div>

            <div className="about-grid">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        ref={(el) => (cardsRef.current[index] = el)}
                        className="about-card"
                    >
                        <div className="about-card-icon">{feature.icon}</div>
                        <h3 className="about-card-title">{feature.title}</h3>
                        <p className="about-card-description">{feature.description}</p>
                        <div className="about-card-glow"></div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default About;
