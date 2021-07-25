import React from 'react';
import {Link} from 'react-router-dom';
import googleIcon from '../Images/google icon (2).png';


const personal = {
    companyName: "Developed by Giffy Insight Technologies.",
    phoneNumber: "Tel : 09013970506"
}

const Login = () => {
    return (
        <section>

            <div className="page-header">
                <div>
                    <Link style={{textDecoration:"none", color:"white"}} to="/home"><h1>Amukpe Community</h1></Link>
                </div>

                <div className="nav-list">
                    <div>
                        <ul>
                            <li>
                                <Link style={{textDecoration:"none", color:"white"}} to="/home"><span className="fa fa-home"></span>&nbsp;Back Home</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="registration-container">
                <div className="left-section">
                    <div className="left-content">
                        <h1>Hello</h1>
                        <p>Enter your personal details and start a journey with us</p>
                        <Link style={{textDecoration:"none", color:"white"}} to="/registration" ><button>SIGN UP</button></Link>
                    </div>
                </div>

                <div className="right-section">
                    <div>
                        <h1 className="sign-in">Sign In</h1>
                        <img className="google-icon" alt="#" src={googleIcon}></img>
                        <p className="or-email">or use your email</p>
                    </div>

                    <div>
                        <input className="registration-id" type="text" name="email" placeholder="Email Address"></input><br></br>
                        <input className="registration-id" type="password" name="password" placeholder="Password"></input><br></br>
                    </div>

                    <div>
                        <a style={{textDecoration:"none"}} href="/"><p className="forgot-pw">Forgot password? </p></a>

                        <button className="continue-btn">Continue</button> 
                        <p className="new-member">New Member?</p>
                        <a style={{textDecoration:"none"}} href="/registration"><p className="create-acct">Create an account</p></a>
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


export default Login;