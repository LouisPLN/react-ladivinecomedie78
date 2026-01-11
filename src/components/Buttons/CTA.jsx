import React from 'react';
import { Link } from 'react-router-dom';
import "../../styles/components/Buttons/CTA.css"

const CTA = ({ to, children, target }) => {
  return (
    <Link to={to} target={target} className="cta-button text-white">{children}</Link>
  );
};

export default CTA;