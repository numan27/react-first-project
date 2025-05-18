import React from "react";

function CustomSectionHeading({ title, description }) {
  return (
    <div className="custom-heading d-flex flex-md-row flex-column align-items-md-center justify-content-between">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default CustomSectionHeading;
