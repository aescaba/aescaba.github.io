import React from 'react'

import Preview from './../../assets/placeholder-proj.jpg'


const Capstone = () =>
    <div className="project-row row" id="capstone-listview">
        <div className="col">
            <img src={Preview} className="project-img-preview img-fluid" alt="EDIT LATER"></img>
        </div>
        <div className="col">
            <div className="project-meta">
                <h3 className="project-title">Tastes of the Motherland</h3>
                <h4 className="project-subtitle">Capstone Project</h4>
                <p>capstone description</p>
            </div>
        </div>
    </div>

export default Capstone