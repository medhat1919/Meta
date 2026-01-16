import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { newFeatures } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const cards = cardsRef.current;

        cards.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    x: index % 2 === 0 ? -100 : 100,
                    opacity: 0,
                    rotateY: index % 2 === 0 ? -15 : 15
                },
                {
                    x: 0,
                    opacity: 1,
                    rotateY: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        });
    }, []);

    return (
        <section ref={sectionRef} className="section features-section" id="features">
            <div className="section-header">
                <h2 className="section-title">What's New</h2>
                <p className="section-subtitle">
                    Discover the latest innovations in the metaverse
                </p>
            </div>

            <div className="features-grid">
                {newFeatures.map((feature, index) => (
                    <div
                        key={index}
                        ref={(el) => (cardsRef.current[index] = el)}
                        className="feature-card"
                    >
                        <div className="feature-card-icon">
                            <img src={feature.imgUrl} alt={feature.title} />
                        </div>
                        <div className="feature-card-content">
                            <h3 className="feature-card-title">{feature.title}</h3>
                            <p className="feature-card-description">{feature.subtitle}</p>
                            <button className="feature-card-btn">
                                Learn More
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div className="feature-card-shine"></div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
