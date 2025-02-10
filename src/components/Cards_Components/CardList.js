import React, { useState } from "react";
import "./CardList.css";
import house from "../../assects/images/house.png";
import house2 from "../../assects/images/house2.png";

const projects = [
  {
    title: "Safe Measures",
    image: house,
    hoverImage: house2,
    description: "Safe measures can refer to a wide range of precautions",
  },
  {
    title: "Safe Measures",
    image: house,
    hoverImage: house2,
    description: "Safe measures can refer to a wide range of precautions",
  },
  {
    title: "Safe Measures",
    image: house,
    hoverImage: house2,
    description: "Safe measures can refer to a wide range of precautions",
  },
  {
    title: "Safe Measures",
    image: house,
    hoverImage: house2,
    description: "Safe measures can refer to a wide range of precautions",
  },
  {
    title: "Safe Measures",
    image: house,
    hoverImage: house2,
    description: "Safe measures can refer to a wide range of precautions",
  },
  {
    title: "Safe Measures",
    image: house,
    hoverImage: house2,
    description: "Safe measures can refer to a wide range of precautions",
  },
];

const CardList = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div className="scroll-container">
    <div className="project-container-divs ">
      <div className="card-list">
        {projects.map((project, index) => (
          <div key={index} className="custom-card-list2">
            <div
              className="image-container"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <img
                src={hoverIndex === index ? project.hoverImage : project.image}
                alt="project"
                className="card-image"
              />
              <button className={`hover-btn ${hoverIndex === index ? "show" : ""}`}>
                View More
              </button>
            </div>
            <div className="card-body-projects">
              <p className="card-text-project">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default CardList;
