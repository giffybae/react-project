import React from 'react';
import fbIcon from '../Images/fb-icon.png';
import whatsAppIcon from '../Images/whatsapp-icon.png';
import igIcon from '../Images/ig-icon.png';



const Footer = () => {
    return (
        <section >
            <div className="footer-section">
            <div className="footer-content">
                <h3>What We Are</h3>
                <p style={{paddingRight: "1rem"}}>
                    Amukpe Community is established to bring support to the less privilege and to put smiles on
                    the poor widows and orphans.
                </p>

                <h3 style= {{fontSize:"1.3rem"}}>Social Media Links </h3>
                <div style={{display: "flex"}}>
                    <a href="https://facebook.com"><img style={{width: "2rem", height: "2rem"}} src={fbIcon} alt="#"></img></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="https://instagram.com"><img style={{width: "2rem", height: "2rem"}}  src={igIcon} alt="#"></img></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="https://whatsapp.com"><img style={{width: "2rem", height: "2rem"}} src={whatsAppIcon} alt="#"></img></a>
                </div>
            </div>

            <div className=" footer-content">
                <h4 className="quick-link">Quick Links</h4>
                <div className="mapsite">
                    <div>
                        <ul>
                            <li>
                                <a href="/home">Home</a>
                            </li>

                            <li>
                                <a href="/home">About</a>
                            </li>

                            <li>
                                <a href="/home">Blog</a>
                            </li>

                            <li>
                                <a href="/home">Sign In</a>
                            </li>

                            <li>
                                <a href="/home">Job Openings</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <ul>

                            <li>
                                <a href="/home">Jobs</a>
                            </li>

                            <li>
                                <a href="/home">Contact</a>
                            </li>

                            <li>
                                <a href="/home">Sign Up</a>
                            </li>

                            <li>
                                <a href="/home">Support</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            <div classNameName="contact footer-content">
                <h4 className="quick-link">Contact</h4>
                <div className="address">
                    <div className="contact-icon">
                        <span className="fa fa-send"></span>
                    </div>
                    <div className="contact-info">
                        <p>Location</p>
                        <p>Sapele Delta State</p>
                    </div>
                </div>

                <div className="address">
                    <div className="contact-icon">
                        <span className="fa fa-envelope"></span>
                    </div>
                    <div className="contact-info">
                        <p>Email Address</p>
                        <p><a style={{color: "grey", fontSize:" .8rem"}} href="mailto:amukpecommunity@gmail.com">amukpecommunity@gmail.com</a></p>
                    </div>
                </div>

                <div className="address">
                    <div className="contact-icon">
                        <span className="fa fa-phone"></span>
                    </div>
                    <div className="contact-info">
                        <p>Call Us on</p>
                        <p><a style={{color: "grey"}} href="tel:+2348067263200">08067263200</a></p>
                    </div>
                </div>
            </div>

            
       </div>

       <div class="copyright">
           <p>&copy; Copyright 2021. Amukpe Community</p>
           
       </div>
       <div style={{lineHeight: ".9rem", color: "grey", textAlign: "right", backgroundColor: "black", fontSize: ".8rem", padding: ".5rem 2rem .5rem 0rem"}}><p>Developed by Giffy Insight Technologies.</p>
         <p>Tel : 09013970506 </p>
        </div>
        </section>
    )
};

export default Footer;