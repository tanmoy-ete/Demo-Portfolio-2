import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
export default function Hero() {
    return(
        <section className="hero" >
        <div className="container">
            <div className="hero-content">
                <div className="social-icons">
                    <a href="#" target='_blank' rel="noopener noreferrer" className='social-icon'><FaFacebook /></a>
                    <a href="#" target='_blank' rel="noopener noreferrer" className='social-icon'><FaInstagram /></a>
                    <a href="#" target='_blank' rel="noopener noreferrer" className='social-icon'><FaLinkedin /></a>
                    <a href="#" target='_blank' rel="noopener noreferrer" className='social-icon'><FaTwitter /></a>
                    <a href="#" target='_blank' rel="noopener noreferrer" className='social-icon'><FaGithub /></a>
                </div>
                <div className="hero-text">
                    <h4>BEST UI/UX DESIGNER & DEVELOPER IN USA</h4>
                    <h1>I'm Alex Robert</h1>
                    <h2>A UI/UX DESIGNER & DEVELOPER</h2>
                    <p>As a dedicated professional with a passion for Sift, I bring 10+ years of experience in ui/ux designer & developer throughout best of my career.</p>
                    <div className="hero-buttons">
                        <a href="cv.pdf" download="Alex Resume.pdf" className="btn primary">DOWNLOAD CV</a>
                    </div>
                </div>
                <div className="hero-img">
                    <div className="img">
                        <img src="profile.png" alt="profile pic"></img>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}