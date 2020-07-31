import React from "react";

const Title = ({ title, span }) => {
  return (
    <div>
      <h1 className="display-4 text-center py-5">
        {title} <span className="text-success">{span}</span>
      </h1>
    </div>
  );
};

export default Title;
