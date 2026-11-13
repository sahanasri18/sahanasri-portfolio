const groups = [
  { number: '01', title: 'Programming', skills: ['Python', 'SQL', 'Java fundamentals', 'TypeScript'] },
  { number: '02', title: 'AI & Data', skills: ['Machine Learning fundamentals', 'NLP', 'Data preprocessing', 'Pandas', 'NumPy', 'Data visualization'] },
  { number: '03', title: 'Web & APIs', skills: ['React', 'FastAPI', 'REST APIs', 'JSON', 'WebRTC'] },
  { number: '04', title: 'Databases & Tools', skills: ['MySQL', 'MongoDB', 'Git', 'GitHub', 'VS Code', 'Postman'] }
];
const SkillsSection = () => (
  <section id="skills" className="bg-background py-24">
    <div className="container mx-auto px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div><p className="mb-3 text-xs font-bold uppercase tracking-[.22em] text-primary">02 — Toolkit</p><h2 className="text-4xl font-bold sm:text-5xl">Things I work with<span className="text-primary">.</span></h2></div>
          <p className="max-w-xs text-sm leading-6 text-muted-foreground">Tools and concepts used across my coursework, internship and projects.</p>
        </div>
        <div className="grid gap-x-12 md:grid-cols-2">
          {groups.map(group => <div key={group.number} className="grid grid-cols-[42px_1fr] gap-4 border-t border-border py-7">
            <span className="pt-1 font-mono text-xs text-primary">{group.number}</span>
            <div><h3 className="mb-4 text-xl font-semibold">{group.title}</h3><div className="flex flex-wrap gap-x-2 gap-y-2">{group.skills.map(skill => <span key={skill} className="border-b border-[#cfc5b5] pb-1 pr-2 text-sm text-muted-foreground">{skill}</span>)}</div></div>
          </div>)}
        </div>
      </div>
    </div>
  </section>
);
export default SkillsSection;
