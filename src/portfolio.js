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
                  about: "New Best Friend allows users to view available rescue dogs for adoption.",
                  image: "https://github.com/rcaseyx/new-best-friend/raw/master/public/images/findfriend.png",
                  url: "https://github.com/rcaseyx/new-best-friend",
                  liveUrl: "https://new-best-friend.herokuapp.com/",
                  techUsed: ["React","Redux","Redux-Form","React-Loader-Spinner","JWT-decode","Enzyme","NodeJs","Express","MongoDb","Mongoose","JWT","Passport","bcryptjs","Morgan","Faker","Mocha","Chai"]
                },
                {
                  title: "Seen It?",
                  about: "Seen It is an interactive application allowing users to keep track of the movies they watch.",
                  image: "https://github.com/rcaseyx/seen-it/raw/master/images/seen-it-4.png",
                  url: "https://github.com/rcaseyx/seen-it",
                  liveUrl: "https://seen-it-app.herokuapp.com/",
                  techUsed: ["HTML5","CSS3","jQuery/JavaScript","Node.js","Express","MongoDB","Mongoose","Passport","JWT","Mocha","Chai","Faker.js","Travis-CI","Heroku"]
                },
                {
                  title: "The Scoop",
                  about: "The Scoop is a web application that allows users to search for movie or TV show titles and get information about that title.",
                  image: "https://github.com/rcaseyx/the-scoop/raw/master/imgs/scoop2.png",
                  url: "https://github.com/rcaseyx/the-scoop",
                  liveUrl: "https://rcaseyx.github.io/the-scoop",
                  techUsed: ["HTML5","CSS3","JavaScript","jQuery","YouTube Data API v3","The Movie Database API","BestBuy Products API"]
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
                {projects}
            </div>
        );
    }
}
