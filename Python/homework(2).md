backend>
main.py
```
from fastapi import FastAPI, Request, HTTPException, Cookie
from fastapi.middleware.cors import CORSMiddleware
from settings import settings
import urllib.parse
import base64

def base64Decode(data):
  encoded = urllib.parse.unquote(data)
  return base64.b64decode(encoded).decode("utf-8")

origins = [ settings.react_url ]

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
  return { "status": True }

@app.post("/board")
def board(request: Request):
    boardNo = request.cookies.get("boardNo")

    if boardNo is None:
        raise HTTPException(
            status_code=401,
            detail="boardNo cookie not found"
        )

    decoded = base64Decode(boardNo)
    return {"boardNo": int(decoded)}
def base64Decode(data: str):
    if not data:
        return None
    encoded = urllib.parse.unquote(data)
    return base64.b64decode(encoded).decode("utf-8")

@app.get("/theme-check")
def theme_check(theme: str = Cookie("light")):
    return {"theme": theme}
```

frontend>src>pages>
App.jsx
```
import { Routes, Route } from "react-router";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import '@styles/App.css'
import NotFound from '@pages/NotFound.jsx'
import Nav from '@pages/Nav.jsx'
import Home from '@pages/Home.jsx'
import Login from '@pages/Login.jsx'
import SignUp from '@pages/SignUp.jsx'
import UserView from '@pages/UserView.jsx'
import UserEdit from '@pages/UserEdit.jsx'
import BoardAdd from '@pages/BoardAdd.jsx'
import BoardView from '@pages/BoardView.jsx'
import BoardEdit from '@pages/BoardEdit.jsx'

function App() {
   const [cookies] = useCookies(["theme"]);
  //  console.log("theme cookie:", cookies.theme);
    useEffect(() => {
      if (cookies.theme === "dark") {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    }, [cookies.theme]);

   const paths = [
    {path: "/", element: <Home />},
    {path: "/login", element: <Login />},
    {path: "/signup", element: <SignUp />},
    {path: "/userview", element: <UserView />},
    {path: "/useredit", element: <UserEdit />},
    {path: "/boardadd", element: <BoardAdd />},
    {path: "/boardview/:no", element: <BoardView />},
    {path: "/boardedit/:no", element: <BoardEdit />},
    {path: "*", element: <NotFound />},
  ]
  return (
    <>
      <Nav />
      <Routes>
        { paths?.map((v, i) => <Route key={i} path={v.path} element={v.element} />) }
      </Routes>
    </>
  )
}

export default App
```

frontend>src>pages>
Home.jsx
```
import { useState, useEffect } from 'react'
import { api } from '@utils/network.js'
import { useNavigate } from "react-router";
import { useAuth } from '@hooks/AuthProvider.jsx'
import { useCookies } from 'react-cookie'

const Pagination = ({ total, page, pagingEvent }) => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center mt-4">
        <li className="page-item">
          <button className="page-link" aria-label="Previous" onClick={()=>pagingEvent(page - 1)} disabled={page === 1}>
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>
        {
          Array.from( { length: total } )?.map((_,i) => {
            const index = (i + 1)
            return (
              <li className="page-item cursor-pointer" key={i}>
                <button className={page === index ? "page-link active" : "page-link"} onClick={()=>pagingEvent(index)} disabled={page === index}>{index}</button>
              </li>
            )
          })
        }
        <li className="page-item">
          <button className="page-link" aria-label="Next" onClick={()=>pagingEvent(page + 1)} disabled={page === total}>
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  )
}

const Home = () => {
  const [list, setList] = useState([])
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [search, setSearch] = useState("")
  const [cookies, setCookie, removeCookie] = useCookies(['theme', 'boardNo'])
  const [theme, setTheme] = useState(()=>cookies.theme || "light")
  const navigate = useNavigate()
  const { checkAuth } = useAuth()
  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark"
    setTheme(nextTheme)
    setCookie("theme", nextTheme, { path: "/", maxAge: 3600 })
  }    
  const boardView = no => {
    setCookie("boardNo", window.btoa(no), { path: "/" })
    if (checkAuth()) navigate(`/boardview/${no}`)
  }
  const searchEvent = e => {
    e.preventDefault()
    //getData(1, search)
    setPage(1)
    setSearch("")
  }
  const pagingEvent = index => {
    setPage(index)
    //getData(index, search)
  }
  const boardAdd = () => {
    if(checkAuth()) navigate('/boardadd')
  }

  const getData = (i, q) => {
    api.get(`/board?page=${i}&search=${q}`)
    .then(res => {
      if(res?.data?.status) {
        setList(res?.data?.result)
        setTotal(res?.data?.pagination?.total)
      }
    })
    .catch(err => console.error(err))
    .finally(()=>console.log("완료"))
  }

useEffect(() => {
  if (theme === "dark") {
    document.body.classList.add("dark")
  } else {
    document.body.classList.remove("dark")
  }

  setCookie("theme", theme, { path: "/", maxAge: 3600 })
}, [theme])

  //   if (cookies.theme === "dark") {
  //     // setCookie("theme", "light", { path: "/" }, maxAge = 60*60);
  //     setCookie('theme', 'light', {
  //     path: '/',          // 모든 페이지에서 접근 가능
  //     secure: false,       // https에서만 사용 (개발 환경에서는 false로 설정 필요할 수 있음)
  //     maxAge: 3600,       // 쿠키 유효 시간 (초 단위, 여기서는 1시간)
  //     // sameSite: 'strict', // 필요에 따라 설정
  //   });
  //     document.body.classList.remove("dark");
  //   } else {
  //     // setCookie("theme", "dark", { path: "/" }, maxAge = 60*60);
  //     setCookie('theme', 'dark', {
  //     path: '/',          // 모든 페이지에서 접근 가능
  //     secure: false,       // https에서만 사용 (개발 환경에서는 false로 설정 필요할 수 있음)
  //     maxAge: 3600,       // 쿠키 유효 시간 (초 단위, 여기서는 1시간)
  //     // sameSite: 'strict', // 필요에 따라 설정
  //   });
  //     document.body.classList.add("dark");
  //   }
    //getData(page, search)

  useEffect(() => {
    const arr1 = [
      {"no":1, "title":"샘플을 만들었어요", "user":"이나라"},
      {"no":2, "title":"샘플을 만들어 영원히", "user":"남영준"},
      {"no":3, "title":"여름이었다...☆", "user":"조윤주"},
      {"no":4, "title":"이것 뭐에요?", "user":"이채훈"}
    ]
    const arr2 = { "total": 5, "size": 5 }
    setList(arr1)
    setTotal(arr2.total)
  }, [])

  return (
    <div className="container mt-3">
			<h1 className="display-1 text-center">게시판</h1>
			<div className="d-flex justify-content-between align-items-center mt-4">
				<div className="btn-group">
					<button type='button' className="btn btn-primary" onClick={boardAdd}>게시글 작성</button>
          <button className="btn btn-secondary" onClick={toggleTheme}> {theme === "dark" ? "☀ Light" : "🌙 Dark"} </button>
				</div>
				<form className="d-flex" style={{"maxWidth" : "300px"}} onSubmit={searchEvent}>
					<input className="form-control me-2" type="search" value={search} onChange={e=>setSearch(e.target.value)} placeholder="검색어를 입력하세요" />
					<button className="btn btn-outline-dark" type="submit">Search</button>
				</form>
			</div>
			<table className="table table-hover mt-3 text-center">
				<thead className="table-dark">
					<tr>
						<th>no</th>
						<th>게시글</th>
						<th>작성자</th>
					</tr>
				</thead>
				<tbody>
          {
            list?.map((v, i) => {
              return (
                <tr className="cursor-pointer" key={i} onClick={()=>boardView(v.no)}>
                  <td>{v.no}</td>
                  <td>{v.title}</td>
                  <td>{v.user}</td>
                </tr>
              )
            })
          }
				</tbody>
			</table>
      <Pagination total={total} page={page} pagingEvent={pagingEvent} />
		</div>
  )
}

export default Home
```

frontend>src>styles>
index.css
```
/* 기본 (라이트 모드) */
body {
  background-color: #ffffff;
  color: #111111;
  transition: background-color 0.2s ease, color 0.2s ease;
}

/* 다크 모드 */
body.dark {
  background-color: #121212;
  color: #eaeaea;
}

/* 예시: 카드, 박스 */
.card {
  background-color: #f5f5f5;
  padding: 16px;
  border-radius: 8px;
}

body.dark .card {
  background-color: #1e1e1e;
}
```

frontend>src
main.jsx
```
import '@styles/index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@styles/index.css'
import App from '@pages/App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter } from "react-router";
import AuthProvider from '@hooks/AuthProvider.jsx'
import { CookiesProvider } from 'react-cookie'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CookiesProvider defaultSetOptions={{ path: '/' }}>
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </CookiesProvider>
  </StrictMode>,
)
```
