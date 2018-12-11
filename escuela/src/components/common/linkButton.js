import React from "react";

export const LinkButton = ({ text, href }) => {
  return (

    <a
      className="btn btn-secondary warning" 
      href={href}
      role="button">
      {text}
    </a>

  );
};
export default LinkButton;
