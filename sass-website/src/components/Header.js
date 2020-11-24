import React from 'react'

const Header = () => {
  return (
    <div className="header">
      <div className="header__content">
        <div className="header__content-title">
        <h1 className="header__content-title-slashes">//</h1>
        <h1 className="header__content-title-h1">CRIAMOS LOJAS QUE VENDEM MAIS.</h1>
        </div>
        <p className="header__content-p">A Jüssi é especialista na criação de lojas
        usando a plataforma VTEX. Precisa criar sua loja ou migrar de plataforma?</p>
        <button className="header__content-button" variant="outlined">Veja nossas soluções</button>
      </div>
      <div className="header__content-images">
        <div className="header__content-images-retangle2">
        <img className="header__content-images-retangle3-image" src="/images/hero-banner/Rectangle 1.png" alt="garrafa"/>
        <button className="header__content-images-button" variant="outlined">Comprar em 12x</button>
        </div>
        <div className="header__content-images-retangle1">
        <img className="header__content-images-retangle3-image" src="/images/hero-banner/Rectangle 2.png" alt="geladeira"/>
        <button className="header__content-images-button" variant="outlined">Comprar em 12x</button>
        </div>
        <div className="header__content-images-retangle3">
        <img className="header__content-images-retangle3-image" src="/images/hero-banner/Rectangle 3.png" alt="batedeira"/>
        <button className="header__content-images-button" variant="outlined">Comprar em 12x</button>
       </div>
      </div>
    </div>
  )
}

export default Header
