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
        </div>
        <div className="header__content-images-retangle1">
        </div>
        <div className="header__content-images-retangle3">
        </div>
      </div>
    </div>
  )
}

export default Header
