import React, { useState, useEffect } from "react";
import { questions, Question } from "./data/questions";
import "./App.css"

const Quiz: React.FC = () => {
  const [selectedQuestions, setSelectedQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);

  const startQuiz = () => {
    const shuffled = [...questions].sort(() => 0.5 - Math.random()).slice(0, 10);
    setSelectedQuestions(shuffled);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setQuizFinished(false);
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  useEffect(() => {
    startQuiz();
  }, []);

  const handleAnswerSelect = (answer: string) => {
    if (!isAnswered) {
      setSelectedAnswer(answer);
      setIsAnswered(true);
    }
  };

  const handleNextQuestion = () => {
    if (!isAnswered) return;

    setUserAnswers((prev) => [...prev, selectedAnswer!]);

    if (currentQuestionIndex === selectedQuestions.length - 1) {
      setQuizFinished(true);
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    }
  };

  const currentQuestion = selectedQuestions[currentQuestionIndex];

  if (!currentQuestion) return <p>Carregando...</p>;

  return (
    <div className="quiz-container">
      {!quizFinished ? (
        <>
          <h2>Questão {currentQuestionIndex + 1} de 10</h2>
          <h3>{currentQuestion.question}</h3>
          <div className="options">
            {currentQuestion.options.map((option, index) => (
              <div className="optionContainer" key={index}>
                <label
                  key={index}
                  className={`${isAnswered ? (option === currentQuestion.answer ? "correct" : "incorrect") : ""}`}
                >
                  <input
                    type="radio"
                    name={`question-${currentQuestionIndex}`}
                    value={option}
                    checked={selectedAnswer === option}
                    onChange={() => handleAnswerSelect(option)}
                    disabled={isAnswered}
                  />
                  {option}
                </label>
              </div>
            ))}
          </div>

          <button onClick={handleNextQuestion} disabled={!isAnswered}>
            {currentQuestionIndex === selectedQuestions.length - 1 ? "Finalizar Quiz" : "Próxima Pergunta"}
          </button>
        </>
      ) : (
        <div>
          <h2>Quiz Finalizado!</h2>
          <p>
            Você acertou{" "}
            {
              userAnswers.filter((answer, index) => answer === selectedQuestions[index].answer).length
            }{" "}
            de 10 perguntas.
          </p>
          <button onClick={startQuiz}>Refazer Quiz</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;