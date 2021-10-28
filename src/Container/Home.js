import React from 'react'
import './Home.css'
import Nav from "../Components/Navbar/Navbar"
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom'
import Introduction from "../Components/Introduction/Introduction"
import Skills from "../Components/Skills/Skills"
import Project from "../Components/Project/Project"
import Contact from "../Components/Contact/Contact"


export default function Home() { 

    return (
        <div>
            <Router>
                <Nav/>

                <Switch>
                    <Route path="/" exact component={Introduction}/>
                    <Route path="/introduction" exact component={Introduction}/>
                    <Route path="/skills" exact component={Skills}/>
                    <Route path="/project" exact component={Project}/>
                    <Route path="/contact" exact component={Contact}/>
                </Switch>

            </Router>

        </div>

        
    )
}
