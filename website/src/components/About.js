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
                <p>I grew up in the Hudson Valley, New York, and spent the last five years going to Northeastern University in Boston studying computer science and interaction design.</p>
                <p>I'm interested in designing compelling, useful, accessible, and beautiful user-focused experiences. Outside of work, I like to find myself consuming or creating art and media&mdash;usually through drawing, painting, or making too many Spotify playlists.</p>
                <p>I'm currently seeking job opportunities in New York City!</p>
            </div>
        )
    }
}

export default About