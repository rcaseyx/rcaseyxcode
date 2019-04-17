import React from 'react';
import Typist from 'react-typist';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import emblem from './images/rc_emblem.png';
import './about.css';

export default class About extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loadEmblem: false,
            loadedTitle: false,
            loadedSub: false
        }
    }

    componentDidMount() {
        this.firstDelay();
        this.loadEmblem();
    }

    loadEmblem() {
        this.setState({loadEmblem: true});
    }

    firstDelay() {
        setTimeout(() => this.titleDone(), 3800);
    }

    secondDelay() {
        setTimeout(() => this.subDone(), 2500);
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
                <img className={this.state.loadEmblem ? "fadeIn" : "hidden"} src={emblem} alt="RC emblem" />
                <header>
                    <Typist avgTypingDelay={100} cursor={{ show: false}}>
                        <Typist.Delay ms={800} />
                        <h1>Hi, my name is Ryan.</h1>
                    </Typist>
                </header>
                <div className="about-text">
                    <p className={this.state.loadedTitle ? "fadeIn" : "hidden"}>
                        I'm a full-stack web developer living in Atlanta. Since graduating from the
                        University of Georgia in 2016, I've worked in several
                        different roles in the tech industry. From QA Analyst, to Production Support
                        Engineer, to Software Engineer, I've picked up new skills at each position and
                        continue to grow. I enjoy being creative, and building web applications provides great
                        opportunities for that. 
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
