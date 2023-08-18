import React, { useState } from "react";
import Story from "./Story";
import MadlibForm from "./MadlibForm";

const Madlib = () => {
  const INITIAL_STATE = {};

  const [story, setStory] = useState(INITIAL_STATE);

  const addStory = ({ noun1, noun2, verb, color }) => {
    setStory({ noun1, noun2, verb, color });
  };
  return (
    <div>
      <MadlibForm addStory={addStory} />
      <Story
        noun1={story.noun1}
        noun2={story.noun2}
        verb={story.verb}
        color={story.color}
      />
    </div>
  );
};

export default Madlib;
