
<img width="734" height="642" alt="image" src="https://github.com/user-attachments/assets/c929c79d-3702-4924-b353-63d63f99a35b" />

- url을 바꿔줌에 따라 F12 콘솔에서 보이는 값이랑 터미널에서 보이는 값이 같다

<img width="773" height="671" alt="image" src="https://github.com/user-attachments/assets/920500bb-4957-4db3-94f3-142b9be8cf37" />

main.js
```
function text() {
    let html = "";

    html += "<h1>html 입니다.</h1>";
    html += "<p>node service ...</p>";

    return html;
}

export function controller(req) {
    let html = "";
    const index = req.url.lastIndexOf("?");
    const url = req.url.substring(0, index);
    if(url === "/a") {
        const parameters = new URL(req.url, `http://${req.headers.host}`);
        for(const [key, value] of parameters.searchParams){
          console.log(`${key} : ${value}`);
          html += `<h2>${value}</h2>`;
        }
        //   html = "<h2>A 주소 화면입니다. </h2>";
    } else if(url === "/b") {
        html = "<h2>B 주소 화면입니다. </h2>";
    } else {
        html = text();
    }

    return html;
}
```

터미널
```
일괄 작업을 끝내시겠습니까 (Y/N)?
^C
D:\IDE\workspaces\study\20251226>npm run start

> 20251226@1.0.0 start
> node index.js

Listening on 127.0.0.1:3000
name : 홍길동
name : 홍길동
age : 16
name : 이순신
age : 100
```
