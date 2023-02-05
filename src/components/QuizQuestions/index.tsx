import React from "react";
import QuestVariantsType from "../../types/QuestVariants";
import SQuizQuestions from "./SQuizQuestions";

const QuizQuestions: React.FC<QuestVariantsType & any> = ({
  getNextQuestion,
  getPrevQuestion,
  id,
  step,
  question,
  answers,
}) => {
  return (
    <SQuizQuestions.Wrapper>
      <SQuizQuestions.Title>{step}</SQuizQuestions.Title>
      <SQuizQuestions.Title>{question}</SQuizQuestions.Title>
      <SQuizQuestions.Content>
        {answers.map((answer: string, answerIndex: number) => (
          <SQuizQuestions.Answer key={answerIndex} onClick={getNextQuestion}>
            {answer}
          </SQuizQuestions.Answer>
        ))}
      </SQuizQuestions.Content>
      <SQuizQuestions.Button onClick={getPrevQuestion}>
        Назад
      </SQuizQuestions.Button>
    </SQuizQuestions.Wrapper>
  );
};

export default QuizQuestions;
