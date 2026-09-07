import PixelField from './pixelField';
import './launch.css';
import TypewriterText from './typewriterText';

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
                Masters Student in Interaction Design. Read more about me here.
            </p>
            </header>

        <div className="cards">
            <a href="/about-me" className="card">
                <div className="icon-stack">
                <span className="pixel pixel-black"></span>
                <span className="pixel pixel-pink"></span>
                </div>
                <h2>About me</h2>
                <p>Who I am & what I do</p>
            </a>

            <a href="/projects" className="card">
                <div className="icon-stack">
                <span className="pixel pixel-black small"></span>
                <span className="pixel pixel-blue"></span>
                </div>
                <h2>Projects</h2>
                <p>Student and academic work</p>
            </a>
        </div>

            <footer className="social-links">
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
            </footer>
        </div>
    </div>
  );
}
export default Launch;