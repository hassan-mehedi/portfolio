import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiExpress,
    SiElectron,
    SiTypescript,
    SiMongodb,
    SiPostgresql,
    SiPrisma,
    SiDjango,
    SiFlask,
    SiJavascript,
    SiPython,
    SiGnubash,
    SiCplusplus,
} from "react-icons/si";

function Techstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <SiReact />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiNextdotjs />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiElectron />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiNodedotjs />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiExpress />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiMongodb />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiPostgresql />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiPrisma />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiDjango />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiFlask />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiJavascript />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiTypescript />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiPython />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiGnubash />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiCplusplus />
            </Col>
        </Row>
    );
}

export default Techstack;
