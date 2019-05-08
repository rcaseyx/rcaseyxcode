import React from 'react';
import Slide from './slide';
import './slideshow.css';

export default class Slideshow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            slide1: {
                id: 0,
                position: 'onScreen',
                transition: true
            },
            slide2: {
                id: 1,
                position: 'offScreenRight',
                transition: true
            },
            currentId: 0
        }
    }

    componentDidMount() {
        this.startSlideshow();
    }

    startSlideshow() {
        this.slideshowInterval = setInterval(() => {
            this.transitionSlides();
        }, 4000);
    }

    componentWillUnmount() {
        clearInterval(this.slideshowInterval);
    }

    transitionSlides() {
        const { slide1, slide2 } = this.state;
        let currentId;
        if (slide1["position"] === 'onScreen') {
            slide1["position"] = 'offScreenLeft';
            slide2["position"] = 'onScreen';
            currentId = slide2.id;
        } else {
            slide1["position"] = 'onScreen';
            slide2["position"] = 'offScreenLeft';
            currentId = slide1.id;
        }
        this.setSlideState(slide1, slide2, currentId);
        setTimeout(() => {
            this.resetSlideOffScreen();
        }, 1000);
    }

    setSlideState(slide1, slide2, currentId) {
        this.setState({
            slide1,
            slide2,
            currentId
        });
    }

    resetSlideOffScreen() {
        const { slide1, slide2, currentId } = this.state;
        const { slides } = this.props;
        if (slide1["position"] === 'offScreenLeft') {
            slide1["transition"] = false;
            slide1["position"] = 'offScreenRight';
            slide1["id"] = slide2.id + 1 === slides.length ? 0 : slide2.id + 1;
        } else {
            slide2["transition"] = false;
            slide2["position"] = 'offScreenRight';
            slide2["id"] = slide1.id + 1 === slides.length ? 0 : slide1.id + 1;
        }
        this.setSlideState(slide1, slide2, currentId);
        this.resetSlideTransitions(slide1, slide2, currentId);
    }

    resetSlideTransitions(slide1, slide2, currentId) {
        setTimeout(() => {
            slide1["transition"] = true;
            slide2["transition"] = true;
            this.setSlideState(slide1, slide2, currentId);
        }, 500);
    }

    render() {
        const { slide1, slide2 } = this.state;
        const { slides } = this.props;
        return (
            <div className='slideshowContainer'>
                <Slide
                    image={slides[slide1.id]}
                    position={slide1.position}
                    transition={slide1.transition ? 'myTransition' : ''}
                />
                <Slide
                    image={slides[slide2.id]}
                    position={slide2.position}
                    transition={slide2.transition ? 'myTransition' : ''}
                />
            </div>
        );
    }
}