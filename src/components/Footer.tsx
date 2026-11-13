import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => (
  <footer className="bg-card py-10 border-t border-border">
    <div className="container mx-auto px-6 text-center">
      <p className="text-foreground font-poppins font-medium mb-5">AI / ML & Python Developer Portfolio · Sahana Sri R</p>
      <div className="flex justify-center gap-6">
        <a aria-label="GitHub" href="https://github.com/sahanasri18" target="_blank" rel="noopener noreferrer" className="text-primary hover:opacity-70"><Github size={21} /></a>
        <a aria-label="LinkedIn" href="https://linkedin.com/in/sahanasri-r/" target="_blank" rel="noopener noreferrer" className="text-primary hover:opacity-70"><Linkedin size={21} /></a>
        <a aria-label="Email" href="mailto:imsahanasri@gmail.com" className="text-primary hover:opacity-70"><Mail size={21} /></a>
      </div>
    </div>
  </footer>
);

export default Footer;
