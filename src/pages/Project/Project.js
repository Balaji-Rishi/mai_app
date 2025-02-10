import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { FaFilter, FaArrowDown } from "react-icons/fa";

import ProjectCard from "./ProjectCardList";
import "./ProjectCardList.css";
import "./Project.css";

import kit from "../../assects/images/kit.png";

const ProjectPage = () => {
  const [isFocused, setIsFocused] = useState(false);
  const projectsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const [projects] = useState([
    {
      id: "MAIID123",
      title: "Kitchen Worktop",
      image: kit,
      tags: ["Kitchen", "Splashback"],
      location: "England",
      duration: "Completed",
      price: "Fixed",
      expiryDate: "Marble",
      status: "Active",
      lastUpdate: "2024-08-12",
      proposalCount: "23",
      description:
        "Durable, heat-resistant, and available in various colors and patterns. Engineered stone, highly durable, non-porous, and low maintenance.",
    },
    {
      id: "MAIID456",
      title: "Bathroom Tiles",
      image: kit,
      tags: ["Bathroom", "Tiles"],
      location: "England",
      duration: "In Progress",
      price: "Negotiable",
      expiryDate: "Granite",
      status: "Active",
      lastUpdate: "2024-08-12",
      proposalCount: "23",
      description:
        "Durable, heat-resistant, and available in various colors and patterns. Engineered stone, highly durable, non-porous, and low maintenance.",
    },
    {
      id: "MAIID789",
      title: "Kitchen Countertop",
      image: kit,
      tags: ["Kitchen", "Granite"],
      location: "England",
      duration: "Completed",
      price: "Fixed",
      expiryDate: "Granite",
      status: "Active",
      lastUpdate: "2024-08-12",
      proposalCount: "23",
      description:
        "Durable, heat-resistant, and available in various colors and patterns. Engineered stone, highly durable, non-porous, and low maintenance.",
    },
    {
      id: "MAIID101",
      title: "Kitchen Flooring",
      image: kit,
      tags: ["Flooring", "Wood"],
      location: "England",
      duration: "Completed",
      price: "Fixed",
      expiryDate: "Marble",
      status: "Active",
      lastUpdate: "2024-08-12",
      proposalCount: "23",
      description:
        "Durable, heat-resistant, and available in various colors and patterns. Engineered stone, highly durable, non-porous, and low maintenance.",
    },
    {
      id: "MAIID102",
      title: "Backsplash Installation",
      image: kit,
      tags: ["Kitchen", "Splashback"],
      location: "England",
      duration: "Completed",
      price: "Fixed",
      expiryDate: "Marble",
      status: "Active",
      lastUpdate: "2024-08-12",
      proposalCount: "23",
      description:
        "Durable, heat-resistant, and available in various colors and patterns. Engineered stone, highly durable, non-porous, and low maintenance.",
    },
  ]);

  // Pagination logic
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="search-sort-container">
        <div className="hero-container">
          <div className="hero-overlay">
            <p>
              Post your projects with specifications and details explaining the depth
              of the project, materials needed, time limit to be taken, and budget.
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <div className="row row-div">
          <div className="col-md-5">
            <div className="form-section-project">
              <label>Project List</label>
              <div className="input-with-icon">
                <input
                  type="text"
                  placeholder="Search"
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                />
                <FontAwesomeIcon icon={isFocused ? faMicrophone : faSearch} className="icon" />
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="sort-container">
              <FaFilter className="filter-icon" />
              <button className="sort-button">
                Sort by
                <div className="subnew-vertical-2"></div>
                <FaArrowDown className="dropdown-icon" />
              </button>
            </div>
          </div>
        </div>

        <br />

        {/* Card Section */}
        <div className="project-list-card">
          {currentProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {/* Pagination Buttons */}
        <div className="pagination">
          {Array.from({ length: Math.ceil(projects.length / projectsPerPage) }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <br />
        <br />
      </div>
    </div>
  );
};

export default ProjectPage;
