const SkillsSection = () => {
  const skills = [
    'Python', 'SQL', 'C++', 'Java', 'C', 
    'MongoDB', 'AI/ML', 'Data Science', 'Streamlit',
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg font-poppins">
            Technical expertise and core competencies
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