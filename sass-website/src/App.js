import React from 'react';
import './sass/main.scss'
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Logobar from "./components/LogoBar"
import OurSolussion from "./components/OurSolussion"
import JussiSession from "./components/JussiSession"
import Contact from "./components/Contact"
import Newletter from "./components/Newletter"
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Logobar />
      <OurSolussion />
      <JussiSession />
      <Contact />
      <Newletter />
      <Footer />
    </div>
  );
}

export default App;
