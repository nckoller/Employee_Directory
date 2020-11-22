import React from 'react';
import './App.css';
import { EmployeeGrid } from './components/EmployeeGrid';
import { Header } from './components/Header';

// THIS will be a class based component IMO
// you'll use state to control 4 variables: filter, sort, employeeArr, sortedArr

// function App(props) {
//   console.log("APP INIT PROPS", props);
//   return (
//   <div className="App">
//     {/* <Header/> */}
//     {/* this.state.variablename */}
//     <EmployeeGrid employeeArr={props.data}/>
//     This is some test text
//   </div>
//   );
// }

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
    // this.filterBy();
    this.sortBy();
  }

  // for both, create a const SomeConst = your code for filtering or sorting
  // setState() to set parsedEmployeeArr to that const
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
      // return employeeName.indexOf(filteredArr.toLowerCase()) !== -1;
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
    sortedArr.sort((a, b) => (a[this.state.sortBy] > b[this.state.sortBy] ? 1 : -1));
    this.setState({
      parsedEmployeeArr: sortedArr,
    });

    // use map
  };

  render() {
    // console.log("when does render happen?")
    // console.log(this.state.parsedEmployeeArr)
    // this.sortBy();
    return (
      <div className="App">
        <Header />
        <EmployeeGrid employeeArr={this.state.parsedEmployeeArr} />
        This is some test text
      </div>
    );
  }
}

