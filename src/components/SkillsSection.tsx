const SkillsSection = () => {
  const skills = [
    'SQL', 'Power BI', 'Excel', 'Python', 'Power Query', 'DAX', 'Data Visualization', 'Dashboard Development', 'KPI Reporting', 'Business Intelligence', 'Data Analysis', 'Reporting Analyst'
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg font-poppins">
            Key analytics skills and tools for data-driven business intelligence and reporting.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div 
                key={skill}
                className="px-6 py-3 bg-card text-foreground rounded-full border border-border shadow-soft hover:scale-105 hover:shadow-warm transition-all duration-300 font-medium font-poppins"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;