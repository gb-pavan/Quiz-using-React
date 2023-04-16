import React, { useState } from 'react';
import DisplayQuestions from '../DisplayQuestions';
import './index.css';

const questionArray = [
    {
    text: "What is HTML?",
    options: [
    { id: 0, text: "Hypertext Markup Language", isCorrect: true },
    { id: 1, text: "High Texting Markup Language", isCorrect: false },
    { id: 2, text: "Hyper Technology Markup Language", isCorrect: false },
    { id: 3, text: "None of the above", isCorrect: false },
    ],
    },
    {
    text: "What is CSS used for?",
    options: [
    { id: 0, text: "Adding styles to HTML elements", isCorrect: true },
    { id: 1, text: "Creating and manipulating databases", isCorrect: false },
    { id: 2, text: "Building server-side applications", isCorrect: false },
    { id: 3, text: "None of the above", isCorrect: false },
    ],
    },
    {
    text: "What is JavaScript?",
    options: [
    { id: 0, text: "A programming language used to create interactive effects on web pages", isCorrect: true },
    { id: 1, text: "A markup language used for structuring and displaying content on the web", isCorrect: false },
    { id: 2, text: "A styling language used for adding visual effects to web pages", isCorrect: false },
    { id: 3, text: "None of the above", isCorrect: false },
    ],
    },
    {
    text: "What is a CSS selector?",
    options: [
    { id: 0, text: "A pattern used to select HTML elements to apply styles to", isCorrect: true },
    { id: 1, text: "A programming function used to manipulate the DOM", isCorrect: false },
    { id: 2, text: "A type of HTML element used to display text on a webpage", isCorrect: false },
    { id: 3, text: "None of the above", isCorrect: false },
    ],
    },
    {
    text: "What is the box model in CSS?",
    options: [
    { id: 0, text: "A way of representing the layout of HTML elements as rectangular boxes", isCorrect: true },
    { id: 1, text: "A way of organizing CSS rules into groups for better organization", isCorrect: false },
    { id: 2, text: "A way of creating responsive designs for mobile devices", isCorrect: false },
    { id: 3, text: "None of the above", isCorrect: false },
    ],
    },
    ];

const App = () => {
  const [showQuestions, setShowQuestions] = useState(false);

  const handleStartButtonClick = () => {
    setShowQuestions(true);
  }

  return (
    <div >
      {showQuestions ? <DisplayQuestions questionArray={questionArray} /> :
        <div className="app-container">
            <button onClick={handleStartButtonClick} className="start-button">Start Quiz</button>
            <p className='text-color'>Note: There are 5 Questions and each Question has 10 seconds to answer</p>
        </div>                
      }        
    </div>
  );
};

export default App;
