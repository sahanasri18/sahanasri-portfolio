const ProjectsSection = () => {
  const featuredProject = {
    title: "DeClickify – Clickbait Detection System",
    tagline: "AI-powered headline analysis and clickbait detection platform.",
    description:
      "An AI-powered clickbait detection web application that predicts whether headlines are misleading using Machine Learning and Natural Language Processing (NLP). The application includes a responsive React frontend, FastAPI backend, and real-time prediction system.",
    githubLink: "https://github.com/sahanasri18/Clickbait_detection",
    demoLink: "https://declickify-frontend.onrender.com/",
    techStack: ["React.js", "FastAPI", "Python", "Machine Learning", "NLP", "Scikit-learn"],
  };

  const projects = [
    {
      title: "AI Trade",
      description:
        "An AI-driven stock trading app using a custom Gym-style environment with real-time yfinance data, trained with a DQN agent.",
      githubLink: "https://github.com/sahanasri18/ai_trade",
    },
    {
      title: "Next Word Predictor",
      description:
        "LSTM model trained on Wikipedia text data to predict the next word in real time with dynamic user input.",
      githubLink: "https://github.com/sahanasri18/next_word_predictor",
    },
    {
      title: "User Segmentation",
      description:
        "Dynamic CSV uploads, feature selection, and KMeans clustering with interactive visualizations powered by Plotly.",
      githubLink: "https://github.com/sahanasri18/user_segmentation",
    },
    {
      title: "Emotion Detection",
      description:
        "CNN-based model to detect human emotions from uploaded images using Streamlit, OpenCV, and TensorFlow/Keras.",
      githubLink: "https://github.com/sahanasri18/Emotion_detection",
    },
    {
      title: "Loan Recovery System",
      description:
        "Machine learning-powered tool for predicting loan recovery chances using historical data and payment patterns.",
      githubLink: "https://github.com/sahanasri18/loan_recovery_system",
    },
    {
      title: "Crack Detector",
      description:
        "Random Forest Classifier for detecting cracks in surface images, trained on the SDNET2018 dataset.",
      githubLink: "https://github.com/sahanasri18/crack_detector",
    },
    {
      title: "Call Drop Prediction System",
      description:
        "Machine learning system to predict telecom call drops using network KPIs with real-time and batch CSV predictions via Streamlit.",
      githubLink: "https://github.com/sahanasri18/Call-Drop-Prediction-Network-Issue-Detection",
    },
    {
      title: "Drug Recommendation System",
      description: "ML-based system recommending medications based on patient history and conditions.",
      techStack: ["Python", "Pandas", "Scikit-learn", "Streamlit"],
      githubLink: "https://github.com/sahanasri18/Drug-Recommendation-System",
    },
    {
      title: "Early Sepsis Detection System",
      description: "Predicts sepsis 6 hours before onset using clinical time-series patient data.",
      techStack: ["Python", "Pandas", "Scikit-learn", "Keras/PyTorch", "Streamlit"],
      githubLink: "https://github.com/sahanasri18/early_sepsis_detection",
    },
    {
      title: "Hospital Readmission Prediction (Diabetes)",
      description: "Predicts 30-day hospital readmissions for diabetic patients using EHR data and feature engineering.",
      techStack: ["Python", "Pandas", "Scikit-learn", "XGBoost", "Streamlit"],
      githubLink: "https://github.com/sahanasri18/Hospital-Readmission-Prediction",
    },
    {
      title: "Dynamic Pricing Optimization System",
      description: "Uses ML to predict optimal product prices based on demand, competition, and inventory to maximize revenue.",
      techStack: ["Python", "Pandas", "Scikit-learn", "XGBoost", "Streamlit"],
      githubLink: "https://github.com/sahanasri18/dynamic-pricing-optimization-system",
    },
    {
      title: "Multi-Store SKU Forecasting System",
      description: "Uses ML and time-series forecasting to predict sales for SKUs across 10 stores, helping optimize inventory and plan stock efficiently.",
      techStack: ["Python", "Pandas", "Scikit-learn", "XGBoost", "Prophet", "Streamlit"],
      githubLink: "https://github.com/sahanasri18/Multi-Store-SKU-Forecasting",
    },
    {
      title: "Price Elasticity Analysis System",
      description: "Analyzes how price changes affect demand across product categories and identifies elastic/inelastic products using ML and regression models.",
      techStack: ["Python", "Pandas", "Statsmodels", "Scikit-learn", "Streamlit", "Plotly"],
      githubLink: "https://github.com/sahanasri18/Price-Elasticity-Analysis",
    },
  ];

  const normalizeTechStack = (techStack) =>
    Array.isArray(techStack)
      ? techStack
      : typeof techStack === "string"
      ? techStack.split(",").map((item) => item.trim())
      : [];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-poppins font-bold text-center mb-4 text-foreground">
          Featured Projects
        </h2>
        <p className="text-center text-sm text-muted-foreground mb-10 max-w-2xl mx-auto">
          Highlighted work showcasing modern AI/ML solutions, plus additional portfolio projects.
        </p>

        <div className="mx-auto mb-12 max-w-6xl px-3">
          <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-2xl shadow-slate-950/10 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_40px_120px_rgba(14,165,233,0.18)]">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-slate-950/10 to-violet-500/10 opacity-100 blur-2xl" />
            <div className="relative grid gap-8 lg:grid-cols-[1.5fr_1fr] items-center">
              <div>
                <span className="inline-flex rounded-full bg-cyan-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200 ring-1 ring-cyan-500/20">
                  Featured Project
                </span>
                <h3 className="mt-6 text-3xl font-semibold text-white md:text-4xl">
                  {featuredProject.title}
                </h3>
                <p className="mt-4 max-w-xl text-slate-300">
                  {featuredProject.tagline}
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {featuredProject.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {featuredProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={featuredProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/10 transition hover:bg-white/20"
                  >
                    View Code
                  </a>
                  <a
                    href={featuredProject.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:from-cyan-400 hover:to-blue-400"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-5 shadow-2xl shadow-cyan-500/10">
                <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-r from-cyan-500/20 via-transparent to-violet-500/20" />
                <div className="flex h-full flex-col justify-between rounded-[1.5rem] bg-slate-900/95 p-5">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                      <span>Live Demo Preview</span>
                    </div>
                    <div className="h-3 rounded-full bg-slate-700/80" />
                    <div className="h-3 w-3/4 rounded-full bg-slate-700/80" />
                  </div>
                  <div className="grid gap-3">
                    <div className="h-3 rounded-full bg-slate-700/80" />
                    <div className="h-3 rounded-full bg-slate-700/80 w-5/6" />
                    <div className="h-14 rounded-[1rem] bg-gradient-to-r from-cyan-500/15 to-slate-800/80 p-4 text-slate-100 shadow-inner">
                      <div className="h-3 w-3/4 rounded-full bg-slate-700/70" />
                      <div className="mt-3 h-2.5 w-2/3 rounded-full bg-slate-700/60" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const techStackItems = normalizeTechStack(project.techStack);
            const githubUrl = project.githubLink ?? project.link;

            return (
              <div
                key={index}
                className={`relative overflow-hidden rounded-3xl p-6 border border-border bg-card shadow-warm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                  techStackItems.length ? "bg-gradient-to-br from-slate-950/90 via-slate-900/90 to-slate-950/95" : ""
                }`}
              >
              {project.status ? (
                <span className="inline-flex items-center rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-300 ring-1 ring-emerald-500/20 mb-4">
                  {project.status}
                </span>
              ) : null}

              <div className="absolute -right-8 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-sky-500/30 to-fuchsia-500/10 blur-3xl" />
              <div className="absolute -left-10 bottom-4 h-24 w-24 rounded-full bg-gradient-to-br from-pink-500/20 to-violet-500/5 blur-3xl" />

              <h3 className="relative text-2xl font-semibold text-white mb-3">
                {project.title}
              </h3>
              <p className="relative text-sm text-slate-300 mb-5 leading-7">
                {project.description}
              </p>

              {project.screenshot ? (
                <div className="relative mb-5 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-4 shadow-2xl shadow-slate-950/20">
                  <div className="mb-4 h-36 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-slate-900 to-violet-500/10 p-4 text-white shadow-inner">
                    <div className="flex items-center justify-between gap-2 text-xs text-slate-300">
                      <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                      <span>Live Preview</span>
                    </div>
                    <div className="mt-6 h-16 rounded-2xl bg-slate-950/80 p-3 text-slate-200">
                      <div className="mb-2 h-2.5 w-24 rounded-full bg-slate-700" />
                      <div className="space-y-2">
                        <div className="h-2 rounded-full bg-slate-700/60" />
                        <div className="h-2 rounded-full bg-slate-700/60 w-5/6" />
                        <div className="h-2 rounded-full bg-slate-700/60 w-4/6" />
                      </div>
                    </div>
                  </div>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                    AI-Powered Clickbait Detection Interface
                  </p>
                </div>
              ) : null}

              {techStackItems.length ? (
                <div className="relative mb-5 flex flex-wrap gap-2">
                  {techStackItems.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              ) : null}

              {project.highlights ? (
                <ul className="relative mb-5 space-y-2 text-sm text-slate-300">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              <div className="relative flex flex-wrap gap-3">
                {githubUrl ? (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/10 transition hover:bg-white/15"
                  >
                    GitHub
                  </a>
                ) : null}
                {project.demoLink ? (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 text-sm font-medium text-white transition hover:from-cyan-400 hover:to-blue-400"
                  >
                    Live Demo
                  </a>
                ) : null}
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
