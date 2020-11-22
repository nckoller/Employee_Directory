import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getUsers } from './utils/employeeDataService';

fetch();

function fetch() {
  getUsers().then((data) => {
    const parsedEmployeeArr = parseEmployeeArr(data.data.results);
    render(parsedEmployeeArr);
  });
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

function parseEmployeeArr(rawArr) {
  const parsedEmployeeArr = rawArr.map((employee) => {
    const parsedEmployee = {
      firstName: employee.name.first,
      lastName: employee.name.last,
      email: employee.email,
      username: employee.login.username,
      phoneNumber: employee.phone,
      photo: employee.picture.large,
    };
    return parsedEmployee;
  });
  return parsedEmployeeArr;
}

function render(data) {
  ReactDOM.render(
    <React.StrictMode>
      <App data={data} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
