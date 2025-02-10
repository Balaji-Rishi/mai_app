import React from "react";
import { FaShareAlt } from "react-icons/fa";
import "./ProjectList.css";

import Bedroom from "../../assects/images/BedRoom.png";
import Ellipse1 from "../../assects/images/Ellipse 125.png";
import Ellipse2 from "../../assects/images/Ellipse 126.png";
import Ellipse3 from "../../assects/images/Ellipse 127.png";

const projects = [
  {
    title: "Bedroom Renovation",
    image: Bedroom, 
    subTitle: "Kitchen Worktop",
    location: "Bristol - England",
    material: "Slab - Marble",
    duration: "Duration: Completed",
    teamImages: [
        Ellipse1,
        Ellipse2,
        Ellipse3,
    ],
    teamCount: 9,
  },
  {
    title: "Bedroom Renovaion",
    image: Bedroom,
    subTitle: "Kitchen Worktop",
    location: "London - UK",
    material: "Wood - Oak",
    duration: "Duration: Ongoing",
    teamImages: [
        Ellipse1,
        Ellipse2,
        Ellipse3,
    ],
    teamCount: 9,
  },
  {
    title: "Bedroom Renovaion",
    image: Bedroom,
    subTitle: "Kitchen Worktop",
    location: "Manchester - UK",
    material: "Stone - Granite",
    duration: "Duration: Completed",
    teamImages: [
        Ellipse1,
        Ellipse2,
        Ellipse3,
    ],
    teamCount: 9,
  },
  {
    title: "Bedroom Renovaion",
    image: Bedroom,
    subTitle: "Kitchen Worktop",
    location: "Manchester - UK",
    material: "Stone - Granite",
    duration: "Duration: Completed",
    teamImages: [
        Ellipse1,
        Ellipse2,
        Ellipse3,
    ],
    teamCount: 9,
  },
  {
    title: "Bedroom Renovaion",
    image: Bedroom,
    subTitle: "Kitchen Worktop",
    location: "Manchester - UK",
    material: "Stone - Granite",
    duration: "Duration: Completed",
    teamImages: [
        Ellipse1,
        Ellipse2,
        Ellipse3,
    ],
    teamCount: 9,
  },
  {
    title: "Bedroom Renovaion",
    image: Bedroom,
    subTitle: "Kitchen Worktop",
    location: "Manchester - UK",
    material: "Stone - Granite",
    duration: "Duration: Completed",
    teamImages: [
        Ellipse1,
        Ellipse2,
        Ellipse3,
    ],
    teamCount: 9,
  },
  {
    title: "Bedroom Renovaion",
    image: Bedroom,
    subTitle: "Kitchen Worktop",
    location: "Manchester - UK",
    material: "Stone - Granite",
    duration: "Duration: Completed",
    teamImages: [
        Ellipse1,
        Ellipse2,
        Ellipse3,
    ],
    teamCount: 9,
  },
];

const ProjectList = () => {
  return (
    <div className="project-container-projectlist">
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-cardss">
            <div className="card-header-divs">
              <h4>{project.title}</h4>
            </div>
            <img src={project.image} alt={project.title} className="card-images-project" />
            <div className="card-body-project">
                <div className="sub-title-div">
                <h3 className="sub-title">{project.subTitle}</h3>
                <FaShareAlt className="share-icon" />
                </div>
              
              <p className="p_margin0">{project.location}</p>
              <p className="p_margin0">{project.material}</p>
              <div className="duration-div">
              <p className="p_margin0">{project.duration}</p>
              <div className="team">
                {project.teamImages.map((img, index) => (
                  <img key={index} src={img} alt="team" className="team-image" />
                ))}
                <span className="team-count">+{project.teamCount}</span>
              </div>
              </div>
            </div>
            <div className="card-footer-view">View Project</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
