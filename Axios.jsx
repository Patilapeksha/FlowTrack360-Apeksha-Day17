import React, { useState } from "react";
import axios from "axios";
import "./Axios.css";

function AxiosComponent() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const employeeData = [
    {
      id: 1,
      name: "Apeksha Patil",
      email: "apeksha.patil@company.com",
      company: "AIventra Solutions",
    },
    {
      id: 2,
      name: "Rahul Sharma",
      email: "rahul.sharma@company.com",
      company: "TechNova Systems",
    },
    {
      id: 3,
      name: "Priya Singh",
      email: "priya.singh@company.com",
      company: "InnovateX Technologies",
    },
    {
      id: 4,
      name: "Sneha Patil",
      email: "sneha.patil@company.com",
      company: "CloudSphere Pvt Ltd",
    },
    {
      id: 5,
      name: "Arjun Verma",
      email: "arjun.verma@company.com",
      company: "NextGen Software",
    },
  ];

  const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",

    timeout: 3000,

    headers: {
      "Content-Type": "application/json",
    },
  });

  const fetchEmployees = async () => {
    setLoading(true);
    setError("");

    try {
      await axiosInstance.get("/users");

      setTimeout(() => {
        setEmployees(employeeData);
        setLoading(false);
      }, 1500);
    } catch (error) {
      setError(
        "Unable to load employee details. Please try again later."
      );

      setLoading(false);
    }
  };

  return (
    <div className="axios-container">
      <div className="axios-card">
        <h2>Employee Directory</h2>

        <p>
          View employee information using Axios API integration.
        </p>

        <button onClick={fetchEmployees}>
          Load Employees
        </button>

        {loading && (
          <p className="loading-text">
            Loading employee details...
          </p>
        )}

        {error && (
          <div className="error-box">
            {error}
          </div>
        )}

        <div className="employee-list">
          {employees.map((employee) => (
            <div
              key={employee.id}
              className="employee-card"
            >
              <h3>{employee.name}</h3>

              <p>{employee.email}</p>

              <span>{employee.company}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AxiosComponent;