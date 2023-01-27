import React from "react";
import { Table } from "react-bootstrap";
const ExceptionTab = ({ exceptions }) => {
  return (
    <>
      <h3>Exceptions</h3>
      <Table striped hover variant="light">
        <thead style={{ backgroundColor: "#b96d37" }}>
          <tr>
            <th>Sr</th>
            <th>Email</th>
            <th>Name</th>
            <th>Reg_no</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {exceptions.map((item, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{item.email}</td>
              <td>{item.name}</td>
              <td>{item.reg_no}</td>
              <td>
                <button className="btn btn-danger me-2">Mark Attendee</button>
                <button className="btn btn-warning">Report</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default ExceptionTab;
