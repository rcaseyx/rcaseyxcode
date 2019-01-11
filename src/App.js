import React from 'react';

import About from './about';
import NavBar from './navbar';
import Portfolio from './portfolio';
import Contact from './contact';
import Footer from './footer';
import './App.css';

export default function App(props) {
    return (
        <div className="app">
            <NavBar />
            <main>
                <About />
                <Portfolio />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}
