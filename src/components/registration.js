import React from 'react';

import {Link} from 'react-router-dom'
const personal = {
    companyName: "Developed by Giffy Insight Technologies.",
    phoneNumber: "Tel : 09013970506"
}

const Registration = () => {
    return (
        <section>

            <div className="page-header">
                <div>
                    <Link style={{textDecoration:"none", color:"white"}} to="/"><h1>Amukpe Community</h1></Link>
                </div>

                <div className="nav-list">
                    <div>
                        <ul>
                            <li>
                                <Link style={{textDecoration:"none", color:"white"}} to="/"><span className="fa fa-home"></span>&nbsp;Back Home</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="registration-container">
                <div className="left-section">
                    <div className="left-content">
                        <h1>Welcome Back</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <Link style={{textDecoration:"none", color:"white"}} to="/login"><button>SIGN IN</button></Link>
                    </div>
                </div>

                <div className="right-section">
                    <div>
                        <h1 className="sign-in">Create Account</h1>

                    </div>

                    <div>
                        <input className="registration-id" type="text" name="first-name" placeholder="First Name"></input><br></br>
                        <input className="registration-id" type="text" name="last-name" placeholder="Last Name"></input><br></br>
                        <input className="registration-id" type="password" name="password" placeholder="Password"></input><br></br>
                        <input className="registration-id" type="password" name="confirm-password" placeholder="Confirm Password"></input><br></br>
                    </div>

                    <div>

                        <button className="continue-btn">SIGN UP</button> 
                        
                    </div>

                </div>
            </div>

            <p style={{textAlign:"center", fontSize:".8rem", padding:".5rem", background:"whitesmoke"}}>&copy; Copyright 2021 Amukpe Community.</p>

            <div style={{lineHeight: ".8rem", color: "grey", textAlign: "right", backgroundColor: "black", fontSize: ".7rem", padding: ".5rem 2rem .5rem 0rem"}}><p>{personal.companyName}</p>
                <p>{personal.phoneNumber} </p>
            </div>
        </section>
    )
};


export default Registration;