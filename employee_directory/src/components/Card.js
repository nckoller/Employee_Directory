import React from 'react';
import '../App.css';

export function Card(props) {
    console.log("CARD PROPS", props)
  return (
    <div className="col-sm-4 employee-card">
    <div className="card">
      <img
        className="card-img-top photo"
        src={ props.employeeArr.photo }
        alt="Employee"
      />
      <div className="card-body">
        <h5 className="card-title employee-name">{ props.employeeArr.firstName } { props.employeeArr.lastName }</h5>
        <p className="card-text">Email: { props.employeeArr.email }</p>
        <p className="card-text">Phone: { props.employeeArr.phoneNumber }</p>
        <p className="card-text">Username: { props.employeeArr.username }</p>
      </div>
    </div>
    </div>
  );
}
