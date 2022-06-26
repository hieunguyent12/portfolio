import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";

import { projects, ProjectType } from "../../resources/projects";
import { hyphenate } from "../../utils";
import Card from "../../components/Card";

interface ProjectProps {
  project: string;
  otherProjects: ProjectType[];
}

export default function Project({ otherProjects }: ProjectProps) {
  const router = useRouter();

  const projectName = router.query.project;
  const project = projects.find(
    (item) => hyphenate(item.name.toLowerCase()) === projectName
  );

  if (!project) return null;

  return (
    <div>
      <div className="mt-7">
        <h1 className="text-2xl">{project.name}</h1>
      </div>
      <div className="mt-24">
        <p className="mb-3">Checkout my other projects!</p>
        <ul className="link-card-grid">
          {otherProjects.map((project) => (
            <Card
              key={project.name}
              title={project.name}
              body={project.description}
              href={`/projects/${hyphenate(project.name.toLowerCase())}`}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: projects.map((project) => {
      return {
        params: { project: hyphenate(project.name).toLowerCase() },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const project = context.params?.project;

  const otherProjects: ProjectType[] = [];

  while (otherProjects.length < 2) {
    const randomIndex = Math.floor(Math.random() * projects.length);
    const randomProject = projects[randomIndex];

    if (
      otherProjects.indexOf(randomProject) === -1 &&
      hyphenate(randomProject.name.toLowerCase()) !== project
    ) {
      otherProjects.push(randomProject);
    }
  }

  return {
    props: {
      otherProjects,
    },
  };
};
