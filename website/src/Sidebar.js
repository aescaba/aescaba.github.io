// https://codeburst.io/how-to-create-a-navigation-bar-and-sidebar-using-react-348243ccd93

import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default class Sidebar extends React.Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route exact path="/Projects" component={Projects} />
                <Route path="/Contact" component={Contact} />
                <Link to="/">home</Link><br />
                <Link to="/about">about</Link><br />
                <Link to="/projects">projects</Link><br />
            </Router>

            //     <nav className="col-md-2 sidebar">
            //     <div className="sidebar-sticky">
            //       <ul className="nav flex-column">
            //         <li className="nav-item">
            //           <a className="nav-link" href="#">home</a>
            //         </li>
            //         <li className="nav-item">
            //           <a className="nav-link" href="about.html">about</a>
            //         </li>
            //         <li className="nav-item">
            //           <a className="nav-link" href="projects.html">projects</a>
            //         </li>
            //         <li className="nav-item">
            //           <a className="nav-link" href="resume_0517.pdf"  target="_blank">resume</a>
            //         </li>
            //         <li className="nav-item">
            //           <a className="nav-link" href="contact.html">contact</a>
            //         </li>
            //       </ul>
            //     </div>
            //   </nav>
        );
    }
}