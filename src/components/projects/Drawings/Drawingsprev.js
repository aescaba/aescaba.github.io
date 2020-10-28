import React from 'react'

import Preview from './../../assets/placeholder-proj.jpg'


const Drawingsprev = () =>
    <div className="project-row row" id="drawings-listview">
        <div className="col">
            <img src={Preview} className="project-img-preview img-fluid" alt="EDIT LATER"></img>
        </div>
        <div className="col">
            <div className="project-meta">
                <h3 className="project-title">Personal Drawings</h3>
                <p>drawings description</p>
            </div>
        </div>
    </div>

export default Drawingsprev