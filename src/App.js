import React from 'react';
import './App.css';
import { EmployeeGrid } from './components/EmployeeGrid';
import { Header } from './components/Header';

// THIS will be a class based component IMO
// you'll use state to control 4 variables: filter, sort, employeeArr, sortedArr

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      employeeArr: props.data,
      parsedEmployeeArr: [...props.data],
      filterBy: '',
      sortBy: 'lastName',
    };

    console.log('constructor end');
  }

  componentDidMount() {
    this.filterBy();
    // this.sortBy();
  }

  // sets the filtering requirements for names
  handleSearchChange = (event) => {
    console.log('search value', event.target.value);
    const filter = event.target.value;
    console.log('filter=', filter);
    this.setState({ filterBy: filter }, () => {
      console.log('Now state.filterBy', this.state);
      this.filterBy();
    });
  };

  // sets the sorting requirements
  handleSortSelection = (event) => {
    console.log('button value');
  };

  filterBy = () => {
    // console.log('filterBy', this.state.filterBy);
    // use array.filter method
    const filteredArr = this.state.parsedEmployeeArr.filter((employee) => {
      const employeeName =
        employee.firstName.toLowerCase() +
        ' ' +
        employee.lastName.toLowerCase();
      return employeeName.includes(this.state.filterBy);
      //thing that is true or false
    });
    console.log('filtered', filteredArr);
    this.setState({
      parsedEmployeeArr: filteredArr,
    });
  };

  sortBy = () => {
    console.log('sortBy', this.state.sortBy);

    // const sortedArr = this.state.parsedEmployeeArr.map(employee => {
    //   employee.firstName
    // }

    let sortedArr = [...this.state.parsedEmployeeArr];
    sortedArr.sort((a, b) =>
      a[this.state.sortBy] > b[this.state.sortBy] ? 1 : -1
    );
    this.setState({
      parsedEmployeeArr: sortedArr,
    });
  };

  render() {
    // console.log("when does render happen?")
    // console.log(this.state.parsedEmployeeArr)
    // this.sortBy();
    return (
      <div className="App">
        <Header
          handleSearchChange={this.handleSearchChange}
          handleSortSelection={this.handleSortSelection}
        />
        <EmployeeGrid employeeArr={this.state.parsedEmployeeArr} />
        This is some test text
      </div>
    );
  }
}
