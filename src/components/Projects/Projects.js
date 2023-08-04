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
import workInProgress from "../../Assets/Projects/work_in_progress.jpg";

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
                            imgPath={chatApp}
                            isBlog={false}
                            title="Chat Application"
                            stack="React.js | Socket.io"
                            isInProgress={false}
                            description="This chat app can be used to create groups and send text messages. Use 'test' for both user and password field to login"
                            ghLink="https://github.com/hassan-mehedi/chat-app"
                            demoLink="https://chat-application-mehedi.netlify.app/"
                        />
                    </Col>

                    <Col lg={4} md={6} sm={12} xs={12} className="project-card">
                        <ProjectCard
                            imgPath={workInProgress}
                            isBlog={false}
                            title="Video Chat Application"
                            stack="React.js | Peer.js |Node.js | Socket.io"
                            isInProgress={true}
                            description="This project uses Node.js as backend and React.js as frontend. Socket.io is being used to open channels and Peer.js is being used to handle communication between peers."
                            ghLink="https://github.com/hassan-mehedi/video-chat"
                            demoLink=""
                        />
                    </Col>

                    <Col lg={4} md={6} sm={12} xs={12} className="project-card">
                        <ProjectCard
                            imgPath={workInProgress}
                            isBlog={false}
                            title="Traveller"
                            stack="Next.js | Express.js | PostgreSQL | TypeORM"
                            isInProgress={true}
                            description="It's a joint project. A social platform for travelers. I am currently working on the backend and using TypeScript with Express.js for API, PostgreSQL as Database, TypeORM as ORM."
                            ghLink="https://github.com/Conquest-IT/Traveler"
                            demoLink=""
                        />
                    </Col>

                    <Col lg={4} md={6} sm={12} xs={12} className="project-card">
                        <ProjectCard
                            imgPath={quizApp}
                            isBlog={false}
                            title="Quiz Application"
                            stack="React.js | Public API"
                            isInProgress={false}
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
                            stack="React.js"
                            isInProgress={false}
                            description="A classic tic-tac-toe game using ReactJS. It's a two player game."
                            ghLink="https://github.com/hassan-mehedi/tic-tac-toe-game"
                            demoLink="https://tic-tac-toe-online.netlify.app/"
                        />
                    </Col>

                    <Col lg={4} md={6} sm={12} xs={12} className="project-card">
                        <ProjectCard
                            imgPath={cropPrediction}
                            isBlog={false}
                            title="Predict Your Crop"
                            stack="Python | ML | Streamlit"
                            isInProgress={false}
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
                            stack="HTML | CSS | JS"
                            isInProgress={false}
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
