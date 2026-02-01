// import "./Login.css";
// import { useState } from "react";

// function Signup({ goLogin }) {
//   const [id, setId] = useState("");
//   const [pw, setPw] = useState("");
//   const [pw2, setPw2] = useState("");

//   const handleSignup = () => {
//     if (!id || !pw || !pw2) {
//       alert("모든 항목을 입력하세요");
//       return;
//     }

//     if (pw !== pw2) {
//       alert("비밀번호가 일치하지 않습니다");
//       return;
//     }

//     alert("회원가입 완료 (가짜)");
//     goLogin();
//   };

//   return (
//     <div className="login-wrapper">
//       <h2>회원가입</h2>

//       <input
//         placeholder="아이디"
//         value={id}
//         onChange={(e) => setId(e.target.value)}
//       />

//       <input
//         type="password"
//         placeholder="비밀번호"
//         value={pw}
//         onChange={(e) => setPw(e.target.value)}
//       />

//       <input
//         type="password"
//         placeholder="비밀번호 확인"
//         value={pw2}
//         onChange={(e) => setPw2(e.target.value)}
//       />

//       <button onClick={handleSignup}>회원가입</button>

//       <div className="login-links">
//         <button className="link-btn" onClick={goLogin}>
//           로그인으로 돌아가기
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Signup;

import { useState } from "react";
import "../components/Login.css"; // 기존 CSS 연결

function Signup({ goLogin }) {
  const [form, setForm] = useState({
    name: "",
    id: "",
    password: "",
    confirmPw: "",
    phone: "",
    email: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { name, id, password, confirmPw, phone, email } = form;

    if (!name || !id || !password || !confirmPw || !phone || !email) {
      alert("모든 항목을 입력하세요");
      return;
    }
    if (password !== confirmPw) {
      alert("비밀번호가 일치하지 않습니다");
      return;
    }

    alert("회원가입 성공! (예시)");
    goLogin();
  };

  return (
    <div className="login-wrapper">
      <h2>회원가입</h2>
      <p>필수 정보를 입력해주세요</p>

      <input
        type="text"
        name="name"
        placeholder="이름"
        value={form.name}
        onChange={handleChange}
      />

      <input
        type="text"
        name="id"
        placeholder="아이디"
        value={form.id}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="비밀번호"
        value={form.password}
        onChange={handleChange}
      />

      <input
        type="password"
        name="confirmPw"
        placeholder="비밀번호 확인"
        value={form.confirmPw}
        onChange={handleChange}
      />

      <input
        type="text"
        name="phone"
        placeholder="전화번호"
        value={form.phone}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="이메일"
        value={form.email}
        onChange={handleChange}
      />

      <button onClick={handleSubmit}>가입하기</button>

      <div className="login-links">
        <button className="link-btn" onClick={goLogin}>
          로그인으로 돌아가기
        </button>
      </div>
    </div>
  );
}

export default Signup;
