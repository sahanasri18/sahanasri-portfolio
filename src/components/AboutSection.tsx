const AboutSection = () => (
  <section id="about" className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-[.7fr_1.3fr] gap-10 items-start">
        <div><p className="text-primary text-sm font-bold tracking-[.2em] uppercase mb-3">A little context</p><h2 className="text-4xl sm:text-5xl font-bold text-foreground">About me</h2></div>
        <div className="rounded-2xl border border-border bg-card p-7 sm:p-9">
          <p className="text-lg text-foreground/90 leading-8 mb-5">I am a 2026 B.Tech graduate in Artificial Intelligence and Data Science. My interests include machine learning, natural language processing, Python development and building useful software applications.</p>
          <p className="text-base text-muted-foreground leading-8">During my AI / Prompt Engineering internship at Acutix Soft LLP, I worked on data collection and preprocessing, dashboards, Python and SQL tasks, application integration and testing. My projects have given me practical exposure to APIs, model workflows, web applications and data analysis.</p>
        </div>
      </div>
    </div>
  </section>
);
export default AboutSection;
