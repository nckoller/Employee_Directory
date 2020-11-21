import React from 'react';
import '../App.css';
import { Card } from './Card';
import 'bootstrap/dist/css/bootstrap.min.css';

export function EmployeeGrid(props) {
  console.log('employee grid props', props);
  return (
    <div className="container">
      <div className="card-deck">
        {props.employeeArr.map((ele) => {
          return <Card employeeArr={ele} />;
        })}
      </div>
    </div>
  );
}
