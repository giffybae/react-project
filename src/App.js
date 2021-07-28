import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './components/about';
import Blog from './components/blog';
import JobOpenings from './components/jobOpenings';
import Dashboard from './components/dashboard';
import Footer from './components/footer';
import ForgotPassword from './components/forgotPassword';
import Header from './components/header';
import Homepage from './components/homepage';
import Login from './components/login';
import Registration from './components/registration';
import Services from './components/services';
import Contact from './components/contact';




const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path ="/login" component={Login} >
                    <Login/>
                </Route>
                <Route exact path = "/registration" component={Registration}>      
                    <Registration/>
                </Route>
                <Route exact path = "/forgotpassword" component={ForgotPassword}>      
                    <ForgotPassword/>
                </Route>
                <Route exact path = "/" component={Homepage}>
                    <Header/>
                    <Homepage/>
                    <Footer/>
                </Route>
                <Route exact path = "/about" component={About}>
                    <Header/>
                    <About/>
                    <Footer/>
                </Route>
                <Route exact path = "/services" component={Services}>
                    <Header/>
                    <Services/>
                    <Footer/>
                </Route>
               
                <Route exact path = "/jobopenings" component={JobOpenings}>
                    <Header/>
                    <JobOpenings />
                    <Footer/>
                </Route>

                <Route exact path = "/contact" component={Contact}>
                    <Header/>
                    <Contact />
                    <Footer/>
                </Route>

                <Route exact path = "/blog" component={Blog}>
                    <Header/>
                    <Blog/>
                    <Footer/>
                </Route>


                <Route exact path="/dashboard" component={Dashboard}>
                    <Dashboard/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App;