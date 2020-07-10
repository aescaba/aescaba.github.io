import React from 'react'

import Preview from './../../assets/placeholder-proj.jpg'


const Drawings = () =>
    <div className="project-row row" id="drawings-listview">
        <div className="col">
            <img src={Preview} className="project-img-preview img-fluid" alt="EDIT LATER"></img>
        </div>
        <div className="col">
            <p>drawings description</p>
        </div>
    </div>

export default Drawings