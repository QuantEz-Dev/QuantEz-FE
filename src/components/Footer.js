// import facebook from "../img/footer-btn-1.png";
// import blog from "../img/footer-btn-2.png";
// import cafe from "../img/footer-btn-3.png";
// import kakaotalk from "../img/footer-btn-4.png";
// import youtube from "../img/footer-btn-5.png";
import { BsFacebook } from "react-icons/bs";
import { RiKakaoTalkFill } from "react-icons/ri";
import { AiFillYoutube } from "react-icons/ai";

export const Footer = () => {
  return (
    <div id="footer">
      <div class="footer-in">
        <div class="footer-left">
          <ul>
            <li class="footer-left-li-1">
              <span class="footer-link-kakaotalk">
                <span>카카오톡 고객센터 : 평일 10:00~17:00</span>
                카카오톡 채널@QuantEZ
              </span>
            </li>
            <li class="footer-left-li-2">
              <a
                href="mailto:ljh990722@g.hongik.ac.kr"
                class="footer-link-email"
              >
                문의 : ljh990722@g.hongik.ac.kr
              </a>
            </li>
            <li class="footer-socialLink">
              <a href="http://facebook.com/NewsyStock" target="_blank">
                <BsFacebook color="#1877f2" fontSize="1.5em" />
              </a>
              <a>
                <RiKakaoTalkFill color="#ffe812" fontSize="1.5em" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCil6SlGvpvs7H1t5txMPdFw"
                target="_blank"
              >
                <AiFillYoutube color="#ff0000" fontSize="1.5em" />
              </a>
            </li>
          </ul>
        </div>
        <div class="footer-right">
          <p class="copy-1">
            서울시 마포구 와우산로10길 3 엘케이빌딩 3층
            <br />
            대표자 : 곽성재, 이희택, 임정희
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 개인정보보호책임자 : 이희택
            <br />
            <br />
            본 사이트에 개재되는 정보는 오류 및 지연이 있을 수 있으며, 그 이용에
            관한 책임은 이용자 본인에게 있습니다.
            <br />
            본 사이트의 내용을 무단전재 및 복사할 수 없습니다.
            <br />ⓒ QuantEZ Co.,Ltd.
          </p>
        </div>
      </div>
    </div>
  );
};
