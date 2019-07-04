import React from "react";
import "./style.css";

function MacReady() {
  return (
    <div className="card">
      <div className="img-container">
        <img
          alt="Jack Burton"
          src="https://static.comicvine.com/uploads/square_small/2/26147/3625465-9177ca514cc5b9f475bb78d32bb65db71435183734.jpg"
        />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> Jack Burton
          </li>
          <li>
            <strong>Occupation:</strong> Friend for Hire
          </li>
          <li>
            <strong>Location:</strong> China Town/Wherever Needed
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MacReady;
