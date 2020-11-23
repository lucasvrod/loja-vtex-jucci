import React from 'react';
import './sass/main.scss'
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Logobar from "./components/LogoBar"

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Logobar />
    </div>
  );
}

export default App;
