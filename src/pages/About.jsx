import React from "react";
import { BiSolidHandRight } from "react-icons/bi";
export default function About() {
    return(
        <section className="about" id="About">
        <div className="container" id="About-container">
            <h3 className="section-subtitle">ABOUT ME</h3>
            <h2 className="section-title">Best Skills On:</h2>
            <p className="about-text">At Sift, we understand that success is just about delivering a product - it's about building relationships and making a meaningful impact of client.</p>
            <div className="services-list">
                <div className="service-item">
                    <BiSolidHandRight />
                    <i className="fas fa-pencil-ruler"></i>
                    <span>UI/UX DESIGN</span>
                </div>
                <div className="service-item">
                    <BiSolidHandRight />
                    <i className="fas fa-cube"></i>
                    <span>PRODUCT DESIGN</span>
                </div>
                <div className="service-item">
                    <BiSolidHandRight />
                    <i className="fas fa-code"></i>
                    <span>WEB DEVELOPMENT</span>
                </div>
                <div className="service-item">
                    <BiSolidHandRight />
                    <i className="fas fa-palette"></i>
                    <span>BRANDING & DESIGN</span>
                </div>
            </div>
            <div className="about-stats">
                <div className="stat-item" id="box1">
                    <h3>10K</h3>
                    <p>Satisfied Customer</p>
                </div>
                <div className="stat-item" id="box1">
                    <h3>12K</h3>
                    <p>All Project Completed</p>
                </div>
            </div>
        </div>
    </section>

    )
}