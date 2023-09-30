import React from 'react';
import database from '../../base/database';

function Imgcentr() {
  const containerStyle = {
    textAlign: "center",
  };

  return (
    <div style={containerStyle}>
      {database.logos.map((logo, index) => (
        <img key={index} src={logo.logo} alt={`Logo ${index}`} />
      ))}
    </div>
  );
}

export default Imgcentr;


