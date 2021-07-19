import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/home/Home";
import TakeAssesstment from "./pages/TakeAssestment/TakeAssesstment";
import AssesstmentResult from "./pages/AssestmentResult/AssesstmentResult";

function App() {
  return (
      <BrowserRouter className={'SPA'}>
        <NavBar />
        <Switch>
          <Route exact path={'/home'} component={Home} />
          <Route exact path={'/take-assesstment'} component={TakeAssesstment} />
          <Route exact path={'/results-assesstment'} component={AssesstmentResult} />
          <Redirect to={'/home'} />
        </Switch>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
