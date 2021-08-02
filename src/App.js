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

function App() {
  return (
      <BrowserRouter className={'SPA'}>
        <NavBar />
        <Switch>
          <Route exact path={'/home'} component={Home} />
          <Route exact path={'/take-assessment'} component={TakeAssessmentContainer} />
          <Route exact path={'/results-assessment/:email'} component={AssessmentResult} />
          <Redirect to={'/home'} />
        </Switch>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
