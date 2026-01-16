import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const contentRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Image animation
            gsap.fromTo(imageRef.current,
                {
                    opacity: 0,
                    x: -100,
                    scale: 0.9
                },
                {
                    opacity: 1,
                    x: 0,
                    scale: 1,
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

            // Content animation
            gsap.fromTo(contentRef.current.children,
                {
                    opacity: 0,
                    x: 100,
                    y: 50
                },
                {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%",
                        end: "top 40%",
                        scrub: 1
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="section experience-section">
            <div className="experience-container">
                <div ref={imageRef} className="experience-image">
                    <img src="/experience.png" alt="VR Experience" />
                    <div className="experience-image-glow"></div>
                </div>

                <div ref={contentRef} className="experience-content">
                    <h2 className="experience-title">
                        Immersive VR Experience
                    </h2>
                    <p className="experience-description">
                        Step into a new dimension where reality and imagination merge.
                        Our cutting-edge VR technology powered by Nano Banana AI delivers
                        unprecedented immersion and interactivity.
                    </p>
                    <div className="experience-features">
                        <div className="experience-feature">
                            <div className="experience-feature-icon">🎮</div>
                            <div className="experience-feature-text">
                                <h4>Next-Gen Graphics</h4>
                                <p>Photorealistic environments</p>
                            </div>
                        </div>
                        <div className="experience-feature">
                            <div className="experience-feature-icon">🌐</div>
                            <div className="experience-feature-text">
                                <h4>Seamless Connectivity</h4>
                                <p>Connect with millions worldwide</p>
                            </div>
                        </div>
                        <div className="experience-feature">
                            <div className="experience-feature-icon">⚡</div>
                            <div className="experience-feature-text">
                                <h4>Real-Time Interaction</h4>
                                <p>Zero latency, infinite possibilities</p>
                            </div>
                        </div>
                    </div>
                    <button className="experience-cta">
                        <span>Try VR Experience</span>
                        <div className="experience-cta-shine"></div>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Experience;
