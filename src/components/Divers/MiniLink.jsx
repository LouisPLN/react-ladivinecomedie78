import React from "react";

const MiniLink = ({ source, children, childrenTwo }) => {
  return (
    <div className="mini-link">
      <img src={source} alt="icon" />
      <div>
        <h6 style={{textAlign: "left",}}>{children}</h6>
        <p style={{textAlign: "left",}}>{childrenTwo}</p>
      </div>
    </div>
  );
};

export default MiniLink;
