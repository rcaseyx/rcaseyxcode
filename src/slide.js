import React from 'react';
import './slide.css';

export default function Slide(props) {
    return (
        <div className={"slideContainer " + props.position + " " + props.transition}>
            <img src={props.image} alt="slide" />
        </div>
    );
}