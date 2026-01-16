import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Community = () => {
    const sectionRef = useRef(null);
    const heroRef = useRef(null);
    const cardsRef = useRef([]);

    const stats = [
        { icon: '👥', number: '10M+', label: 'Active Users' },
        { icon: '🌍', number: '150+', label: 'Virtual Worlds' },
        { icon: '🎨', number: '500K+', label: 'Creators' },
        { icon: '⭐', number: '4.9/5', label: 'User Rating' }
    ];

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Hero image animation
            gsap.fromTo(heroRef.current,
                {
                    opacity: 0,
                    scale: 0.8,
                    y: 50
                },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%",
                        end: "top 40%",
                        scrub: 1
                    }
                }
            );

            // Cards stagger animation
            gsap.fromTo(cardsRef.current,
                {
                    opacity: 0,
                    y: 80,
                    scale: 0.8
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "back.out(1.2)",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 60%",
                        end: "top 30%",
                        scrub: 1
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="section community-section" id="contact">
            <div className="section-header">
                <h2 className="section-title">Join Our Community</h2>
                <p className="section-subtitle">
                    Be part of the largest and most vibrant metaverse community
                </p>
            </div>

            <div ref={heroRef} className="community-hero">
                <img src="/community.png" alt="Community Hub" />
                <div className="community-hero-overlay"></div>
            </div>

            <div className="community-stats">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        ref={el => cardsRef.current[index] = el}
                        className="community-stat-card"
                    >
                        <div className="community-stat-icon">{stat.icon}</div>
                        <div className="community-stat-number">{stat.number}</div>
                        <div className="community-stat-label">{stat.label}</div>
                        <div className="community-stat-glow"></div>
                    </div>
                ))}
            </div>

            <div className="community-cta">
                <h3>Ready to Join?</h3>
                <p>Connect with creators, explorers, and innovators from around the world</p>
                <button className="community-cta-btn">
                    <span>Join Community</span>
                    <div className="community-cta-shine"></div>
                </button>
            </div>
        </section>
    );
};

export default Community;
