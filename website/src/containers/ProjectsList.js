import React from 'react'
import { Link } from 'react-router-dom'

import MBTA from './../components/projects/MBTA'
import Capstone from './../components/projects/Capstone'
import AACC from './../components/projects/AACC'
import Drawings from './../components/projects/Drawings'

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
            <MBTA />
            <Capstone />
            <AACC />
            <Drawings />
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