import React, { useEffect } from 'react';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import Section from './components/section'; // Componente separado
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import InnovationSection from './components/InnovationSection';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });
  }, []);

  return (
    <div>
      <Navbar />

      {/* HERO SECTION */}
      <section className="hero">
        <img src="./imagenes/fondo.jpg" alt="Imagen de portada de arquitectura" />
        <div className="hero-text">
          <h1>
            TRAZOS
          </h1>
          <p>ARQUITECTURA Y DECORACIÓN</p>
        </div>
      </section>

      <InnovationSection />

      <Section 
        carousel={true}
        carouselImages={['./imagenes/carrousel1.jpg', './imagenes/carrousel2.jpg', './imagenes/6.jpg']}
        title="Nuestros Proyectos"
        text="Cada proyecto refleja nuestra visión de una arquitectura atemporal, consciente y en diálogo con su entorno."
        button={{label: "Ver Proyectos"}}
      />

      <Footer />
    </div>
  );
}

export default App;