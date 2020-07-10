import React from 'react'

import Preview from './../../assets/placeholder-proj.jpg'


const AACC = () =>
    <div className="project-row row" id="aacc-listview">
        <div className="col">
            <img src={Preview} className="project-img-preview img-fluid" alt="EDIT LATER"></img>
        </div>
        <div className="col">
            <div className="project-meta">
                <h3 className="project-title">Asian American Community Conference Marketing</h3>
                <p>AACC description</p>
            </div>
        </div>
    </div>

export default AACC