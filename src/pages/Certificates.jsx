import Navbar from "../components/UI/Navbar";
import Footer from "../components/UI/Footer";
import Certimg from "../components/feature/Certimg";
import "../style/global.css";

function Certificates() {
  const certificates = [
    {
      title: "Build Capstone Project on Spring Boot",
      issuer: "FirstBit Solutions",
      date: "Jul 2025",
      skills: ["Spring Boot"],
      color: "#22c55e",
      verifyUrl: null,
    },
    {
      title: "Gradle Build Caching",
      issuer: "Gradle Technologies",
      date: "Jun 2025",
      credentialId: "f3dc5e58-7459-4693-8fdd-5dc6c477f03b",
      skills: ["Gradle", "Build Tools"],
      color: "#00bfff",
      verifyUrl: "https://gradle.com/training/build-cache-deep-dive/",
    },
    {
      title: "Deloitte Australia – Technology Job Simulation",
      issuer: "Forage",
      date: "Jun 2025",
      credentialId: "pszP3bEyDryS5exS8",
      skills: ["Problem Solving", "Data Structures"],
      color: "#00bfff",
      verifyUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Deloitte-Australia/YPWCiGNTkr6QxcpEu_Deloitte-Australia_pszP3bEyDryS5exS8.pdf",
    },
    {
      title: "Data Science & Analytics",
      issuer: "Jobaaj Learnings",
      date: "Dec 2024",
      credentialId: "AOIF1725053",
      skills: ["Data Analysis", "Big Data"],
      color: "#a855f7",
      verifyUrl: "https://jobaaj.com/learn/verify/AOIF1725053",
    },
    {
      title: "Project Management Workshop",
      issuer: "Jobaaj Learnings",
      date: "Jan 2025",
      credentialId: "AJWTY86918",
      skills: ["Project Management"],
      color: "#a855f7",
      verifyUrl: "https://jobaaj.com/learn/verify/AJWTY86918",
    },
    {
      title: "Generative AI for Developers",
      issuer: "Koenig Solutions Pvt. Ltd.",
      date: "Jun 2025",
      skills: ["Generative AI", "Artificial Intelligence"],
      color: "#f59e0b",
      verifyUrl: null,
    },
    {
      title: "Ethics in AI and Data Science (LFS112)",
      issuer: "The Linux Foundation",
      date: "May 2025",
      credentialId: "LF-e0h7ih4aaz",
      skills: ["AI Ethics", "Data Science"],
      color: "#f59e0b",
      verifyUrl: "https://courses.edx.org/certificates/LF-e0h7ih4aaz",
    },
    {
      title: "Internship Common Aptitude Test",
      issuer: "Internship Studio",
      date: "Jun 2025",
      credentialId: "CIT-P-826275",
      skills: ["Aptitude", "Problem Solving"],
      color: "#00bfff",
      verifyUrl: null,
    },
    {
      title: "AI Tools Workshop",
      issuer: "United Latino Students Association",
      date: "Jun 2025",
      credentialId: "46",
      skills: ["AI Tools", "ChatGPT"],
      color: "#f59e0b",
      verifyUrl: null,
    },
    {
      title: "Power BI Workshop",
      issuer: "United Latino Students Association",
      date: "Jun 2025",
      credentialId: "42",
      skills: ["MySQL", "Power BI"],
      color: "#a855f7",
      verifyUrl: null,
    },
  ];

  return (
    <div className="home">
      <Navbar />
      <div className="cert-page">
        <h2 className="about-title">CERTIFICATES</h2>
        <div className="cert-grid">
          {certificates.map((cert, index) => (
            <div key={index} className="glass-card cert-item-card">
              <div className="cert-bar" style={{ backgroundColor: cert.color }} />
              <div className="cert-body">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-date">Issued {cert.date}</p>
                {cert.credentialId && (
                  <p className="cert-id">ID: {cert.credentialId}</p>
                )}
                <div className="card-divider" />
                <div className="cert-skills">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="tech-badge"
                      style={{ borderColor: cert.color, color: cert.color }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                {cert.verifyUrl ? (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener"
                    className="cert-verify-btn"
                    style={{ borderColor: cert.color, color: cert.color }}
                  >
                    ✓ Verify Certificate
                  </a>
                ) : (
                  <span className="cert-no-verify">No online verification</span>
                )}
              </div>
            </div>
          ))}
        </div>
        <Certimg />
        <div className="note">
          <h2 className="note-text">
            Note:
          </h2>
          <p className="note-para">
              For more information about my certifications, projects, and professional experience, please visit my <span><a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a></span> profile.
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Certificates;