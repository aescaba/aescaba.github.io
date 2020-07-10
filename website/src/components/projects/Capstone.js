import React from 'react'

import Preview from './../../assets/placeholder-proj.jpg'


const Capstone = () =>
    <div className="project-row row" id="capstone-listview">
        <div className="col">
            <img src={Preview} className="project-img-preview img-fluid" alt="EDIT LATER"></img>
        </div>
        <div className="col">
            <p>capstone description</p>
        </div>
    </div>

export default Capstone