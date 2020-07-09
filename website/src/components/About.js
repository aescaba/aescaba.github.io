import React from 'react'
import { Link } from 'react-router-dom'

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className="container">
        <h1>About Me</h1>
        <p>
            this is the about me page
        </p>
        </div>
        )
    }
}

export default About