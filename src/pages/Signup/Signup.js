import React from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.scss";
import backButton from "./backButton.png";
import { useState } from "react";

const Signup = () => {
  // Back 버튼(login 화면으로 돌아감)
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };
  // 이메일(ID) : onChange 이벤트
  const [email, setEmail] = useState("");
  const saveEmailID = (event) => {
    setEmail(event.target.value);
  };
  // 비밀번호(PW) : onChange 이벤트
  const [password, setPassword] = useState("");
  const savePW = (event) => {
    setPassword(event.target.value);
  };
  // 비밀번호 확인(PW) : onChange 이벤트 -> value, onChange 구현해야함
  const [password_confir, setPWconfir] = useState("");
  const savePWConfir = (event) => {
    setPWconfir(event.target.value);
  };
  // 닉네임 : onChange 이벤트
  const [nickname, setNickName] = useState("");
  const saveNickName = (event) => {
    setNickName(event.target.value);
  };
  // 휴대폰 번호 : onChange 이벤트
  const [phonenumber, setPhoneNumber] = useState("");
  const savePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };
  return (
    <div className="signup">
      <div className="main_frame">
        <button className="back_button" onClick={goToLogin}>
          뒤로
        </button>
        <img
          className="back_button_image"
          src={backButton}
          alt="뒤로 버튼"
        ></img>
        <p className="new_member_font">회원가입</p>
      </div>
      <div className="information_frame">
        <p className="info_text">기본 정보</p>
        <p className="required_text">필수 사항</p>
      </div>
      <div className="information_input_frame">
        <input
          className="mail_input"
          type="text"
          placeholder="이메일"
          value={email}
          onChange={saveEmailID}
        />
        <input
          className="password_input"
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={savePW}
        />
        <input
          className="password_confirmation_input"
          type="password"
          placeholder="비밀번호 확인"
          value={password_confir}
          onChange={savePWConfir}
        />
      </div>
      <div className="nickname_frame">
        <p className="nickname_text">닉네임과 프로필 이미지</p>
        <p className="selected_text01">선택 사항</p>
      </div>
      <div className="nickname_input_frame">
        <input
          className="nickname_input"
          type="text"
          placeholder="닉네임"
          value={nickname}
          onChange={saveNickName}
        />
      </div>
      <div className="phone_number_frame">
        <p className="phonenumber_text">전화번호</p>
        <p className="selected_text02">선택 사항</p>
      </div>
      <div className="phonenumber_select_frame">
        <select className="phonenumber_select">
          <option value="number_010">010</option>
          <option value="number_011">011</option>
          <option value="number_016">016</option>
          <option value="number_017">017</option>
          <option value="number_018">018</option>
        </select>
        <input
          className="phonenumber"
          type="text"
          maxLength={10}
          placeholder="휴대폰 번호를 입력해주세요"
          value={phonenumber}
          onChange={savePhoneNumber}
        />
      </div>
      <div className="birthday_frame">
        <p className="birthday_text">생일</p>
        <p className="selected_text03">선택 사항</p>
      </div>
      <div className="birthday_select_frame">
        <select className="birthday_year_select">
          <option value="1990년">1990년</option>
          <option value="1991년">1991년</option>
          <option value="1992년">1992년</option>
          <option value="1993년">1993년</option>
          <option value="1994년">1994년</option>
          <option value="1995년">1995년</option>
          <option value="1996년">1996년</option>
          <option value="1997년">1997년</option>
          <option value="1998년">1998년</option>
          <option value="1999년">1999년</option>
        </select>
        <select className="birthday_month_select">
          <option value="1월">1월</option>
          <option value="2월">2월</option>
          <option value="3월">3월</option>
          <option value="4월">4월</option>
          <option value="5월">5월</option>
          <option value="6월">6월</option>
          <option value="7월">7월</option>
          <option value="8월">8월</option>
          <option value="9월">9월</option>
          <option value="10월">10월</option>
          <option value="11월">11월</option>
          <option value="12월">12월</option>
        </select>
        <select className="birthday_day_select">
          <option value="1일">1일</option>
          <option value="2일">2일</option>
          <option value="3일">3일</option>
          <option value="4일">4일</option>
          <option value="5일">5일</option>
          <option value="6일">6일</option>
          <option value="7일">7일</option>
          <option value="8일">8일</option>
          <option value="9일">9일</option>
          <option value="10일">10일</option>
        </select>
      </div>
      <div className="new_member_button_frame">
        <button className="member_button">회원 가입</button>
      </div>
    </div>
  );
};

export default Signup;
