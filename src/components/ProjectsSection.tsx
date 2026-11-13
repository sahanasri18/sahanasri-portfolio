const ProjectsSection = () => {
  const projects = [
    {
      title: "AI Customer Support Intelligence",
      description: "A full-stack project focused on organizing customer support tickets and applying machine-learning-based ticket classification.",
      tools: ["Python", "FastAPI", "React", "TypeScript", "MySQL"],
      link: "https://github.com/sahanasri18/ai-customer-support-intelligence"
    },
    {
      title: "DeClickify – Clickbait Detection",
      description: "An NLP project focused on identifying clickbait-style headlines through text classification.",
      tools: ["Python", "NLP", "TensorFlow"],
      link: "https://github.com/sahanasri18/Clickbait_detection"
    },
    {
      title: "Emotion Detection",
      description: "A deep-learning project for emotion detection. The repository contains the project implementation and supporting files.",
      tools: ["Python", "Deep Learning"],
      link: "https://github.com/sahanasri18/Emotion_detection"
    },
    {
      title: "Call Drop Prediction & Network Issue Detection",
      description: "A data-focused project exploring call-drop prediction and network issue detection.",
      tools: ["Python", "Machine Learning"],
      link: "https://github.com/sahanasri18/Call-Drop-Prediction-Network-Issue-Detection"
    },
    {
      title: "IT Support Incident Analysis Dashboard",
      description: "A Power BI dashboard for reviewing IT support incidents, issue patterns and service performance.",
      tools: ["Power BI", "SQL", "Excel", "DAX"],
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
