import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard/index";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employees.json";

class App extends Component {
  // Setting this.state.employee to the employees json array
  constructor(props) {
    super(props);
    this.searchEmployee = this.searchEmployee.bind(this)
    this.state = {employeesData: employees, query: "s"};
  }
 



  searchEmployee = id => {
    // Filter this.state.Employees for friends with an id not equal to the id being searched
    //const employeesFilter = this.state.employeesData.filter(employee => employee.id !== id);
    // Set this.state.employees equal to the new friends array
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

    handleClick = (e) => {
      e.preventDefault();
     let filterData = this.state.employeesData.filter(employee =>employee.lastname === this.state.query)
      this.setState({
        employeesData: filterData        
      });

    }

    handleClick = (e) => {
      e.preventDefault();
      let filterData = this.state.employeesData.filter(employee =>employee.location === this.state.query)
      this.setState({
        employeesData: filterData        
      });
    }

    handleClick = (e) => {
      e.preventDefault();
      let filterData = this.state.employeesData.filter(employee =>employee.occupation === this.state.query)
            this.setState({
        employeesData: filterData        
      });
    }

  // Map over this.state.Employees and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Employees List
          Search by Firstname,Lastname,Occupation
        </Title>
        
        <input
          ref={input => (this.search = input)}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleClick}>Search</button>
        <button onClick={() => window.location.reload(false)}> Reload!</button>
        {this.state.employeesData.map(employee => (
          <EmployeeCard
            id={employee.id}
            key={employee.id}
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

