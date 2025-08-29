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
              <h3 className="text-xl font-semibold text-primary mb-3">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
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
