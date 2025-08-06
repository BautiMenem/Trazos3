import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo o nombre */}
        <div className="footer-logo">
          <h2>MiSitio</h2>
          <p>Conectando ideas con tecnología</p>
        </div>

        {/* Navegación */}
        <div className="footer-links">
          <h3>Navegación</h3>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#acerca">Acerca</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>

        {/* Contacto */}
        <div className="footer-contact">
          <h3>Contacto</h3>
          <p>Email: contacto@misitio.com</p>
          <p>Tel: +54 351 123 4567</p>
          <div className="footer-socials">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} MiSitio. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;