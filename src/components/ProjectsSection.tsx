const ProjectsSection = () => {
  const projects = [
    {
      title: "AI Trade",
      description:
        "An AI-driven stock trading app using a custom Gym-style environment with real-time yfinance data, trained with a DQN agent.",
      link: "https://github.com/sahanasri18/ai_trade",
    },
    {
      title: "Next Word Predictor",
      description:
        "LSTM model trained on Wikipedia text data to predict the next word in real time with dynamic user input.",
      link: "https://github.com/sahanasri18/next_word_predictor",
    },
    {
      title: "User Segmentation",
      description:
        "Dynamic CSV uploads, feature selection, and KMeans clustering with interactive visualizations powered by Plotly.",
      link: "https://github.com/sahanasri18/user_segmentation",
    },
    {
      title: "Emotion Detection",
      description:
        "CNN-based model to detect human emotions from uploaded images using Streamlit, OpenCV, and TensorFlow/Keras.",
      link: "https://github.com/sahanasri18/Emotion_detection",
    },
    {
      title: "Loan Recovery System",
      description:
        "Machine learning-powered tool for predicting loan recovery chances using historical data and payment patterns.",
      link: "https://github.com/sahanasri18/loan_recovery_system",
    },
    {
      title: "Crack Detector",
      description:
        "Random Forest Classifier for detecting cracks in surface images, trained on the SDNET2018 dataset.",
      link: "https://github.com/sahanasri18/crack_detector",
    },
    {
      title: "Call Drop Prediction System",
      description:
        "Machine learning system to predict telecom call drops using network KPIs with real-time and batch CSV predictions via Streamlit.",
      link: "https://github.com/sahanasri18/Call-Drop-Prediction-Network-Issue-Detection",
    },
    {
      title: "Drug Recommendation System",
      description: "ML-based system recommending medications based on patient history and conditions.",
      techStack: "Python, Pandas, Scikit-learn, Streamlit",
      link: "https://github.com/sahanasri18/Drug-Recommendation-System",
    },
    {
      title: "Early Sepsis Detection System",
      description: "Predicts sepsis 6 hours before onset using clinical time-series patient data.",
      techStack: "Python, Pandas, Scikit-learn, Keras/PyTorch, Streamlit",
      link: "https://github.com/sahanasri18/early_sepsis_detection",
    },
    {
      title: "Hospital Readmission Prediction (Diabetes)",
      description: "Predicts 30-day hospital readmissions for diabetic patients using EHR data and feature engineering.",
      techStack: "Python, Pandas, Scikit-learn, XGBoost, Streamlit",
      link: "https://github.com/sahanasri18/Hospital-Readmission-Prediction",
    },
    {
      title: "Dynamic Pricing Optimization System",
      description: "Uses ML to predict optimal product prices based on demand, competition, and inventory to maximize revenue.",
      techStack: "Python, Pandas, Scikit-learn, XGBoost, Streamlit",
      link: "https://github.com/sahanasri18/dynamic-pricing-optimization-system",
    },
    {
      title: "Multi-Store SKU Forecasting System",
      description: "Uses ML and time-series forecasting to predict sales for SKUs across 10 stores, helping optimize inventory and plan stock efficiently.",
      techStack: "Python, Pandas, Scikit-learn, XGBoost, Prophet, Streamlit",
      link: "https://github.com/sahanasri18/Multi-Store-SKU-Forecasting",
    },
    {
      title: "Price Elasticity Analysis System",
      description: "Analyzes how price changes affect demand across product categories and identifies elastic/inelastic products using ML and regression models.",
      techStack: "Python, Pandas, Statsmodels, Scikit-learn, Streamlit, Plotly",
      link: "https://github.com/sahanasri18/Price-Elasticity-Analysis",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-poppins font-bold text-center mb-12 text-foreground">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 shadow-warm hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
              {project.image && (
                <div className="w-full h-32 bg-muted rounded-lg mb-4 flex items-center justify-center text-muted-foreground text-sm">
                  Screenshot Placeholder
                </div>
              )}
              <h3 className="text-xl font-semibold text-primary mb-3">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              {project.techStack && (
                <p className="text-sm text-muted-foreground mb-4">
                  <strong>Tech Stack:</strong> {project.techStack}
                </p>
              )}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/80 transition-colors duration-300"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
