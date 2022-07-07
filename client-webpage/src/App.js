import React from "react";
import "./styles/App.scss"
import Photography from "./pages/Photography";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";
import About from "./pages/About";
import {Switch, Route, useLocation}  from "react-router-dom";
import {AnimatePresence} from "framer-motion";



function App() {

  const location = useLocation();

  return (

          <div className="App">
            <Nav/>
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
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
            </AnimatePresence>
          </div>
  
  );
}

export default App;

