import React from 'react'

import Preview from './../../assets/placeholder-proj.jpg'


const MBTA = () =>
    <div className="project-row row" id="mbta-listview">
        <div className="col">
            <img src={Preview} className="project-img-preview img-fluid" alt="EDIT LATER"></img>
        </div>
        <div className="col">
            <div className="project-meta">
                <h3 className="project-title">MBTA Projects</h3>
                {/* TO LINK */}
                <h4>University Marketing</h4>
                <h4>Blue Book</h4>
                <h4>Tracker</h4>
                <h4>Green Line Counter</h4>
            </div>
        </div>
    </div>

export default MBTA