import React from 'react';

// 딱 입력창 뭉치만 남깁니다.
const LoginForm = ({ id, setId, pw, setPw, onLogin }) => {
  return (
    <div className="login-form-container"> {/* CSS 클래스명은 본인 설정에 맞게 */}
      <input
        placeholder="아이디"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className="w-full p-3 border mb-2"
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={pw}
        onChange={(e) => setPw(e.target.value)}
        className="w-full p-3 border mb-4"
      />
      <button 
        onClick={onLogin}
        className="w-full bg-blue-600 text-white py-3 font-bold"
      >
        로그인
      </button>
    </div>
  );
};

export default LoginForm;