import React from 'react';
import './project-card.css'

export default function ProjectCard(props) {
    return (
        <div className="project-card">
            <h4>{props.title}</h4>
            <img src={props.image} alt={props.title} />
            <p>{props.about}</p>
            <a
              href={props.url}
              target="_blank"
              rel="noopener noreferrer"
            >
                View on GitHub
            </a>
            <a
              href={props.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
                View Live App
            </a>
        </div>
    );
}
