import { Lightbulb } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-warm border border-border">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-8 h-8 text-primary animate-pulse" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-6">
                  About Me
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed font-poppins">
                  I am a Data Analyst and BI Analyst focused on turning complex datasets into clear business insights. I build dashboards, automate reporting, and deliver data-driven recommendations using SQL, Power BI, Python, and Excel to support smarter decisions and measurable outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
