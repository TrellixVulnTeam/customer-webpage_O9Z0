import React from "react";
import "./styles/App.scss"
import Photography from "./pages/Photography";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";
import About from "./pages/About";
import {Switch, Route}  from "react-router-dom"



function App() {
  return (

          <div className="App">
            <Nav/>
            <Switch>
              <Route path="/" exact>
                <About/>
              </Route>
              <Route path="/Photography">
                <Photography/>
              </Route>
              <Route path="/Contact">
                <Contact/>
              </Route>
            </Switch>
          </div>
  
  );
}

export default App;

