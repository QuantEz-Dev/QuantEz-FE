// import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Mainlogo } from "../assets/img/Mainlogo.svg";
import "../styles/Navbar.css";
export const Navbar = () => {
  // const [value, setValue] = useState("");
  return (
    <div id="header">
      <div id="header-top">
        <div id="header-top-right">
          <ul>
            <li>
              <Link to="/login">로그인</Link>
              <span>&nbsp;&nbsp; | &nbsp;&nbsp;</span>
            </li>
            <li>
              <span class="login" onclick="">
                고객센터
              </span>
              <span>&nbsp;&nbsp; | &nbsp;&nbsp;</span>
            </li>
            <li class="in-select">
              <select
                onChange={(event) =>
                  event.target.value
                    ? window.open(event.target.value, "_blank")
                    : ""
                }
              >
                <option value="">연관 사이트</option>
                <option value="https://www.samsungpop.com/">삼성증권</option>
                <option value="https://www.nhqv.com/">NH증권</option>
                <option value="https://securities.koreainvestment.com/main/Main.jsp">
                  한국투자증권
                </option>
              </select>
            </li>
          </ul>
        </div>
      </div>
      <div id="header-con">
        <Link to="/">
          <Mainlogo />
        </Link>
        <nav id="gnb">
          <ul id="MasterMainMenu">
            <li class="gnb-depth-1">
              <Link class="gnb-depth-1-btn" to="/financeSheetlist">
                {" "}
                재무제표학습
              </Link>
            </li>
            <li class="gnb-depth-1">
              {" "}
              <li class="gnb-depth-1-btn">
                백테스트
                <li class="gnb-depth-2">
                  <li>
                    <Link class="gnb-depth-2-btn"> 튜토리얼</Link>
                    {/* <Link class="gnb-depth-2-btn" to="/tutorial">
                      튜토리얼
                    </Link> */}
                  </li>
                  <li>
                    <Link class="gnb-depth-2-btn" to="/port">
                      포트 만들기
                    </Link>
                  </li>
                </li>
              </li>
            </li>
            <li class="gnb-depth-1">
              <Link class="gnb-depth-1-btn" to="/aboutus">
                퀀티지란?
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
