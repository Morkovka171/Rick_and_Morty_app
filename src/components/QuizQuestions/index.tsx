import React from "react";
import QuestVariantsType from "../../types/QuestVariants";
import SQuizQuestions from "./SQuizQuestions";

type TProps = QuestVariantsType & {
  getNextQuestion: () => void;
  getPrevQuestion: () => void;
  setAnswer: (questionIndex: number, questionCharacter: string) => void;
  index: number;
};

const QuizQuestions: React.FC<TProps> = ({
  getNextQuestion,
  getPrevQuestion,
  setAnswer,
  id,
  index,
  step,
  question,
  answers,
}) => {
  const handleAnswerClick = (index: number, character: string) => {
    setAnswer(index, character);
    getNextQuestion();
  };

  return (
    <SQuizQuestions.Wrapper>
      <SQuizQuestions.Title>{step}</SQuizQuestions.Title>
      <SQuizQuestions.Title>{question}</SQuizQuestions.Title>
      <SQuizQuestions.Content>
        {answers.map((answer, answerIndex) => (
          <SQuizQuestions.Answer
            key={answerIndex}
            onClick={() => handleAnswerClick(index, answer.character)}
          >
            {answer.text}
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
