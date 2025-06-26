import React from "react"
import {Link} from 'react-scroll'

export default function Navbar(){
    return (
        <section className="Navbar">
            <div className="logo">
                <h2>Alex</h2>
            </div>
            <div className="nav-options">
                <ul className= "nav-links">
                    {["About","Service","Skills","Projects","Testimonials","Contact"].map((item) =>
                        (
                            <li key={item }>
                                <Link to={item} smooth={true} duration={500} offset={-100} className="nav-link">{item }</Link>
                            </li>
                        ) 
                    )}
                </ul> 
            </div>
        </section>
    )
}