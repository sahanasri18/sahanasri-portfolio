import { useState, useEffect } from 'react';

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
  const links = [
    { id: 'home', label: 'Home' }, { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' }, { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' }, { id: 'contact', label: 'Contact' }
  ];
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled || menuOpen ? 'bg-background/90 backdrop-blur-xl border-b border-border shadow-gentle' : 'bg-background/50 backdrop-blur-sm'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button onClick={() => scrollToSection('home')} className="text-xl font-bold tracking-tight text-foreground">Sahana<span className="text-primary">.</span></button>
          <div className="hidden md:flex items-center gap-7">
            {links.map((item) => <button key={item.id} onClick={() => scrollToSection(item.id)} className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium">{item.label}</button>)}
          </div>
          <button aria-label="Toggle navigation menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-foreground p-2 rounded-lg border border-border">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} /></svg>
          </button>
        </div>
        {menuOpen && <div className="md:hidden flex flex-col gap-1 pt-4 pb-2">
          {links.map((item) => <button key={item.id} onClick={() => scrollToSection(item.id)} className="text-left px-3 py-3 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/5">{item.label}</button>)}
        </div>}
      </div>
    </nav>
  );
};
export default Navbar;
