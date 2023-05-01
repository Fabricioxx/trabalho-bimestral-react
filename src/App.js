import "./App.css";
import React from "react";
import RoutesConfig from "./RoutesConfig";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <RoutesConfig /> {/* pages here */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
