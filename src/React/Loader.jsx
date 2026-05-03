import React, { useEffect, useState } from "react";
import "./css/loader.css";

export default function Loader({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loader-screen">
        <div className="loader-content">

          <h1 className="loader-logo">
            rohith.dev
          </h1>

          <div className="loader-bar">
            <div className="loader-progress"></div>
          </div>

          {/* <p className="loader-text">
            Building experiences...
          </p> */}

        </div>
      </div>
    );
  }

  return children;
}