import React, { useEffect, useRef } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./ProjectCarousel.css";

import img1 from "../../assects/images/img1.png"
import img2 from "../../assects/images/img2.png"
import img3 from "../../assects/images/img3.png";
import img4 from "../../assects/images/img4.png";
import img5 from "../../assects/images/img5.png";
import img6 from "../../assects/images/img6.png";
import img7 from "../../assects/images/img7.png";
import img8 from "../../assects/images/img8.png";
import img9 from "../../assects/images/img9.png";
import profileImg from "../../assects/images/profile.png";

const projects = [
  { title: "Interior Works", location: "England", image: img1 },
  { title: "Stone Fixing", location: "England", image: img2 },
  { title: "Electrical Works", location: "England", image: img3 },
  { title: "Gardening Setup", location: "England", image: img4 },
  { title: "Painting", location: "England", image: img5 },
  { title: "Plumbing", location: "England", image: img6 },
  { title: "Roofing", location: "England", image: img7 },
  { title: "Flooring", location: "England", image: img8 },
  { title: "Masonry", location: "England", image: img9 },
];

const ProjectCarousel = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const scrollImages = () => {
      if (scrollContainer) {
        scrollAmount += 1;
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
          scrollContainer.scrollTo({ left: 0, behavior: "instant" });
        } else {
          scrollContainer.scrollTo({ left: scrollAmount, behavior: "smooth" });
        }
      }
    };

    const interval = setInterval(scrollImages, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container fluid className="carousel-container">
      <div className="scroll-wrapper" ref={scrollRef}>
        <Row className="scroll-content flex-nowrap">
          {[...projects, ...projects].map((project, index) => (
            <Col md={3} key={index} className="project-card2">
              <Card className="custom-card">

                 {/* Location & Profile Image */}
                 <div className="card-header">
                  <div className="location">
                    <i className="bi bi-geo-alt-fill"></i> {project.location}
                  </div>
                  <img src={profileImg} alt="Profile" className="profile-img" />
                </div>
                
                <Card.Img variant="top" src={project.image} className="card-image-carousel" />
                <Card.Body className="card-bodys">
                  <p className="status">Progress</p>

                  <Card.Title className="title">{project.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default ProjectCarousel;
