const AboutSection = () => (
  <section id="about" className="bg-[#eee8dc] py-24 text-[#242a34]">
    <div className="container mx-auto px-6">
      <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[.7fr_1.3fr]">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[.22em] text-primary">01 — Background</p>
          <h2 className="font-playfair text-5xl font-semibold leading-tight sm:text-6xl">Curious by<br/>nature.</h2>
          <p className="mt-6 max-w-xs text-sm leading-6 text-[#62636a]">Learning by building, testing ideas and improving one project at a time.</p>
        </div>
        <div className="border-l border-[#cfc5b5] pl-7 sm:pl-10">
          <p className="text-xl leading-9 sm:text-2xl">I am a 2026 B.Tech graduate in Artificial Intelligence and Data Science. I am interested in machine learning, natural language processing, Python development and building useful software applications.</p>
          <p className="mt-7 text-base leading-8 text-[#62636a]">During my AI / Prompt Engineering internship at Acutix Soft LLP, I worked on data collection and preprocessing, dashboards, Python and SQL tasks, application integration and testing. My projects have given me practical exposure to APIs, model workflows, web applications and data analysis.</p>
          <div className="mt-9 flex flex-wrap gap-8 border-t border-[#cfc5b5] pt-6">
            <div><p className="font-playfair text-3xl font-semibold">8.70</p><p className="mt-1 text-xs uppercase tracking-wider text-[#77736d]">CGPA / 10</p></div>
            <div><p className="font-playfair text-3xl font-semibold">2026</p><p className="mt-1 text-xs uppercase tracking-wider text-[#77736d]">Graduate</p></div>
            <div><p className="font-playfair text-3xl font-semibold">AI + DS</p><p className="mt-1 text-xs uppercase tracking-wider text-[#77736d]">Degree</p></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default AboutSection;
