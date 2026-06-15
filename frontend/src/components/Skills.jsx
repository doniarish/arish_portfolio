const technicalSkills = [
  { icon: 'fab fa-python',     title: 'Python',             desc: 'NumPy, Pandas' },
  { icon: 'fas fa-brain',      title: 'PyTorch',            desc: 'TorchVision' },
  { icon: 'fas fa-robot',      title: 'TensorFlow',         desc: 'Deep Learning' },
  { icon: 'fas fa-chart-line', title: 'scikit-learn',       desc: 'Machine Learning' },
  { icon: 'fas fa-cogs',       title: 'MLOps',              desc: 'W&B, Docker' },
  { icon: 'fas fa-chart-bar',  title: 'Data Visualization', desc: 'Matplotlib, Seaborn' },
  { icon: 'fab fa-git-alt',    title: 'Git/GitHub',         desc: 'Version Control' },
];

const softSkills = [
  { icon: 'fas fa-users',        title: 'Leadership',      desc: 'Team Management' },
  { icon: 'fas fa-handshake',    title: 'Teamwork',        desc: 'Collaboration' },
  { icon: 'fas fa-lightbulb',    title: 'Creativity',      desc: 'Innovation' },
  { icon: 'fas fa-puzzle-piece', title: 'Problem-Solving', desc: 'Critical Thinking' },
];

const SkillCard = ({ icon, title, desc }) => (
  <div className="skill-item">
    <div className="skill-icon">
      <i className={icon}></i>
    </div>
    <div className="skill-info">
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  </div>
);

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="section-container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-container">
          <div className="skills-category">
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              {technicalSkills.map((skill) => (
                <SkillCard key={skill.title} {...skill} />
              ))}
            </div>
          </div>
          <div className="skills-category">
            <h3>Soft Skills</h3>
            <div className="skills-grid">
              {softSkills.map((skill) => (
                <SkillCard key={skill.title} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
