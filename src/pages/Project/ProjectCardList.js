import React from "react";
import "./ProjectCardList.css"; // Import the CSS file

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card-div">
      <div className="project-card-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-card-content">
        <div className="interns-badge">Interns : 0</div>
        <div className="interns-badge-day">Posted 07/08/24</div>

        <h2>{project.title}</h2>
        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="tagss">
              {tag}
            </span>
          ))}
        </div>
        <div className="project-details-container">
          <div className="project-info">
            <div className="left-section">
              <p>Project ID : {project.id}</p>
              <p>Location: {project.location}  </p>
              <p>Duration : {project.duration}</p>
            </div>
            <div className="vertical-line"></div>

            <div className="right-section">
              <p>Price - {project.price}</p>
              <p>Expiry Date - {project.expiryDate}</p>
            </div>
          </div>

          <hr className="divider" />

          <div className="project-meta">
            <p>Project Status : {project.status}</p>
            <p>Last Update: {project.lastUpdate}</p>
            <p>Proposal : {project.proposalCount}</p>
          </div>

          <h3 className="description-title">Description</h3>
        </div>
        <p className="project-description">{project.description}</p>
        <div className="button-group">
          <button className="view-btn">View</button>
          <button className="proposal-btn">Send a Proposal</button>
          <button className="internship-btn">Apply Internship</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
