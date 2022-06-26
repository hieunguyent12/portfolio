import type { NextPage } from "next";

import Project from "../components/Project";
import GithubSVG from "../socials/GithubSVG";
import LinkedInSVG from "../socials/LinkedInSVG";
import Card from "../components/Card";
import { projects } from "../resources/projects";
import { hyphenate } from "../utils";
import "../styles/Home.module.css";
import ProjectList from "../components/ProjectList";

const Home: NextPage = () => {
  return (
    <div className="text-gray-700 dark:text-white">
      <div className="mt-6">
        <h1 className="inline-block text-2xl welcome-msg font-medium">
          Hey, I&#39;m <span className="text-gradient test">Hieu</span>{" "}
          <span className="waving-emoji">👋</span>
        </h1>
        <p className="text-md mt-2">I&#39;m a front-end developer</p>
        <div className="flex mt-4 text-black dark:text-white">
          <a
            aria-label="Github"
            target="_blank"
            href="https://github.com/hieunguyent12"
            className="social-media-icon"
            rel="noreferrer"
          >
            <GithubSVG />
          </a>
          <a
            aria-label="Linkedin"
            target="_blank"
            href="https://github.com/hieunguyent12"
            className="social-media-icon mx-4"
            rel="noreferrer"
          >
            <LinkedInSVG />
          </a>
        </div>
      </div>

      <ProjectList />

      {/* <div className="mt-10">
        <h1 className="text-lg">My Blog 📝</h1>
        <ul className="link-card-grid mt-2">
          {projects.map((project) => (
            <Card
              key={project.name}
              title={project.name}
              href={`/projects/${hyphenate(project.name.toLowerCase())}`}
              body={project.description}
            />
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default Home;
