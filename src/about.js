import React from 'react';
import Typing from 'react-typing-animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './about.css';

export default class About extends React.Component {
    render() {
        return (
            <div className="about-me">
                <header>
                    <Typing speed={100}>
                        <h4>Hi, my name is Ryan.</h4>
                    </Typing>
                </header>
                <div className="about-text">
                    <p>This will be a small section where I talk about myself.
                    it will have basic information about me. What I like to do,
                    how I spend my time, etc. It will be super cool for sure.</p>
                </div>
                <div className="links">
                    <a
                      href="https://github.com/rcaseyx"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faGithub} size="6x" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/ryancaseycode/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faLinkedin} size="6x" />
                    </a>
                </div>
            </div>
        );
    }
}
