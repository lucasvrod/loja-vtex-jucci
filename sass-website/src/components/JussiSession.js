import React from 'react'

const JussiSession = () => {
  return (
    <div className="jussisession">
      <div className="jussisession__greybox">
      </div>
      <div className="jussisession__content">
        <div className="jussisession__content-title">
          <h1 className="jussisession__content-title-h1">OLÁ, SOMOS A JÜSSI</h1>
          <p className="jussisession__content-p">A Jüssi é uma agência integrante do grupo 
          global WPP que vem há 10 anos consolidando o pensamento voltado para produtos e 
          resolução de problemas. Nossa área dedicada exclusivamente para Produtos Digitais 
          é organizada em 6 especialidades: Product Management, User Experience Design, 
          SEO, Tecnologia, Agile e User Behavior Analytics.</p>
          <button className="jussisession__content-button" variant="outlined">Conheça a Jüssi</button>
        </div>
        <div className="jussisession__content-images">
        <img src="/images/jussi-session/image-jussi.png" alt="Escritório Jüssi"/>
        </div>
      </div>
    </div>
  )
}

export default JussiSession
