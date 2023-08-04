import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiDocker, SiNpm, SiVite, SiVisualstudiocode, SiAmazonaws, SiPostman, SiLinux, SiCypress, SiJest, SiVirtualbox } from "react-icons/si";

function Toolstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <SiDocker />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiNpm />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiVite />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiVisualstudiocode />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiAmazonaws />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiPostman />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiLinux />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiCypress />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiJest />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiVirtualbox />
            </Col>
        </Row>
    );
}

export default Toolstack;
