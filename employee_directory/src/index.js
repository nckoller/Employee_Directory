import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getUsers } from './utils/employeeDataService';

const data = fetch();
ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <App data={data}/>
  </React.StrictMode>,
  document.getElementById('root')
);
function fetch() {
  getUsers().then((data) => {
    // console.log('in fetch', data);
    const parsedEmployeeArr = parseEmployeeArr(data.data.results);
    return parsedEmployeeArr;
  });

  // parse yer shit down (use map)
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

function parseEmployeeArr(rawArr) {
  const parsedEmployeeArr = rawArr.map(employee => {
    const parsedEmployee = {
      firstName: employee.name.first, 
      lastName: employee.name.last, 
      email: employee.email, 
      username: employee.login.username, 
      phoneNumber: employee.phone, 
      photo: employee.picture.medium}
    return parsedEmployee
  });
  console.log ("parsed", parsedEmployeeArr);
}