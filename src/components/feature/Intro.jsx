function Intro() {
  const skills = [
    { category: "Languages", items: "Java, C++, Python, SQL" },
    { category: "Web", items: "HTML, CSS, JavaScript" },
    { category: "Frameworks", items: "React, Angular, Vue, Bootstrap, Django" },
    { category: "Tools", items: "MongoDB, Android Studio, Power BI, Flutter" },
    { category: "Core Areas", items: "Full Stack, Backend, AI/ML, Data Analysis" },
  ];

  const experience = [
    { role: "Web Development Intern", company: "Code Alpha · Cognifyz" },
    { role: "App Development Intern", company: "Code Alpha" },
    { role: "AI/ML Intern", company: "Coding Samurai · AI Fellowship" },
    { role: "Cybersecurity Simulation", company: "Deloitte Forage" },
  ];

  return (
    <section className="intro">
      {/* About Title */}
      <h2 className="about-title">ABOUT ME</h2>

      {/* Bio Card */}
      <div className="glass-card intro-bio">
        <h3 className="intro-name">Utkarsh Tiwari</h3>
        <p className="intro-role">Web Developer · AI/ML · DevOps · App Developer</p>
        <p className="intro-location">📍 Prayagraj, India</p>
        <div className="card-divider" />
        <p className="intro-summary">
          Motivated BCA student with foundational knowledge in programming,
          web development, and data analysis. Passionate about building
          full-stack applications and contributing to innovative technical
          projects.
        </p>
        <div className="intro-buttons">
          <a href="mailto:bhargavutkarsh28@gmail.com" className="btn-primary">Hire Me</a>
          <a href="#projects" className="btn-outline">View Projects</a>
        </div>
      </div>

      {/* Skills */}
      <div className="intro-section">
        <h3 className="section-subtitle">TECHNICAL SKILLS</h3>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={skill.category}>
              <div className="glass-card skill-card">
                <span className="skill-category">{skill.category}</span>
                <p className="skill-items">{skill.items}</p>
              </div>
              {index < skills.length - 1 && <div className="card-divider" />}
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="intro-section">
        <h3 className="section-subtitle">EDUCATION</h3>
        <div className="glass-card edu-card">
          <p className="edu-degree">Bachelor of Computer Applications (BCA)</p>
          <div className="card-divider" />
          <p className="edu-school">SHUATS University, Prayagraj</p>
          <p className="edu-year">2023 – 2026</p>
        </div>
        <div className="glass-card edu-card" style={{ marginTop: "1rem" }}>
          <p className="edu-degree">Intermediate</p>
          <div className="card-divider" />
          <p className="edu-school">Jwala Devi SVMIC, Prayagraj</p>
          <p className="edu-year">2021</p>
        </div>
      </div>

      {/* Experience */}
      <div className="intro-section">
        <h3 className="section-subtitle">EXPERIENCE</h3>
        <div className="exp-grid">
          {experience.map((exp, index) => (
            <div key={exp.role}>
              <div className="glass-card exp-card">
                <p className="exp-role">{exp.role}</p>
                <p className="exp-company">{exp.company}</p>
              </div>
              {index < experience.length - 1 && <div className="card-divider" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Intro;