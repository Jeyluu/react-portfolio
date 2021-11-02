import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

export default function Navbar() {



    return (

        <>
            <nav>
                <ul className="linkList">
                    <Link to="/introduction"><li className="nav-link">Introduction</li></Link>
                    <Link to="/skills"><li className="nav-link">Compétences</li></Link>
                    <Link to="/project"><li className="nav-link">Projets</li></Link>
                    <Link to="/contact"><li className="nav-link">Me contacter</li></Link>
                </ul>
            </nav>
            
        </>
    )
}
