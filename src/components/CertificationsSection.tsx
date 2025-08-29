import { Award, Medal, Trophy } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Introduction to Python",
      provider: "LinkedIn Learning",
      icon: "🐍"
    },
    {
      title: "Copilot+ PC",
      provider: "Microsoft",
      icon: "🤖"
    },
    {
      title: "Data Science with Infosys Springboard",
      provider: "Infosys Springboard",
      icon: "📊"
    },
    {
      title: "Learning C & Java",
      provider: "LinkedIn Learning",
      icon: "☕"
    },
    {
      title: "AWS Job Simulation",
      provider: "Forage",
      icon: "☁️"
    },
    {
      title: "Accenture Job Simulation",
      provider: "Forage",
      icon: "💼"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-primary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
            Certifications & Achievements
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Continuous learning and professional development milestones
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {certifications.map((cert, index) => (
              <div 
                key={cert.title}
                className="bg-card rounded-2xl p-6 shadow-gentle hover:shadow-soft transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-2xl">{cert.icon}</span>
                  <Award className="text-primary" size={24} />
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {cert.title}
                </h3>
                
                <p className="text-muted-foreground text-sm">
                  {cert.provider}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-secondary rounded-2xl p-8 shadow-soft max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <Trophy className="text-primary mr-3" size={32} />
                <h3 className="text-2xl font-semibold text-foreground">Special Achievement</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Earned over <span className="font-bold text-primary">300 bronze medals</span> on Skillrack, 
                demonstrating consistent problem-solving skills and dedication to continuous learning.
              </p>
              <div className="flex items-center justify-center gap-2">
                <Medal className="text-amber-500" size={20} />
                <span className="font-semibold text-foreground">300+ Bronze Medals</span>
                <Medal className="text-amber-500" size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;