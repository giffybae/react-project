import React, {useState} from 'react';
import { Link } from "react-router-dom";





const Header = () => {

    const [showMenu, setShowMenu] = useState(false)

    let menu
    let menuMask
    if(showMenu) {
        menu = <div className="menu-header">
           <ul>
               <li>
                   <Link style={{textDecoration:"none", color:"white"}} to="/">Home</Link>
               </li>
               <li>
                    <Link style={{textDecoration:"none", color:"white"}} to="/about">About</Link>
                </li>
                <li>
                    <Link to="/services" style={{textDecoration:"none", color:"white"}}>Services</Link>
                </li>
                <li>
                    <Link to="/contact" style={{textDecoration:"none", color:"white"}}>Contact</Link>
                </li>
                <li>
                    <Link style={{textDecoration:"none", color:"white"}} to="/jobopenings">Jobs Openings</Link>
                </li>

                <li>
                    <Link style={{textDecoration:"none", color:"white"}} to="/blog">Blog</Link>
                </li>
                <li>
                    <Link style={{textDecoration:"none", color:"white"}} to="/registration">Sign Up</Link>
                </li>
                <li>
                    <Link style={{textDecoration:"none", color:"white"}} to="/login">Sign In</Link>
                </li>
           </ul>
        </div>

       menuMask = <div className="header-menuMask" onClick={() => setShowMenu(false)}></div>
    }

    return (
        <section className="page-header">
            <div>
                <Link style={{color:"white", textDecoration:"none"}} to="/"><h1>Amukpe Community</h1></Link>
            </div>

            <div className="nav-list">
                <div className="header-menu">
                    <ul>
                        <li>
                            <Link  to="/" style={{textDecoration:"none", color:"white"}}>Home</Link>
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
                        <Link  to="/jobopenings" style={{textDecoration:"none", color:"white"}}>Jobs</Link>
                        </li>
                    </ul>
                </div>

            </div>

            <div className="sign-btn">
                <Link style={{textDecoration:"none", color:"white"}} to="/login"><button>SIGN IN</button></Link>
                <Link style={{textDecoration:"none", color:"white"}} to="/registration"><button>SIGN UP</button></Link>
                    
            </div>

            <div>
                    <nav>
                        <div onClick={() => setShowMenu(!showMenu)}>
                        <span className="fa fa-bars header-bar"></span>
                        </div>
                        {menuMask}
                        {menu}
                    </nav>
                </div>

                
        </section>
    )
}

export default Header;