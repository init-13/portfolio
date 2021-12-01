import React from "react";
import ProjectItemm from "./ProjectItemm";
import "./ProjectItemm.scss";

const projectObj = [
  
  {
    name: "PORTFOLIO",
    techUsed: "Html + Css + Scss + JS + React",
    liveLink: "init-13.github.io/portfolio/",
    repoLink: "https://github.com/init-13/portfolio",
  },
  {
    name: "Google Forms Organizer",
    techUsed: "Python + Pandas + PyQt",
    liveLink: "https://github.com/init-13/Google-Form-Folder-Organizer",
    repoLink: "https://github.com/init-13/Google-Form-Folder-Organizer",
  },
  {
    name: "Card-Match",
    techUsed: "Html + Css + Scss + JS",
    liveLink: "https://init-13.github.io/Card_Match/",
    repoLink: "https://github.com/init-13/Card_Match",
  },
  {
    name: "Ping Pong Game",
    techUsed: "Python + PyGame",
    liveLink: "https://github.com/init-13/PingPong-pygame",
    repoLink: "https://github.com/init-13/PingPong-pygame",
  },
  {
    name: "Word Counter",
    techUsed: "Html + Scss + JS",
    liveLink: "https://init-13.github.io/online-word-counter.io/",
    repoLink: "https://github.com/init-13/online-word-counter.io",
  },
];

const Projectss = () => {
  return (
    <section className="projects__section" id="projects">
      <div className="container-1200">
        <div className="grid__container--projects">
          {projectObj.map((project) => {
            return <ProjectItemm projectDetail={project} key={project.name} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projectss;
