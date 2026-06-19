function Projects() {
  const projects = [
    {
      tag: "Minor Project",
      title: "Classroom Allotment System",
      desc: "A web-based system to automate classroom scheduling and allotment for college departments, reducing manual effort and scheduling conflicts.",
      tech: ["React", "JavaScript", "CSS", "MongoDB"],
      type: "college",
    },
    {
      tag: "Major Project",
      title: "Crop Yield Prediction",
      desc: "An AI/ML model that predicts crop yield based on soil data, weather patterns, and historical agricultural data to assist farmers in decision making.",
      tech: ["Python", "ML", "Data Analysis", "Power BI"],
      type: "college",
    },
    {
      tag: "Freelance",
      title: "Mayuri E-Commerce Website",
      desc: "A fully functional e-commerce platform built for a client, featuring product listings, cart, checkout flow, and a responsive modern UI.",
      tech: ["React", "CSS", "JavaScript", "MongoDB"],
      type: "freelance",
    },
    {
      tag: "Founder · 2026",
      title: "UsherStack",
      desc: "Founded UsherStack in 2026 — a software company delivering high quality web, app, and AI-powered projects with a dedicated team of developers and designers.",
      tech: ["Full Stack", "AI/ML", "App Dev", "UI/UX"],
      type: "company",
    },
  ];

  const tagColors = {
    college: "#00bfff",
    freelance: "#a855f7",
    company: "#22c55e",
  };

  return (
    <section className="projects" id="projects">
      <h2 className="about-title">PROJECTS</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="glass-card project-card">

            <div className="project-header">
              <span
                className="project-tag"
                style={{ color: tagColors[project.type], borderColor: tagColors[project.type] }}
              >
                {project.tag}
              </span>
            </div>

            <div className="card-divider" />

            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.desc}</p>

            <div className="project-tech">
              {project.tech.map((t) => (
                <span key={t} className="tech-badge">{t}</span>
              ))}
            </div>

          </div>
        ))}
      </div>

      {/* UsherStack Banner */}
      <div className="glass-card usherstack-banner">
        <div className="usherstack-text">
          <h3 className="usherstack-title">UsherStack</h3>
          <p className="usherstack-sub">Founded 2026 · Prayagraj, India</p>
          <p className="usherstack-desc">
            We build high quality web applications, mobile apps, and AI-powered
            solutions. Our team delivers end-to-end digital products for
            startups, businesses, and individuals.
          </p>
          <div className="usherstack-tags">
            <span className="tech-badge">Web Dev</span>
            <span className="tech-badge">App Dev</span>
            <span className="tech-badge">AI/ML</span>
            <span className="tech-badge">UI/UX</span>
            <span className="tech-badge">Freelance</span>
          </div>
        </div>
      <div className="usherstack-badge">
       <a href="https://usherstack.com/" target="_blank" rel="noopener">
        UsherStack.com
       </a>
       <p>Est. 2026</p>
      </div>
      </div>

    </section>
  );
}

export default Projects;