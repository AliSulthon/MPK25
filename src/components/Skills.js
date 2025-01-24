import speakerPhoto from "../assets/img/meter1.png"; // Updated to use meter1.png
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

export const SpeakerSection = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const speaker = {
    name: "Izzuddin Ahmad Afif",
    description: "Mahasiswa Teknik Internet yang antusias dengan semangat kuat dalam bidang keamanan siber, kecerdasan buatan, dan blockchain. Dikenal karena pendekatan belajar yang proaktif, kemampuan memecahkan masalah yang baik, dan kolaborasi yang efektif. Berpengalaman dalam bekerja sama dan mengembangkan solusi inovatif menggunakan bahasa pemrograman dan alat modern.",
    imgUrl: speakerPhoto
  };

  return (
    <section className="skill" id="speaker" style={{ 
      background: 'linear-gradient(135deg, #04349c, #ffd700)', 
      color: '#FFFFFF', 
      padding: '50px 0' 
    }}>
      <div className="container">
        <div className="row" >
          <div className="col-12" >
            <div className="skill-bx wow zoomIn" style={{ backgroundColor: '#fdf0d5' }}>
              <h2 style={{ color: '#fad02c' }}>Pemateri</h2>
              <p style={{ fontSize: '1.2rem', marginBottom: '30px', color: '#004aad' }}>{speaker.description}</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item" style={{ textAlign: 'center' }}>
                  <img 
                    src={speaker.imgUrl} 
                    alt="Pemateri" 
                    style={{ 
                      width: '300px', 
                      height: '400px', 
                      objectFit: 'cover', 
                      borderRadius: '10px', 
                      marginBottom: '20px' 
                    }}
                  />
                  <h5 style={{ fontSize: '1.8rem', color: '#fad02c' }}>{speaker.name}</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
