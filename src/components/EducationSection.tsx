import { GraduationCap, Briefcase } from 'lucide-react';

const EducationSection = () => (
  <section id="education" className="py-20 bg-background">
    <div className="container mx-auto px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-poppins font-bold text-center text-foreground mb-12">Education & Experience</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card rounded-2xl p-8 border border-border shadow-soft">
            <GraduationCap className="w-8 h-8 text-primary mb-5" />
            <h3 className="text-xl font-semibold text-foreground mb-2">B.Tech – Artificial Intelligence & Data Science</h3>
            <p className="text-primary font-medium">S.A. Engineering College, Chennai</p>
            <p className="text-muted-foreground mt-2">2022–2026 · CGPA: 8.70 / 10</p>
          </div>
          <div className="bg-card rounded-2xl p-8 border border-border shadow-soft">
            <Briefcase className="w-8 h-8 text-primary mb-5" />
            <h3 className="text-xl font-semibold text-foreground mb-2">AI / Prompt Engineering Intern</h3>
            <p className="text-primary font-medium">Acutix Soft LLP, Chennai</p>
            <p className="text-muted-foreground mt-2 mb-3">Apr–Jun 2025</p>
            <p className="text-muted-foreground leading-relaxed">Worked on data collection and preprocessing, Python and SQL tasks, dashboards, application integration and testing for an AI-focused project.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;
