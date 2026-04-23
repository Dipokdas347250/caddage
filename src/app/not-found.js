"use client";

export default function NotFound() {
  return (
    <div className="container">
      <svg viewBox="0 0 600 300" className="svg">
        <text x="50%" y="50%" textAnchor="middle" className="text">
          404
        </text>
        <circle cx="100" cy="150" r="10" className="ball"/>
      </svg>

      <h1>Not Found</h1>
      <p>Could not find requested resource</p>
      <button className="btn" onClick={() => window.location.href = "/"}>
        Return Home
      </button>
    </div>
  );
}