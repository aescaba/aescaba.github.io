import React from 'react'
import { Link } from 'react-router-dom'

import MBTAprev from './../components/projects/MBTA/MBTAprev'
import Capstoneprev from './../components/projects/Capstone/Capstoneprev'
import AACCprev from './../components/projects/AACC/AACCprev'
import Drawingsprev from './../components/projects/Drawings/Drawingsprev'

import './../css/ProjectsList.css'

class ProjectsList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
// const Projects = () =>
    <div className="projects">
        <div className="row">
            <h2 className="heading">Projects</h2>
        </div>
        <div className="row projects-list">
            <MBTAprev />
            <Capstoneprev />
            <AACCprev />
            <Drawingsprev />
            {/* <div className="project-row row" id="mbta"><MBTA /></div>
            <div className="project-row row" id="capstone"><Capstone /></div>
            <div className="project-row row" id="aacc"><AACC /></div>
            <div className="project-row row" id="drawings"><Drawings /></div> */}
        </div>
    </div>
    )
}
}

export default ProjectsList