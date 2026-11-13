const ProjectsSection = () => {
  const projects = [
    {
      title: "AI-Powered Customer Support Intelligence Platform",
      description: "A full-stack ticket management application with role-based access, ticket workflows, MySQL-backed analytics and a scikit-learn text classifier that suggests ticket categories. The model uses a synthetic dataset and is intended for demonstration, not real customer traffic.",
      tools: ["Python", "FastAPI", "React", "TypeScript", "MySQL", "scikit-learn"],
      link: "https://github.com/sahanasri18/ai-customer-support-intelligence"
    },
    {
      title: "DeClickify – AI-Powered Clickbait Detection",
      description: "An NLP and deep-learning project for classifying news headlines, with a web interface and API for headline analysis.",
      tools: ["Python", "TensorFlow / Keras", "NLP", "React"],
      link: "https://github.com/sahanasri18/Clickbait_detection"
    },
    {
      title: "Emotion Detection from Images",
      description: "A Streamlit application that uses a trained CNN model to detect facial emotions in uploaded images.",
      tools: ["Python", "TensorFlow / Keras", "OpenCV", "Streamlit"],
      link: "https://github.com/sahanasri18/Emotion_detection"
    },
    {
      title: "Call Drop Prediction & Network Issue Detection",
      description: "A telecom analytics project that generates synthetic network KPI data, compares classification models and provides an interactive call-drop risk dashboard. Reported model results are based on synthetic data.",
      tools: ["Python", "Machine Learning", "Random Forest", "Streamlit"],
      link: "https://github.com/sahanasri18/Call-Drop-Prediction-Network-Issue-Detection"
    },
    {
      title: "IT Support Incident Analysis Dashboard",
      description: "A Power BI dashboard for exploring support ticket trends, department workloads and incident priority distribution.",
      tools: ["Power BI", "Data Analysis", "Data Visualization"],
      link: "https://github.com/sahanasri18/IT-Support-Incident-Analysis-Dashboard"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-poppins font-bold text-center mb-4 text-foreground">Featured Projects</h2>
        <p className="text-center text-muted-foreground mb-12">Selected work across AI, machine learning, Python and data analysis.</p>
        <div className="grid md:grid-cols-2 gap-7 max-w-6xl mx-auto">
          {projects.map((project) => (
            <article key={project.title} className="bg-card border border-border rounded-2xl p-7 shadow-warm flex flex-col">
              <h3 className="text-xl font-semibold text-primary mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-5 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tools.map((tool) => <span key={tool} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">{tool}</span>)}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex w-fit px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90">View GitHub Repository</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
