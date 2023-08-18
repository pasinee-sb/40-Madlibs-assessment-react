import React, { useState } from "react";

const MadlibForm = ({ addStory }) => {
  const INITIAL_STATE = {
    noun1: "",
    noun2: "",
    verb: "",
    color: "",
  };

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStory({ ...formData });
    setFormData(INITIAL_STATE);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="noun1">noun1</label>
      <input
        id="noun1"
        type="text"
        name="noun1"
        placeholder="noun1"
        value={formData.noun1}
        onChange={handleChange}
      />

      <label htmlFor="noun2">noun2</label>
      <input
        id="noun2"
        type="text"
        name="noun2"
        placeholder="noun2"
        value={formData.noun2}
        onChange={handleChange}
      />
      <label htmlFor="verb">verb</label>
      <input
        id="verb"
        type="text"
        name="verb"
        placeholder="verb"
        value={formData.verb}
        onChange={handleChange}
      />
      <label htmlFor="color"></label>
      <input
        id="color"
        type="text"
        name="color"
        placeholder="color"
        value={formData.color}
        onChange={handleChange}
      />
      <button>Give me the story!</button>
    </form>
  );
};

export default MadlibForm;
