import React from 'react';
import './project-card.css'

export default function ProjectCard(props) {
    const used = props.techUsed.map((lang, index) => (
        <li key={index}>
            {lang}
        </li>
    ));
    return (
        <div className="project-card">
            <img src={props.image} alt={props.title} />
            <div className="project-info">
                <h3>{props.title}</h3>
                <p>{props.about}</p>
                <ul className="tech-used">
                    {used}
                </ul>
                <a
                  href={props.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                    <button>View on GitHub</button>
                </a>
                <a
                  href={props.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                    <button>View Live App</button>
                </a>
            </div>
        </div>
    );
}
