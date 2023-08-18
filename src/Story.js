import React from "react";

const Story = ({ noun1, noun2, verb, color }) => {
  return (
    <h1>
      {noun1} {verb} {color} {noun2}
    </h1>
  );
};

export default Story;
