import React from 'react';
import { Link } from "react-router-dom";




const Header = () => {
    return (
        <section className="page-header">
            <div>
                <h1>Amukpe Community</h1>
            </div>

            <div className="nav-list">
                <div>
                    <ul>
                        <li>
                            <Link  to="/home" style={{textDecoration:"none", color:"white"}}>Home</Link>
                        </li>
                        <li>
                        <Link  to="/about" style={{textDecoration:"none", color:"white"}}>About</Link>
                        </li>
                        <li>
                        <Link  to="/services" style={{textDecoration:"none", color:"white"}}>Services</Link>
                        </li>
                        <li>
                        <Link  to="/contact" style={{textDecoration:"none", color:"white"}}>Contact</Link>
                        </li>
                        <li>
                        <Link  to="/blog" style={{textDecoration:"none", color:"white"}}>Blog</Link>
                        </li>
                        <li>
                        <Link  to="/jobopenings" style={{textDecoration:"none", color:"white"}}>Job Openings</Link>
                        </li>
                    </ul>
                </div>

                <div className="sign-btn">
                    <button>SIGN IN</button>
                    <button>SIGN UP</button>
                </div>
            </div>

                
        </section>
    )
}

export default Header;