import PixelField from './pixelField';
import './launch.css';
import TypewriterText from './typewriterText';
import FolderPixel from '../../assets/folder.png';
import Star from '../../assets/star.png';

function Launch() {
  return (
    <div className="launch-page">
      <PixelField />
      
        <div className="container">
            <header className="hero">
                <TypewriterText
                    text="Josefine Wyrtz"
                    speed={100}
                    loop={false}
                    showCursor={true}
                />
            <p className="subtitle">
                Masters Student in Interaction Design. <br />
                Explore my work and learn more about me below!
            </p>
            </header>

        <div className="cards">
            <a href="/about-me" className="card">
                <div className="icon-stack">
                <span className="star-icon">
                    <img src={Star} alt="pixel art of a star" className="star-pixel" />
                </span>
                </div>
                <h2>About me</h2>
                <p>Who I am & what I do</p>
            </a>

            <a href="/projects" className="card">
                <div className="icon-stack">
                <span className="folder-icon">
                    <img src={FolderPixel} alt="pixel art of a folder" className="folder-pixel" />
                </span>
                </div>
                <h2>Projects</h2>
                <p>Student and academic work</p>
            </a>
        </div>

            <footer className="social-links">
                <a 
                  href="https://github.com/Josefine2401" 
                  className="github-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/josefine-palsgaard-wyrtz-295356a0" 
                  className="linkedin-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
            </footer>
        </div>
    </div>
  );
}
export default Launch;