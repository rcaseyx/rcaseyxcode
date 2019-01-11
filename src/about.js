import React from 'react';
import Typist from 'react-typist';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './about.css';

export default class About extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loadedTitle: false,
            loadedSub: false
        }
    }

    componentDidMount() {
        this.firstDelay();
    }

    firstDelay() {
        setTimeout(() => this.titleDone(), 3000);
    }

    secondDelay() {
        setTimeout(() => this.subDone(), 2000);
    }

    titleDone() {
        this.setState({loadedTitle: true});
        this.secondDelay();
    }

    subDone() {
        this.setState({loadedSub: true});
    }
    render() {
        return (
            <div className="about-me">
                <header>
                    <Typist avgTypingDelay={100}>
                        <h4>Hi, my name is Ryan.</h4>
                    </Typist>
                </header>
                <div className="about-text">
                    <p className={this.state.loadedTitle ? "fadeIn" : "hidden"}>
                        I'm an aspiring full-stack web developer. Since graduating from the
                        University of Georgia in 2016, I've worked in several
                        different roles in the tech industry. From Technical Support
                        Specialist, to QA Analyst, to Production Support Engineer, I've
                        picked up new skills at each position and continue to grow.
                        I'm ready to make the jump to full-stack web developer
                        and take my career to new heights!
                    </p>
                </div>
                <div className="links">
                    <div className={this.state.loadedSub ? "fadeIn" : "hidden"}>
                        <a
                          href="https://github.com/rcaseyx"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faGithub} size="4x" />
                        </a>
                        <a
                          href="https://www.linkedin.com/in/ryancaseycode/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faLinkedin} size="4x" />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
