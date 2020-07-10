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
            <div className="col about-col">
                <p>I grew up in the Hudson Valley, New York, and spent the last five years going 
                    to Northeastern University in Boston studying computer science and interaction design.</p>
                <p>I like to design compelling, accessible, and user-centered experiences through different
                     mediums. Thanks to my combined degree, I've taken on the roles of a front-end developer
                      and UI/UX designer, and love positions that incorporate skills from both of these disciplines.</p> 
                <p>Outside of work, I find some of my other passions lie in being engaged in Asian American communities, 
                    drawing and painting, trying to be a foodie, making too many Spotify playlists, and
                    getting distracted by dogs in public.</p>
                <p>I'm currently seeking job opportunities in New York City!</p>
            </div>
            <div className="col about-col">
                <img src={Headshot} className="img-fluid" id="about-img" alt="Photograph of Amanda from head to shoulders, smiling next to a lamppost at sunset" />
            </div>
        </div>
    </div>
//         )
//     }
// }

export default About