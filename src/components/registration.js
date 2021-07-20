import React from 'react';
import googleIcon from '../Images/google icon (2).png';

const Registration = () => {
    return (
        <section>
            <div className="login-container">
                <div className="left-section">
                    <div className="left-content">
                        <h1>Welcome Back</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button>SIGN IN</button>
                    </div>
                </div>

                <div className="right-section">
                    <div>
                        <h1 className="sign-in">Create Account</h1>

                    </div>

                    <div>
                        <input className="login-id" type="text" name="email" placeholder="Email Address"></input><br></br>
                        <input className="login-id" type="password" name="password" placeholder="Password"></input><br></br>
                        <input className="login-id" type="password" name="confirm-password" placeholder="Confirm Password"></input><br></br>
                    </div>

                    <div>

                        <button className="continue-btn">SIGN UP</button> 
                        
                    </div>

                </div>
            </div>
        </section>
    )
};


export default Registration;