import React, { useState, useEffect } from "react";
import { questions, Question } from "./data/questions";
import "./App.css";

const Quiz: React.FC = () => {
  const [selectedQuestions, setSelectedQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);
  const [quizMode, setQuizMode] = useState<"livre" | "prova" | null>(null);

  // Função para embaralhar um array
  const shuffleArray = (array: string[]) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  // Função para iniciar o quiz no modo escolhido
  const startQuiz = (mode: "livre" | "prova") => {
    setQuizMode(mode);

    const selected =
      mode === "prova"
        ? [...questions].sort(() => 0.5 - Math.random()).slice(0, 10) // 10 perguntas aleatórias
        : [...questions].sort(() => Math.random() - 0.5); // Todas as perguntas embaralhadas

    setSelectedQuestions(selected);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setQuizFinished(false);
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  useEffect(() => {
    if (selectedQuestions.length > 0) {
      setShuffledOptions(shuffleArray([...selectedQuestions[currentQuestionIndex].options]));
    }
  }, [currentQuestionIndex, selectedQuestions]);

  const handleAnswerSelect = (answer: string) => {
    if (!isAnswered) {
      setSelectedAnswer(answer);
      setIsAnswered(true);
    }
  };

  const handleNextQuestion = () => {
    if (!isAnswered) return;

    setUserAnswers((prev) => [...prev, selectedAnswer!]);

    if (quizMode === "prova") {
      // Se for Quiz Prova, finaliza o quiz
      if (currentQuestionIndex === selectedQuestions.length - 1) {
        setQuizFinished(true);
      } else {
        setCurrentQuestionIndex((prev) => prev + 1);
        setSelectedAnswer(null);
        setIsAnswered(false);
      }
    } else {
      // Se for Quiz Livre, reinicia as perguntas ao chegar ao final
      if (currentQuestionIndex === selectedQuestions.length - 1) {
        setSelectedQuestions([...questions].sort(() => Math.random() - 0.5)); // Reembaralha
        setCurrentQuestionIndex(0);
      } else {
        setCurrentQuestionIndex((prev) => prev + 1);
      }
      setSelectedAnswer(null);
      setIsAnswered(false);
    }
  };

  const handleExitQuiz = () => {
    setQuizMode(null);
    setSelectedQuestions([]);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setQuizFinished(false);
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  const currentQuestion = selectedQuestions[currentQuestionIndex];

  if (quizMode === null) {
    return (
      <div className="quiz-container">
        <h1>Escolha um modo:</h1>
        <button onClick={() => startQuiz("livre")}>Quiz Livre</button>
        <button onClick={() => startQuiz("prova")}>Quiz Prova</button>

        <div className="quiz-subtitles">
          <span><strong>Modo livre:</strong> você irar responder todas as perguntas disponíveis, e ao chegar ao fim, irá mostrá-las novamente de forma aleatória.</span>
          <span><strong>Modo Prova:</strong> você irar responder a 10 perguntas de forma aleatória. Ao fim, mostrará o resultado.</span>
        </div>
      </div>
    );
  }

  if (!currentQuestion) return <p>Carregando...</p>;

  return (
    <div className="quiz-container">
      {!quizFinished ? (
        <>
          <h2>{quizMode === "livre" ? "Modo Livre" : `Questão ${currentQuestionIndex + 1} de ${selectedQuestions.length}`}</h2>
          <h3>{currentQuestion.question}</h3>
          <div className="options">
            {shuffledOptions.map((option, index) => (
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
          
          <div style={{display: "flex", gap: "10px"}}>
            <button onClick={handleExitQuiz} className="exit-button">Interromper Quiz</button>

            <button onClick={handleNextQuestion} disabled={!isAnswered}>
              {quizMode === "prova" && currentQuestionIndex === selectedQuestions.length - 1 ? "Finalizar Quiz" : "Próxima Pergunta"}
            </button>
          </div>
        </>
      ) : (
        <div>
          <h2>Quiz Finalizado!</h2>
          <p>
            Você acertou{" "}
            {
              userAnswers.filter((answer, index) => answer === selectedQuestions[index].answer).length
            }{" "}
            de {selectedQuestions.length} perguntas.
          </p>
          <button onClick={handleExitQuiz}>Voltar ao Menu</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
