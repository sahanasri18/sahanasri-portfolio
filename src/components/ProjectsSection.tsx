const ProjectsSection = () => {
  const projects = [
    {
      title: "IT Support Incident Analysis Dashboard",
      description: "Power BI dashboard for IT incident trends, SLA monitoring, and support performance analysis.",
      toolsUsed: ["Power BI", "SQL", "Excel", "DAX", "Power Query"],
      keyFeatures: ["Incident volume trend analysis", "SLA compliance KPI tracking", "Issue category and severity filtering"],
      githubLink: "https://github.com/sahanasri18/IT-Support-Incident-Analysis-Dashboard"
    },
    {
      title: "Multi-Store SKU Forecasting",
      description: "Demand forecasting analytics across stores and SKUs to support inventory planning.",
      toolsUsed: ["Python", "Pandas", "Excel", "Data Visualization"],
      keyFeatures: ["SKU-level demand forecasting", "Seasonal sales trend analysis", "Inventory planning support"],
      githubLink: "https://github.com/sahanasri18/Multi-Store-SKU-Forecasting"
    },
    {
      title: "Price Elasticity Analysis",
      description: "Pricing analytics project modeling demand response to price changes for revenue optimization.",
      toolsUsed: ["Python", "Excel", "Data Visualization", "Statistical Analysis"],
      keyFeatures: ["Demand elasticity modeling", "Price sensitivity charts", "Revenue impact evaluation"],
      githubLink: "https://github.com/sahanasri18/Price-Elasticity-Analysis"
    },
    {
      title: "User Segmentation Analysis",
      description: "Customer segmentation analysis to identify high-value audience groups and behavior-based segments.",
      toolsUsed: ["Python", "SQL", "Clustering", "Data Visualization"],
      keyFeatures: ["Segment profiling", "Cohort behavior analysis", "Actionable audience insights"],
      githubLink: "https://github.com/sahanasri18/user_segmentation"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-poppins font-bold text-center mb-12 text-foreground">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const repoName = project.githubLink ? project.githubLink.split('/').pop() : null;
            const imageSrc = repoName ? `/projects/${repoName}.png` : null;
            return (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 shadow-warm hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
              {imageSrc && (
                <img
                  src={imageSrc}
                  alt={project.title + ' screenshot'}
                  className="w-full h-40 object-cover rounded-md mb-4"
                  onError={(e:any) => { e.currentTarget.style.display = 'none'; }}
                />
              )}

              <h3 className="text-xl font-semibold text-primary mb-3">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>

              <div className="mb-4">
                <p className="text-sm font-semibold text-foreground mb-2">Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {project.toolsUsed.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border/70 px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm font-semibold text-foreground mb-2">Key Features</p>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                  {project.keyFeatures.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-3">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/80 transition-colors duration-300"
                  >
                    View GitHub Repository
                  </a>
                )}
              </div>
            </div>
          )})}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
