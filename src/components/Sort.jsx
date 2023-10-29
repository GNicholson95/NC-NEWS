import { useState } from "react";

const Sort = ({ value, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };
  
  return (
    <div className="sort-container">
      <label>
        <select value={value} onChange={handleChange}>
          <option value="Most recent">Most recent</option>
          <option value="Most comments">Most comments</option>
          <option value="Most votes">Most votes</option>

        </select>
      </label>
    </div>
  );
};

export default Sort;