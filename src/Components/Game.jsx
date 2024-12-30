import './Game.css';
import CreateContext from './Store/CreateContext.js';
import { useContext, useState } from 'react';

const Game = () => {
  const [clicked, setClicked] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const questions = [
    {
      Heading: "Question 1",
      Question: "Who is the primeminister of Nepal 2024?",
      optionOne: "KP Oli",
      optionTwo: "Balen sahah",
      optionThree: "Puspa kamal dahal",
      optionFour: "Sher Bahadur deuba",
      Answer: 1,
    },
    {
      Heading: "Question 2",
      Question: "Who is the president of the USA?",
      optionOne: "Donald Trump",
      optionTwo: "Barack Obama",
      optionThree: "Joe Biden",
      optionFour: "George Washington",
      Answer: 3,
    },
    {
      Heading: "Question 3",
      Question: "What is the capital of France?",
      optionOne: "Berlin",
      optionTwo: "Madrid",
      optionThree: "Paris",
      optionFour: "Rome",
      Answer: 3,
    },
    {
      Heading: "Question 4",
      Question: "What is the square root of 64?",
      optionOne: "6",
      optionTwo: "8",
      optionThree: "10",
      optionFour: "12",
      Answer: 2,
    },
    {
      Heading: "Question 5",
      Question: "Who wrote 'Hamlet'?",
      optionOne: "Shakespeare",
      optionTwo: "Dickens",
      optionThree: "Hemingway",
      optionFour: "Austen",
      Answer: 1,
    },
    {
      Heading: "Question 6",
      Question: "What is the largest planet in our solar system?",
      optionOne: "Earth",
      optionTwo: "Mars",
      optionThree: "Jupiter",
      optionFour: "Saturn",
      Answer: 3,
    },
    {
      Heading: "Question 7",
      Question: "Who painted the Mona Lisa?",
      optionOne: "Van Gogh",
      optionTwo: "Picasso",
      optionThree: "Da Vinci",
      optionFour: "Dali",
      Answer: 3,
    },
    {
      Heading: "Question 8",
      Question: "Which animal is known as the king of the jungle?",
      optionOne: "Tiger",
      optionTwo: "Elephant",
      optionThree: "Lion",
      optionFour: "Bear",
      Answer: 3,
    },
    {
      Heading: "Question 9",
      Question: "What is the chemical symbol for water?",
      optionOne: "O2",
      optionTwo: "H2O",
      optionThree: "CO2",
      optionFour: "H2O2",
      Answer: 2,
    },
    {
      Heading: "Question 10",
      Question: "Who was the first man to step on the Moon?",
      optionOne: "Buzz Aldrin",
      optionTwo: "Neil Armstrong",
      optionThree: "Yuri Gagarin",
      optionFour: "John Glenn",
      Answer: 2,
    },
    {
      Heading: "Question 11",
      Question: "What is the largest ocean on Earth?",
      optionOne: "Atlantic Ocean",
      optionTwo: "Indian Ocean",
      optionThree: "Arctic Ocean",
      optionFour: "Pacific Ocean",
      Answer: 4,
    },
    {
      Heading: "Question 12",
      Question: "In what year did the Titanic sink?",
      optionOne: "1912",
      optionTwo: "1905",
      optionThree: "1920",
      optionFour: "1898",
      Answer: 1,
    },
    {
      Heading: "Question 13",
      Question: "What is the capital of Japan?",
      optionOne: "Seoul",
      optionTwo: "Beijing",
      optionThree: "Tokyo",
      optionFour: "Kyoto",
      Answer: 3,
    },
    {
      Heading: "Question 14",
      Question: "Which element has the chemical symbol 'O'?",
      optionOne: "Oxygen",
      optionTwo: "Osmium",
      optionThree: "Ozone",
      optionFour: "Oxygenium",
      Answer: 1,
    }
  ];

  const { score, setScore } = useContext(CreateContext);

  const handleSelect = (index, answer) => {
    if (index === answer) {
      setScore(score + 10);
    } else {
      if (score < 10) {
        setScore(0);
      } else {
        setScore(score - 10);
      }
    }
    setClicked(index);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setClicked(null);
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setClicked(null);
      if (score > 10) {
        setScore(score - 10);
      } else {
        setScore(0);
      }
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="Game">
      <div className="row-1">
        <h2>Quizapp</h2>
        <span>Score: {score}</span>
      </div>

      <div className="row-2">
        <div className="questionContainer">
          <h3>{currentQuestion.Heading}</h3>
          <h2>{currentQuestion.Question}</h2>

          <button
            onClick={() => handleSelect(1, currentQuestion.Answer)}
            style={{
              border: clicked
                ? 1 === currentQuestion.Answer
                  ? '2px solid seagreen'
                  : 1 === clicked
                  ? '2px solid red'
                  : ''
                : ''
            }}
            disabled={clicked ? true : false}
          >
            {currentQuestion.optionOne}
          </button>

          <button
            onClick={() => handleSelect(2, currentQuestion.Answer)}
            style={{
              border: clicked
                ? 2 === currentQuestion.Answer
                  ? '2px solid seagreen'
                  : 2 === clicked
                  ? '2px solid red'
                  : ''
                : ''
            }}
            disabled={clicked ? true : false}
          >
            {currentQuestion.optionTwo}
          </button>

          <button
            onClick={() => handleSelect(3, currentQuestion.Answer)}
            style={{
              border: clicked
                ? 3 === currentQuestion.Answer
                  ? '2px solid seagreen'
                  : 3 === clicked
                  ? '2px solid red'
                  : ''
                : ''
            }}
            disabled={clicked ? true : false}
          >
            {currentQuestion.optionThree}
          </button>

          <button
            onClick={() => handleSelect(4, currentQuestion.Answer)}
            style={{
              border: clicked
                ? 4 === currentQuestion.Answer
                  ? '2px solid seagreen'
                  : 4 === clicked
                  ? '2px solid red'
                  : ''
                : ''
            }}
            disabled={clicked ? true : false}
          >
            {currentQuestion.optionFour}
          </button>

          {clicked !== null && (
            <div>
              <button id="next" onClick={handleNext}>
                Next
              </button>
              <button onClick={handleBack}>
                Back
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Game;
