// src/pages/Projects.jsx
import { useState } from "react";
import { projectsIntro, projects } from "../data/projects";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="page">
      <section className="section">
        <h2>Projects</h2>
        <p>{projectsIntro}</p>
      </section>

      {/* 카드 리스트 (한 줄 요약만) */}
      <section className="section">
        <div className="projects-grid">
          {projects.map((p) => (
            <div
              key={p.id}
              className="project-card"
              onClick={() => openModal(p)}
            >
              <div className="project-card-header">
                <div>
                  <h3 className="project-card-title">{p.title}</h3>
                  <div className="project-card-meta">
                    <span className="project-card-course">{p.course}</span>
                    <span className="project-card-period">{p.period}</span>
                  </div>
                </div>
              </div>
              <p className="project-card-oneline">{p.oneLine}</p>
              <div className="project-card-tags">
                {p.tech.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 모달 */}
      {selectedProject && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()} // 안쪽 클릭은 닫히지 않게
          >
            <div className="modal-header">
              <div>
                <h3 className="modal-title">{selectedProject.title}</h3>
                <div className="modal-meta">
                  <span className="modal-course">{selectedProject.course}</span>
                  <span className="modal-period">{selectedProject.period}</span>
                </div>
              </div>
              <button className="modal-close" onClick={closeModal}>
                ✕
              </button>
            </div>

            <p className="modal-oneline">{selectedProject.oneLine}</p>

            <div className="modal-tech">
              {selectedProject.tech.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <h4>무슨 프로젝트였는지</h4>
                <ul>
                  {selectedProject.overview.map((line, idx) => (
                    <li key={idx}>{line}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h4>내가 한 일</h4>
                <ul>
                  {selectedProject.myWork.map((line, idx) => (
                    <li key={idx}>{line}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h4>배운 점</h4>
                <ul>
                  {selectedProject.learned.map((line, idx) => (
                    <li key={idx}>{line}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
