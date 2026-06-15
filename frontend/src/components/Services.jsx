const services = [
  {
    icon: 'fas fa-brain',
    title: 'Custom AI/ML Projects',
    desc: 'Building models for NLP, computer vision, and analytics.',
    btnText: 'Get Started',
  },
  {
    icon: 'fas fa-code',
    title: 'Code Assistance',
    desc: 'Debugging, optimization, and model explanation.',
    btnText: 'Learn More',
  },
  {
    icon: 'fas fa-database',
    title: 'Data Solutions',
    desc: 'Cleaning, analysis, and visual storytelling from datasets.',
    btnText: 'Contact Me',
  },
];

const Services = () => {
  const smoothScroll = (e) => {
    e.preventDefault();
    const target = document.querySelector('#contact');
    if (target) window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <section className="services" id="services">
      <div className="section-container">
        <h2 className="section-title">Services</h2>
        <div className="services-grid">
          {services.map(({ icon, title, desc, btnText }) => (
            <div className="service-card" key={title}>
              <div className="service-icon">
                <i className={icon}></i>
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
              <a href="#contact" className="btn btn-primary" onClick={smoothScroll}>
                {btnText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
