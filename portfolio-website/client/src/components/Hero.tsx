import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to My Portfolio</h1>
        <p>I'm a Full Stack Developer</p>
        <button className="cta-button">View My Work</button>
      </div>
    </section>
  );
};

export default Hero;