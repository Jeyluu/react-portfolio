import React from 'react'
import "./Introduction.css"
import profilPic from './profile picture.jpg'
import {GiGolfFlag, GiTennisCourt} from 'react-icons/gi'
import {SiPcgamingwiki} from 'react-icons/si'


export default function Introduction() {

    return (
        <>
        <div className="intro-container">
            
            <div className="photo">
                <img src={profilPic} alt="profilpic" className="profilImg1" />
            </div>
            <div className="text-block">
                <div className="text-block-content">
                    <h1>Jérémy Luu</h1><br />
                    <h2>Développeur web et web Mobile Front-End</h2><br />
                    <p>Jeune développeur passionné par les nouvelles technologies. J'occupe actuellement un poste de développeur web Front-end chez Sepro Group. Je travaille actuellement sur le Stack React.</p><br />
                </div>

                <div className="text-block-content2">
                    <h2>Au délà du web j'aime aussi</h2>
                    <ul className="activities-list">
                        <li className="logo logo-1"><GiGolfFlag/></li>
                        <li className="logo logo-2"><GiTennisCourt/></li>
                        <li className="logo logo-3"><SiPcgamingwiki/></li>
                    </ul>
                    
                </div>
                
            </div>
            
        </div>
            
            
        </>
    )
}
