import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
    return (
        <Card className="project-card-view">
            <Card.Img variant="top" src={props.imgPath} alt="card-img" width="200px" height="300px" style={{ objectFit: "cover" }} />
            <Card.Body style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>
                <Card.Title>{props.title}</Card.Title>

                <Card.Subtitle style={{ margin: "10px 0" }}>{props.stack}</Card.Subtitle>

                <Card.Text style={{ textAlign: "justify" }}>{props.description}</Card.Text>

                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "10px" }}>
                    <Button variant="primary" href={props.ghLink} target="_blank">
                        <BsGithub /> &nbsp;
                        {props.isBlog ? "Blog" : "GitHub"}
                    </Button>

                    {!props.isBlog && props.demoLink && (
                        <Button variant="primary" href={props.demoLink} target="_blank">
                            <CgWebsite /> &nbsp;
                            {"Demo"}
                        </Button>
                    )}
                </div>
            </Card.Body>
        </Card>
    );
}
export default ProjectCards;
