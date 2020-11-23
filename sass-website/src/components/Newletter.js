import React from 'react'

const Newletter = () => {
  return (
    <div className="newletter">
      <div className="newletter__content">
        <div className="newletter__content-title">
          <h1 className="newletter__content-title-slashes">//</h1>
          <h1 className="newletter__content-title-h1">RECEBA NOVIDADES DA NOSSA ÁREA
          DE PRODUTOS DIGITAIS.</h1>
          <input className="newletter-input" type="text" name="name" placeholder="Digite seu e-mail" />
          <input className="newletter-submit" type="submit" value="CADASTRAR" />
        </div>
      </div>
    </div>
  )
}

export default Newletter
