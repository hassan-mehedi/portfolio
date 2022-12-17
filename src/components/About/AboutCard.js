import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        Hi Everyone, I am <span className="purple">Md. Mehedi Hassan </span>
                        from <span className="purple"> Dhaka, Bangladesh.</span>
                        <br />I am a Junior Software Engineer.
                        <br />
                        <br />
                        Apart from coding, some other activities that I love to do!
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight /> Playing Games
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Reading Novels, Manga & Tech Articles
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Tasting New Foods
                        </li>
                    </ul>

                    <p style={{ color: "rgb(155 126 172)" }}>"The harder I work, the luckier I get." </p>
                    <footer className="blockquote-footer">Samuel Goldwyn</footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;
