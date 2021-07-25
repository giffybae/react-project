import React from "react";
import {Link} from "react-router-dom"
import communitySvg from "../Images/Community.svg";
import achievementSvg from "../Images/Achievements.svg";
import jobSvg from "../Images/Job.svg";

const motto = "Oneness is strength, love and progress.";

const Achievements = () => {
    return (
        <section>
            <div className="achievement-banner">
                <div className="community-svg">
                        <img alt="#" src={achievementSvg}></img>
                </div>

                <div className="achievement-content">
                    <h3>Achiements & Development</h3>
                    <p>Development of community billboard and organizing of empowerment events.</p>
                    <p>Creating job opportunities to indigenes and non-indegenes in the community. lteh i have the 
                        love of the people to enable one understand the staet of the indigenes and non indegenes
                        import communitySvg from "../Images/Community.svg";
                        of the community. building oursleves and understand that the community
                        needs progress and advancment of the current development
                        jygfj hgyuthje yufasydghiuew tyfyssgfuiewyj udgfytfeuf ueueyuiru bytsyjhff yfhteruybs uwdtywjhydu gwyteyw
                        jhghgdhgghhfdgsfdjjcv yyrrye   yfdyf y dgywqtfiv y ftyewty ud cshgc ctyduwtryu  </p>
                    <button className="view">View</button>
                </div>
            </div>
        </section>
    )
};

const About = () => {
    return (
        <section>
            <div className="about-banner">
                

                <div className="achievement-content">
                    <h3>What We Are</h3>
                    <p> Amukpe Community is a communitty in Sapele Delta State.
                        With love aand unity  dvfyd yfewu udhfh gdtf ht id tihin sth reasdon why
                        you didnet shwi iup T my place the otehr cay dont get uoddatedn eith the sstory
                        of this comunity we lovwe to keep it real and smooth all the dy of iut lives and lives 
                        with it as kive hasa offered us with so much opportunities, dot sir nad thunj that theh sroyt witg tr xgan
                        an minert frim nie si that teh oeiolw iof the kabn will yhfeuy yqyr
                        ncgyewc the goodsa nd service if tey sdgfy asjjyf yasid the minerb uu gdewv hkw qace thia sshidte
                        i wiiudlf nt caome back agian foir any reason s tat i iwill gaev my sdyfgyjc'. </p>
                    <button className="view">Know More</button>
                </div>

                <div className="community-svg">
                        <img alt="#" src={achievementSvg}></img>
                </div>
            </div>
        </section> 
    )
};

const Jobs = () => {
    return (
        <section>
            <div className="job-banner">
                <div className="community-svg">
                        <img alt="#" src={jobSvg}></img>
                </div>                

                <div className="achievement-content">
                    <h3>Looking for a Job?</h3>
                    <p> Amukpe Community is a communitty in Sapele Delta State.
                        With love aand unity  dvfyd yfewu udhfh gdtf ht id tihin sth reasdon why
                        any reason s tat i iwill gaev my sdyfgyjc'. 
                        The community is here to help you.
                         </p>
                    
                    <button className="view">Apply</button>
                </div>

                
            </div>
        </section> 
    )
};


const Homepage = () => {
    return (
        <section>
            <div className="banner">
                <div className="banner-content">
                    <h1>Amukpe Community</h1>
                    <p>Creating Awareness and Opportunities in Amukpe Community. </p>
                    <p>{motto}</p>
                    <div className="banner-btn">
    
                    <button className="portal-btn">Portal</button>
                        <Link  to="/blog" style={{textDecoration:"none", color:"white"}}><button className="latest-update-btn">Latest Updates</button></Link>
                    </div>
                </div>

                <div className="community-svg">
                    <img alt="#" src={communitySvg}></img>
                </div>

                
            </div>
            <Achievements/>
            <About/>
            <Jobs/>
        </section>
    )
}

export default Homepage;