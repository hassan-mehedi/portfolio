import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: "2.6em" }}>
                            LET ME <span className="purple"> INTRODUCE </span> MYSELF
                        </h1>
                        <p className="home-about-body">
                            I'm a
                            <i>
                                <b className="purple"> Junior Software Engineer </b>
                            </i>
                            with 2+ years of experience specializing in the
                            <i>
                                <b className="purple"> MERN </b>
                            </i>
                            and
                            <i>
                                <b className="purple"> PERN </b>
                            </i>
                            stacks. I have a strong background in
                            <i>
                                <b className="purple"> DevOps </b>
                            </i>
                            , handling development with
                            <i>
                                <b className="purple"> Docker </b>
                            </i>
                            and implementing automatic deployments using
                            <i>
                                <b className="purple"> GitHub Actions </b>
                            </i>
                            .
                            <br />
                            <br /> I also have experience with
                            <i>
                                <b className="purple"> Microservices </b>
                            </i>
                            . My cloud management experience includes working with
                            <i>
                                <b className="purple"> AWS services </b>
                            </i>
                            such as
                            <i>
                                <b className="purple"> EC2 </b>
                            </i>
                            ,
                            <i>
                                <b className="purple"> RDS </b>
                            </i>
                            ,
                            <i>
                                <b className="purple"> ECR </b>
                            </i>
                            ,
                            <i>
                                <b className="purple"> ECS </b>
                            </i>
                            , and
                            <i>
                                <b className="purple"> App Runner </b>
                            </i>
                            .
                            <br />
                            <br /> In addition to my frontend expertise, I have developed backend services using
                            <i>
                                <b className="purple"> Flask </b>
                            </i>
                            and
                            <i>
                                <b className="purple"> Django </b>
                            </i>
                            . I am passionate about building
                            <i>
                                <b className="purple"> scalable </b>
                            </i>
                            and
                            <i>
                                <b className="purple"> efficient </b>
                            </i>
                            software solutions, and I thrive in dynamic and collaborative environments. <br />
                            <br />
                            Let's
                            <i>
                                <b className="purple"> connect </b>
                            </i>
                            and discuss how we can leverage my skills and experience to
                            <i>
                                <b className="purple"> drive </b>
                            </i>
                            impactful projects
                            <i>
                                <b className="purple"> forward </b>
                            </i>
                            !
                        </p>
                    </Col>
                    <Col md={4} className="myAvtar">
                        <Tilt>
                            <img src={myImg} className="img-fluid" alt="avatar" />
                        </Tilt>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>FIND ME ON</h1>
                        <p>
                            Feel free to <span className="purple">connect </span>with me
                        </p>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/hassan-mehedi"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillGithub />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/howlader-mehedi/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default Home2;
