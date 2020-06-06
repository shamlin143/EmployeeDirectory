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
            <strong>Lastnametname:</strong> {props.lastname}
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

// class Child extends Component {
//   render() {
//       <div onClick={this.props.passedFunction}></div>
//   }
// }

// class Parent extends Component {
//   passedFunction = () => {}
//   render() {
//     <Child passedFunction={this.passedFunction}/>
//   }
// }

export default employeeCard;