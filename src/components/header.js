import React from 'react';

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
                            <a>Home</a>
                        </li>
                        <li>
                            <a>About</a>
                        </li>
                        <li>
                            <a>Services</a>
                        </li>
                        <li>
                            <a>Blog</a>
                        </li>
                        <li>
                            <a>Job Openings</a>
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