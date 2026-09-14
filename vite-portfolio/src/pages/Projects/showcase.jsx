import PixelField from "../Launch_Page/pixelField";
import ProjectCard from "./Components/projectCard";
import PublicationLine from "./Components/publication";
import './Components/projectCard.css';
import './showcase.css';
import { Link } from "react-router-dom";
import TypewriterText from "../Launch_Page/typewriterText";
import App_Pages from "../../assets/App_Pages.png";
import FortuneTeller from "../../assets/FortuneTeller.png";
import Odini from "../../assets/Odini.png";
import AECR from "../../assets/AECR_illustration.png";

export default function Showcase() {
  return (
    <div className="showcase-page">
      <PixelField />
    
    <div className="page-content">
    
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
            <header className= "hero">
                <h1 className="pub-h1">Publications</h1>
                    <div className="publication-line">
                        <PublicationLine 
                        tag="Publication"
                        title="PlantWhisperer: Designing Conversational AI to Support Plant Care."
                        authors="Daniel Mejer Christensen, Katja Stougård Jørgensen, Josefine Palsgaard Wyrtz, Jennie Torp Overgaard, Niels van Berkel, and Joel Wester"
                        conference="In Proceedings of the Extended Abstracts of the 2026 CHI Conference on Human Factors in Computing Systems (CHI EA '26)."
                        link="https://dl.acm.org/doi/10.1145/3772363.3799270"
                        />
                    </div>
                    
                <h1 className="pro-h1">Projects</h1>
                    <p className="subtitle">
                    Below you can view my projects. Some projects are made in collaboration with other students, and other projects are personal. You can visit my GitHub to find the code for some of the projects.
                    </p>
                    <a 
                    href="https://github.com/Josefine2401" 
                    className="button"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    GitHub
                    </a>
            </header>

            <div className="projects">
                <ProjectCard 
                title="The AECR Framework: Addressing Requirements Management Challenges in Agile UX-Developer Collaboration"
                description="This is my bachelor's project. It investigates the challenges of requirements management in agile UX-developer collaboration and proposes a framework to address these challenges."
                image={AECR}
                tags={["Collaboration", "Agile", "Workshop", "2026"]}
                />
                <ProjectCard 
                title="ODINI: Quality Control Screens for PDF Extraction"
                description="This project focuses on developing quality control screens for PDF extraction for the ODINI Research Group at AAU."
                image={Odini}
                tags={["Collaboration", "React", "SCRUM", "2025"]}
                />

                <ProjectCard 
                title="Plantwhipserer"
                description="This project explores the design and use of LLM-based conversational AI for supporting plant care, and it focuses on how natural language interaction and context-aware recommendations can assist users in understanding plant needs and making appropriate care decisions."
                image={App_Pages}
                tags={["Collaboration", "Figma", "Flutter", "2025"]}
                />
                <ProjectCard 
                title="Fortune Teller Mini Games"
                description="This is an exam project for the course in object oriented programming. The application consists of three different minigames that users can try out. The primary focus of the project has been on functionality rather than graphical design."
                image={FortuneTeller}
                tags={[ "Personal", "Java", "JavaFX", "2024"]}
                />

    
                </div>
            </div>
        </div>
    </div>
  );
}