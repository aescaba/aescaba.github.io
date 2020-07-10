import React from 'react'

import Preview from './../../assets/placeholder-proj.jpg'


const AACC = () =>
    <div className="project-row row" id="aacc-listview">
        <div className="col">
            <img src={Preview} className="project-img-preview img-fluid" alt="EDIT LATER"></img>
        </div>
        <div className="col">
            <p>AACC description</p>
        </div>
    </div>

export default AACC