import React from 'react'
import { Link } from 'react-router-dom'
import './../css/About.css'

import Headshot from './../assets/headshot-resized.jpg'

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main">
                <div className="row">
                    <h3 className="heading">About Me</h3>
                </div>
                <div className="about row">
                    <div className="about-text col">
                        <p>I grew up in the Hudson Valley, New York, and spent the last five years going to Northeastern University in Boston studying computer science and interaction design.</p>
                        <p>I'm interested in designing compelling, useful, accessible, and beautiful user-focused experiences. Outside of work, I like to find myself consuming or creating art and media&mdash;usually through drawing, painting, or making too many Spotify playlists.</p>
                        <p>I'm currently seeking job opportunities in New York City!</p>
                    </div>
                    <div className="about-img-container col">
                        <img src={Headshot} className="about-img img-fluid" alt="Insert image description here" />
                    </div>
                </div>
            </div>
        )
    }
}

export default About