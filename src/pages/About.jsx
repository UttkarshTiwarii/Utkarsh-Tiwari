import Navbar from "../components/UI/Navbar";
import Footer from "../components/UI/Footer";
import "../style/global.css";

function About() {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <h1 className="about-title">My Journey</h1>

        <div className="timeline">
          <div className="timeline-item">
            <h3>👋 Introduction</h3>
            <p>
              I'm <strong>Utkarsh Tiwari</strong>, born on
              <strong> 28 July 2002</strong> in Rampur, Deoria, Uttar Pradesh.
            </p>
          </div>

          <div className="timeline-item">
            <h3>🏠 Family Background</h3>
            <p>
              Son of <strong>Mr. Shashinath Tiwari</strong> and
              <strong> Mrs. Reanu Tiwari</strong>. I also have an elder brother,
              <strong> Mr. Atul Tiwari</strong>.
            </p>
          </div>

          <div className="timeline-item">
            <h3>🎓 Primary Education</h3>
            <p>
              Completed primary education from
              <strong> R.K. Public Academy, Rampur</strong>.
            </p>
          </div>

          <div className="timeline-item">
            <h3>📚 Secondary Education</h3>
            <p>
              Completed secondary and senior secondary education from
              <strong>
                {" "}
                Jwala Devi Saraswati Vidya Mandir Inter College (SVMIC)
              </strong>
              , Prayagraj.
            </p>
          </div>

          <div className="timeline-item">
            <h3>💻 Bachelor's Degree</h3>
            <p>
              Earned a <strong>Bachelor of Computer Applications (BCA)</strong>
              from <strong>SHUATS, Prayagraj</strong>.
            </p>
          </div>

          <div className="timeline-item">
            <h3>💻 College Projects</h3>
            <p>
              Worked on several college projects, including a
              <strong> ClassRoom Allotment System</strong>,
              <strong> Crop Yield Prediction Using Machine Learning</strong> and
              a<strong> Personal Portfolio Website</strong>, showcasing my
              skills in web development and problem-solving.
            </p>
          </div>

          <div className="timeline-item">
            <h3>🌐 WikiClub Tech Volunteer</h3>
            <p>
              During my college years, I actively participated as a volunteer
              with
              <strong> WikiClub Tech</strong>, a community initiative supported
              by
              <strong> Wikimedia</strong>. In this role, I contributed to
              organizing technology events, workshops, and knowledge-sharing
              sessions at
              <strong> SHUATS, Prayagraj</strong>. This experience helped me
              develop teamwork, event management, leadership, and community
              engagement skills while promoting collaborative learning and open
              knowledge among students.
            </p>
          </div>

          <div className="timeline-item">
            <h3>🚀 Co-Founder of UsherStack</h3>
            <p>
              During my final semester of BCA, I co-founded
              <strong> UsherStack</strong>, an IT Services & Consulting company.
              As a core team member, I contributed to technical development,
              business planning, and company growth.
            </p>
          </div>

          <div className="timeline-item">
            <h3>🎭 Extracurricular Activities</h3>
            <p>
              Active in acting and stage performances, helping me develop
              confidence, communication, and leadership skills.
            </p>
          </div>

          <div className="timeline-item">
            <h3>🎯 Future Goals</h3>
            <p>
              To continuously learn, innovate, and contribute to the technology
              industry while building impactful digital solutions.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
