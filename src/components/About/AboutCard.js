import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        Hello!, I am <span className="purple">Md. Mehedi Hassan </span>
                        from <span className="purple"> Dhaka, Bangladesh.</span> I am 25 years old and completed my{" "}
                        <span className="purple">Bachelors Degree</span> on <span className="purple">Computer Science & Engineering</span> from{" "}
                        <span className="purple">UITS</span> (University of Information technology & Science).
                        <br />
                        Currently I am working as a Junior Software Engineer at <span className="purple">Bioforge System LTD</span>, which is a
                        Biomedical Hardware & Software Company .
                        <br />
                        <br />
                        Apart from coding, some other activities that I love to do!
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight /> Playing Video Games
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Reading Novels, Manga & Tech Articles
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Trying New Foods
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
