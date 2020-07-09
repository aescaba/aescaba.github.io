import React from 'react'
import { Link } from 'react-router-dom'

class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className="container">
        <h1>Contact</h1>
        <p>
            hello
            {/* <Link to="/taniarascia">taniarascia</Link> on GitHub. */}
        </p>
        </div>
        )
    }
}

export default Contact