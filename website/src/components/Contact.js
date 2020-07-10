import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

import './../css/Contact.css'



// class Contact extends React.Component {
//     constructor(props) {
//         super(props);
//     }


//     render() {
//         return (
const Contact = () =>
    <div className="contact">
        <div className="row">
            <h2 className="heading">Contact</h2>
        </div>
        <div className="row">
            <ul className="contact-list">
                <li className="contact-list-item">
                    <FontAwesomeIcon
                        icon={faEnvelopeOpenText}
                        className="icon contact-icon"
                        size="2x" />
                                Email me at <a href="mailto:amandaescaba@gmail.com">amandaescaba@gmail.com</a>
                </li>
                <li className="contact-list-item">
                    <FontAwesomeIcon
                        icon={faLinkedin}
                        className="icon contact-icon"
                        size="2x" />
                                Connect with me on <a href="https://www.linkedin.com/in/aescaba/" target="_blank">LinkedIn</a>
                </li>
            </ul>
        </div>
    </div>
//         )
//     }
// }

export default Contact