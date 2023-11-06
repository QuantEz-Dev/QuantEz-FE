import React, { useEffect, useState } from "react";
import "../../styles/QA.scss";
import axios from "axios";

import CommonTable from "../../components/Table/Table";
import CommonTableColumn from "../../components/Table/CommonTableColumn";
import CommonTableRow from "../../components/Table/CommonTableRow";
import { Link } from "react-router-dom";

function QuestionListBoard() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/board/')
    .then((response) => {
      setQuestions(response.data);
    })
    .catch((error) => {
      console.error('Error fetching data: ', error);
    });
  }, []);

  const questionRows = Array.isArray(questions) ? (
    questions.map((question) => (
      <CommonTableRow key={question.id}>
        <CommonTableColumn>{question.id}</CommonTableColumn>
        <CommonTableColumn>{question.subject}</CommonTableColumn>
        <CommonTableColumn>{question.create_date}</CommonTableColumn>
        <CommonTableColumn>{question.author.username}</CommonTableColumn>
      </CommonTableRow>
    ))
  ) : null;

  return (
    <div className="qa-container">
      <div className="qa-wrap">
        <div className="qa-title">
          <span>질문과 답변</span>
        </div>
        <form>
          <div className="qalist-wrap">
            {/* TODO : 데이터 map 으로 받아오기 */}
            <CommonTable headersName={['글번호', '제목', '등록일', '작성자']}>
              {questions}
            </CommonTable>
          </div>
        </form>
        <button className="link-to-askquestion submit-btn" style={{marginBottom: '3rem'}}>
          <Link to={"/QA/AskQuestion"}>
            <span>작성하기</span>
          </Link>
        </button>
      </div>
    </div>
  )
}

export default QuestionListBoard;