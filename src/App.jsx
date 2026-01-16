import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Gallery from './sections/Gallery';
import Explore from './sections/Explore';
import Experience from './sections/Experience';
import Features from './sections/Features';
import Community from './sections/Community';
import Footer from './sections/Footer';

function App() {
    return (
        <div className="bg-primary-black overflow-hidden relative w-full h-full">
            <Navbar />
            <Hero />
            <About />
            <Gallery />
            <Explore />
            <Experience />
            <Features />
            <Community />
            <Footer />
        </div>
    );
}

export default App;
