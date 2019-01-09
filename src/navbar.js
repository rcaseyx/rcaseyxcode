import React from 'react';
import { Link } from 'react-scroll';
import './navbar.css';

export default class NavBar extends React.Component {
    render() {
        return (
            <nav role="navigation">
                <ul className="nav-links">
                    <li>
                        Ryan Casey
                    </li>
                    <li>
                        <Link
                            to="contact-me"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-70}
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
                            offset={-50}
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
