import React from "react";
import SQuizPreview from "./SQuizPreview";

const QuizPreview = ({ startQuiz }: any) => {
  return (
    <SQuizPreview.PreviewContent>
      <SQuizPreview.Img src="assets/quiz.png" alt="Quiz" />
      <SQuizPreview.Title>
        Кто ты во вселенной «Рика и Морти»?
      </SQuizPreview.Title>
      <SQuizPreview.Text>
        Нужно пройти тест, Морти! Нет, серьезно: этот тест определит твое место
        в самой сквочной вселенной, Морти. Давай, прошли и вышли. Тест на пару
        минут!
      </SQuizPreview.Text>
      <SQuizPreview.Button onClick={startQuiz}>
        ПРОЙТИ ТЕСТ
      </SQuizPreview.Button>
    </SQuizPreview.PreviewContent>
  );
};

export default QuizPreview;
