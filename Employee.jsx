import React, { useState } from "react";
import "./Employee.css";

function Employee() {
  const [activePage, setActivePage] = useState("dashboard");

  const tasks = [
    {
      title: "One-on-One Meeting",
      status: "In Progress",
      date: "Today",
    },
    {
      title: "Send Summary Email",
      status: "To Do",
      date: "Tomorrow",
    },
    {
      title: "Prepare Presentation",
      status: "Completed",
      date: "15 Jul",
    },
  ];

  const team = [
    "Apeksha",
    "Harshini",
    "Shweta",
    "Ram",
  ];

  const notifications = [
    "HR approved your leave request.",
    "Team meeting at 3:00 PM.",
    "Payroll credited successfully.",
  ];

  const renderContent = () => {
    switch (activePage) {
      case "dashboard":
        return (
          <>
            <h1>Hello, Apeksha 👋</h1>

            <div className="cards">
              <div className="card">
                <h3>Total Employees</h3>
                <p>125</p>
              </div>

              <div className="card">
                <h3>Present Today</h3>
                <p>110</p>
              </div>

              <div className="card">
                <h3>Pending Tasks</h3>
                <p>8</p>
              </div>

              <div className="card">
                <h3>Leaves Left</h3>
                <p>12</p>
              </div>
            </div>

            <div className="section">
              <h2>Today's Tasks</h2>

              {tasks.map((task, index) => (
                <div className="task-card" key={index}>
                  <h3>{task.title}</h3>

                  <p>Status: {task.status}</p>

                  <p>Due: {task.date}</p>
                </div>
              ))}
            </div>
          </>
        );

      case "tasks":
        return (
          <>
            <h1>My Tasks</h1>

            {tasks.map((task, index) => (
              <div className="task-card" key={index}>
                <h3>{task.title}</h3>

                <p>{task.status}</p>

                <p>{task.date}</p>
              </div>
            ))}
          </>
        );

      case "attendance":
        return (
          <>
            <h1>Attendance</h1>

            <div className="card">
              <p>Present Days: 22</p>
              <p>Absent Days: 2</p>
              <p>Late Entries: 1</p>
            </div>
          </>
        );

      case "leave":
        return (
          <>
            <h1>Leave Management</h1>

            <div className="card">
              <p>Casual Leave: 8 Days</p>
              <p>Sick Leave: 4 Days</p>
            </div>
          </>
        );

      case "payroll":
        return (
          <>
            <h1>Payroll</h1>

            <div className="card">
              <p>Salary: ₹45,000</p>
              <p>Bonus: ₹5,000</p>
            </div>
          </>
        );

      case "team":
        return (
          <>
            <h1>Team Members</h1>

            {team.map((member, index) => (
              <div className="task-card" key={index}>
                {member}
              </div>
            ))}
          </>
        );

      case "calendar":
        return (
          <>
            <h1>Calendar</h1>

            <div className="task-card">
              10 July - Team Meeting
            </div>

            <div className="task-card">
              14 July - Project Review
            </div>

            <div className="task-card">
              18 July - Presentation
            </div>
          </>
        );

      case "reports":
        return (
          <>
            <h1>Reports & Analytics</h1>

            <div className="cards">
              <div className="card">
                <h3>Completed</h3>
                <p>20</p>
              </div>

              <div className="card">
                <h3>Pending</h3>
                <p>5</p>
              </div>

              <div className="card">
                <h3>Attendance</h3>
                <p>95%</p>
              </div>
            </div>
          </>
        );

      case "notifications":
        return (
          <>
            <h1>Notifications</h1>

            {notifications.map((item, index) => (
              <div className="task-card" key={index}>
                {item}
              </div>
            ))}
          </>
        );

      case "settings":
        return (
          <>
            <h1>Settings</h1>

            <button className="setting-btn">
              Edit Profile
            </button>

            <button className="setting-btn">
              Change Password
            </button>

            <button className="setting-btn">
              Logout
            </button>
          </>
        );

      default:
        return <h1>Dashboard</h1>;
    }
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="profile">
         

          <h2>Apeksha Patil</h2>

          <p>Frontend Developer</p>
        </div>

        <button onClick={() => setActivePage("dashboard")}>
          🏠 Dashboard
        </button>

        <button onClick={() => setActivePage("tasks")}>
          📋 Tasks
        </button>

        <button onClick={() => setActivePage("attendance")}>
          📅 Attendance
        </button>

        <button onClick={() => setActivePage("leave")}>
          🌴 Leave
        </button>

        <button onClick={() => setActivePage("payroll")}>
          💰 Payroll
        </button>

        <button onClick={() => setActivePage("team")}>
          👥 Team
        </button>

        <button onClick={() => setActivePage("calendar")}>
          🗓 Calendar
        </button>

        <button onClick={() => setActivePage("reports")}>
          📊 Reports
        </button>

        <button onClick={() => setActivePage("notifications")}>
          🔔 Notifications
        </button>

        <button onClick={() => setActivePage("settings")}>
          ⚙ Settings
        </button>
      </div>

      <div className="main-content">{renderContent()}</div>
    </div>
  );
}

export default Employee;