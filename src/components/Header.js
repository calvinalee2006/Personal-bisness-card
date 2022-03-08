import React from 'react';
import smiles from "../images/smiles.jpg";
import { Card, Button } from 'react-bootstrap';

export default function Header() {
    return (
        <div >
            <Card.Img
                variant="top"
                src={smiles} />

            <Card.Body ClassName="Card-Body">
                <Card.Title>Calvin A. Lee</Card.Title>
                <Card.Text ClassName="Developer">Software Developer </Card.Text>
                <a href="Calvinalee2006@hotmail.com" target="_blank" className="Email">
                    <Button>E-mail </Button>
                </a>
                <a href="https://www.linkedin.com/in/calvin-lee-90082006/" target="_blank" className="LinkdIn">
                    <Button> LinkedIn </Button>
                </a>

                <Card.Text className="Subject">About</Card.Text>
                <Card.Text className="CardText">I am a Software Developer with interest in designing simple,
                    and elegant applications with React. I can also design applications with
                    HTML, CSS and JavaScript. I also have experience in back-end development with SQL. </Card.Text>

                <Card.Text className="Subject">Interest</Card.Text>
                <Card.Text className="CardText">In my spare time I like to spend time with my family at home. I also,
                    love to go to the gym and push myself to the limit.  </Card.Text>

            </Card.Body>


            {/* <img src={smiles}
                alt="picture of me smiling"
                className="smilePic" />

            <h1 className="Name">Calvin A. Lee</h1>
            <p className="Title">Software Developer</p>

            <a href="Calvinalee2006@hotmail.com" target="_blank" className="Email">
                <Button>E-mail </Button>
            </a>

            <a href="https://www.linkedin.com/in/calvin-lee-90082006/" target="_blank" className="LinkdIn">
                <Button> LinkedIn </Button>
            </a> */}

        </div>
    )
}