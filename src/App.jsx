import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import HorzGallery from "./components/HorzGallery/HorzGallery.jsx";
import ReservationForm from "./components/ReservationForm/ReservationForm.jsx";
import About from "./components/About/About.jsx";
import Location from "./components/Location/Location.jsx";
import data from "./data/menu.json";
import LHD from "/images/logo_half_distressed_light.svg";
import LDD from "/images/logotype_distressed_dark.svg";

function App() {
  const { sandwiches, sides } = data;

  return (
    <>
      <Navbar />
      <Hero />

      <section className="section reservation-section">
        <div className="section-content side-padding">
          <ReservationForm />
        </div>
        <div className="section-1-img">
          <img src={LHD} />
        </div>
      </section>
      <section className="section sides-section">
        <div className="section-2-img">
          <img src={LDD} />
        </div>
        <div className="section-content">
          <HorzGallery cardData={sides} title="House Favorites" />
        </div>
      </section>

      <section className="section">
        <div className="section-content side-padding">
          <Location />
        </div>
      </section>
      <section className="section">
        <div className="section-content side-padding">
          <About />
        </div>
      </section>
    </>
  );
}

export default App;
