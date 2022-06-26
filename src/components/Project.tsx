import Image from "next/image";
import { ProjectType } from "../resources/projects";
import { GithubIcon, ExternalLinkIcon } from "./icons";

interface Props {
  project: ProjectType;
}

export default function Project({ project }: Props) {
  return (
    <div className="flex mb-10">
      <div
        id="project-image"
        className="relative w-56 h-56 rounded-md bg-slate-100 border-gray-300 border"
      >
        {project.imagePath !== "" && (
          <Image
            alt={project.name}
            src={project.imagePath}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
            objectPosition={"-45px -2px"}
          />
        )}
      </div>

      <div id="project-summary" className="pl-7 flex flex-col">
        <p className="text-xl font-semibold">{project.name}</p>

        <div className="flex">
          {project.technologies.map((tech) => (
            <span className="mr-2 font-light text-sm" key={tech}>
              {tech}
            </span>
          ))}
        </div>

        <p className="mt-4">{project.description}</p>

        <div className="flex items-center mt-auto">
          <a
            aria-label="Github"
            target="_blank"
            href={project.githubURL}
            rel="noreferrer"
            className="opacity-80 hover:opacity-100"
          >
            <GithubIcon />
          </a>
          <a
            aria-label="Github"
            target="_blank"
            href={
              project.link === ""
                ? "https://github.com/hieunguyent12"
                : project.link
            }
            rel="noreferrer"
            className="ml-4 opacity-80 hover:opacity-100"
          >
            <ExternalLinkIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
