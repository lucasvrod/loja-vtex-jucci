import React from 'react';
import './sass/main.scss'
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Logobar from "./components/LogoBar"
import OurSolussion from "./components/OurSolussion"
import JussiSession from "./components/JussiSession"

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Logobar />
      <OurSolussion />
      <JussiSession />
    </div>
  );
}

export default App;
