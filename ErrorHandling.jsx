import React, { useState } from "react";
import "./ErrorHandling.css";

function ErrorHandling() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = () => {
    setLoading(true);
    setError("");

    setTimeout(() => {
      setLoading(false);

      const success = false;

      if (!success) {
        setError(
          "Server is temporarily unavailable. Please try again."
        );
      }
    }, 2000);
  };

  return (
    <div className="container">
      <div className="error-card">
        <h2>Employee Dashboard</h2>

        <button onClick={fetchData}>
          Load Data
        </button>

        {loading && (
          <div className="loading">
            Loading data...
          </div>
        )}

        {error && (
          <div className="error-box">
            <h3>⚠ Error</h3>

            <p>{error}</p>

            <button onClick={fetchData}>
              Retry
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ErrorHandling;