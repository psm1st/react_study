import React from "react";
import { ReactDOM } from "react";
import './index.css';
import App from "./App";
//import * as serviceWorker from './serviceWorker';

//리액트 엔진이 출력하는 화면의 코드(id가 root인 엘리먼트에 컴포넌트 출력 )
ReactDOM.render(<App/>,document.getElementById('root'));

//서비스워커 구동 코드로 오프라인 모드로 작동하는데 도움이됨
// serviceWorker.unregister();
// var img = document.createElement('img');
// img.setAttribute('src','https://postfiles.pstatic.net/MjAyMjExMDVfMjUx/MDAxNjY3NTgwODQyNTc3.6-38H6uhdBxCnfpKUkbPxHw9KfelswT4ua-RAHKn7h8g.67b4lkgZ0809qPowa_dCXmaxzarH3yn8kXo-uW878oMg.JPEG.gva05165/KakaoTalk_20221105_015324906.jpg?type=w966');
// var divEl = document.createElement('div');
// divEl.innerText = '안녕하세요';
// var welcomeEl = document.createElement('div');
// welcomeEl.append(img);
// welcomeEl.append(divEl);

// var root = document.getElementById('root');
// root.append(welcomeEl);
