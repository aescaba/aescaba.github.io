import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { render } from '@testing-library/react';

import Home from './../components/Home'
import About from './../components/About'
import ProjectsList from './../containers/ProjectsList'
import Contact from './../components/Contact'

import './../css/Main.css'

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main col-md-9 col-lg-10">
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route exact path="/projects" component={ProjectsList} />
                <Route path="/contact" component={Contact} />
            </div>
        )
    }
}

export default Main