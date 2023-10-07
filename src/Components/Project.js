import React from 'react';

function Project({ src, alt, description }) {
  return (
    <div className="project">
      <img src={src} alt={alt} />
      <p>{description}</p>
    </div>
  );
}

export default Project;