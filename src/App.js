import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Banner from "./Landing_Page/Banner";
import Navbar_dairy from "./Landing_Page/Navbar_dairy";
import Section1 from "./Landing_Page/Section1";
import About from "./Landing_Page/About";
import Services from "./Landing_Page/Services";
import Footer from "./Landing_Page/Footer";
import Popular_Product from "./Landing_Page/Popular_Product";


function App() {
  return (
    <div>
      <Navbar_dairy />
      <Banner />
      <Section1 />
<Popular_Product />
      <About />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
