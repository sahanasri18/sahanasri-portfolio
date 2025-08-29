import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a
              href="mailto:sahanasri18@gmail.com"
              className="flex flex-col items-center p-6 bg-card rounded-2xl shadow-soft hover:shadow-warm transition-all duration-300 hover:scale-105 border border-border group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 font-poppins">Email</h3>
              <p className="text-muted-foreground font-poppins">Get in touch</p>
            </a>
            
            <a
              href="https://www.linkedin.com/in/sahanasri18"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-card rounded-2xl shadow-soft hover:shadow-warm transition-all duration-300 hover:scale-105 border border-border group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Linkedin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 font-poppins">LinkedIn</h3>
              <p className="text-muted-foreground font-poppins">Let's connect</p>
            </a>
            
            <a
              href="https://github.com/sahanasri18"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-card rounded-2xl shadow-soft hover:shadow-warm transition-all duration-300 hover:scale-105 border border-border group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Github className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 font-poppins">GitHub</h3>
              <p className="text-muted-foreground font-poppins">View projects</p>
            </a>
          </div>
          
          {/* Scroll to top button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:scale-105 transition-all duration-300 shadow-soft font-medium font-poppins"
          >
            <ArrowUp size={18} />
            Back to Top
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;