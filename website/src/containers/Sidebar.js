// https://codeburst.io/how-to-create-a-navigation-bar-and-sidebar-using-react-348243ccd93

import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'

import './../css/Sidebar.css'

export default class Sidebar extends React.Component {
    render() {
        return (
            <nav className="col-sm-2 col-lg-2 sidebar">
                <div className="sidebar-sticky">
                    <ul className="nav flex-column">
                        <li className="nav-item"><Link to="/">home</Link></li>
                        <li className="nav-item"><Link to="/about">about</Link></li>
                        <li className="nav-item"><Link to="/projects">projects</Link></li>
                        <li className="nav-item"><Link to="/contact">contact</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}