// profile.js — all portfolio content data

export const experience = [
  {
    id: 'tdit',
    company: 'TDIT Solution Pvt Ltd',
    location: 'Chennai',
    role: 'AI Intern',
    period: 'Jul 2026 – Sep 2026',
    bullets: [
      'Developed hybrid AI chatbot using LangGraph, RAG, Text-to-SQL for backoffice ops',
      'Intent classification, FAQ retrieval, SQL querying, session-aware flows (LangChain, Pinecone, Redis, SQL Server)',
      'Enhanced chatbot for reward points, pickup requests, service coverage, multilingual EN/AR',
      'Debugged and validated AI workflows to improve intent routing, SQL accuracy',
    ],
  },
  {
    id: 'infinite',
    company: 'Infinite Tech AI',
    location: 'Chennai',
    role: 'AI Developer Intern',
    period: 'May 2026 – Jun 2026',
    bullets: [
      'Built LLM-powered apps using LangChain, LangGraph, RAG for knowledge retrieval',
      'Developed and evaluated ML models using PyTorch (preprocessing, training, optimisation)',
    ],
  },
];

export const projects = [
  {
    t: 'Backoffice AI Chatbot',
    cat: 'GenAI System',
    group: 'Career',
    s: 'pub',
    l: 'Public',
    d: 'Hybrid RAG + Text-to-SQL chatbot using LangGraph, Pinecone, Redis, and SQL Server for enterprise backoffice operations.',
    stack: ['LangChain', 'LangGraph', 'RAG', 'Text-to-SQL', 'Pinecone', 'SQL Server'],
    link: 'https://github.com/doniarish/Backoffice-AI-Chatbot',
    vid: '',
    short: 0,
  },
  {
    t: 'Neural Network Classifier',
    cat: 'Deep Learning',
    group: 'Career',
    s: 'pub',
    l: 'Public',
    d: 'Neural network classifier implementing PyTorch and scikit-learn models with CLR scheduling and 35% latency reduction via pruning.',
    stack: ['PyTorch', 'scikit-learn', 'Model Pruning', 'Optimization'],
    link: 'https://github.com/doniarish/NEURAL-NETWORK-CLASSIFIER-',
    vid: '',
    short: 0,
  },
  {
    t: 'RAG Financial Insights System',
    cat: 'NLP / RAG',
    group: 'Personal',
    s: 'pub',
    l: 'Public',
    d: 'Contextual knowledge retrieval, document reasoning, and semantic search platform for financial data and reports.',
    stack: ['NLP', 'RAG', 'Vector DB', 'Streamlit', 'Python'],
    link: 'https://github.com/doniarish/RAG-Based-Knowledge-Financial-Insights-System',
    vid: '',
    short: 0,
  },
  {
    t: 'Company Automation using LangGraph',
    cat: 'AI Automation',
    group: 'Career',
    s: 'pub',
    l: 'Public',
    d: 'Autonomous multi-agent workflow orchestration using LangGraph to automate enterprise operations and pipeline tasks.',
    stack: ['LangGraph', 'LangChain', 'Multi-Agent', 'Python'],
    link: 'https://github.com/doniarish/Comany-automation-using-Langgraph',
    vid: '',
    short: 0,
  },
  {
    t: 'Basic RAG TDIT',
    cat: 'GenAI System',
    group: 'Career',
    s: 'pub',
    l: 'Public',
    d: 'Modular RAG architecture with vector embeddings and semantic similarity search built during AI internship at TDIT.',
    stack: ['RAG', 'Pinecone', 'Vector DB', 'LangChain'],
    link: 'https://github.com/doniarish/Basic-rag-tdit',
    vid: '',
    short: 0,
  },
  {
    t: 'Hybrid RAG Assistant',
    cat: 'AI System',
    group: 'Personal',
    s: 'pub',
    l: 'Public',
    d: 'High-precision hybrid retrieval engine blending dense semantic embeddings with sparse keyword matching for optimal recall.',
    stack: ['Hybrid Search', 'RAG', 'Embeddings', 'JavaScript'],
    link: 'https://github.com/doniarish/hybrid-rag-assistant',
    vid: '',
    short: 0,
  },
  {
    t: 'AI-Powered Knowledge Interaction System',
    cat: 'NLP / Knowledge',
    group: 'Personal',
    s: 'pub',
    l: 'Public',
    d: 'Full-stack interactive QA platform delivering deep document reasoning and fast knowledge base exploration.',
    stack: ['NLP', 'Knowledge Base', 'Semantic QA', 'Python'],
    link: 'https://github.com/doniarish/AI-Power-Knowledge-Interaction-System',
    vid: '',
    short: 0,
  },
  {
    t: 'Stratroom Platform',
    cat: 'Enterprise AI',
    group: 'Career',
    s: 'priv',
    l: 'Private',
    d: 'Enterprise strategy workspace and intelligence workflow platform developed at Infinite Tech Chennai.',
    stack: ['React', 'JavaScript', 'AI Workflows', 'Internal'],
    link: 'https://github.com/infinitetechchennai/Stratroom',
    vid: '',
    short: 0,
  },
];

export const skillsMarquee = [
  'Python','NumPy','Pandas','scikit-learn','PyTorch','LangChain','LangGraph','RAG',
  'Text-to-SQL','Prompt Engineering','CNNs','Transfer Learning','Model Pruning',
  'SQL','SQL Server','Pinecone','FAISS','Redis','Docker','Weights & Biases',
  'Git/GitHub','Streamlit',
];

export const skillBars = [
  { label: 'Python',          level: 90 },
  { label: 'PyTorch',         level: 80 },
  { label: 'LangChain',       level: 85 },
  { label: 'RAG / Vector DB', level: 85 },
  { label: 'SQL',             level: 70 },
  { label: 'Docker / MLOps',  level: 65 },
];

export const education = {
  school: "St. Xavier's Catholic College of Engineering",
  location: 'Nagercoil, TN',
  degree: 'B.Tech — AI & Data Science',
  year: 'April 2026',
  courses: ['Machine Learning','Deep Learning','Big Data Analytics','NLP','Computer Vision'],
  certs: ['ADPP','IBM AI Engineering','Python for Data Science (Infosys)'],
};

export const processSteps = [
  { n: '01', title: 'Research',  desc: 'Understand the problem domain deeply' },
  { n: '02', title: 'Design',   desc: 'Architect the data flow and model pipeline' },
  { n: '03', title: 'Build',    desc: 'Develop and train models iteratively' },
  { n: '04', title: 'Evaluate', desc: 'Validate with metrics and real data' },
  { n: '05', title: 'Ship',     desc: 'Deploy, monitor, and iterate' },
];

export const services = [
  {
    icon: 'cpu',
    title: 'Custom AI/ML Projects',
    desc: 'NLP, CV, analytics pipelines',
  },
  {
    icon: 'zap',
    title: 'Generative AI & RAG',
    desc: 'LLM apps, chatbots, knowledge retrieval',
  },
  {
    icon: 'code',
    title: 'Code Assistance',
    desc: 'Debugging, optimisation, model explanation',
  },
];

export const waysCards = [
  {
    emoji: '🎯',
    cta: 'Looking to hire?',
    headline: 'For Recruiters & Clients',
    body: 'A results-driven AI engineer who ships production-grade models and LLM applications. Available for full-time roles.',
  },
  {
    emoji: '🤝',
    cta: 'Want to build?',
    headline: 'For Collaborators',
    body: 'Open to research collaborations, open-source contributions, and AI side projects.',
  },
];

export const consoleLines = [
  ['$ arish.skills', '→ Python, PyTorch, LangChain, RAG, SQL — ready to deploy.'],
  ['$ arish.build(\'chatbot\')', '→ Intent classified. SQL generated. Response sent. Done in 340ms.'],
  ['$ arish.accuracy(\'neural_net\')', '→ 93.7% multiclass accuracy. Pruning saved 35% latency.'],
  ['$ arish.status', '→ ACTIVE · Building AI systems that actually work in production.'],
];

export const labBeforeAfter = {
  before: 'ERROR: vector retrieval returned 0 results. Query: \'reward points balance\'. Index: pinecone-backoffice.',
  after: 'Root cause: query embedding mismatch. Fix: re-embed with multilingual-e5-large. Confidence: 94%.',
};

export const achievements = [
  '93.7% multiclass accuracy on neural network classifier',
  '35% inference latency reduction via model pruning',
  'Shipped production AI chatbot at TDIT Solution handling EN + AR queries',
  'IBM AI Engineering certified',
];

export const jdKeywords = [
  'python','pytorch','langchain','langgraph','rag','retrieval augmented generation',
  'text-to-sql','nlp','llm','generative ai','machine learning','deep learning',
  'transformers','vector database','pinecone','faiss','redis','sql','docker',
  'mlops','scikit-learn','pandas','numpy','cnn','computer vision','model pruning',
  'prompt engineering','weights and biases','git','github','streamlit',
];

export const creatorTopics = [
  'Generative AI & RAG',
  'Model Engineering',
  'AI for Production',
];

export const brief30 = `Results-driven AI & GenAI Engineer with hands-on experience building production LLM apps, RAG pipelines, and ML models. Skilled in LangChain, LangGraph, PyTorch, and Text-to-SQL. Recently built a multilingual backoffice chatbot at TDIT Solution. Ready for full-time AI Engineer or GenAI Engineer roles.`;
