import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard/index";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employees.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  constructor(props) {
    super(props);
    this.searchEmployee = this.searchEmployee.bind(this)
    this.state = {employeesData: employees, query: "s"};


    
    
    
  }

  searchEmployee = id => {
    // Filter this.state.friends for friends with an id not equal to the id being searched
    //const employeesFilter = this.state.employeesData.filter(employee => employee.id !== id);
    // Set this.state.friends equal to the new friends array
  //this.setState({ employeesData: employeesFilter});
  console.log("inside the search function")
  };

  handleInputChange = (e) => {
    e.preventDefault();
    this.setState({
      query: this.search.value
    });
  }

  
    handleClick = (e) => {
      e.preventDefault();
      let filterData = this.state.employeesData.filter(employee =>employee.firstname === this.state.query)
      this.setState({
        employeesData: filterData
        
      });
    }
  
  

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Employees List</Title>
        <input
          ref={input => (this.search = input)}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleClick}>Go</button>
        {this.state.employeesData.map(employee => (
          <EmployeeCard
            id={employee.id}
            //key={empolyee.id}
            firstname={employee.firstname}
            lastname={employee.lastname}
            image={employee.image}
            occupation={employee.occupation}
            location={employee.location}

          />
        ))}
      </Wrapper>
    );
  }
}

export default App;

// var Criteria = React.createClass({
//   handleClick: function(e) {
//     var criteria;
//     e.preventDefault();
//     criteria = React.findDOMNode(this.refs.search).value.trim();
//     this.props.onSearch(criteria);
//   },
//   render: function() {
//     return (
//       <div>
//         <input ref="search" type="search" placeholder="Search criteria" />
//         <button onClick={this.handleClick}>Go</button>
//       </div>
//     );
//   }
// });