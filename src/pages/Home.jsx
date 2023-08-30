import Project from "../components/Project.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  return (
    <main>
      <section id="intro" className="intro-section">
        <div className="intro">
          <h1>NANCY REYES</h1>
          <h2 className="jobTitle">Web Developer</h2>
          <div class="langList">
            <div><h3>HTML</h3></div>
            <div><h3>CSS</h3></div>
            <div><h3>JavaScript</h3></div>
            <div><h3>PHP</h3></div>
            <div><h3>C#</h3></div>
            <div><h3>SQL</h3></div>
          </div>
        </div>
      </section>
      <section id="about">
      <div className="blurb">
          <p>I've always been captivated by the ever-evolving world of technology, so I began my web development journey by enrolling in Humber's Web Development program. Throughout this educational experience, I have embraced the challenges and triumphs that coding and design present.</p>
          <br></br>
          <p>As an aspiring Full Stack Developer, my goal is to craft innovative and user-centric digital experiences. With a keen attention to detail and a problem-solving mindset, I am committed to contributing to the realm of web development and translating impactful concepts into reality.</p>
        </div>
      </section>
      <section id="projects" className="project-container">
        <h2>PROJECTS</h2>
        <Project />
      </section>
      <section id="contact" className="contact-section">
        <h2>CONTACT ME</h2>
        <p>If you'd like to get in touch, contact me at:</p>
        <p><span id="emailIcon"><FontAwesomeIcon icon={faEnvelope} /></span> : nancymelreyes@gmail.com</p>
        <div className="contactLinks">
          <div id="linkedIn"><a href="https://linkedin.com/in/nancy-reyes-61696127b"><FontAwesomeIcon icon={faLinkedin} /></a></div>
          <div id="gitHub"><a href="https://github.com/nancyreyess/"><FontAwesomeIcon icon={faGithub} /></a></div>
        </div>
      </section>
    </main>
  )
}