import { useState } from 'react';
import { ArrowUpRight, Github, ChevronDown, ChevronUp } from 'lucide-react';

type Project = { title: string; category: string; description: string; tools: string[]; link: string; note?: string; linkLabel?: string };

const projects: Project[] = [
  { title: 'AI-Powered Customer Support Intelligence Platform', category: 'Full-stack AI', description: 'A full-stack ticket-management application with agent and admin roles, ticket status tracking, audit history, search, analytics and a TF-IDF category-suggestion model.', tools: ['Python', 'FastAPI', 'React', 'TypeScript', 'MySQL', 'scikit-learn'], link: 'https://github.com/sahanasri18/ai-customer-support-intelligence', note: 'The model was evaluated on synthetic data. Its results do not establish performance on real customer tickets.' },
  { title: 'CareCode – Emergency Medical ID Platform', category: 'Full-stack application', description: 'An emergency medical ID web app. Users can maintain a medical profile and emergency contacts, then share key information through a QR code and a public emergency page.', tools: ['React', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'JWT'], link: 'https://github.com/sahanasri18/Care-Code', note: 'The repository documents authentication, QR flows, hospital lookup and an automated backend test suite.' },
  { title: 'GlobalConnect Live Translator', category: 'Final-year project', description: 'A virtual-meeting translation project intended to reduce language barriers, with speech and text translation, sign-language features and meeting summaries.', tools: ['React', 'TypeScript', 'Python', 'FastAPI', 'MongoDB', 'WebRTC', 'Whisper'], link: 'https://github.com/sahanasri18', linkLabel: 'GitHub profile', note: 'Academic project. A public project repository was not found during this review.' },
  { title: 'DeClickify – AI Clickbait Detection', category: 'NLP / Deep learning', description: 'A web-based headline analysis project that uses NLP and a deep-learning model to classify news headlines as clickbait or non-clickbait, with single and batch analysis described in the project documentation.', tools: ['Python', 'TensorFlow', 'Keras', 'NLP', 'React'], link: 'https://github.com/sahanasri18/Clickbait_detection', note: 'The README describes the intended features; the performance claims were not independently validated in this review.' },
  { title: 'Early Sepsis Detection System', category: 'Healthcare ML', description: 'A machine-learning project that generates time-series patient vital-sign data, trains Random Forest and LSTM models, and presents risk scores in a Streamlit dashboard.', tools: ['Python', 'TensorFlow / Keras', 'LSTM', 'scikit-learn', 'Streamlit'], link: 'https://github.com/sahanasri18/early_sepsis_detection', note: 'Uses synthetic clinical data. It is a learning project, not a medical diagnostic tool.' },
  { title: 'Smart Loan Recovery System', category: 'FinTech / ML', description: 'A Streamlit application that uses a Random Forest classifier to estimate loan repayment status from applicant and loan details, with optional MongoDB prediction-history storage.', tools: ['Python', 'Pandas', 'scikit-learn', 'Streamlit', 'MongoDB'], link: 'https://github.com/sahanasri18/loan_recovery_system', note: 'The README describes a real-world loan dataset; dataset quality and model performance were not independently checked.' },
  { title: 'Drug Recommendation System', category: 'Healthcare ML', description: 'A Streamlit machine-learning demonstration that generates patient data, trains a Random Forest classifier and displays medication recommendations with feature-importance visualizations.', tools: ['Python', 'Random Forest', 'Pandas', 'scikit-learn', 'Streamlit'], link: 'https://github.com/sahanasri18/Drug-Recommendation-System', note: 'Uses generated synthetic data and is for education only, not clinical decisions.' },
  { title: 'Call Drop Prediction & Network Issue Detection', category: 'Telecom ML', description: 'A telecom ML project that simulates network KPIs, compares Logistic Regression and Random Forest models, and provides call-drop risk analysis through a Streamlit dashboard, including CSV batch prediction.', tools: ['Python', 'Random Forest', 'Logistic Regression', 'Pandas', 'Streamlit'], link: 'https://github.com/sahanasri18/Call-Drop-Prediction-Network-Issue-Detection', note: 'The dataset and reported model results are simulation-based.' },
  { title: 'Multi-Store SKU Forecasting System', category: 'Time-series / ML', description: 'A retail forecasting project that generates sales data for multiple stores and SKUs, builds lag, rolling-window and calendar features, and uses XGBoost for sales forecasts in a Streamlit dashboard.', tools: ['Python', 'XGBoost', 'Pandas', 'Feature Engineering', 'Streamlit'], link: 'https://github.com/sahanasri18/Multi-Store-SKU-Forecasting', note: 'Uses generated retail data.' },
  { title: 'AI Trading Agent', category: 'Reinforcement learning', description: 'An experimental trading application built around a Deep Q-Network agent, a custom trading environment and market data retrieved through yfinance, with a Streamlit interface.', tools: ['Python', 'Deep Q-Learning', 'yfinance', 'Streamlit'], link: 'https://github.com/sahanasri18/ai_trade', note: 'Experimental project only; no claim of profitable or live automated trading.' },
  { title: 'Crack Detection using Machine Learning', category: 'Computer vision', description: 'A Streamlit image-classification application that extracts grayscale image features and uses a Random Forest classifier to identify cracked and non-cracked surface images.', tools: ['Python', 'OpenCV', 'Random Forest', 'Streamlit'], link: 'https://github.com/sahanasri18/crack_detector', note: 'The README identifies SDNET2018 as the image dataset.' },
  { title: 'Emotion Detection from Images', category: 'Computer vision', description: 'A Streamlit application that uses a trained CNN and OpenCV to detect faces in uploaded images and classify facial expressions, including happy, sad, angry, neutral and surprise.', tools: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Streamlit'], link: 'https://github.com/sahanasri18/Emotion_detection' },
  { title: 'User Segmentation', category: 'Unsupervised learning', description: 'A Streamlit app that accepts a user-data CSV, applies a pre-trained KMeans clustering model and displays interactive visualizations of the resulting segments.', tools: ['Python', 'KMeans', 'scikit-learn', 'Plotly', 'Streamlit'], link: 'https://github.com/sahanasri18/user_segmentation' },
  { title: 'Next Word Prediction using LSTM', category: 'NLP / Deep learning', description: 'A text prediction project that uses an LSTM model trained on Wikipedia text to suggest the next word, with both command-line and Streamlit interfaces.', tools: ['Python', 'LSTM', 'TensorFlow / Keras', 'NLP', 'Streamlit'], link: 'https://github.com/sahanasri18/next_word_predictor' },
  { title: 'IT Support Incident Analysis Dashboard', category: 'Data analytics', description: 'A Power BI dashboard that explores IT support ticket volume, priority distribution, department workloads and issue patterns using interactive slicers.', tools: ['Power BI', 'CSV', 'Data Analysis', 'Data Visualization'], link: 'https://github.com/sahanasri18/IT-Support-Incident-Analysis-Dashboard' }
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
