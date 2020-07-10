import React from 'react'
// import { render } from '@testing-library/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmileBeam } from '@fortawesome/free-regular-svg-icons'

// class Home extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return (
const Home = () =>
    <div className="home">
        <div className="row">
            <h1>Hello! <FontAwesomeIcon icon={faSmileBeam} className="icon" /></h1>
        </div>
        <div className="row">
            <p>I'm Amanda&mdash;a designer, developer, &amp; artist.</p>
        </div>
    </div>

//         )
//     }
// }

export default Home