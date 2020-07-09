import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'

class Contact extends React.Component {
    constructor(props) {
        super(props);
    }
    

    render() {
        return (
        <div className="container">
        <h1>Contact</h1>
        <p>
        <FontAwesomeIcon icon={faEnvelopeOpenText} />
        </p>
        </div>
        )
    }
}

export default Contact