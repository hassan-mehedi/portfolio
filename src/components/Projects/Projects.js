import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import quizApp from "../../Assets/Projects/quiz-app.png";
import chatApp from "../../Assets/Projects/chat-app.png";
import cropPrediction from "../../Assets/Projects/crop-pred.png";
import flappyBird from "../../Assets/Projects/flappy-bird.png";
import ticTacToe from "../../Assets/Projects/tic-tac-toe.png";
import workInProgress from "../../Assets/Projects/work_in_progress.jpg";
import contactManagementSystem from "../../Assets/Projects/contact-management-system.png";
import connectFour from "../../Assets/Projects/connect-four.png";
import passwordGenerator from "../../Assets/Projects/password-generator.png";
import expenseTracker from "../../Assets/Projects/expense-tracker.png";
import googleBookshelve from "../../Assets/Projects/google-bookshelve.png";
import winstonChalk from "../../Assets/Projects/winston-chalk.png";

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
                            imgPath={contactManagementSystem}
                            isBlog={false}
                            title="Contact Management System"
                            stack="Next.js | MongoDB | Prisma | Kinde Auth"
                            isInProgress={false}
                            description="This is a web application for contact management that integrates OAuth for enhanced
                            security. Users can efficiently create, search, edit and update their contacts."
                            ghLink="https://github.com/hassan-mehedi/contact-management-system"
                            demoLink="https://contact-management-system-pi.vercel.app/"
                        />
                    </Col>

                    <Col lg={4} md={6} sm={12} xs={12} className="project-card">
                        <ProjectCard
                            imgPath={connectFour}
                            isBlog={false}
                            title="Connect Four"
                            stack="React.js | TypeScript | Tailwind CSS | Context API"
                            isInProgress={false}
                            description="A classic connect four game using ReactJS. It's a two player game."
                            ghLink="https://github.com/hassan-mehedi/Connect-Four"
                            demoLink="https://connect-four-game-by-mehedi.netlify.app/"
                        />
                    </Col>

                    <Col lg={4} md={6} sm={12} xs={12} className="project-card">
                        <ProjectCard
                            imgPath={winstonChalk}
                            isBlog={false}
                            title="Winston Chalk"
                            stack="Node.js | Winston | Chalk"
                            isInProgress={false}
                            description="An NPM package that logs messages to the console using chalk and winston."
                            ghLink="https://github.com/hassan-mehedi/winston-chalk"
                            demoLink="https://www.npmjs.com/package/winston-chalk"
                        />
                    </Col>

                    <Col lg={4} md={6} sm={12} xs={12} className="project-card">
                        <ProjectCard
                            imgPath={passwordGenerator}
                            isBlog={false}
                            title="Random Password Generator"
                            stack="HTML | CSS | JavaScript"
                            isInProgress={false}
                            description="A random password generator that generates a random password which can be copied to the clipboard."
                            ghLink="https://github.com/hassan-mehedi/password-generator"
                            demoLink="https://random-password-generator-mehedi.netlify.app/"
                        />
                    </Col>

                    <Col lg={4} md={6} sm={12} xs={12} className="project-card">
                        <ProjectCard
                            imgPath={expenseTracker}
                            isBlog={false}
                            title="Expense Tracker"
                            stack="React.js | Firebase | SCSS"
                            isInProgress={false}
                            description="A simple expense tracker that allows users to add expenses and view them in a list."
                            ghLink="https://github.com/hassan-mehedi/expense-tracker"
                            demoLink="https://expense-tracker-mehedi.netlify.app/"
                        />
                    </Col>

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

                    <Col lg={4} md={6} sm={12} xs={12} className="project-card">
                        <ProjectCard
                            imgPath={googleBookshelve}
                            isBlog={false}
                            title="Google Bookshelve"
                            stack="React.js | Material UI"
                            isInProgress={false}
                            description="A simple google bookshelf app that allows users to search for books and add them to their bookshelf."
                            ghLink="https://github.com/hassan-mehedi/library"
                            demoLink="https://google-books-by-mehedi.netlify.app/"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
