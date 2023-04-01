import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import { BrowserRouter } from "react-router-dom";
import Register from "./pages/Register";
import About from "./pages/About";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <About />
        {/* <Login /> */}
        {/* <Register /> */}
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
