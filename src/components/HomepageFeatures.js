import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    header: "intflask",
    body: "a website to create and sell online courses",
    footer: <div>js, node.js</div>,
  },
];

function ProjectsTab() {
  return (
    <div>
      {projects.map((project) => (
        <div className="row margin-top--md">
          <div
            className="col"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <ProjectCard
              header={project.header}
              body={project.body}
              footer={project.footer}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function ResumeTab() {
  return (
    <div>
      <div className="row margin-top--md">
        <div
          className="col"
          style={{ display: "flex", justifyContent: "center" }}
        >
          resume
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  const [activeTab, setActiveTab] = useState("projects");
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <section style={{ padding: "2rem 0" }}>
      <div className="container">
        {/* Tab Buttons */}
        <div className="row">
          <div
            className="col"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <ul class="tabs">
              <li
                className={`tabs__item ${
                  activeTab === "projects" ? "tabs__item--active" : ""
                }`}
                onClick={() => handleTabClick("projects")}
              >
                projects
              </li>
              <li
                className={`tabs__item ${
                  activeTab === "resume" ? "tabs__item--active" : ""
                }`}
                onClick={() => handleTabClick("resume")}
              >
                resume
              </li>
            </ul>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === "projects" && <ProjectsTab />}
        {activeTab === "resume" && <ResumeTab />}
      </div>
    </section>
  );
}
