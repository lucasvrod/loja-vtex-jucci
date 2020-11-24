import React from 'react'

const LogoBar = () => {
  return (
    <div className="logobar">
      <div className="container">
        <div className="logobar__content">
        </div>
        <div className="logobar__right">
          <label>Nossas principais lojas VTEX</label>
          <label>→</label>
          <img src="/images/logo-bar/logo-brastemp@3x.svg" alt="Brastemp" />
          <img src="/images/logo-bar/logo-consul@3x.svg" alt="CompraCerta" />
          <img src="/images/logo-bar/logo-consul2@3x.svg" alt="Consul" />
          <img src="/images/logo-bar/logo-thebar@3x.svg" alt="TheBar" />
        </div>
      </div>
    </div>
  )
}

export default LogoBar
