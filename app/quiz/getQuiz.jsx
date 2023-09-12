"use client";
import { useState } from "react";
import { Badge } from "react-bootstrap";
import { quiz } from "../data";
import "bootstrap/dist/css/bootstrap.min.css";
import quizIMG from "../assets/teacher.png";
import chimic from "../assets/chimic.gif";
import { HandelQuestion } from "./question";
import BG from "../assets/wp12337144-light-green-desktop-wallpapers.jpg";

export default function GetQuestions() {
  const [dates, setDates] = useState({
    answersCount: 0,
    IncorrectCount: 0,
  });

  return (
    <div style={{ backgroundImage: `url(${BG.src})` }}>
      <div>
        <img
          src={quizIMG.src}
          alt="quizIMG"
          style={{ width: "300px", margin: "auto", display: "inherit" }}
        />

        <img
          src={chimic.src}
          alt="chimic"
          style={{
            position: "relative",
            height: "150px",
            width: "150px",
            margin: "auto",
            bottom: "96px",
            display: "block",
          }}
        />
      </div>
      <div style={{ marginRight: "20%", marginLeft: "20%", marginTop: "60px" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Badge className="p-2" bg="warning">
            تعداد سوال: <span>{quiz.totalQuestions}</span>
          </Badge>

          <Badge className="p-2" bg="warning">
            تعداد سوالات جواب داده نشده:{" "}
            <span>{quiz.totalQuestions - dates.answersCount}</span>
          </Badge>

          <Badge className="p-2" bg="secondary">
            تعداد جواب های درست:{" "}
            <span>{dates.answersCount - dates.IncorrectCount}</span>
          </Badge>

          <Badge className="p-2" bg="danger">
            تعداد جواب های غلط: <span>{dates.IncorrectCount}</span>
          </Badge>
        </div>
        {quiz.questions.map((index) => (
          <HandelQuestion
            headerData={dates}
            changeHeaderData={setDates}
            question={index}
            key={index.id}
          />
        ))}
      </div>
    </div>
  );
}
