import React, { useState } from "react";
import "./Attendance.css";

function Attendance() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const statistics = [
    {
      title: "Today",
      value: "3.45 / 8 hrs",
    },
    {
      title: "This Week",
      value: "28 / 40 hrs",
    },
    {
      title: "This Month",
      value: "90 / 160 hrs",
    },
    {
      title: "Remaining",
      value: "70 / 160 hrs",
    },
    {
      title: "Overtime",
      value: "5 hrs",
    },
  ];

  const activities = [
    {
      action: "Login",
      time: "09:00 AM",
    },
    {
      action: "Lunch Break",
      time: "01:00 PM",
    },
    {
      action: "Logout",
      time: "06:00 PM",
    },
  ];

  const attendanceList = [
    {
      id: 1,
      name: "Apeksha Patil",
      date: "10 Jul 2026",
      login: "09:00 AM",
      logout: "06:00 PM",
      production: "8 hrs",
      breakTime: "1 hr",
      overtime: "2 hrs",
    },
    {
      id: 2,
      name: "Rahul Sharma",
      date: "10 Jul 2026",
      login: "09:15 AM",
      logout: "06:10 PM",
      production: "8 hrs",
      breakTime: "45 min",
      overtime: "1 hr",
    },
    {
      id: 3,
      name: "Sneha Patil",
      date: "10 Jul 2026",
      login: "08:55 AM",
      logout: "05:55 PM",
      production: "8 hrs",
      breakTime: "1 hr",
      overtime: "0 hr",
    },
    {
      id: 4,
      name: "Priya Singh",
      date: "10 Jul 2026",
      login: "09:05 AM",
      logout: "06:15 PM",
      production: "8 hrs",
      breakTime: "1 hr",
      overtime: "1 hr",
    },
    {
      id: 5,
      name: "Aman Verma",
      date: "10 Jul 2026",
      login: "09:10 AM",
      logout: "06:05 PM",
      production: "8 hrs",
      breakTime: "1 hr",
      overtime: "30 min",
    },
  ];

  return (
    <div className="attendance-container">
      <h1>Attendance Dashboard</h1>

      <div className="top-section">

        <div className="card">
          <h2>Timesheet</h2>

          <p>11 July 2026</p>

          <div className="time-box">
            <strong>
              {isLoggedIn ? "Login" : "Logout"}
            </strong>

            <p>09:00 AM</p>
          </div>

          <div className="circle">
            <h2>3.45 hrs</h2>
          </div>

          <button
            className="punch-btn"
            onClick={() => setIsLoggedIn(!isLoggedIn)}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>

          <div className="bottom-info">
            <div>
              <h4>Break</h4>
              <p>1 hr</p>
            </div>

            <div>
              <h4>Overtime</h4>
              <p>2 hrs</p>
            </div>
          </div>
        </div>

        <div className="card">
          <h2>Statistics</h2>

          {statistics.map((item, index) => (
            <div className="stat-item" key={index}>
              <span>{item.title}</span>

              <span>{item.value}</span>
            </div>
          ))}
        </div>

        <div className="card">
          <h2>Today's Activity</h2>

          {activities.map((activity, index) => (
            <div className="activity-item" key={index}>
              <span>{activity.action}</span>

              <span>{activity.time}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="table-card">
        <h2>Attendance List</h2>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Date</th>
              <th>Login</th>
              <th>Logout</th>
              <th>Production</th>
              <th>Break</th>
              <th>Overtime</th>
            </tr>
          </thead>

          <tbody>
            {attendanceList.map((record) => (
              <tr key={record.id}>
                <td>{record.id}</td>
                <td>{record.name}</td>
                <td>{record.date}</td>
                <td>{record.login}</td>
                <td>{record.logout}</td>
                <td>{record.production}</td>
                <td>{record.breakTime}</td>
                <td>{record.overtime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Attendance;