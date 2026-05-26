import React from "react";
import { useParams } from "react-router-dom";

const screenshotsData = {
  harmoniq: [
    "/screenshots/harmoniq/1.png",
    "/screenshots/harmoniq/2.png",
    "/screenshots/harmoniq/3.png",
    "/screenshots/harmoniq/4.png",
    "/screenshots/harmoniq/5.png",
    "/screenshots/harmoniq/6.png",
    "/screenshots/harmoniq/7.png",
    "/screenshots/harmoniq/8.png",
    "/screenshots/harmoniq/9.png",
    "/screenshots/harmoniq/10.png",
    
  ],
  grievance: [
    "/screenshots/grievance/1.png",
    "/screenshots/grievance/2.png",
  ],
  news: [
    "/screenshots/news/1.png",
    "/screenshots/news/2.png",
  ],
  codeforge: [
    "/screenshots/codeforge/1.png",
    "/screenshots/codeforge/2.png",
  ],
};

export default function ScreenshotsPage() {
  const { project } = useParams();

  const images = screenshotsData[project] || [];

  return (
    <div style={{ padding: "30px" }}>
      <h1 style={{ marginBottom: "20px" }}>
        {project?.toUpperCase()}
      </h1>

      {images.length === 0 ? (
        <p>No screenshots found</p>
      ) : (
        <div style={{ display: "grid", gap: "20px" }}>
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={project}
              style={{
                width: "100%",
                borderRadius: "12px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}