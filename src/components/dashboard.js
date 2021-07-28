import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import avatarIcon2 from '../Images/avatarIcon2-bg.png';

const username = "Michelle";
const userFirstname = `Hello ${username}`
const now = new Date();
const month = now.getMonth();
const year = now.getFullYear();
const date = now.getDate();

console.log(now)


const appliedJobs = [
    {
        id:1,
        jobTitle: 'Accountant Position in a private hospital',
        dateApplied: `${date}-${month}-${year}`
    },

    {
        id:2,
        jobTitle: 'Accountant Position in a private hospital'
    },

    {
        id:2,
        jobTitle: 'Accountant Position in a private hospital'
    },
]
const noJobsApplied = appliedJobs.length;

const Jobs = [
    {
        id:1,
        jobTitle: "Youth Empowerment Program",
        datePosted: `${date}-${month}-${year}`
        
    },

    {
        id:2,
        jobTitle: "Clerk Needed Urgently at the community for immediate employment",
        datePosted: `${date}-${month}-${year}`

        
    },

    {
        id:3,
        jobTitle: "Youth Empowerment Program",
        datePosted: `${date}-${month}-${year}`

    
    },

    {
        id:4,
        jobTitle: "HSE Officers recruitment in Dandee Organisation ",
        datePosted: `${date}-${month}-${year}`

    
    },

    {
        id:5,
        jobTitle: "Youth Empowerment Program",
        datePosted: `${date}-${month}-${year}`

    
    },

    {
        id:6,
        jobTitle: "Youth Empowerment Program",
        datePosted: `${date}-${month}-${year}`

    
    },

];

const Profile = () => {
    return (
        <section className="profile" id="profile">
            <div>
                <h3>Personal Profile</h3>
                <p>Please complete your profile to get started.</p>
            </div>

            <div className="form">
                <form action="">
                    <input type="text" placeholder="First Name"></input><br></br>
                    <input type="text" placeholder="Last Name"></input><br></br>
                    <input type="text" placeholder="Residential Address"></input><br></br>
                    <input type="text" placeholder="State"></input><br></br>
                    <input type="text" placeholder="City"></input><br></br>
                    <label style={{fontSize:".8rem"}}>
                        Date of Birth <br></br>
                        <input type="number" placeholder="DD/MM/YYYY"></input>
                    </label>
                    <input  type="number" placeholder="Phone Number"></input><br></br>
                    
                    <select style={{ width:"100%"}}>
                        <option disabled selected value="Gender">Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select> <br></br>

                    <button className="profile-btn">SAVE</button>
                </form>
            </div>
        </section>
    )
}

const Resume = () => {
    return (
        <section className="resume" id="resume">
            <div>
                <h3>CV</h3>
            </div>

            <div className="experience">
                <p className="cv-content">Upload your CV and complete your educational experience.</p>
                <form>
                    <h5>CV upload</h5>

                    <input type="file" name="cv-upload"></input>

                    <h5 style={{marginTop:"1rem"}}>Upload Passport</h5>
                    <input style={{ marginBottom:".5rem"}} type="file" name="cv-upload"></input>

                    <h5 style={{marginTop:"1rem", marginBottom:".5rem"}}>Upload any other document or certification.  *optional</h5>
                    <input style={{ marginBottom:".5rem"}} type="file" name="cv-upload"></input>
                    <input style={{ marginBottom:".5rem"}}  type="file" name="cv-upload"></input>
                    <input style={{ marginBottom:".5rem"}} type="file" name="cv-upload"></input>

                    <h4 style={{marginTop:"1rem"}}>Highest Level of Education</h4>
                    <select>
                        <option>Choose Qualification</option>
                        <option>O'Level</option>
                        <option>B.Sc</option>
                        <option>M.sc</option>
                        <option>Phd</option>
                        <option>University Undergraduate</option>
                    </select><br></br>

                    <button className="profile-btn">SAVE</button>
                </form>
            </div>

        </section>
    )
}

const NavJobs = () => {
    return (
        <section className="navJobs" id="jobs">
            <div><h4>Job Status</h4></div>

            <div>
                <h4 className="jobsApplied-p">Jobs applied to:</h4>
                <div>
                   
                    <div>
                        {appliedJobs.map(appliedpost => (
                            <div className="navJobs-applied">
                                <div>
                                <p>{appliedpost.jobTitle}</p>
                                <p>Date Applied: {appliedpost.dateApplied}</p>
                                </div>
                                <div>
                                    <p className="applied">Applied</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <Link style={{textDecoration:"none",color:"white"}} to="/jobopenings" className="profile-btn">Find Jobs</Link>
                        
                    
                </div>
            </div>
        </section>
    )
}

const Settings = () => {
    return (
        <section id="settings" className="settings">
            <div>
                <h3>Account Settings</h3>

            </div>

            <div className="account-settings">
                <form>
                    <p>Change your account settings.</p><br></br>
                    <label className="change-pw">
                        Old Password<br></br>
                        <input className="enter-pw" type="text" placeholder="Enter old password"></input>
                    </label> <br></br><br></br>

                    <label>
                        New Password<br></br>
                        <input className="enter-pw" type="password" placeholder="Enter new password"></input><br></br><br></br>
                    </label>

                    <label>
                        Confirm Password<br></br>
                        <input className="enter-pw" type="password" placeholder="Confirm password"></input>
                    </label> <br></br>

                    <button className="profile-btn">Update</button>
                </form>
            </div>
        </section>
    )
}
// DASHBOARD COMPONENTS

const UserNavigation = () => {
    return (
        <div className="userNav">
            <div className="user-header">
                <div>
                    <img alt="#" className="avatarIcon" src={avatarIcon2}></img>
                </div>
                <div>
                    <h4>{userFirstname}</h4>
                    <div style= {{color:"lime"}}><span className="fa fa-circle">&nbsp;Online</span></div>
                </div>
            </div>

            <div>
                <nav className="userNavList">
                    <ul>
                        <a href="#mainDashboard"><li><span className="fa fa-address-card"></span>&nbsp;&nbsp;Dashboard</li></a>
                        <a href="#profile"><li><span className="fa fa-user"></span>&nbsp;&nbsp;Profile</li></a>
                        <a href="#resume"><li><span className="fa fa-file"></span>&nbsp;&nbsp;CV</li></a>
                        <a href="#jobs"><li><span className="fa fa-briefcase"></span>&nbsp;&nbsp;Jobs</li></a>
                        <a href="#settings"><li><span className="fa fa-wrench"></span>&nbsp;&nbsp;Account Settings</li></a>
                    </ul>
                </nav>
            </div>

            <div className="logout">
            <a href="/login"><span className="fa fa-arrow-circle-left"></span>&nbsp;&nbsp;Logout</a>

            </div>
        </div>

    );
};


const JobAlert = () => {
    return (
        <section className="jobAlert">
            <div className="user-active">
                <p style={{textAlign:"right"}}><span className="fa fa-user"></span>&nbsp; {username}</p>
            </div>

            <div className="job-alert">
                <p className="jobAlert-header">Job Alerts</p>
                {Jobs.map(jobpost => (
                    <div>
                        <Link to="/jobopenings" style={{textDecoration:"none", color:"black"}} href=""><h4 className="job-post">{jobpost.jobTitle}</h4></Link>
                        <h6>{jobpost.datePosted}</h6>

                    </div>                  
                ))}
            </div>

            <p className="job-viewMore">View More</p>

        </section>
    )
}


const MainDashboard = () => {
    return (
        <section id="mainDashboard" className="mainDashboard">
            <div>
                <h4>Dashboard</h4>
                <p>Home/Dashboard</p>
            </div>

            <div className="dashboard-details">
                <div className="job-details">
                    <h5>Jobs Applied To</h5>
                    <div className="jobs-applied">
                        <p>{noJobsApplied}</p>
                        <span  className="fa fa-briefcase fa-2x"></span>
                    </div>
                    <a style={{textDecoration:"none", color:"black"}} href="#jobs"><p  style={{textAlign:"center",fontSize:".8rem"}}>More <span className="fa fa-arrow-right"></span></p></a>
                </div>

                <div className="job-details">
                    <p>CV</p>
                    <div style={{textAlign:"right", margin:"1rem"}}><span className="fa fa-file fa-2x"></span></div>
                    <p  style={{textAlign:"center", fontSize:".8rem"}}>More <span className="fa fa-arrow-right"></span></p>
                </div>
            </div>

            {/* ACTIVITY LOG */}
            <div className="activity-log">
                <div><span className="fa fa-comments">&nbsp;&nbsp;Activity Log</span></div>
                <div style={{marginTop:"1rem"}}><span className="fa fa-circle">&nbsp;&nbsp;Please complete your profile to get started.</span></div>

            </div>
        </section>
    )
}

const Dashboard = () => {
    const [showMenu, setShowMenu] = useState(false)

    let menu
    let menuMask
    if(showMenu) {
        menu = <div className="hamburger-menu">
           <ul>
               <li>
                   <Link style={{textDecoration:"none", color:"white"}} to="/"><span className="fa fa-home"></span>&nbsp;&nbsp;&nbsp;&nbsp;Home</Link>
               </li>
               <li>
                    <a style={{textDecoration:"none", color:"white"}} href="#mainDashboard"><span className="fa fa-address-card">&nbsp;</span>Dashboard</a>
                </li>
                <li>
                    <a href="#profile" style={{textDecoration:"none", color:"white"}}><span  className="fa fa-wrench"></span>&nbsp;Profile</a>
                </li>
                <li>
                    <a href="#resume" style={{textDecoration:"none", color:"white"}}><span  className="fa fa-wrench"></span>&nbsp;CV</a>
                </li>
                <li>
                <a style={{textDecoration:"none", color:"white"}} href="#settings"><span className="fa fa-wrench"></span>&nbsp;Account settings</a>
                </li>
           </ul>
        </div>

       menuMask = <div className="menuMask" onClick={() => setShowMenu(false)}></div>
    }

    return (
        <section>
            
            <div className="page-header">
                <div>
                    <h1>Amukpe Community</h1>
                </div>

                <div className="nav-list dashboardNav">
                    <div>
                        <ul>
                            <li>
                                <Link style={{textDecoration:"none", color:"white"}} to="/" ><span className="fa fa-home"></span>&nbsp;Home</Link>
                            </li>
                            <li>
                                <a style={{textDecoration:"none", color:"white"}} href="#mainDashboard"><span className="fa fa-address-card">&nbsp;</span>Dashboard</a>
                            </li>
                            <li>
                                <a style={{textDecoration:"none", color:"white"}} href="#settings"><span className="fa fa-wrench"></span>&nbsp;Settings</a>
                            </li>
                            <li style={{color:"lime"}}>
                                 <span className="fa fa-circle">&nbsp;Active</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <nav>
                        <div onClick={() => setShowMenu(!showMenu)}>
                        <span className="fa fa-bars dashboard-menu"></span>
                        </div>
                        {menuMask}
                        {menu}
                    </nav>
                </div>
            </div>

            <div className="user-profile">
                <div>
                    <img alt="#" className="avatarIcon" src={avatarIcon2}></img>
                </div>
                <div className="user-name">
                    <h4>{userFirstname}</h4>
                    <div style= {{color:"lime"}}><span className="fa fa-circle">&nbsp;Online</span></div>
                </div>
            </div>
            <div className="dashboard-component">
                <div>
                    <UserNavigation/>
                </div>
                
                <div className="dash-component">
                    <div>
                    <MainDashboard/>
                    <Profile/>
                    <Resume/>
                    <NavJobs/>
                    <Settings/>
                    </div>
                    <JobAlert/>

                </div>



                
            </div>

            <div style={{backgroundColor:"whitesmoke", fontSize:".8rem"}} className="copyright">
           <p >&copy; Copyright 2021. Amukpe Community</p>
           
       </div>
       <div style={{lineHeight: ".9rem", color: "grey", textAlign: "right", backgroundColor: "black", fontSize: ".7rem", padding: ".5rem 2rem .5rem 0rem"}}><p>Developed by Giffy Insight Technologies.</p>
         <p>Tel : 09013970506 </p>
        </div>
        </section>
    )
};


export default Dashboard;