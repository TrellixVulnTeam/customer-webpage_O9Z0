import React from "react";
import "./styles/App.scss"
import AboutUs from "./pages/AboutMe";
import Nav from "./components/Nav";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
        <Nav/>
        <AboutUs/>
        <Footer/>
    </div>
  );
}

export default App;
