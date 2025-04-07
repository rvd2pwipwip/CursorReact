import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

// Hero component - the first section visitors see
const Hero = () => {
  const navigate = useNavigate();
  // State for typing animation
  const [text, setText] = useState('');
  const fullText = "UX Designer & React Developer";
  
  // Effect for typing animation
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">
            Hi, I'm <span className="hero__name">Huex Dude</span>
          </h1>
          <h2 className="hero__subtitle">
            {text}<span className="hero__cursor">|</span>
          </h2>
          <p className="hero__description">
            I create beautiful, intuitive user experiences and bring them to life with modern web technologies.
          </p>
          <div className="hero__cta">
            <button 
              onClick={() => navigate('/projects')} 
              className="hero__button hero__button--primary"
            >
              View My Work
            </button>
            <a href="#contact" className="hero__button hero__button--secondary">
              Get in Touch
            </a>
          </div>
        </div>
        <div className="hero__image">
          {/* Placeholder for hero image */}
          <div className="hero__image-placeholder">
            <span>Your Photo</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 