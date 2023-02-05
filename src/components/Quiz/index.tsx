import React from "react";
import questions from "../../helpers/questions";
import QuizQuestions from "../QuizQuestions";
import QuizPreview from "../QuizPreview";
import SQuiz from "./SQuiz";
import QuizRezults from "../QuizResults";
import results from "../../helpers/results";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState<
    number | null
  >(null);

  const startQuiz = () => setCurrentQuestionIndex(0);
  const resetQuiz = () => setCurrentQuestionIndex(null);
  const getNextQuestion = () => setCurrentQuestionIndex(prev => prev !== null ? prev + 1 : null);
  const getPrevQuestion = () => setCurrentQuestionIndex(prev => prev !== null ? (prev === 0 ? null : prev - 1) : null);
  
  return (
    <SQuiz.Wrapper>
      {currentQuestionIndex === null && (
        <QuizPreview startQuiz={startQuiz} />
      )}
      {currentQuestionIndex !== null &&
        currentQuestionIndex <= questions.length - 1 && (
          <QuizQuestions
            getNextQuestion={getNextQuestion}
            getPrevQuestion={getPrevQuestion}
            {...questions[currentQuestionIndex]}
          />
        )}
      {currentQuestionIndex === questions.length && (
        <QuizRezults
          resetQuiz={resetQuiz}
          {...results[0]}
        />
      )}
      {/* {<QuizRezults {...results[0]} />} */}
    </SQuiz.Wrapper>
  );
};
export default Quiz;
