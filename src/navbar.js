import React from 'react';
import { Link } from 'react-scroll';
import logo from './images/rc_logo.png';
import './navbar.css';

export default class NavBar extends React.Component {
    render() {
        return (
            <nav role="navigation">
                <ul className="nav-links">
                    <li>
                        <img src={logo} alt="Ryan Casey logo" />
                    </li>
                    <li>
                        <a
                            href="https://drive.google.com/file/d/1Lq9M7tLBMlhH6XUgTUpHcKAZATpvZJWZ/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Resume
                        </a>
                    </li>
                    <li>
                        <Link
                            to="contact-me"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-65}
                        >
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="portfolio"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-65}
                        >
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="about-me"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-70}
                        >
                            About Me
                        </Link>
                    </li>
                </ul>
            </nav>
          );
    }
}
