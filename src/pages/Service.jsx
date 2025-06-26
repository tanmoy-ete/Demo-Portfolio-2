import React from "react";
import { BiNews } from "react-icons/bi";
import { MdFlipToFront } from "react-icons/md";
import { FaHeadSideVirus } from "react-icons/fa6";
import { FaWordpressSimple } from "react-icons/fa";
import { MdOutlineBrandingWatermark } from "react-icons/md";
import { RiPhpLine } from "react-icons/ri";
import { IoLogoDesignernews } from "react-icons/io5";

export default function Service() {
    return (
        <section className="services" id="Service">
        <div className="container">
            <h3 className="section-subtitle">MY SERVICE PROVIDE</h3>
            <h2 className="section-title">MY BEST QUALITY SERVICE</h2>
            <div className="services-grid-1">
                <div className="service-card" id="card1">
                    <div className="service-icon">
                        <BiNews />
                    </div>
                    <h3>UI/UX DESIGN</h3>
                    <p>UI/UX design is the cornerstone of creating exceptional digital experiences that seamlessly blend aesthetics with functionality. At Sift, we believe in the power of intuitive.</p>
                    <a href="#" className="read-more">READ MORE</a>
                </div>
                <div className="service-card" id="card1">
                    <div className="service-icon">
                        <FaHeadSideVirus />
                    </div>
                    <h3>CMS DEVELOPMENT</h3>
                    <p>At Sift, we specialise in crafting bespoke an CMS solutions tailored to meet the unique needs of your business. provide you with.</p>
                    <a href="#" className="read-more">READ MORE</a>
                </div>
            </div>
            <div className="services-grid-2">
                <div className="service-card" id="card2">
                    <div className="service-icon">
                        <MdFlipToFront />
                    </div>
                    <h3>FRONT-END DEVELOPMENT</h3>
                    <p>At Sift, we specialise in crafting front-end solutions that captivate users & drive, Leveraging the latest web.</p>
                    <a href="#" className="read-more">READ MORE</a>
                </div>
                <div className="service-card" id="card2">
                    <div className="service-icon" >
                        <FaWordpressSimple />
                    </div>
                    <h3>WP DEVELOPMENT</h3>
                    <p>At Sift, we specialise in crafting bespoke an CMS solutions tailored to meet the unique needs of your business, provide you with.</p>
                    <a href="#" className="read-more">READ MORE</a>
                </div>
                <div className="service-card" id="card2">
                    <div className="service-icon">
                        <RiPhpLine />
                    </div>
                    <h3>PHP DEVELOPMENT</h3>
                    <p>At Sift, we specialise in crafting bespoke an CMS solutions tailored to meet the unique needs of your business. provide you with.</p>
                    <a href="#" className="read-more">READ MORE</a>
                </div>
            </div>
            <div className="services-grid-1">
                <div className="service-card" id="card1">
                    <div className="service-icon">
                        <MdOutlineBrandingWatermark />
                    </div>
                    <h3>BRANDING IDENTITY</h3>
                    <p>At Sift, we understand the transformative power of branding identity in shaping perceptions & fostering connections. We believe that a strong brand identity goes beyond just a logo; it's about crafting a cohesive.</p>
                    <a href="#" className="read-more">READ MORE</a>
                </div>
                <div className="service-card" id="card1">
                    <div className="service-icon">
                        <IoLogoDesignernews />

                    </div>
                    <h3>LOGO DESIGN</h3>
                    <p>At Sift, we recognise the significance of a logo as the cornerstone of a brand's visual identity. Our logo design process is driven by a deep logo understanding of your brand's essence, values, and target audience.</p>
                    <a href="#" className="read-more">READ MORE</a>
                </div>
            </div>
        </div>
    </section>

    )
}