import React, { useState, useRef } from "react";
import "./PostProject.css";
import constructionImage from "../../assects/images/happy.png"; // Replace with your image path

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faMicrophone } from "@fortawesome/free-solid-svg-icons";

const PostProject = () => {
    const [projectTitle, setProjectTitle] = useState("");
    const [projectDesc, setProjectDesc] = useState("");
    const [agree, setAgree] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const fileInputRef = useRef(null);

    const handleClick = () => {
        fileInputRef.current.click(); // Programmatically open file picker
    };



    const moveToNext = (e, index) => {
        const input = e.target;
        const nextInput = input.nextElementSibling;

        if (input.value && nextInput) {
            nextInput.focus();
        }
    };

    const moveToPrev = (e, index) => {
        if (e.key === "Backspace" && !e.target.value && index > 0) {
            const prevInput = e.target.previousElementSibling;
            if (prevInput) {
                prevInput.focus();
            }
        }
    };



    return (
        <div className="post-project-container">
            {/* Left Side - Fixed Image */}
            <div className="image-section">
                <img src={constructionImage} alt="Construction Project" />
            </div>

            {/* Right Side - Scrollable Form */}
            <div className="form-section">
                <div className="note-box">
                    <h3>Note</h3>
                    <ul>
                        <li>Precision is key! Customers who provide clear descriptions get optimal proposals for easy project completion.</li>
                        <li>To make it better, we suggest you upload relevant (pictures, documents, specifications, etc) for clarity.</li>
                    </ul>
                </div>

                <h2 className="title-name">Post a Project</h2>
                <p className="select-p">Select a relevant category so that can find your project</p>

                <label>Category <span className="col-red">*</span> </label>
                <select>
                    <option value="construction">Project Planning</option>
                    <option value="interior">Renovation</option>
                    <option value="plumbing">Freaming ans Structural Work</option>
                    <option value="electrical">Electrical Work and Plumbing Installation</option>
                    <option value="painting">Painting</option>
                    <option value="flooring">Flooring</option>
                    <option value="landscaping">Landscaping</option>
                    <option value="architecture">Architecture & Planning</option>
                </select>

                <label>Sub-Category<span className="col-red">*</span></label>
                <select>
                    <option>Bathroom</option>
                    <option>Light Fixing</option>
                    <option>Kitchen</option>
                    <option>Painting</option>
                    <option>Stone Fixing</option>
                </select>

                <label>Project Title<span className="col-red">*</span></label>
                <input
                    type="text"
                    placeholder="Type your project title"
                    value={projectTitle}
                    onChange={(e) => setProjectTitle(e.target.value)}
                    className="project-title-input"
                />

                <label>Project Description<span className="col-red">*</span></label>
                <textarea
                    className="project-title-input"

                    placeholder="Type here..."
                    value={projectDesc}
                    onChange={(e) => setProjectDesc(e.target.value)}
                ></textarea>

                <label>Upload Sample</label>
                <div>
                    <div className="upload-box" onClick={handleClick}>
                        <p>📂 Drag here or <span className="browse">Browse</span></p>
                        <p>Format: JPEG, PNG, PDF</p>
                    </div>

                    {/* Hidden file input */}
                    <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: "none" }} // Hide input
                        accept=".jpeg, .png, .pdf" // Allowed formats
                    />
                </div>

                <label>Budget Type<span className="col-red">*</span></label>
                <div className="budget-options">
                    <button className="budget-btn">Fixed</button>
                    <button className="budget-btn">Range</button>
                    <button className="budget-btn">No Idea</button>
                </div>
                <br />

                <input
                    type="text"
                    placeholder="Flexible"
                    value={projectTitle}
                    onChange={(e) => setProjectTitle(e.target.value)}
                    className="project-title-input"
                />


                <label>Project Location <span className="col-red">*</span></label>
                <div className="input-with-icon">
                    <input
                        type="text"
                        placeholder="Search for your location..."
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                    />
                    <FontAwesomeIcon icon={isFocused ? faMicrophone : faSearch} className="icon" />
                </div>


                <label>Post Code <span className="col-red">*</span></label>
                <div className="postcode-box">
                    {[...Array(6)].map((_, index) => (
                        <input
                            key={index}
                            type="text"
                            maxLength="1"
                            onInput={(e) => moveToNext(e, index)}
                            onKeyDown={(e) => moveToPrev(e, index)}
                        />
                    ))}
                </div>



                <label>Project Duration Days<span className="col-red">*</span></label>
                <input type="date" />

                <label>Expiry Date<span className="col-red">*</span></label>
                <input type="date" />

                <div className="dat-btns">
                    <label>Total days:</label>
                    <button className="day-btn">Days</button>
                </div>

                <div className="terms">
                    <input type="checkbox" checked={agree} onChange={() => setAgree(!agree)} />
                    <span>I Agree to the <a href="#">Terms & Conditions</a></span>
                </div>

                <div className="button-group">
                    <button className="post-btn">Post a Project</button>
                    <button className="cancel-btn">Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default PostProject;
