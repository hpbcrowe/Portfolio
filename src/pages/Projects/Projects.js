import React from "react";
import Layout from "../../components/Layout";
import { SectionTitle, Pill } from "../../styles";
import { ProjectItem, ProjectTitle, SkillContainer } from "./styles";

const Projects = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Projects</SectionTitle>
        <ul>
          {user.projects.map((project, i) => (
            <ProjectItem key={i}>
              <ProjectTitle>{project.name}</ProjectTitle>
              <p>{project.summary}</p>

              <a href={project.url}>{project.url}</a>
              <p>Project Repo</p>
              <a href={project.githubUrl}>{project.githubUrl}</a>
              <p>{project.description}</p>

              <SkillContainer>
                {[...project.languages, ...project.libraries].map((item, j) => (
                  <Pill key={j}>{item}</Pill>
                ))}
              </SkillContainer>
             
              {/* {project.images.map((resolution, k) => (
                <ProjectItem key={k}>
                  {" "}
                  <img src={resolution.url}>{project.name}</img>
                </ProjectItem>
              ))} */}
            </ProjectItem>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Projects;
