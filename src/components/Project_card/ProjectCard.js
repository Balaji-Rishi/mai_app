
import React from "react";
import { Card, Button } from "react-bootstrap";
import "./ProjectCard.css"; 


import home from "../../assects/images/home.png";
import livingRoom from "../../assects/images/living.png";
import gardening from "../../assects/images/living2.png";
import homeExterior from "../../assects/images/homeex.png";
import bathroorenovation from "../../assects/images/bathroom.png";
import kitchen from "../../assects/images/krithch.png";

const projects = [
  { title: "Home Renovation", image: home, description: "Project initiation - The beginning of <bt/. the project that includes the hiring of construction and design teams, defining the scope of the work, creating a budget.....", budget: "£100" },
  { title: "Living room", image: livingRoom, description: "Project initiation - The beginning of the project that includes the hiring of construction and design teams, defining the scope of the work, creating a budget.....", budget: "£100" },
  { title: "Living Room Gardening", image: gardening, description: "Project initiation - The beginning of the project that includes the hiring of construction and design teams, defining the scope of the work, creating a budget.....", budget: "£100" },
  { title: "Home Exterior", image: homeExterior, description: "Project initiation - The beginning of the project that includes the hiring of construction and design teams, defining the scope of the work, creating a budget.....", budget: "£100" },
  { title: "Bathroom Renovation", image: bathroorenovation, description: "Project initiation - The beginning of the project that includes the hiring of construction and design teams, defining the scope of the work, creating a budget.....", budget: "£100" },
  { title: "Kitchen Design", image: kitchen, description: "Project initiation - The beginning of the project that includes the hiring of construction and design teams, defining the scope of the work, creating a budget.....", budget: "£150" }
];

const CardSection = () => {
  return (
    <div className="scroll-containers">
      <div className="scroll-container">
        {projects.map((project, index) => (
          <Card key={index} className="project-card-list">
            <div className="card-image-list" style={{ backgroundImage: `url(${project.image})` }}>
              <div className="overlay">
                <h5 className="card-title">{project.title}</h5>
              </div>
            </div>
            <Card.Body>
              <Card.Text>{project.description}</Card.Text>
              <div className="card-footer">
                <span className="budget">Budget ; {project.budget}</span>
                <Button className="view-btn-rs">View</Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardSection;





