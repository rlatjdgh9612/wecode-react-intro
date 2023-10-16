import React from "react";
import logo1 from "./Logo.png";
import logo2 from "./logo_wecode.png";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  // Main 페이지로 이동
  const moveNavigate = useNavigate();
  // 이메일(ID) -> 아이디 입력시 데이터 저장
  const [id, setID] = useState("");
  const saveUserID = (event) => {
    setID(event.target.value);
  };
  // 비밀번호(PW) -> 비밀번호 입력시 데이터 저장
  const [pw, setPW] = useState("");
  const saveUserPW = (event) => {
    setPW(event.target.value);
  };
  // 로그인 기능 -> ID 조건 : @ 이 포함 / PW 조건 : 비밀번호가 5글자 이상
  const isLoginValid = id.includes("@", ".") && pw.length >= 5;
  // 로그인 임의 값
  const realID = "wecode@naver.com";
  const realPW = "123456789";
  // Enter 키를 누르면 로그인 조건을 검사후 로그인 기능 수행
  const onClickHandler = () => {
    if (realID == id && realPW == pw) {
      alert("로그인에 성공하였습니다.");
      moveNavigate("/main");
    } else {
      alert("아이디 혹은 비밀번호가 일치하지 않습니다.");
    }
  };
  // Enter(onKeyDown 이벤트) 기능
  const activeEnter = (event) => {
    if (event.key === "Enter") onClickHandler();
  };
  // 회원가입 페이지로 이동
  const navigate = useNavigate();
  const goToSignUp = () => {
    navigate("/signup");
  };

  return (
    <div className="login">
      <div className="logo">
        <img className="logo_wecode01" src={logo1} alt="위코드 로고1"></img>
        <img className="logo_wecode02" src={logo2} alt="위코드 로고2"></img>
      </div>
      <div className="main_input">
        <input
          className="input_e-mail"
          type="text"
          placeholder="이메일"
          value={id}
          onChange={saveUserID}
        ></input>
        <input
          className="input_password"
          type="password"
          placeholder="비밀번호"
          value={pw}
          onChange={saveUserPW}
          onKeyDown={activeEnter}
        ></input>
        <div className="button_input">
          <button
            className={isLoginValid ? "login_btn" : "disabled_login_btn"}
            disabled={isLoginValid ? false : true}
            onClick={onClickHandler}
          >
            로그인
          </button>
        </div>
        <div className="button_signup">
          <button className="signup_btn" onClick={goToSignUp}>
            회원 가입
          </button>
          <div className="wall">|</div>
          <button className="password_btn">비밀번호 찾기</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
