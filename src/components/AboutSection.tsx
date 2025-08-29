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
                  I'm an aspiring data scientist with a strong passion for solving real-world problems using AI. 
                  I explore innovative ideas and enjoy building intelligent projects that bridge the gap between 
                  complex algorithms and practical solutions. Every project is an opportunity to learn something 
                  new and make a meaningful impact.
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
