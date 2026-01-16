import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { exploreWorlds } from '../constants';

const Explore = () => {
    const sectionRef = useRef(null);
    const trackRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const section = sectionRef.current;
        const track = trackRef.current;

        const handleMouseMove = (e) => {
            if (!section || !track) return;

            const rect = section.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const sectionWidth = rect.width;

            // Calculate the percentage of mouse position (0 to 1)
            const mousePercent = Math.max(0, Math.min(1, mouseX / sectionWidth));

            // Calculate the maximum scroll distance
            const trackWidth = track.scrollWidth;
            const maxScroll = trackWidth - sectionWidth;

            // Calculate target position
            const targetX = -mousePercent * maxScroll;

            // Animate to the target position with smooth easing
            gsap.to(track, {
                x: targetX,
                duration: 0.8,
                ease: 'power2.out',
            });
        };

        const handleMouseEnter = () => {
            setIsHovering(true);
        };

        const handleMouseLeave = () => {
            setIsHovering(false);
        };

        if (section) {
            section.addEventListener('mousemove', handleMouseMove);
            section.addEventListener('mouseenter', handleMouseEnter);
            section.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            if (section) {
                section.removeEventListener('mousemove', handleMouseMove);
                section.removeEventListener('mouseenter', handleMouseEnter);
                section.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className="explore-section" id="worlds">
            <div className="section-header">
                <h2 className="section-title">Explore Worlds</h2>
                <p className="section-subtitle">
                    Discover breathtaking virtual realms waiting for you
                    {isHovering && <span style={{ marginLeft: '10px', fontSize: '0.9em', opacity: 0.7 }}>← Move your mouse to explore →</span>}
                </p>
            </div>

            <div className="explore-container">
                <div ref={trackRef} className="explore-track">
                    {exploreWorlds.map((world, index) => (
                        <div
                            key={world.id}
                            className="explore-card"
                        >
                            <div className="explore-card-image">
                                <img src={world.imgUrl} alt={world.title} />
                                <div className="explore-card-overlay"></div>
                            </div>
                            <div className="explore-card-content">
                                <span className="explore-card-number">0{index + 1}</span>
                                <h3 className="explore-card-title">{world.title}</h3>
                                <button className="explore-card-btn">
                                    <span>Enter World</span>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <div className="explore-card-glow"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Explore;
