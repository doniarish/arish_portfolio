import aboutImg  from '/about.avif';
import neuralImg from '/neural.jpeg';
import companyAutomationImg from '/company_automation.png';

const projects = [
  {
    img: aboutImg,
    alt: 'AI-Powered Knowledge Interaction System',
    title: 'AI-POWERED KNOWLEDGE INTERACTION SYSTEM',
    desc: 'Intelligent system for contextual knowledge retrieval, semantic search, and natural-language interaction.',
    tools: ['NLP', 'LLM', 'Vector DB'],
    github: 'https://github.com/doniarish/RAG-Based-Knowledge-Financial-Insights-System',
    demo:   'https://rag-based-knowledge-financial-insights-system-f6udphmsrtcb45mv.streamlit.app/',
  },
  {
    img: neuralImg,
    alt: 'Neural Network Classifier',
    title: 'Neural Network Classifier Optimization',
    desc: 'Improved multiclass accuracy and reduced latency using model pruning and CLR.',
    tools: ['TensorFlow', 'scikit-learn', 'Optimization'],
    github: 'https://github.com/doniarish/NEURAL-NETWORK-CLASSIFIER-',
    demo:   'https://github.com/doniarish/NEURAL-NETWORK-CLASSIFIER-/blob/main/README.md',
  },
  {
    img: companyAutomationImg,
    alt: 'Company Automation',
    title: 'Company Automation',
    desc: 'An automated system leveraging LLMs to streamline company operations and workflows.',
    tools: ['LangChain', 'LangGraph'],
    github: 'https://github.com/doniarish/Comany-automation',
    demo:   'https://github.com/doniarish/Comany-automation',
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map(({ img, alt, title, desc, tools, github, demo }) => (
            <div className="project-card" key={title}>
              <img src={img} alt={alt} className="project-img" />
              <div className="project-content">
                <h3>{title}</h3>
                <p>{desc}</p>
                <div className="project-tools">
                  {tools.map((tool) => (
                    <span className="tool-tag" key={tool}>{tool}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={github} target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i> GitHub
                  </a>
                  <a href={demo} target="_blank" rel="noreferrer">
                    Learn More <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
