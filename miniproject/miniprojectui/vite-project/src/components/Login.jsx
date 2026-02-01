import "./Login.css";
import { useState } from "react";
// 경로 주의! LoginForm.jsx가 src/components/login/ 폴더에 있다면 아래처럼:
import LoginForm from "../components/login/LoginForm";

function Login({ goSignup }) {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleLogin = () => {
    if (!id || !pw) {
      alert("아이디와 비밀번호를 입력하세요");
      return;
    }
    alert(`로그인 시도\nID: ${id}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white border shadow-md">
        <h2 className="text-2xl font-bold text-center mb-8">동물보호관리시스템</h2>
        
        {/* 부품(LoginForm)을 가져다 씁니다. 필요한 데이터는 props로 전달! */}
        <LoginForm 
          id={id} 
          setId={setId} 
          pw={pw} 
          setPw={setPw} 
          onLogin={handleLogin} 
        />

        <div className="mt-6 text-center border-t pt-4">
          <button className="text-blue-600 font-medium" onClick={goSignup}>
            회원가입 하러가기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;