import React, { useState } from "react";
import "./LeaveDashboard.css";

function LeaveDashboard() {
  const [filter, setFilter] = useState("All");

  const leaveData = [
    {
      id: 1,
      name: "Apeksha Patil",
      type: "Sick Leave",
      days: 2,
      from: "10 Jul 2026",
      to: "11 Jul 2026",
      reason: "Fever",
      status: "Approved",
    },
    {
      id: 2,
      name: "Rahul Sharma",
      type: "Casual Leave",
      days: 1,
      from: "12 Jul 2026",
      to: "12 Jul 2026",
      reason: "Personal Work",
      status: "Pending",
    },
    {
      id: 3,
      name: "Sneha Patil",
      type: "Vacation",
      days: 5,
      from: "15 Jul 2026",
      to: "20 Jul 2026",
      reason: "Trip",
      status: "Approved",
    },
    {
      id: 4,
      name: "Priya Singh",
      type: "Sick Leave",
      days: 3,
      from: "22 Jul 2026",
      to: "24 Jul 2026",
      reason: "Medical Checkup",
      status: "Rejected",
    },
    {
      id: 5,
      name: "Aman Verma",
      type: "Casual Leave",
      days: 2,
      from: "25 Jul 2026",
      to: "26 Jul 2026",
      reason: "Family Function",
      status: "Pending",
    },
  ];

  const filteredLeaves =
    filter === "All"
      ? leaveData
      : leaveData.filter(
          (employee) => employee.status === filter
        );

  return (
    <div className="leave-container">
      <h1>Leave Dashboard</h1>

      <div className="summary-section">
        <div className="summary-card">
          <h3>Total Leaves</h3>
          <p>20</p>
        </div>

        <div className="summary-card">
          <h3>Approved</h3>
          <p>10</p>
        </div>

        <div className="summary-card">
          <h3>Pending</h3>
          <p>6</p>
        </div>

        <div className="summary-card">
          <h3>Rejected</h3>
          <p>4</p>
        </div>
      </div>

      <div className="leave-balance">

        <div className="balance-card">
          <h3>Casual Leave</h3>
          <p>5 Days Left</p>
        </div>

        <div className="balance-card">
          <h3>Sick Leave</h3>
          <p>4 Days Left</p>
        </div>

        <div className="balance-card">
          <h3>Paid Leave</h3>
          <p>8 Days Left</p>
        </div>

        <div className="balance-card">
          <h3>Vacation</h3>
          <p>3 Days Left</p>
        </div>

      </div>

      <div className="actions">

        <button className="apply-btn">
          Apply Leave
        </button>

        <select
          value={filter}
          onChange={(e) =>
            setFilter(e.target.value)
          }
        >
          <option value="All">
            All Leaves
          </option>

          <option value="Approved">
            Approved
          </option>

          <option value="Pending">
            Pending
          </option>

          <option value="Rejected">
            Rejected
          </option>
        </select>

      </div>

      <div className="holiday-section">
        <h2>Upcoming Holidays</h2>

        <ul>
          <li>15 Aug - Independence Day</li>
          <li>02 Oct - Gandhi Jayanti</li>
          <li>25 Dec - Christmas</li>
        </ul>
      </div>

      <div className="table-section">

        <h2>Leave Requests</h2>

        <table>

          <thead>

            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Leave Type</th>
              <th>Days</th>
              <th>From</th>
              <th>To</th>
              <th>Reason</th>
              <th>Status</th>
            </tr>

          </thead>

          <tbody>

            {filteredLeaves.map(
              (employee) => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>

                  <td>{employee.name}</td>

                  <td>{employee.type}</td>

                  <td>{employee.days}</td>

                  <td>{employee.from}</td>

                  <td>{employee.to}</td>

                  <td>{employee.reason}</td>

                  <td>
                    <span
                      className={
                        employee.status
                      }
                    >
                      {employee.status}
                    </span>
                  </td>
                </tr>
              )
            )}

          </tbody>

        </table>

      </div>
    </div>
  );
}

export default LeaveDashboard;