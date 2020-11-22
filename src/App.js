import React from 'react';
import './App.css';
import { EmployeeGrid } from './components/EmployeeGrid';
import { Header } from './components/Header';

// use state to control 4 variables: filter, sort, employeeArr, sortedArr

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      employeeArr: props.data,
      parsedEmployeeArr: [...props.data],
      filterBy: '',
      sortBy: '',
    };
  }

  // sets the filtering requirements for names based on search box input
  handleSearchChange = (event) => {
    const filter = event.target.value;
    this.setState({ filterBy: filter }, () => {
      this.filterBy();
    });
  };

  // sets the sorting requirements based on drop down menu options
  handleSortSelection = (event) => {
    const sortValue = event.target.value;
    this.setState({ sortBy: sortValue }, () => {
      this.sortBy();
    });
  };

  filterBy = () => {
    // use array.filter method
    const filteredArr = this.state.employeeArr.filter((employee) => {
      const employeeName =
        employee.firstName.toLowerCase() +
        ' ' +
        employee.lastName.toLowerCase();
      return employeeName.includes(this.state.filterBy);
      //thing that is true or false
    });

    this.setState({
      parsedEmployeeArr: filteredArr,
    });
  };

  sortBy = () => {
    let sortedArr = [...this.state.parsedEmployeeArr];
    // create a new array sorted by either first name, last name, or username alphabetically
    sortedArr.sort((a, b) =>
      a[this.state.sortBy] > b[this.state.sortBy] ? 1 : -1
    );
    this.setState({
      parsedEmployeeArr: sortedArr,
    });
  };

  render() {
    return (
      <div className="App">
        <Header
          handleSearchChange={this.handleSearchChange}
          handleSortSelection={this.handleSortSelection}
        />
        <EmployeeGrid employeeArr={this.state.parsedEmployeeArr} />
      </div>
    );
  }
}
