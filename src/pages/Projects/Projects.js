import React from "react";
import Layout from "../../components/Layout";
import { SectionTitle, Pill } from "../../styles";
import { ProjectItem, ProjectTitle, SkillContainer } from "./styles";

// Sort projects by end date (most recent first)
// If end date is missing, treat it as 0 (or you could use a different default value)
// This sorting logic assumes that the end date is in the format { year: 2020, month: 5 }

const Projects = ({ user }) => {
  const sortedProjects = user.projects
    ? [...user.projects].sort((a, b) => {
        const aYear = a.end?.year || 0;
        const bYear = b.end?.year || 0;
        return bYear - aYear;
      })
    : [];

  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Projects</SectionTitle>
        <ul>
          {sortedProjects.map((project, i) => (
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
