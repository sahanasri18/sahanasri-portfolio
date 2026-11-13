const EducationSection = () => (
  <section id="education" className="bg-[#242a34] py-24 text-[#f7f3eb]">
    <div className="container mx-auto px-6">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[.22em] text-[#e28a70]">04 — The path so far</p>
        <h2 className="mb-14 font-playfair text-4xl font-semibold sm:text-5xl">Education & experience</h2>
        <div className="grid gap-12 md:grid-cols-2">
          <div className="border-t border-white/20 pt-6">
            <p className="mb-5 font-mono text-xs text-[#e28a70]">2022 — 2026</p>
            <h3 className="text-2xl font-semibold leading-snug">B.Tech, Artificial Intelligence & Data Science</h3>
            <p className="mt-3 text-sm text-white/65">S.A. Engineering College, Chennai</p>
            <p className="mt-6 inline-block border border-white/20 px-3 py-2 text-sm">CGPA · 8.70 / 10</p>
          </div>
          <div className="border-t border-white/20 pt-6">
            <p className="mb-5 font-mono text-xs text-[#e28a70]">APR — JUN 2025</p>
            <h3 className="text-2xl font-semibold leading-snug">AI / Prompt Engineering Intern</h3>
            <p className="mt-3 text-sm text-white/65">Acutix Soft LLP, Chennai</p>
            <p className="mt-6 text-sm leading-7 text-white/75">Worked on data collection and preprocessing, Python and SQL tasks, dashboards, application integration and testing for an AI-focused project.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default EducationSection;
