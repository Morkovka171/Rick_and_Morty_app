import React from "react";
import SQuizRezults from "./SQuizResults";
import ResultsType from "../../types/ResultsType";

const QuizRezults: React.FC<ResultsType & any> = ({
  id,
  resetQuiz,
  image,
  name,
  text,
}) => {
  return (
    <SQuizRezults.Wrapper>
      <SQuizRezults.Title>{name}</SQuizRezults.Title>
      <SQuizRezults.Image src={image}></SQuizRezults.Image>
      <SQuizRezults.Text>{text}</SQuizRezults.Text>
      <SQuizRezults.Button onClick={resetQuiz}>
        Пройти заново
      </SQuizRezults.Button>
    </SQuizRezults.Wrapper>
  );
};
export default QuizRezults;
