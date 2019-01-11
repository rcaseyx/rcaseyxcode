import React from 'react';
import ProjectCard from './project-card';
import './portfolio.css';

export default class Portfolio extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: [
                {
                  title: "New Best Friend",
                  about: "New Best Friend allows users to view available rescue dogs for adoption. Users can set preferences and add dogs to their profile.",
                  image: "https://github.com/rcaseyx/new-best-friend/raw/master/public/images/findfriend.png",
                  url: "https://github.com/rcaseyx/new-best-friend",
                  liveUrl: "https://new-best-friend.herokuapp.com/"
                },
                {
                  title: "Seen It?",
                about: "Seen It is an interactive application allowing users to keep track of the movies they watch. Users are able to maintain lists of movies they've seen, as well as view other user lists.",
                  image: "https://github.com/rcaseyx/seen-it/raw/master/images/seen-it-4.png",
                  url: "https://github.com/rcaseyx/seen-it",
                  liveUrl: "https://seen-it-app.herokuapp.com/"
                },
                {
                  title: "The Scoop",
                  about: "The Scoop is an app that allows users to search for movies and shows and get information about them. Users can see recommended titles from a 3rd party API, as well as the trailer via the YouTube Data API.",
                  image: "https://github.com/rcaseyx/the-scoop/raw/master/imgs/scoop2.png",
                  url: "https://github.com/rcaseyx/the-scoop",
                  liveUrl: "https://rcaseyx.github.io/the-scoop"
                }
            ]
        };
    }

    render() {
        const projects = this.state.projects.map((project, index) => (
            <div className="project-wrapper" key={index}>
                <ProjectCard {...project} />
            </div>
        ));

        return (
            <div className="portfolio">
                <h3>My Projects</h3>
                <div className="projects">
                    {projects}
                </div>
            </div>
        );
    }
}
