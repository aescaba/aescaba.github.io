// https://codeburst.io/how-to-create-a-navigation-bar-and-sidebar-using-react-348243ccd93

import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import Home from './../components/Home'
import About from './../components/About'
import Projects from './../components/Projects'
import Contact from './../components/Contact'

export default class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <Link to="/">home</Link><br />
                <Link to="/about">about</Link><br />
                <Link to="/projects">projects</Link><br />
                <Link to="/contact">contact</Link>
            </div>

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