import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const skills = {
  frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Bootstrap",
    "Tailwind",
    "React",
    "Wordpress",
    "GraphQL",
    "MUI",
    "Redux",
  ],
  backend: ["Node JS", "NestJS", "Prisma", "MongoDB", "PHP", "MySQL", "Python"],
};

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        {Object.keys(skills).map((key) => (
          <div className={`experience__${key}`} key={key}>
            <h3>{key} development</h3>
            <div className="experience__content">
              {skills[key].map((skill) => (
                <div className="experience__details" key={skill}>
                  <BsPatchCheckFill className="experience__details-icon" />
                  <h4>{skill}</h4>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
