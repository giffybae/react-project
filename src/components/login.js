import React from 'react';
import googleIcon from '../Images/google icon (2).png';

const Login = () => {
    return (
        <section>
            <div className="login-container">
                <div className="left-section">
                    <div className="left-content">
                        <h1>Hello</h1>
                        <p>Enter your personal details and start a journey with us</p>
                        <button>SIGN UP</button>
                    </div>
                </div>

                <div className="right-section">
                    <div>
                        <h1 className="sign-in">Sign In</h1>
                        <img className="google-icon" alt="#" src={googleIcon}></img>
                        <p className="or-email">or use your email</p>
                    </div>

                    <div>
                        <input className="login-id" type="text" name="email" placeholder="Email Address"></input><br></br>
                        <input className="login-id" type="password" name="password" placeholder="Password"></input><br></br>
                    </div>

                    <div>
                        <a style={{textDecoration:"none"}} href="/"><p className="forgot-pw">Forgot password? </p></a>

                        <button className="continue-btn">Continue</button> 
                        <p className="new-member">New Member?</p>
                        <a style={{textDecoration:"none"}} href="/"><p className="create-acct">Create an account</p></a>
                    </div>

                </div>
            </div>
        </section>
    )
};


export default Login;