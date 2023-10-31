import React, {useEffect, useRef, useState} from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import "../../styles/QA.scss";
import axios from "axios";
import { Link } from "react-router-dom";

export const AskQuestion = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // const handleTitleChange = (e) => {
  //   setTitle(e.target.value);
  // };
  // const handleContentChange = (e) => {
  //   setContent(value);
  // };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  // }

  return (
    <div className="qa-container">
      <div className="qa-wrap">
        <div className="qa-title">
          <span>질문 등록하기</span>
        </div>
        <form>
          <div className="qa-user-input">
            <div className="qa-user-title">
              <dl>
                <dt>제목</dt>
                <dd>
                  <input className="user-title-input" type="text" placeholder="제목 입력"></input>
                </dd>
              </dl>
            </div>
            <ReactQuill></ReactQuill>
          </div>
          <button  type="submit" className="submit-btn">등록하기</button>
          {/* <Link to={}></Link></button> */}
        </form>
      </div>
    </div>
  )
}
