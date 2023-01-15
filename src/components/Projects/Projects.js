import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import movieApp from "../../Assets/Projects/movie-app.png";
import quizApp from "../../Assets/Projects/quiz-app.png";
import chatApp from "../../Assets/Projects/chat-app.png";
import cropPrediction from "../../Assets/Projects/crop-pred.png";
import flappyBird from "../../Assets/Projects/flappy-bird.png";
import ticTacToe from "../../Assets/Projects/tic-tac-toe.png";

function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works </strong>
                </h1>
                <p style={{ color: "white" }}>Here are a few projects I've worked on recently.</p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col lg={4} md={6} sm={12} xs={12} className="project-card">
                        <ProjectCard
                            imgPath={quizApp}
                            isBlog={false}
                            title="Quiz Application"
                            description="A quiz application using ReactJS and API. Select category, choose difficulty and start quiz."
                            ghLink="https://github.com/hassan-mehedi/Quiz-App"
                            demoLink="https://mehedis-quiz-app.netlify.app/"
                        />
                    </Col>

                    <Col lg={4} md={6} sm={12} xs={12} className="project-card">
                        <ProjectCard
                            imgPath={ticTacToe}
                            isBlog={false}
                            title="Tic-Tac-Toe"
                            description="A classic tic-tac-toe game using ReactJS. It's a two player game."
                            ghLink="https://github.com/hassan-mehedi/tic-tac-toe-game"
                            demoLink="https://tic-tac-toe-online.netlify.app/"
                        />
                    </Col>

                    <Col lg={4} md={6} sm={12} xs={12} className="project-card">
                        <ProjectCard
                            imgPath={chatApp}
                            isBlog={false}
                            title="Chat Application"
                            description='A chat application using ReactJS, Socket.io and Chatengine.io. It can be used to send text and image messages. To
                            log in use "test" as username and password.'
                            ghLink="https://github.com/hassan-mehedi/chat-app"
                            demoLink="https://chat-application-mehedi.netlify.app/"
                        />
                    </Col>

                    <Col lg={4} md={6} sm={12} xs={12} className="project-card">
                        <ProjectCard
                            imgPath={movieApp}
                            isBlog={false}
                            title="Movie Information Application"
                            description="A movie information application using ReactJS, API and TMDB. It can be used to search for movies and get their
                            information."
                            ghLink="https://github.com/hassan-mehedi/Movies"
                            demoLink="https://movie-with-mehedi.herokuapp.com/"
                        />
                    </Col>

                    <Col lg={4} md={6} sm={12} xs={12} className="project-card">
                        <ProjectCard
                            imgPath={cropPrediction}
                            isBlog={false}
                            title="Predict Your Crop"
                            description="A crop prediction and visualization application made with Streamlit and python."
                            ghLink="https://github.com/hassan-mehedi/crop-prediction-english-v2"
                            demoLink="https://crop-prediction-v2.herokuapp.com/"
                        />
                    </Col>

                    <Col lg={4} md={6} sm={12} xs={12} className="project-card">
                        <ProjectCard
                            imgPath={flappyBird}
                            isBlog={false}
                            title="Flappy Bird"
                            description="A flappy bird game made with HTML Canvas. Press space or touch the screen to fly."
                            ghLink="https://github.com/hassan-mehedi/flappy-bird-version-2"
                            demoLink="https://m-flappy-bird.netlify.app/"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
