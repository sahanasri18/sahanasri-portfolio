const SkillsSection = () => {
  const groups = [
    { title: 'Programming', skills: ['Python', 'SQL', 'Java fundamentals', 'TypeScript'] },
    { title: 'AI & Data', skills: ['Machine Learning fundamentals', 'NLP', 'Data preprocessing', 'Pandas', 'NumPy', 'Data visualization'] },
    { title: 'Web & APIs', skills: ['React', 'FastAPI', 'REST APIs', 'JSON', 'WebRTC'] },
    { title: 'Databases & Tools', skills: ['MySQL', 'MongoDB', 'Git', 'GitHub', 'VS Code', 'Postman'] }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground text-center mb-4">Technical Skills</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Technologies and concepts I have used in coursework and projects.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {groups.map((group) => (
              <div key={group.title} className="bg-card rounded-2xl p-7 border border-border shadow-soft">
                <h3 className="text-xl font-semibold text-primary mb-5">{group.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => <span key={skill} className="px-3 py-2 rounded-full border border-border text-sm text-foreground">{skill}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
