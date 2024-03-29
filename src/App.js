import './App.css';
import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import "react-toastify/dist/ReactToastify.css";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/home/Home";
import TakeAssessmentContainer from "./pages/TakeAssestment/TakeAssessmentContainer";
import AssessmentResult from "./pages/AssessmentResult/AssessmentResult";
import HomeTrainerContainer from "./pages/TrainerPages/HomeTrainer/HomeTrainerContainer";
import TrainerLogin from "./pages/TrainerPages/TrainerLogin/TrainerLogin";
import PageError from "./pages/PageError/PageError";
import {ToastContainer} from "react-toastify";

function App() {

    const [whiteNav, setWhiteNav] = useState(false)
    const handleWhiteNav = () => setWhiteNav(true)
    const handleRedNav = () => setWhiteNav(false)

    return (
            <BrowserRouter className={'SPA'}>
                <NavBar whiteTheme={whiteNav}/>
                <Switch>

                        <Route exact path="/login" component={TrainerLogin}/>
                        <Route exact path={'/'} component={() => <Home
                                                                onWhiteNav={handleWhiteNav}
                                                                onRedNav={handleRedNav}
                        />}/>
                        <Route exact path={'/take-assessment'} component={TakeAssessmentContainer}/>
                        <Route exact path={'/results-assessment/:email'} component={AssessmentResult}/>
                        <Route exact path={'/trainer-home'} component={HomeTrainerContainer}/>
                        <Route component={PageError} />


                </Switch>
                <ToastContainer autoClose={2000}/>
                <Footer/>
            </BrowserRouter>
    );
}

export default App;
