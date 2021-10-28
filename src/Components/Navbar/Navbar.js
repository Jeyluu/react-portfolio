import React, {useContext}from 'react'
import { ThemeContext} from '../../Context/ThemeContext'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'
import {FiSun} from 'react-icons/fi'

export default function Navbar() {

    const {toggleTheme, theme}= useContext(ThemeContext)

    return (

        <>
            <nav>
                <ul className="linkList">
                    <Link to="/introduction"><li className="nav-link">Introduction</li></Link>
                    <Link to="/skills"><li className="nav-link">Compétences</li></Link>
                    <Link to="/project"><li className="nav-link">Projets</li></Link>
                    <Link to="/contact"><li className="nav-link">Me contacter</li></Link>
                    <button className={theme ? " btn-toggle " : "btn-toggle  dark-btn"} onClick={toggleTheme}>{theme ? <FiSun/> : <FaMoon/>}</button>
                </ul>
            </nav>
            
        </>
    )
}
