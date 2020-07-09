import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'


class Contact extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="container">
                <h1>Contact</h1>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faEnvelopeOpenText} />
                        Email me at <a href="mailto:amandaescaba@gmail.com">amandaescaba@gmail.com</a>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faLinkedin} />
                        Connect with me on <a href="https://www.linkedin.com/in/aescaba/">LinkedIn</a>
                    </li>
                </ul>
            </div >
        )
    }
}

export default Contact