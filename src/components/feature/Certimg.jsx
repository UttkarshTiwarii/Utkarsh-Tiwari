import ct from "../../assets/ct.webp";
import ct1 from "../../assets/ct1.webp";
import ct2 from "../../assets/ct2.webp";
import ct3 from "../../assets/ct3.webp";
import ct4 from "../../assets/ct4.webp";
import ct5 from "../../assets/ct5.webp";
import ct6 from "../../assets/ct6.webp";
import ct7 from "../../assets/ct7.webp";

function Certimg() {
  const certificates = [ct, ct1, ct2, ct3, ct4, ct5, ct6, ct7];

  return (
    <section className="cert-img-section">
      <h3 className="section-subtitle">CERTIFICATE IMAGES</h3>

      <div className="cert-img-grid">
        {certificates.map((cert, index) => (
          <div key={index} className="cert-img-card glass-card">
            <img
              src={cert}
              alt={`Certificate ${index + 1}`}
              className="cert-img"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certimg;