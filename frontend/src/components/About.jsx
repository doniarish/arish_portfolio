import aboutImg from '/about.avif';
import resumePdf from '/ari_sh.pdf';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Passionate AI &amp; Data Science Graduate</h3>
            <p>
              I'm a passionate and analytical thinker specializing in Artificial Intelligence
              and Data Science. As a recent B.Tech graduate (May 2026), I have
              hands-on experience in machine learning, full stack development, and a strong
              research interest.
            </p>
            <p>
              I use research, data, and thoughtful design to create delightful products that
              scale. My approach combines technical expertise with creative problem-solving to
              deliver innovative solutions.
            </p>

            <div className="education">
              <h4>Education</h4>
              <div className="education-item">
                <h5>B.Tech in Artificial Intelligence &amp; Data Science</h5>
                <p>St. Xavier's Catholic College of Engineering</p>
                <p>May 2026</p>
              </div>
            </div>

            <a href={resumePdf} className="btn btn-primary" download>
              Download Resume
            </a>
          </div>
          <div className="about-image">
            <img src={aboutImg} alt="About Arish" className="about-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
