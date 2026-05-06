import React from "react";
import Layout from "../../components/Layout";
import { SectionTitle, Pill } from "../../styles";
import { ProjectItem, ProjectTitle, SkillContainer } from "./styles";

const Projects = ({ user }) => {
  // Reorder projects so that project at index 12 is shown next to index 0
  const reorderedProjects = user.projects
    ? [
        user.projects[0],
        user.projects[12],
        ...user.projects.slice(1, 12),
        ...user.projects.slice(13),
      ].filter(Boolean)
    : []; // filter out undefined if index 12 doesn't exist

  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Projects</SectionTitle>
        <ul>
          {reorderedProjects.map((project, i) => (
            <ProjectItem key={i}>
              <ProjectTitle>{project.name}</ProjectTitle>
              <p>{project.summary}</p>
              {project.images &&
                typeof project.images === "object" &&
                !Array.isArray(project.images) &&
                Object.values(project.images).map((image, k) => (
                  <ProjectItem key={k}>
                    <img src={image.resolutions.thumbnail.url} />
                  </ProjectItem>
                ))}

              <a href={project.url}>{project.url}</a>
              <p>Project Repo</p>
              <a href={project.githubUrl}>{project.githubUrl}</a>
              <p>{project.description}</p>

              <SkillContainer>
                {[
                  ...(project.languages || []),
                  ...(project.libraries || []),
                ].map((item, j) => (
                  <Pill key={j}>{item}</Pill>
                ))}
              </SkillContainer>
            </ProjectItem>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Projects;
