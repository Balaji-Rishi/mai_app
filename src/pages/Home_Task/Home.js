// src/components/Header.js
import React from "react";
// import Header from "../../components/Header_Components/Header"; 
// import Header from "../../components/Header_Components/Head2"; 
// import Footer from "../../components/Footer_Components/Footer";
import worker1 from "../../assects/images/workers.png";
import "./HomeCss.css";

import CardSection from "../../components/Project_card/ProjectCard";
import CardList from "../../components/Cards_Components/CardList";
import ProjectCarousel from "../../components/ProjectCarousel_Components/ProjectCarousel";
import HorizontalScrollCards from "../../components/HorizontalScrollCards_Components/HorizontalScrollCards";
import ProjectList from "../../components/PostProject_Components/ProjectList";

import { FormControl, InputGroup } from "react-bootstrap";
// import { FaFilter } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";
import { useState, useEffect } from "react";
import { FaMicrophone } from "react-icons/fa";

import { Form, Button } from "react-bootstrap";
import constructionImage from "../../assects/images/constructionImage.png";
import { useNavigate } from "react-router-dom";

const words = ["FASTER", "EASY", "EFFECIENTLY"];

const Home = () => {
    const [index, setIndex] = useState(0);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2000); // Change every 2 seconds

        return () => clearInterval(interval);
    }, []);

    const navigate = useNavigate();
    return (
        <div>
            <div>
                <section className="banner">
                    <div className="container d-flex align-items-center">
                        <div className="banner-text">
                            <h1>
                                Manage your
                                <br />
                                project <span className="highlight">{words[index]}</span>
                            </h1>
                            <button className="btn btn-primary" onClick={() => navigate("/postproject")}><h2>Explore Your Project</h2></button>
                        </div>
                        <div className="banner-images">
                            <img src={worker1} alt="Worker 1" className="worker1" />
                        </div>
                    </div>
                </section>

            </div>


            {/* seocnd section */}
            <div>
                <section className="live-project">
                    <div className="container_styles">
                        <h1 className="title">LIVE PROJECT</h1>
                        <div className="search-container">
                            <InputGroup className="search-box">
                                <FormControl type="text" placeholder="Search Your Live Project" />
                            </InputGroup>
                            <InputGroup className="search-box">
                                <FormControl
                                    type="text"
                                    className="border-search"
                                    placeholder="Search for your location.."
                                    onFocus={() => setIsFocused(true)}
                                    onBlur={() => setIsFocused(false)}
                                />
                                {isFocused ? <FaMicrophone className="search-icon" /> : <IoFilter className="search-icon" />}
                            </InputGroup>
                            


                        </div>
                    </div>
                </section>
            </div>

            <ProjectCarousel />

            <h4 className="text-start">Recent Project Post</h4>
            <ProjectList />

            <h4 className="text-start">AVAILABLE INTERN</h4>
            <HorizontalScrollCards />

            <h4 className="text-start">PROJECTS</h4>
            <CardSection />
            <h5 className="text-end">View All</h5>


            <h4 className="text-start">Blog</h4>
            <CardList />
            <h5 className="text-end">View All</h5>


            {/* last section for this page */}
            <div>

                <h4 className="text-start">Enquiry now</h4>

                <div className="scroll-containers">
                    {/* Left Side Image */}
                    <div className="image-section2">
                        <img src={constructionImage} alt="Construction Workers" />
                        <div className="logo-text">MYPROJECT.AI</div>
                    </div>

                    {/* Right Side Form */}
                    <div className="form-section2">
                        <Form>
                            <Form.Group controlId="name">
                                <Form.Label>Name*</Form.Label>
                                <Form.Control type="text" placeholder="Enter" />
                            </Form.Group>

                            <Form.Group controlId="mobile">
                                <Form.Label>Mobile Number*</Form.Label>
                                <Form.Control type="text" placeholder="Enter your number" />
                            </Form.Group>

                            <Form.Group controlId="email">
                                <Form.Label>Email ID*</Form.Label>
                                <Form.Control type="email" placeholder="Enter Mail" />
                            </Form.Group>

                            <Form.Group controlId="location">
                                <Form.Label>Site Location*</Form.Label>
                                <Form.Control type="text" placeholder="Enter your location" />
                            </Form.Group>

                            {/* Submit Button */}
                            <Button className="submit-btn" type="submit">
                                Get a Quotes
                            </Button>

                            <p className="note-text">We'll get back to you</p>
                        </Form>
                    </div>
                </div>

            </div>

            <br />
            <br />
            <br />
            <br />
            <br />

        </div>
    );
};

export default Home;
