import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
    return (
        <Container fluid className="footer">
            <Row>
                <Col className="footer-body" style={{ display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
                    <h3>Welcome</h3>
                    <ul className="footer-icons">
                        <li className="social-icons">
                            <a href="https://github.com/hassan-mehedi" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
                                <AiFillGithub />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.linkedin.com/in/howlader-mehedi/"
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedinIn />
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;
