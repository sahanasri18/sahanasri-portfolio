import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
const ContactSection = () => (
  <section id="contact" className="bg-background py-24">
    <div className="container mx-auto px-6">
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 text-xs font-bold uppercase tracking-[.22em] text-primary">05 — Say hello</p>
        <div className="grid gap-8 border-b border-border pb-12 md:grid-cols-[1fr_auto] md:items-end">
          <div><h2 className="font-playfair text-5xl font-semibold leading-tight sm:text-7xl">Have a role<br/>in mind?</h2><p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground">Open to entry-level AI/ML, Python Developer and Software Developer opportunities.</p></div>
          <a href="mailto:imsahanasri@gmail.com" className="inline-flex w-fit items-center gap-3 border-b-2 border-primary pb-2 text-lg font-semibold hover:text-primary">Write to me <ArrowUpRight size={20}/></a>
        </div>
        <div className="flex flex-col justify-between gap-6 pt-7 sm:flex-row sm:items-center">
          <a href="mailto:imsahanasri@gmail.com" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"><Mail size={16}/> imsahanasri@gmail.com</a>
          <div className="flex gap-6"><a href="https://github.com/sahanasri18" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"><Github size={16}/> GitHub</a><a href="https://linkedin.com/in/sahanasri-r/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"><Linkedin size={16}/> LinkedIn</a></div>
          <a href="#home" className="text-xs uppercase tracking-wider text-muted-foreground hover:text-primary">Back to top ↑</a>
        </div>
        <p className="mt-10 text-xs text-muted-foreground/70">© 2026 Sahana Sri. Built with care.</p>
      </div>
    </div>
  </section>
);
export default ContactSection;
