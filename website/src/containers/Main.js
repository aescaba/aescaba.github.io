import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { render } from '@testing-library/react';

import Home from './../components/Home'
import About from './../components/About'
import Projects from './../components/Projects'
import Contact from './../components/Contact'

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container main">
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About} />
                <Route exact path="/projects" component={Projects} />
                <Route path="/contact" component={Contact} />
            </div>
        )
    }
}

export default Main