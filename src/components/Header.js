import React from "react"

export default function Header() {
    return (
        <header className="header">
            <img 
                src="/troll-face.png" 
                className="header--image"
                alt="troll meme face"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">Hiro's Meme Generator</h4>
        </header>
    )
}