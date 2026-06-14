import { Github, Linkedin } from 'lucide-react';

const HeroSection = () => {
  const skills = ['SQL', 'Power BI', 'Excel', 'Python', 'Power Query', 'DAX', 'Data Visualization', 'KPI Reporting', 'Dashboard Development'];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden py-20">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden shadow-warm border border-border">
                  <img
                    src="/profile.jpg"
                    alt="Sahana Sri"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="text-center lg:text-left space-y-8 order-1 lg:order-2">
              <div>
                <p className="text-xl md:text-2xl text-primary font-medium mb-2 font-poppins">Sahana Sri</p>
                <h1 className="text-5xl md:text-6xl font-poppins font-bold text-foreground mb-4 leading-tight">
                  Data Analyst & BI Analyst
                </h1>
                <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium mb-6 font-poppins">
                  Transforming Data into Actionable Insights
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8 font-poppins">
                  Leveraging SQL, Power BI, Python, and Excel to build dashboards, uncover patterns, and drive business decisions with clean data storytelling.
                </p>
                <p className="text-sm text-muted-foreground font-medium mb-6 font-poppins">
                  SQL | Power BI | Python | Excel | Data Visualization
                </p>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
                {skills.map((skill, index) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-card text-foreground rounded-full border border-border text-sm font-medium font-poppins hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    #{skill}
                  </span>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a
                  href="https://github.com/sahanasri18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-2xl hover:scale-105 transition-all duration-300 shadow-soft font-medium font-poppins"
                >
                  <Github size={20} /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/sahana-sri-3145274"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-2xl hover:scale-105 transition-all duration-300 shadow-soft font-medium font-poppins"
                >
                  <Linkedin size={20} /> LinkedIn
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
