이 오류가 나는 이유는 두개의 서버를 동시에 공유하려고 하기 때문
<img width="932" height="509" alt="image" src="https://github.com/user-attachments/assets/67262d2b-87cd-48c9-9322-ee4b5f1de1ba" />

위 오류를 해결하기 위해 backend>main.py `CORSMiddleware` 허용 필요
https://fastapi.tiangolo.com/advanced/middleware/?h=cors

그래서 하나의 서버를 지정을 해준다
```
origins = [
  "http://localhost:5173"
]
```

추가 필요 코드도 넣어주고
```
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```
- *: 전체 허용
- headers: 밑에 캡쳐한 부분 (로컬서버 > 네트워크 > 잘 보면 헤더 있음)

<img width="926" height="720" alt="image" src="https://github.com/user-attachments/assets/682ecbad-236b-409d-915e-68cfc7333327" />

이제 return이 중요해진다.

home.jsx에
```
      .then(res => console.log(res.data))
```
- data 추가

json으로 주고 받을 때 BaseModel 사용함

============================

============================

html -> jsx로 변경
study18>frontend>src>pages>login.jsx
```
import axios from "axios"
import { useState } from "react"

const Login = () => {
    const [email, setEmail] = useState("")
    const [pwd, setPwd] = useState("")

    const submitEvent = e => {
        e.preventDefault()
        console.log(e.target)
    }
    return(
		<div className="container mt-3">
			<h1 className="display-1 text-center">로그인</h1>
			<form onSubmit={submitEvent} >
				<div className="mb-3 mt-3">
					<label htmlFor="email" className="form-label">이메일</label>
					<input type="email" className="form-control" id="email" placeholder="이메일를 입력하세요." name="email" value={email} onChange={e => setEmail(e.target.value)}/>
				</div>
				<div className="mb-3">
					<label htmlFor="pwd" className="form-label">비밀번호</label>
					<input type="password" className="form-control" id="pwd" placeholder="비밀번호를 입력하세요." name="pwd" value={pwd} onChange={e => setPwd(e.target.value)}/>
				</div>
			<div className="d-flex">
				<div className="p-2 flex-fill d-grid">
					<button href="../index.html" className="btn btn-primary">로그인</button>
				</div>
				<div className="p-2 flex-fill d-grid">
					<button href="../index.html" className="btn btn-primary">취소</button>
				</div>
            </div>
			</form>
		</div>
    )
}

export default Login
```

study18>backend>main.py
```
# 한 줄 요약: React에서 오는 로그인 요청을 받아서 세션에 사용자 정보를 저장하고, 이후 요청에서 “로그인 상태”를 확인하는 FastAPI 서버
# 단순 API 모음이 아니라 로그인 상태를 기억하는 서버
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from starlette.middleware.sessions import SessionMiddleware
from pydantic import BaseModel

# React랑 통신할 수 있게 만드는 부분 (CORS)
# 이게 없으면? 브라우저가 요청 자체를 막아버림 / 서버는 잘 돌아가는데 프론트에서 에러 남
origins = [
  "http://localhost:5173"
]

# 로그인 데이터 계약서
# 이건 DB 모델 아니고 "이 API는 이런 형태의 JSON만 받겠다"는 선언
class LoginModel(BaseModel):
  # React에서 보내는 데이터:
  email: str
  pwd: str

# FastAPI는 자동으로: 구조, 타입 검사 및 에러 처리 (프론트 ↔ 백엔드 약속을 코드로 박아둔 것)
app = FastAPI()
# 서버의 기억력
# 세션이 없으면? 서버는 매 요청마다 내가 누군지 모름, 로그인해도 다음 요청에선 다시 남
# 세션이 있으면? 쿠키 기반으로 브라우저와 연결됨
# 지금 구조: 로그인 성공 → 서버 메모리에 저장, 이후 요청 → 같은 브라우저면 확인 가능
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.add_middleware(
    SessionMiddleware, 
    secret_key="your-long-random-secret-key",
    # Optional parameters:
    same_site="none",
    https_only=False,
    max_age=3600, # (1 hour)
)

@app.get("/")
def read_root():
  return {"status": True, "result": ["공유는 해드림"]}

# 엔드포인트 흐름 (이 코드의 핵심) - 로그인 요청
# 여기서 일어나는 일: React가 email / pwd를 보냄 -> FastAPI가 LoginModel로 자동 파싱 -> email을 세션에 저장
@app.post("/login")
def login(loginModel: LoginModel, request: Request):
  # 이 순간: 이 브라우저는 이제 로그인 상태로 됨
  request.session["email"] = loginModel.email
  return {"status": True, "model": loginModel}

# 로그인 상태 확인
# 여기서는 ID/PW 다시 안 받음
@app.get("/user")
def user(request: Request):
  # 대신 서버의 기억을 조회 (있으면 -> 로그인 상태, 없으면 -> 비로그인 상태)
  # 즉, 인증의 기준이 ‘세션’
  email = request.session.get("email")
  if email:
    return {"status": True, "me": email}
  else:
    return {"status": False}
```

============================

============================

**[핵심]**<br />
로그인 성공 시 서버가 쿠키를 발급하고, 브라우저가 그 쿠키를 자동으로 들고 다니면서 “나 로그인했어”를 증명하는 구조<br />

즉, 서버는 기억하지 않고 브라우저가 신분증(쿠키)를 들고 다님<br />

🧱 전체 구조를 5개의 블록으로 보면<br />

1️⃣ React ↔ FastAPI 통신 통로(CORS + credentials)<br />
2️⃣ 로그인 성공 시 서버가 쿠키 발급<br />
3️⃣ 브라우저가 쿠키를 저장<br />
4️⃣ 이후 요청마다 쿠키 자동 동봉<br />
5️⃣ 서버는 쿠키만 보고 사용자 판단<br />

1️⃣ 이 구조의 핵심 전제: “쿠키는 브라우저가 관리한다”<br />
- React(JS)는 쿠키를 직접 만지지 않는다 (생성, 수정, 읽기 X)<br />
- 브라우저 ↔ 서버 사이에서만 오가는 존재<br />

2️⃣ /login의 진짜 역할은 “로그인 검증”이 아님<br />
- “이 사용자를 로그인된 상태로 만들어줄 쿠키를 발급한다”

React ──(email, pwd)──▶ FastAPI
FastAPI ──(Set-Cookie)──▶ Browser

이 순간 브라우저 내부에 저장 되는 것<br />
Cookie:<br />
user = test@test.com

강사님이 만들어준 axios 사용한 login<br />
study18>frontend>src>pages>login.jsx
```
import { useContext } from 'react'
import { AuthContext } from '@hooks/AuthContext.js'
import axios from "axios"

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_FASTAPI_URL || "http://localhost:8000",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
})

const Login = () => {
  const auth = useContext(AuthContext)
  console.log(auth)
  const submitEvent = e => {
    e.preventDefault()

    const params = {
      "email": e.target.email.value,
      "pwd": e.target.pwd.value
    } 
    api.post("/login", params)
    .then(res => {
      console.log(res)
      auth.setIsLogin(res.data.status)
    })
    .catch(err => console.error(err))

  }
  const checkEvent = () => {

    api.get("/user")
    .then(res => console.log(res))
    .catch(err => console.error(err))

  }
  return (
    <>
    
    <div className="container mt-3">
            <h1 className="display-1 text-center">로그인</h1>
            <form onSubmit={submitEvent}>
                <div className="mb-3 mt-3">
                    <label htmlFor="email" className="form-label">이메일</label>
                    <input type="email" className="form-control" id="email" placeholder="이메일를 입력하세요." name="email" required={true} autoComplete="off" />
                </div>
                <div className="mb-3">
                    <label htmlFor="pwd" className="form-label">비밀번호</label>
                    <input type="password" className="form-control" id="pwd" placeholder="비밀번호를 입력하세요." name="pwd" required={true} autoComplete="off" />
                </div>
        <div className="d-flex">
          <div className="p-2 flex-fill d-grid">
            <button type="submit" className="btn btn-primary">로그인</button>
          </div>
          <div className="p-2 flex-fill d-grid">
            <button type="button" className="btn btn-primary" onClick={checkEvent}>취소</button>
          </div>
        </div>
            </form>
        </div>
    </>
  )
}

export default Login
```

강사님이 만들어준 axios 사용한 .env<br />
study18>frontend>.env.jsx
```
VITE_APP_FASTAPI_URL = "http://localhost:8000"
```

강사님이 만들어준 axios 사용한 login
study18>backend>main.py
```
from fastapi import FastAPI, Request, Response
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

origins = [
  "http://localhost:5173"
]

class LoginModel(BaseModel):
  email: str
  pwd: str

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
  return {"status": True, "result": ["공유는 해드림"]}

@app.post("/login")
def login(loginModel: LoginModel, response: Response):
  response.set_cookie(
    key="user",
    value=loginModel.email,
    max_age=60 * 60,        # 1시간 (초)
    expires=60 * 60,        # max_age와 유사 (초)
    path="/",
    domain="localhost",
    secure=True,            # HTTPS에서만 전송
    httponly=True,          # JS 접근 차단 (⭐ 보안 중요)
    samesite="lax",         # 'lax' | 'strict' | 'none'
  )
  return {"status": True, "model": loginModel}

@app.get("/user")
def user(request: Request):
  email = request.cookies.get("user")
  if email:
    return {"status": True, "me": email}
  else:
    return {"status": False}
```
