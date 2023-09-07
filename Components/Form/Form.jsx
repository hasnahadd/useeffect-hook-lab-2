// Form Component
import React, { useState } from 'react';

export default function Form({ setInput }) {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput(inputText);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Search user Github</h3>
      <div className="mb-3">
        <label>User name</label>
        <input
          type="text"
         
          placeholder="User Name"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </div>
      <button type="submit" >Submit</button>
    </form>
  );
}
