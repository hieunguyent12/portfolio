import { projects } from "../resources/projects";
import Project from "./Project";

export default function ProjectList() {
  return (
    <div className="mt-10">
      <h1 className="text-lg">My Projects 🛠</h1>
      <div className="mt-4">
        {projects.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}
