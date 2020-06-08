import React from "react";
import "./style.css";

function employeeCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Firstname:</strong> {props.firstname}
          </li>
          <li>
            <strong>Lastname:</strong> {props.lastname}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li>
        </ul>
      </div>

    </div>
  );
}


export default employeeCard;