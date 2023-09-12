import { quiz } from "../data";

const AnswerResult = (status) => {
  return status == "SUCCESS" ? true : false;
};

export const Validate = (answer, questionID) => {
  const quiz1 = [...quiz.questions];
  var question = quiz1.find((x) => x.id === questionID);
  var status = "REJECTED";

  if (question && question.correctAnswer == answer) {
    status = "SUCCESS";
  }

  return AnswerResult(status);
};
