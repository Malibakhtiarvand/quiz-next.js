import { memo, useState } from "react";
import questionTeacher from "../assets/desktop-wallpaper-creative-water-question-mark-android-teahub-io-cool-question-mark-thumbnail.png";
import quizBG from "../assets/quiz_bg.jpg";
import { BadF, SuccessF } from "./statusIMG";
import { Validate } from "./valitator";

export const HandelQuestion = memo(
  ({ question, headerData, changeHeaderData }) => {
    const [selectedRadio, setSelectedRadio] = useState("");
    const [sendData, SetSendData] = useState(false);
    const [answerStatus, SetAnswerStatus] = useState(false);

    const Selector = (e) => {
      setSelectedRadio(e);
    };

    return (
      <div
        style={{
          backgroundImage: `url(${quizBG.src})`,
          marginTop: "20px",
          paddingBottom: "10px",
        }}
      >
        <div className="d-flex justify-content-between">
          <p style={{ fontSize: "20pt", color: "#00faff" }}>
            {question.question}
          </p>

          <p className="bg-dark text-white d-flex align-items-center p-2">
            نوع سوال: <span>{question.type}</span>
          </p>
        </div>

        <div className="d-flex justify-content-between">
          <div>
            {question.answers.map((index, id) => (
              <div
                data-info={index}
                key={id}
                style={{ marginTop: "10px", color: "whitesmoke" }}
              >
                <input
                  type="radio"
                  name={"answers__" + question.id}
                  id={"answers__" + question.id + "__" + id}
                  data-info={index}
                  onClick={(e) => {
                    if (!sendData) setSelectedRadio(e.target.dataset.info);
                  }}
                />
                <label
                  style={{ paddingRight: "5px" }}
                  for={"answers__" + question.id + "__" + id}
                >
                  {index}
                </label>
                <br></br>
              </div>
            ))}
          </div>

          <img
            style={{ width: "100px", height: "150px", marginLeft: "50px" }}
            src={questionTeacher.src}
            alt=""
          />
        </div>

        <button
          onDoubleClick={() => {
            Selector(selectedRadio);
            if (!sendData && selectedRadio != "") SetSendData(true);
            const answerStatus1 = Validate(selectedRadio, question.id);

            if (selectedRadio != "") {
              var copyHeaderInfo = { ...headerData };
              copyHeaderInfo.answersCount++;
              if (answerStatus1) {
                SetAnswerStatus(true);
              } else {
                copyHeaderInfo.IncorrectCount++;
              }
              changeHeaderData(copyHeaderInfo);
            }
          }}
          className="btn btn-success mt-4"
        >
          ثبت
        </button>

        {sendData ? answerStatus ? <SuccessF /> : <BadF /> : null}
      </div>
    );
  }
);
