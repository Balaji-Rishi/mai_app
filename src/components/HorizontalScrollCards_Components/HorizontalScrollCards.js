import React from "react";
import "./HorizontalScrollCards.css";

import pro1 from "../../assects/images/pro1.png";
import pro2 from "../../assects/images/pro2.png";
import pro3 from "../../assects/images/pro3.png";
import pro4 from "../../assects/images/pro4.png";
import pro5 from "../../assects/images/pro4.png";


const employees = [
  { name: "Jery Macson", role: "Intern", image: pro1 },
  { name: "Jery Macson", role: "Intern", image: pro2 },
  { name: "Jery Macson", role: "Intern", image: pro3 },
  { name: "Jery Macson", role: "Intern", image: pro4 },
  { name: "Jery Macson", role: "Intern", image: pro5 },
  { name: "Jery Macson", role: "Intern", image: pro5 },
  { name: "Jery Macson", role: "Intern", image: pro3 },
  { name: "Jery Macson", role: "Intern", image: pro2 },
  { name: "Jery Macson", role: "Intern", image: pro1 },
];

const HorizontalScrollCards = () => {
  return (
    <div className="scroll-containers ">
      {employees.map((employee, index) => (
        <div key={index} className="card-div">
          <div className="card-header-image">
            <img src={employee.image} alt={employee.name} className="profile-pic" />
          </div>
          <div className="card_styles">
          <div className="card-body">
            <p className="text-name">Name : {employee.name}</p>
            <p className="text-name">Role : {employee.role}</p>
          </div>
          <div className="card-footers">View Profile</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HorizontalScrollCards;
