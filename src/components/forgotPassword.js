import React from 'react';

import { Link } from 'react-router-dom';

const personal = {
    companyName: "Developed by Giffy Insight Technologies.",
    phoneNumber: "Tel : 09013970506"
}


const ForgotPassword = () => {
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
            <div className="forgotPassword-container">
                <p style={{fontSize:"1.5rem"}}>Forgot your password?</p>
                <p style={{marginTop:"1rem"}}>Enter your Email Address below to reset your Password.</p>
                
                    <input className="forgotpass" type="text" placeholder="Email Address" ></input>
                    <button className="forgot-submitbtn">SUBMIT</button>               
            </div>

            <p style={{textAlign:"center", fontSize:".8rem", padding:".5rem", background:"whitesmoke"}}>&copy; Copyright 2021 Amukpe Community.</p>

            <div style={{lineHeight: ".8rem", color: "grey", textAlign: "right", backgroundColor: "black", fontSize: ".7rem", padding: ".5rem 2rem .5rem 0rem"}}><p>{personal.companyName}</p>
                <p>{personal.phoneNumber} </p>
            </div>
        </section>
    )
}

export default ForgotPassword;