import React, {useEffect, useRef, useState} from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import "../../styles/QA.scss";
import axios from "axios";
import { Link } from "react-router-dom";

export const AskQuestion = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/board/question/create', {
        subject: title,
        content: content
      });

      console.log(response.data);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <div className="qa-container">
      <div className="qa-wrap">
        <div className="qa-title">
          <span>질문 등록하기</span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="qa-user-input">
            <div className="qa-user-title">
              <dl>
                <dt>제목</dt>
                <dd>
                  <input className="user-title-input" type="text" placeholder="제목 입력" value={title} onChange={handleTitleChange}></input>
                </dd>
              </dl>
            </div>
            <ReactQuill style={{height: '40rem'}} value={content} onChange={handleContentChange}></ReactQuill>
          </div>
          <button  type="submit" className="submit-btn">
            <Link to={"/QA"}>
              등록하기
            </Link>
          </button>
        </form>
      </div>
    </div>
  )
}
