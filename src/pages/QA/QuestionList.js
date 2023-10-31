import React from "react";
import "../../styles/QA.scss";

// 가상 데이터
const questions = [
  {
    id : 1,
    question: "이름이 뭔가요?",
  },
  {
    id :2,
    question: "여기 화장실이 어디에요?",
  },
];

export const QuestionList = () => {
  return (
    <div className="qa-container">
      <div className="qa-wrap">
        <div className="qa-title">
          <span>질문과 답변</span>
        </div>
        <div className="postlist-wrap">

        </div>
      </div>

    </div>
  )
}