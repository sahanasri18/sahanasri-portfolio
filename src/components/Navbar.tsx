import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };
  const links = [{ id: 'home', label: 'Home' }, { id: 'about', label: 'About' }, { id: 'skills', label: 'Skills' }, { id: 'projects', label: 'Projects' }, { id: 'education', label: 'Education' }, { id: 'contact', label: 'Contact' }];
  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled || menuOpen ? 'border-b border-border bg-background/95 shadow-gentle backdrop-blur-xl' : 'bg-background/65 backdrop-blur-md'}`}>
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <button onClick={() => scrollToSection('home')} className="text-xl font-bold tracking-tight text-foreground">Sahana Sri<span className="text-primary">.</span></button>
          <div className="hidden items-center gap-1 rounded-full border border-border bg-card/70 p-1 md:flex">
            {links.map((item) => <button key={item.id} onClick={() => scrollToSection(item.id)} className="rounded-full px-4 py-2 text-xs font-medium text-muted-foreground transition hover:bg-primary/10 hover:text-primary">{item.label}</button>)}
          </div>
          <button aria-label="Toggle navigation menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} className="rounded-full border border-border p-2 text-foreground md:hidden">{menuOpen ? <X size={19}/> : <Menu size={19}/>}</button>
        </div>
        {menuOpen && <div className="grid grid-cols-2 gap-2 pb-3 pt-4 md:hidden">{links.map((item) => <button key={item.id} onClick={() => scrollToSection(item.id)} className="rounded-xl bg-card px-4 py-3 text-left text-sm text-muted-foreground hover:text-primary">{item.label}</button>)}</div>}
      </div>
    </nav>
  );
};
export default Navbar;
