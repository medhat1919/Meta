import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Navbar = () => {
    const navRef = useRef(null);
    const logoRef = useRef(null);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        // Entrance animation
        gsap.fromTo(navRef.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2, ease: "power4.out", delay: 0.3 }
        );

        // Logo pulse animation
        gsap.to(logoRef.current, {
            textShadow: '0 0 20px rgba(174, 103, 250, 0.8), 0 0 40px rgba(174, 103, 250, 0.4)',
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        // Scroll effect
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            ref={navRef}
            className="navbar-container"
            style={{
                background: scrolled
                    ? 'rgba(10, 15, 25, 0.95)'
                    : 'rgba(10, 15, 25, 0.7)',
                backdropFilter: 'blur(20px)',
                borderBottom: scrolled
                    ? '1px solid rgba(174, 103, 250, 0.3)'
                    : '1px solid rgba(255, 255, 255, 0.05)',
                boxShadow: scrolled
                    ? '0 8px 32px rgba(0, 0, 0, 0.4)'
                    : 'none',
                transition: 'all 0.3s ease'
            }}
        >
            <div className="nav-content">
                {/* Logo */}
                <div ref={logoRef} className="nav-logo">
                    <span className="logo-icon">◈</span>
                    <span className="logo-text">METAVERSE</span>
                </div>

                {/* Navigation Links */}
                <div className="nav-links">
                    {['About', 'Worlds', 'Features', 'Contact'].map((item, index) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="nav-link"
                            style={{ animationDelay: `${0.1 * index}s` }}
                        >
                            <span className="nav-link-text">{item}</span>
                            <span className="nav-link-underline"></span>
                        </a>
                    ))}
                </div>

                {/* CTA Button */}
                <button className="nav-cta">
                    <span className="nav-cta-text">Enter Metaverse</span>
                    <span className="nav-cta-glow"></span>
                </button>

                {/* Mobile Menu Icon */}
                <div className="mobile-menu-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
