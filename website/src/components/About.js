import React from 'react'
import './../css/About.css'

import Headshot from './../assets/headshot-resized.jpg'

// class About extends React.Component {
//     constructor(props) {
//         super(props);
//     }

// render() {
//     return (
const About = () =>
    <div className="about">
        <div className="row">
            <h2 className="heading">About Me</h2>
        </div>
        <div className="row">
            <div className="col">
                <p>I grew up in the Hudson Valley, New York, and spent the last five years going to Northeastern University in Boston studying computer science and interaction design.</p>
                <p>I'm interested in designing compelling, useful, accessible, and beautiful user-focused experiences. Outside of work, I like to find myself consuming or creating art and media&mdash;usually through drawing, painting, or making too many Spotify playlists.</p>
                <p>I'm currently seeking job opportunities in New York City!</p>
            </div>
            <div className="col">
                <img src={Headshot} className="img-fluid" alt="Photograph of Amanda from head to shoulders, smiling next to a lamppost at sunset" />
            </div>
        </div>
    </div>
//         )
//     }
// }

export default About