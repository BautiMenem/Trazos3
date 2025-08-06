import React, { useState, useEffect } from 'react';
import './InnovationSection.css';

const InnovationSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.querySelector('.innovation-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section className="innovation-section">
      {/* Elementos decorativos mejorados */}
      <div className="decoration-container">
        {/* Líneas principales */}
        <div className="deco-line horizontal-top"></div>
        <div className="deco-line horizontal-bottom"></div>
        <div className="deco-line vertical-left"></div>
        <div className="deco-line vertical-right"></div>
        
        {/* Líneas conectoras principales */}
        <div className="main-connector main-connector-1"></div>
        <div className="main-connector main-connector-2"></div>
        
        {/* Líneas conectoras secundarias */}
        <div className="connector-line connector-1"></div>
        <div className="connector-line connector-2"></div>
        <div className="connector-line connector-3"></div>
        
        {/* Círculos decorativos */}
        <div className="deco-circle small circle-1"></div>
        <div className="deco-circle medium circle-2"></div>
        <div className="deco-circle large circle-3"></div>
        <div className="deco-circle medium circle-4"></div>
        <div className="deco-circle small circle-5"></div>
      </div>

      <div className="innovation-container">
        <div className="innovation-content">
          <div className={`innovation-text ${isVisible ? 'animate-left' : ''}`}>
            <p>
             Porque entendemos que cada proyecto es único. Combinamos diseño, 
             funcionalidad y creatividad para crear espacios que se adaptan a tus necesidades. 
             Acompañamos cada etapa del proceso con compromiso, soluciones eficientes y una mirada 
             sustentable que agrega valor real a cada obra.
            </p>
            
            <button className="innovation-button">
              Descubrir más
            </button>
          </div>
          
          <div className={`innovation-title ${isVisible ? 'animate-right' : ''}`}>
            <h2>
              <span className="highlight">¿Por qué</span>
              <span className="secondary-line">Elegirnos?</span>
              <span className="tertiary-line"></span>
            </h2>
            {/* Solo dos líneas decorativas estratégicas */}
            <div className="title-decoration">
              <div className="title-line line-1"></div>
              <div className="title-line line-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;