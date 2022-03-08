import React from 'react';
import smiles from "../images/smiles.jpg"
import { Button } from 'react-bootstrap'


export default function Header() {
    return (
        <div >



            <img src={smiles}
                alt="picture of me smiling"
                className="smilePic" />

            <h1 className="Name">Calvin A. Lee</h1>
            <p className="Title">Software Developer</p>

            <a href="Calvinalee2006@hotmail.com" target="_blank" className="Email">
                <Button>E- </Button>
            </a>

            <a href="https://www.linkedin.com/in/calvin-lee-90082006/" target="_blank" className="LinkdIn">
                <Button> LinkedIn </Button>
            </a>

        </div>
    )
}