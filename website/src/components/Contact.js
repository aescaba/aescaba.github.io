import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
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
                        Email me at <a href="mailto:amandaescaba@gmail.com">amandaescaba@gmail.com</a>
                    </li>
                </ul>
            </div >
        )
    }
}

export default Contact

{/* <div class="main col-md-9 col-lg-10">
<div class="row">
  <div class="heading">
    <h3>contact me</h3>
  </div>
</div>
<div class="row">
    <ul>
        <li class="contact-item">
          <a class="contact-link" href="#">email</a>
        </li>
        <li class="contact-item">
          <a class="contact-link" href="#">linkedin</a>
        </li>
      </ul>
</div>
</div> */}