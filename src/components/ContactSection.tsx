import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const ContactSection = () => (
  <section id="contact" className="py-20 bg-background">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-4">Contact</h2>
        <p className="text-muted-foreground text-lg mb-10">Open to entry-level AI/ML, Python Developer and Software Developer roles.</p>
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          <a href="mailto:imsahanasri@gmail.com" className="p-6 bg-card rounded-2xl border border-border hover:border-primary transition-colors">
            <Mail className="w-7 h-7 text-primary mx-auto mb-3" />
            <h3 className="font-semibold text-foreground mb-1">Email</h3>
            <p className="text-sm text-muted-foreground">imsahanasri@gmail.com</p>
          </a>
          <a href="https://linkedin.com/in/sahanasri-r/" target="_blank" rel="noopener noreferrer" className="p-6 bg-card rounded-2xl border border-border hover:border-primary transition-colors">
            <Linkedin className="w-7 h-7 text-primary mx-auto mb-3" />
            <h3 className="font-semibold text-foreground mb-1">LinkedIn</h3>
            <p className="text-sm text-muted-foreground">View professional profile</p>
          </a>
          <a href="https://github.com/sahanasri18" target="_blank" rel="noopener noreferrer" className="p-6 bg-card rounded-2xl border border-border hover:border-primary transition-colors">
            <Github className="w-7 h-7 text-primary mx-auto mb-3" />
            <h3 className="font-semibold text-foreground mb-1">GitHub</h3>
            <p className="text-sm text-muted-foreground">Explore code repositories</p>
          </a>
        </div>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium">
          <ArrowUp size={18} /> Back to Top
        </button>
      </div>
    </div>
  </section>
);

export default ContactSection;
