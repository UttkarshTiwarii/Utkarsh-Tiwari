import Navbar from "../components/UI/Navbar";
import Footer from "../components/UI/Footer";
import "../style/global.css";

import img1 from "../assets/gallery/img1.webp";
import img2 from "../assets/gallery/img2.webp";
import img3 from "../assets/gallery/img3.webp";
import img4 from "../assets/gallery/img4.webp";
import img5 from "../assets/gallery/img5.webp";
import img6 from "../assets/gallery/img6.webp";

function Gallery() {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <>
      <Navbar />

      <section className="gallery-container">
        <h1 className="gallery-title">My Gallery</h1>

        <div className="gallery-grid">
          {images.map((image, index) => (
            <div className="gallery-card" key={index}>
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Gallery;