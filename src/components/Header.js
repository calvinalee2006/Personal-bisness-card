import React from 'react';
import smiles from "../images/smiles.jpg"

export default function Header() {
    return (
        <div>
            <img src={smiles}
                alt="picture of me smiling"
                className="smilePic" />

            <h1 className="name">Calvin A. Lee</h1>
            <p className="title">Software Developer</p>
            <p className="email">CalvinALee2006@hotmail.com</p>

        </div>
    )
}