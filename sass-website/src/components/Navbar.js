import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
      <img src="/images/nav-bar/logoJussiVectorGreen.svg" alt="logo" />
      <div className="navbar__links">
        <a href="#">Nossas Soluções</a>
        <a href="#">Conheça a Jüssi</a>

        <input type="search" results="0" placeholder="Buscar"/>
        <a href="#">Login</a>
        <img src="/images/nav-bar/shopping-cart.svg" alt="logo" />
      </div>
      </div>
    </div>
  )
}

export default Navbar
