import React, { useState } from 'react';
import './App.css';

function App() {
  const initialTexts = [
    "What language is react base on?",
    "What are the building blocks of React app",
    "What's the name of the syntax we use to describe a UI in react?",
    "How to pass data from parent to child component?",
    "How to give components memory?",
    "What do we call an input element that is completely synchronized with state?"
  ];

  const hoverTexts = [
    "React is based on JavaScript.",
    "The building blocks are components.",
    "We use JSX to describe a UI.",
    "Data is passed using props.",
    "Components use state to remember data.",
    "An input element that is synced with state is called a controlled component."
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <>
      <div className="container1">
        {initialTexts.slice(0, 3).map((text, index) => (
          <div
            key={index}
            className={`box${index + 1}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <p>{hoveredIndex === index ? hoverTexts[index] : text}</p>
          </div>
        ))}
      </div>
      <div className="container2">
        {initialTexts.slice(3).map((text, index) => (
          <div
            key={index + 3}
            className={`box${index + 4}`}
            onMouseEnter={() => handleMouseEnter(index + 3)}
            onMouseLeave={handleMouseLeave}
          >
            <p>{hoveredIndex === index + 3 ? hoverTexts[index + 3] : text}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
