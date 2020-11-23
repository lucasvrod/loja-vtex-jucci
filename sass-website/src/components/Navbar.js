import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar__content">
          <div className="navbar__left">
            <img src="sass-website/src/images/nav-bar/logoJussiVectorGreen.svg" alt="logo"/></div>
            <ul className="navbar__right">
              <li>
                <a href="">Nossas Soluções</a>
              </li>
              <li>
                <a href="">Conheça a Jüssi</a>
              </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
