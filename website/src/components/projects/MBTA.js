import React from 'react'

import Preview from './../../assets/placeholder-proj.jpg'


const MBTA = () =>
    <div className="project-row row" id="mbta-listview">
        <div className="col">
            <img src={Preview} className="project-img-preview img-fluid" alt="EDIT LATER"></img>
        </div>
        <div className="col">
            <p>mbta description</p>
        </div>
    </div>

export default MBTA