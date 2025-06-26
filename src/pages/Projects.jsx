import React from "react"

export default function Projects() {
    return(
<section className="projects" id="Projects">
        <div className="container">
            <h3 className="section-subtitle">PROJECTS FEATURES</h3>
            <h2 className="section-title">OUR FEATURES PROJECTS</h2>
            
            <div className="projects-grid">
                <div className="project-card">
                    <img src="https://via.placeholder.com/400x300" alt="Boltshift Project"></img>
                    <div className="project-overlay">
                        <h3>Boltshift</h3>
                        <p>Unlock Seamless Project Management with Quad</p>
                        <a href="#" className="view-more">VIEW MORE PROJECT</a>
                    </div>
                </div>
                <div className="project-card">
                    <img src="https://via.placeholder.com/400x300" alt="Lightbox Project"></img>
                    <div className="project-overlay">
                        <h3>Lightbox</h3>
                        <p>Unlock Seamless Project Management with Quad</p>
                        <a href="#" className="view-more">VIEW MORE PROJECT</a>
                    </div>
                </div>
                <div className="project-card">
                    <img src="https://via.placeholder.com/400x300" alt="FeatherDev Project"></img>
                    <div className="project-overlay">
                        <h3>FeatherDev</h3>
                        <p>Unlock Seamless Project Management with Quad</p>
                        <a href="#" className="view-more">VIEW MORE PROJECT</a>
                    </div>
                </div>
                <div className="project-card">
                    <img src="https://via.placeholder.com/400x300" alt="GlobalBank Project"></img>
                    <div className="project-overlay">
                        <h3>GlobalBank</h3>
                        <p>Unlock Seamless Project Management with Quad</p>
                        <a href="#" className="view-more">VIEW MORE PROJECT</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}