import PixelField from "../Launch_Page/pixelField";
import './aboutMe.css';
import TypewriterText from "../Launch_Page/typewriterText";
import { Link } from "react-router-dom";
import Josefine from "../../assets/JosefineWyrtz.png";
import Cloud from "../../assets/Cloud.png";
import CV from "../../assets/CV - Josefine Palsgaard Wyrtz.pdf";
import Bolt from "../../assets/pixel-bolt.png";
import Java from "../../assets/java.png";
import Coding from "../../assets/Coding.png";


export default function AboutMe() {
  return (
    <div className="about-me-page">
      <p className="too-small-message">
        Sorry, please use a larger screen. The content can not be shown at this size.
      </p>

      <PixelField />

      <div className="content-page">
        <nav className="topbar">
            <Link to="/" className="back-link">&larr; Front Page</Link>
            <span className="logo">
                <TypewriterText 
                text="Josefine Wyrtz"
                loop={false}
                showCursor={true} />
            </span>
        </nav>

        <div className="container">
          <div className="profile-section">
            <img src={Josefine} alt="Josefine Wyrtz" className="profile-image" />
            <div className= "profile-text">
              <h1 className="name-heading">Hello, I am Josefine</h1>
              <p className="profile-description">I'm a 7th semester Interaction Design student at Aalborg University. On this page you can learn about my personal and academic interests and passions. If you want to learn more about my academic journey you can download my CV below.</p>
              <a href={CV} download className="download-button">
              Download CV
              </a>
            </div>
          </div>

          <div className="interests-section">
            
            <div className="academic-passions">
              <h2 className="section-title">
                Academic areas I'm passionate about exploring
              </h2>
              
              <div className="interests-grid">
                {interests.map((interest, i) => (
                  <div className="interest-card" key={i}>
                    <img src={interest.image} alt={interest.alt} className="interest-icon" />
                    <h3 className="interest-title">{interest.title}</h3>
                  </div>

                ))}
              </div>
            </div>

            <span className="section-doings">
              <div className="section-title">What am I working on in September?</div>
              <div className="now-card">
                <div className="top-label">
                  <span className="blip"></span>UPDATED IN SEPTEMBER 2026 
                </div>
                <div className="now-item">
                  <span className="emoji">💻</span>
                  <div>
                    <p className="now-label">Working On</p>
                    <p>Java MOOC.fi & Mircosoft's Azure/Cloud fundamentals</p>
                  </div>
                </div>
                <div className="now-item">
                  <span className="emoji">🎧</span>
                  <div>
                    <p className="now-label">Listening to</p>
                    <p>Podcast: Hvis du tør</p>
                  </div>
                </div>
                <div className="now-item">
                  <span className="emoji">📖</span>
                  <div>
                    <p className="now-label">Reading</p>
                    <p>Mellem to verdener by Marion Dampier Jeans</p>
                  </div>
                </div>
              </div>
            </span>
            <div className="contact-section">
              <h2 className="section-title">Want to connect?</h2>
                <a 
                  href="https://www.linkedin.com/in/josefine-palsgaard-wyrtz-295356a0" 
                  className="contact-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

const interests = [
  {
    image: Cloud,
    alt: "pixel art of a cloud",
    title: "Cloud Platforms and Infrastructure",
  },
  {
    image: Bolt,
    alt: "pixel art of a bolt",
    title: "Agile Software Engineering",  },
  {
    image: Java,
    alt: "pixel art of a coffee cup",
    title: "Java Programming",
  },
  {
    image: Coding,
    alt: "pixel art icon",
    title: "Frontend and Backend Development",
  },
];