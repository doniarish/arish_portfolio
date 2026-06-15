import profileImg from '/ariis (2).jpg';

const Hero = () => {
  const smoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Arish Doni S</h1>
          <h2>AI &amp; Data Science Enthusiast | AI Developer Intern</h2>
          <p>Curious mind. Creative solutions. Driven by knowledge.</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary" onClick={(e) => smoothScroll(e, '#projects')}>
              View Portfolio
            </a>
            <a href="#contact" className="btn btn-secondary" onClick={(e) => smoothScroll(e, '#contact')}>
              Contact Me
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src={profileImg} alt="Arish Doni S" className="profile-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
