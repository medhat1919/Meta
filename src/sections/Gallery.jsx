import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    const galleries = [
        {
            id: 1,
            image: '/gallery1.png',
            title: 'Floating Islands',
            description: 'Explore breathtaking floating neon islands in our metaverse'
        },
        {
            id: 2,
            image: '/gallery2.png',
            title: 'Cyberpunk City',
            description: 'Immerse yourself in a vibrant cyberpunk virtual reality world'
        },
        {
            id: 3,
            image: '/gallery3.png',
            title: 'Digital Universe',
            description: 'Journey through abstract digital universes with cosmic energy'
        }
    ];

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Animate cards on scroll
            cardsRef.current.forEach((card, index) => {
                gsap.fromTo(card,
                    {
                        opacity: 0,
                        y: 100,
                        scale: 0.8
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 80%",
                            end: "top 50%",
                            scrub: 1,
                            toggleActions: "play none none reverse"
                        }
                    }
                );

                // Parallax effect on image
                const img = card.querySelector('.gallery-card-image img');
                if (img) {
                    gsap.to(img, {
                        y: -50,
                        ease: "none",
                        scrollTrigger: {
                            trigger: card,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: 2
                        }
                    });
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="section gallery-section" id="worlds">
            <div className="section-header">
                <h2 className="section-title">Explore Worlds</h2>
                <p className="section-subtitle">
                    Discover infinite possibilities across stunning metaverse landscapes
                </p>
            </div>

            <div className="gallery-grid">
                {galleries.map((item, index) => (
                    <div
                        key={item.id}
                        ref={el => cardsRef.current[index] = el}
                        className="gallery-card"
                    >
                        <div className="gallery-card-image">
                            <img src={item.image} alt={item.title} />
                            <div className="gallery-card-overlay"></div>
                        </div>
                        <div className="gallery-card-content">
                            <h3 className="gallery-card-title">{item.title}</h3>
                            <p className="gallery-card-description">{item.description}</p>
                            <button className="gallery-card-btn">
                                <span>Explore Now</span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div className="gallery-card-glow"></div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;
