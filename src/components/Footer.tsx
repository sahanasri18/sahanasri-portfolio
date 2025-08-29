import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-foreground font-poppins font-medium mb-4">
                              by Sahana Sri
          </p>
          
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/sahanasri18"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/sahanasri18"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:sahanasri18@gmail.com"
              className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;