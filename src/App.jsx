// import components
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Navbar from "./Layouts/Navbar";

import { useEffect } from "react";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Default from "./Layouts/Default";
import LandingPage from "./components/LandingPage/LandingPage";
import SearchPage from "./components/SearchPage/SearchPage";
import AboutPage from "./components/AboutPage/AboutPage";


const App = () => {

  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);

  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Default Page={<LandingPage/>} />} />
          <Route path="/Search" element={<Default Page={<SearchPage/>} />} />
          <Route path="/AboutUs" element={<Default Page={<AboutPage/>} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;


// <Navbar />
      
// <footer className="p-3 text-center">
//   <h6 className="mb-3">Taufeeq</h6>
//   <p>Taufeeq © All CopyRights Reserved 2024</p>
// </footer>