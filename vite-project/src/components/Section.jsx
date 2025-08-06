import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Section.css';

const Section = ({ img, title, text, reverse, button, carousel, carouselImages }) => {
  // Usar las imágenes pasadas por props o un array por defecto
  const defaultImages = [
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1460472178825-e5240623afd5?w=800&h=600&fit=crop&crop=center'
  ];

  const images = carouselImages || defaultImages;

  return (
    <section className={`content-section ${reverse ? 'reverse' : ''}`}>
      <div className="image-wrapper">
        {carousel ? (
          <div className="carousel-container-react">
            <Carousel
              showArrows={false}
              showStatus={false}
              showThumbs={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={4000}
              transitionTime={600}
              swipeable={true}
              emulateTouch={true}
              className="custom-carousel"
              stopOnHover={false}
            >
              {images.map((src, index) => (
                <div key={index} className="carousel-slide-react">
                  <img src={src} alt={`Slide ${index + 1}`} />
                </div>
              ))}
            </Carousel>
          </div>
        ) : (
          <div className="single-image">
            <img src={img} alt={title} />
          </div>
        )}
      </div>

      <div className="text-content">
        <h2 className="section-title">{title}</h2>
        <div className="section-description">{text}</div>
        {button && (
          <button className="section-button">
            {button.label}
          </button>
        )}
      </div>
    </section>
  );
};

export default Section;