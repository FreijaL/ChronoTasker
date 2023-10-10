import React, { createElement, useState } from "react";

const Backlog = () => {
  const [userStory, setUserStory] = useState("");

  const handleUserStory = () => {
    const createNewUserStory = document.createElement("h2");
    createNewUserStory.innerHTML = userStory;

    const container = document.getElementById("userStoryContainer");
    container.appendChild(createNewUserStory);
  }

  return (
    <div id="backlog">
        <h2>Backlog</h2>
      <input
        type="text"
        value={userStory}
        onChange={(e) => setUserStory(e.target.value)}
      />
      <button onClick={handleUserStory}>Add</button>
      <div id="userStoryContainer">

      </div>
    </div>
  );
};

export default Backlog;