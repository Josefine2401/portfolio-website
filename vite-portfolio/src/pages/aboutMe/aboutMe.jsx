import PixelField from "../Launch_Page/pixelField";
import './aboutMe.css';
import TypewriterText from "../Launch_Page/typewriterText";
import { Link } from "react-router-dom";

export default function AboutMe() {
  return (
    <div className="about-me-page">
      <PixelField />

      <div className="content-page">
        <nav className="topbar">
            <Link to="/" className="back-link">&larr; Forside</Link>
            <span className="logo">
                <TypewriterText 
                text="Josefine Wyrtz"
                loop={false}
                showCursor={true} />
            </span>
        </nav>

        <div className="container">
            <h1>This is about me</h1>
            <p>This is a brief description of who I am and what I do.</p>

            <h2 className="interests">Personal Interests</h2>

            <h2 className="academic-interests">These are my academic interests</h2>



            <h3 className= "current-doings">What am I working on right now?</h3>
            <span className="current-doings-box">
              <p>Last updated: </p>  

              <subtitle>Currently working on</subtitle>
              <p>Something</p>

              <subtitle>Listening to</subtitle>
              <p>Something</p>

              <subtitle>Reading</subtitle>
              <p>Something</p>
              
            </span>

        </div>
      </div>

    </div>
  );
}