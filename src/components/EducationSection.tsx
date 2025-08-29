import { GraduationCap, Code, Smartphone, BarChart3, Cloud, Briefcase } from 'lucide-react';

const EducationSection = () => {
  const certifications = [
    {
      title: "AI & Prompt Engineering ",
      provider: "Acutix LLP",
      duration: "Apr – Jun 2025",
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      title: "Python Development",
      provider: "TechnoHacks EduTech",
      duration: "Aug 2024",
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Digital Marketing",
      provider: "Joy Technologies", 
      duration: "Sep – Oct 2024",
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      title: "Data Analytics Simulation",
      provider: "Accenture (Forage)",
      duration: "Dec 2024",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "Solutions Architecture",
      provider: "AWS (Forage)",
      duration: "Feb 2025", 
      icon: <Cloud className="w-6 h-6" />
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-center text-foreground mb-16">
            Education & Experience
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-poppins font-semibold text-primary mb-8">Education</h3>
              <div className="bg-card rounded-2xl p-8 shadow-warm border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary flex-shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2 font-poppins">
                      SA Engineering College, Chennai
                    </h4>
                    <p className="text-primary font-medium mb-1 font-poppins">
                      B.Tech – Artificial Intelligence and Data Science
                    </p>
                    <p className="text-muted-foreground font-poppins">
                      (2022–2026) – CGPA: 8.67
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Certifications & Internships */}
            <div>
              <h3 className="text-2xl font-poppins font-semibold text-primary mb-8">Certifications & Internships</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div 
                    key={cert.title}
                    className="bg-card rounded-2xl p-6 shadow-soft border border-border hover:shadow-warm transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                        {cert.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground font-poppins">
                          {cert.title}
                        </h4>
                        <p className="text-primary font-medium font-poppins">
                          {cert.provider}
                        </p>
                        <p className="text-muted-foreground text-sm font-poppins">
                          {cert.duration}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
