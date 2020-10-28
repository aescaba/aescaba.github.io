import React from 'react'

import Preview from './../../assets/placeholder-proj.jpg'


const AACCprev = () =>
    <div className="project-row row" id="aacc-listview">
        <div className="col">
            <img src={Preview} className="project-img-preview img-fluid" alt="EDIT LATER"></img>
        </div>
        <div className="col">
            <div className="project-meta">
                <h3 className="project-title">Asian American Community Conference Marketing</h3>
                <p>As part of the AACC’s marketing committee, I created the branding
                    and marketing materials for publicizing the 2020 conference. I designed templates for 
                    workshop facilitator bios and workshop summaries to post on the conference’s Facebook 
                    event page, as well as the Facebook event banner and pamphlet to be handed out day-of.</p>
            </div>
        </div>
    </div>

export default AACCprev