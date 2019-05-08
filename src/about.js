import React from 'react';
import Typist from 'react-typist';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Slideshow from './slideshow';
import emblem from './images/rc_emblem.png';
import slide1 from './images/slide1.jpg';
import slide2 from './images/slide2.jpg';
import slide3 from './images/slide3.jpg';
import slide4 from './images/slide4.jpg';
import './about.css';

const slides = [slide1, slide2, slide3, slide4];

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
        setTimeout(() => this.subDone(), 3800);
    }

    secondDelay() {
        setTimeout(() => this.titleDone(), 2000);
    }

    titleDone() {
        this.setState({loadedTitle: true});
    }

    subDone() {
        this.setState({loadedSub: true});
        this.secondDelay();
    }
    render() {
        return (
            <div className="about-me">
                <img className={"emblemImage " + (this.state.loadEmblem ? "fadeIn" : "hidden")} src={emblem} alt="RC emblem" />
                <header>
                    <Typist avgTypingDelay={100} cursor={{ show: false}}>
                        <Typist.Delay ms={800} />
                        <h1>Hi, my name is Ryan.</h1>
                    </Typist>
                </header>
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
                <div className={"about-text " + (this.state.loadedTitle ? "fadeIn" : "hidden")}>
                    <p>
                        I'm a full-stack web developer living in Atlanta. Since graduating from the
                        University of Georgia in 2016, I've worked in several
                        different roles in the tech industry. From QA Analyst, to Production Support
                        Engineer, to Software Engineer, I've picked up new skills at each position and
                        continue to grow. I enjoy being creative and solving problems, and building web applications
                        is a great outlet for both.
                    </p>
                    <Slideshow slides={slides} />
                </div>
            </div>
        );
    }
}
