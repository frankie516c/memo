참고 페이지
https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_btoa
https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_atob
https://www.npmjs.com/package/react-cookie

main.py
```
from fastapi import FastAPI, Request, HTTPException
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
```

.env
```
MARIADB_USER=cyj
MARIADB_PASSWORD=cyj
MARIADB_HOST=db.quadecologics.cloud
MARIADB_DATABASE=edu
MARIADB_PORT=5053
REACT_URL=http://localhost:5174
```
