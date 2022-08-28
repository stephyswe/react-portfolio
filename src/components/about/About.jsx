import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="stephanie-self-img" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>4+ Years Working</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>Automotive, Media Marketing, Health Care & Security</small>
            </article>
          </div>

          <h2 style={{marginTop: '2.5rem'}}>
            I'm Stephanie, a frontend & backend developer in Gothenburg.
          </h2>
          <h3>
            Hi there! My main expertise lies in frontend development, thought I
            do dabble in UX with Figma, backend coding and database management.
            If you like my site, don’t hesitate to reach out! More to come soon.
          </h3>

          <a style={{marginTop: '1.5rem'}} href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
