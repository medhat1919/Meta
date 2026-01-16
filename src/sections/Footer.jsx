import React from 'react';
import { socials } from '../constants';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-top">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <span className="logo-icon">◈</span>
                            <span className="logo-text">METAVERSE</span>
                        </div>
                        <p className="footer-tagline">
                            Step into the future of digital reality
                        </p>
                    </div>

                    <div className="footer-links">
                        <div className="footer-column">
                            <h4>Explore</h4>
                            <ul>
                                <li><a href="#about">About</a></li>
                                <li><a href="#worlds">Worlds</a></li>
                                <li><a href="#features">Features</a></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>Support</h4>
                            <ul>
                                <li><a href="#help">Help Center</a></li>
                                <li><a href="#docs">Documentation</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>Legal</h4>
                            <ul>
                                <li><a href="#privacy">Privacy Policy</a></li>
                                <li><a href="#terms">Terms of Service</a></li>
                                <li><a href="#cookies">Cookie Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-divider"></div>

                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © 2026 Metaverse. All rights reserved.
                    </p>
                    <div className="footer-socials">
                        {socials.map((social) => (
                            <a
                                key={social.name}
                                href={`#${social.name}`}
                                className="footer-social-link"
                                aria-label={social.name}
                            >
                                <img src={social.url} alt={social.name} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className="footer-gradient"></div>
        </footer>
    );
};

export default Footer;
