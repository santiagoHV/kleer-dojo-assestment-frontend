import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/home/Home";
import TakeAssessmentContainer from "./pages/TakeAssestment/TakeAssessmentContainer";
import AssessmentResult from "./pages/AssessmentResult/AssessmentResult";
import HomeTrainer from "./pages/TrainerPages/HomeTrainer/HomeTrainer";
import TrainerLogin from "./pages/TrainerPages/TrainerLogin/TrainerLogin";

function App() {

    return (
        <BrowserRouter className={'SPA'}>
            <Switch>
                <Route exact path="/login" component={TrainerLogin}/>
                <div className={'default-container'}>
                    <NavBar/>
                    <Route exact path={'/home'} component={Home}/>
                    <Route exact path={'/take-assessment'} component={TakeAssessmentContainer}/>
                    <Route exact path={'/results-assessment/:email'} component={AssessmentResult}/>
                    <Route exact path={'/trainer-home'} component={HomeTrainer}/>
                    {/*<Redirect to={'/home'}/>*/}
                    <Footer/>
                </div>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
