import { useState } from 'react';
import { ArrowUpRight, Github, ChevronDown, ChevronUp } from 'lucide-react';

type Project = { title: string; category: string; description: string; tools: string[]; link: string; note?: string; linkLabel?: string };

const projects: Project[] = [
  { title: 'AI-Powered Customer Support Intelligence Platform', category: 'Full-stack AI', description: 'A customer-support platform for ticket creation, triage, status tracking and workload analytics. Includes role-based access, MySQL persistence and a TF-IDF ticket-category suggestion model.', tools: ['Python', 'FastAPI', 'React', 'TypeScript', 'MySQL', 'scikit-learn'], link: 'https://github.com/sahanasri18/ai-customer-support-intelligence', note: 'Model evaluation uses synthetic data; not validated for real customer traffic.' },
  { title: 'CareCode – Emergency Medical ID Platform', category: 'Full-stack application', description: 'A web platform for storing essential emergency information and sharing it through a QR code, with authentication, medical profiles, emergency contacts and an emergency access page.', tools: ['React', 'FastAPI', 'PostgreSQL', 'JWT', 'Python'], link: 'https://github.com/sahanasri18/Care-Code' },
  { title: 'GlobalConnect Live Translator', category: 'Final-year project', description: 'A real-time virtual meeting translation application designed to reduce language barriers, with speech and text translation, sign-language features and meeting summaries.', tools: ['React', 'TypeScript', 'Python', 'FastAPI', 'MongoDB', 'WebRTC', 'Whisper'], link: 'https://github.com/sahanasri18', linkLabel: 'GitHub profile', note: 'Academic project; repository is not currently listed publicly.' },
  { title: 'DeClickify – AI Clickbait Detection', category: 'NLP / Deep learning', description: 'A headline analysis application using NLP and a deep-learning model, with a web interface and API for individual and batch predictions.', tools: ['Python', 'TensorFlow', 'Keras', 'NLP', 'React'], link: 'https://github.com/sahanasri18/Clickbait_detection' },
  { title: 'Early Sepsis Detection System', category: 'Healthcare ML', description: 'An end-to-end time-series ML project using patient vital-sign data, Random Forest and LSTM models, with a Streamlit dashboard for risk exploration.', tools: ['Python', 'TensorFlow', 'LSTM', 'scikit-learn', 'Streamlit'], link: 'https://github.com/sahanasri18/early_sepsis_detection', note: 'Uses synthetic clinical data; not for medical diagnosis.' },
  { title: 'Smart Loan Recovery System', category: 'FinTech / ML', description: 'A Streamlit application that estimates loan repayment risk from applicant and loan details using a Random Forest classification pipeline.', tools: ['Python', 'Pandas', 'scikit-learn', 'Streamlit', 'MongoDB'], link: 'https://github.com/sahanasri18/loan_recovery_system' },
  { title: 'Drug Recommendation System', category: 'Healthcare ML', description: 'A machine-learning demonstration that processes patient attributes and condition data to generate medication-category recommendations with an interactive dashboard.', tools: ['Python', 'Random Forest', 'Pandas', 'scikit-learn', 'Streamlit'], link: 'https://github.com/sahanasri18/Drug-Recommendation-System', note: 'Uses synthetic data and is for learning only, not clinical use.' },
  { title: 'Call Drop Prediction & Network Issue Detection', category: 'Telecom ML', description: 'A telecom analytics project that compares classification models on simulated network KPIs and provides single and batch call-drop risk predictions.', tools: ['Python', 'Random Forest', 'Pandas', 'scikit-learn', 'Streamlit'], link: 'https://github.com/sahanasri18/Call-Drop-Prediction-Network-Issue-Detection', note: 'Performance figures are based on synthetic data.' },
  { title: 'Multi-Store SKU Forecasting System', category: 'Time-series / ML', description: 'A retail forecasting pipeline with sales-data generation, lag and rolling-window features, XGBoost forecasting and an interactive inventory dashboard.', tools: ['Python', 'XGBoost', 'Pandas', 'Feature Engineering', 'Streamlit'], link: 'https://github.com/sahanasri18/Multi-Store-SKU-Forecasting', note: 'Uses generated retail data.' },
  { title: 'AI Trading Agent', category: 'Reinforcement learning', description: 'An experimental trading agent built around a Deep Q-Network, a custom trading environment and a Streamlit interface for exploring trade decisions.', tools: ['Python', 'Deep Q-Learning', 'Streamlit'], link: 'https://github.com/sahanasri18/ai_trade', note: 'Educational project; not investment advice or a live trading service.' },
  { title: 'Crack Detection using Machine Learning', category: 'Computer vision', description: 'An image-classification application that extracts grayscale image features and uses a Random Forest model to classify surfaces as cracked or non-cracked.', tools: ['Python', 'OpenCV', 'Random Forest', 'Streamlit'], link: 'https://github.com/sahanasri18/crack_detector' },
  { title: 'Emotion Detection from Images', category: 'Computer vision', description: 'A Streamlit application that uses a CNN model and OpenCV to detect faces and classify visible facial expressions in uploaded images.', tools: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Streamlit'], link: 'https://github.com/sahanasri18/Emotion_detection' },
  { title: 'User Segmentation', category: 'Unsupervised learning', description: 'A CSV-based segmentation app that applies a trained KMeans model and interactive visualizations to explore groups in user data.', tools: ['Python', 'KMeans', 'scikit-learn', 'Plotly'], link: 'https://github.com/sahanasri18/user_segmentation' },
  { title: 'Next Word Prediction using LSTM', category: 'NLP / Deep learning', description: 'A text prediction project that trains an LSTM model on a Wikipedia text corpus and serves next-word suggestions through a Streamlit interface.', tools: ['Python', 'LSTM', 'TensorFlow / Keras', 'NLP'], link: 'https://github.com/sahanasri18/next_word_predictor' },
  { title: 'IT Support Incident Analysis Dashboard', category: 'Data analytics', description: 'A Power BI dashboard for exploring support-ticket trends, department workloads, priority distribution and incident patterns with interactive filters.', tools: ['Power BI', 'CSV', 'Data Analysis', 'Data Visualization'], link: 'https://github.com/sahanasri18/IT-Support-Incident-Analysis-Dashboard' }
];

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 6);
  return (
    <section id="projects" className="bg-background py-16 sm:py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-5xl">
          <div className="mb-9 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[.18em] text-primary">Work</p>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Projects</h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">A selection of applications and analysis projects I've worked on. Open a repository to review the code.</p>
            </div>
            <a href="https://github.com/sahanasri18?tab=repositories" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">All repositories <ArrowUpRight size={16}/></a>
          </div>
          <div className="grid gap-x-10 md:grid-cols-2">
            {visibleProjects.map((project, index) => (
              <article key={project.title} className="border-t border-border py-6">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="text-xs font-medium uppercase tracking-wider text-primary">{project.category}</span>
                  <span className="font-mono text-xs text-muted-foreground">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="text-lg font-semibold leading-snug text-foreground">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{project.description}</p>
                {project.note && <p className="mt-2 text-xs leading-5 text-muted-foreground/80">{project.note}</p>}
                <div className="mt-4 flex flex-wrap gap-x-3 gap-y-2">{project.tools.map((tool) => <span key={tool} className="text-xs text-muted-foreground">{tool}</span>)}</div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary"><Github size={15}/> {project.linkLabel || 'View source'} <ArrowUpRight size={14}/></a>
              </article>
            ))}
          </div>
          <div className="mt-8 flex justify-center"><button onClick={() => setShowAll(!showAll)} className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary">{showAll ? 'Show selected projects' : `Show all ${projects.length} projects`}{showAll ? <ChevronUp size={16}/> : <ChevronDown size={16}/>}</button></div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
