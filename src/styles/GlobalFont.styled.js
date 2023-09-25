import { createGlobalStyle } from "styled-components";
import NotoSansKR from "../assets/fonts/NotoSansKR.ttf";
import NanumGothic from "../assets/fonts/NanumGothic.ttf";

export const GlobalFont = createGlobalStyle`    
     @font-face {
        font-family: 'NotoSansKR';
        src: local('NotoSansKR'), local('NotoSansKR');
        font-style: normal;
        src: url(${NotoSansKR}) format('truetype');
    }
    @font-face {
        font-family: 'NanumGothic';
        src: local('NanumGothic'), local('NanumGothic');
        font-style: normal;
        src: url(${NanumGothic}) format('truetype');
    }
    
`;
