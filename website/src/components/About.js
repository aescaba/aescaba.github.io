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
            hello
            {/* <Link to="/taniarascia">taniarascia</Link> on GitHub. */}
        </p>
        </div>
        )
    }
}

export default About