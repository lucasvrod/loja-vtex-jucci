import React from 'react'

const Footer = () => {
  return (
    <div className="footer">

      <div className="footer__links">
        <img src="/images/social/wppcompany.png" alt="WPP Company" />
      </div>
      <div className="footer__socials">
        <a href="https://www.facebook.com/agencia.jussi/" target="_blank" rel="noreferrer">
        <img src="/images/social/facebook.png" alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/jussi/" target="_blank" rel="noreferrer">
        <img src="/images/social/instagram.png" alt="Instagram" />
        </a>
        <a href="https://www.linkedin.com/company/agencia-jussi/" target="_blank" rel="noreferrer">
        <img src="/images/social/linkedin.png" alt="Linkedin" />
        </a>
      </div>
    </div>
  )
}

export default Footer
