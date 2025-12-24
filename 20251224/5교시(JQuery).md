<h3> JQuery </h3>
https://releases.jquery.com/ > Download > CDN > JQuery3x > minified > 링크 복붙

index.html
```
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://avatars.githubusercontent.com/u/240833631?s=200&v=4" rel="icon" type="image/x-icon">
    <title>JS</title>
    <link href="./index.css" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <script>console.log("index.html >> start");</script>
    <script src="./study02.js"></script>
</head>
<body>
  <main>
        <button type="button" onclick="load()">그리기</button>
        <button type="button" onclick="clean()">비우기</button>
        <button type="button" onclick="btnToggle()">만능버튼</button>
    <section>
      <!-- <div class="bg2"></div>
      <div class="bg1"></div>
      <div class="bg2"></div>
      <div class="bg1"></div>
      <div class="bg2"></div>

      <div class="bg1"></div>
      <div class="bg2"></div>
      <div class="bg1"></div>
      <div class="bg2"></div>
      <div class="bg1"></div>

      <div class="bg2"></div>
      <div class="bg1"></div>
      <div class="bg2"></div>
      <div class="bg1"></div>
      <div class="bg2"></div>

      <div class="bg1"></div>
      <div class="bg2"></div>
      <div class="bg1"></div>
      <div class="bg2"></div>
      <div class="bg1"></div>

      <div class="bg2"></div>
      <div class="bg1"></div>
      <div class="bg2"></div>
      <div class="bg1"></div>
      <div class="bg2"></div> -->
    </section>
  </main>
  <script>console.log("index.html >> end");</script>
</body>
</html>
```

study02.js
```
console.log("study02.js");
```
- 라이브 시켰을 때 F12 Console을 넣으면
  - index.html >> start
  - study02.js
  - index.html >> end

JQuery는 함수이기 때문에 다음과 같이 추가함
study02.js
```
$(function(){
console.log("study02.js");
});
```
- 라이브 시켰을 때 F12 Console을 넣으면
  - index.html >> start
  - index.html >> end
  - study02.js

<h2> 설정 </h2>
이제는 **영역**을 나눠보는 작업
영역을 나누는게 지역함수(b)와 같고 바깥에 있는게 전역함수(a)로 볼 수 있음

study02.js
```
function a(){
    console.log("a")
}

$(function(){
console.log("study02.js");
function b() {
    console.log("b()");
}
});
```
<img width="591" height="249" alt="image" src="https://github.com/user-attachments/assets/4c213fdb-c73a-4d32-a2bb-89524642f62f" />

`function fn() {}`: 함수
`() {}`: callback함수 = 익명함수 /* 호출 할 때 쓰임 */
```
$(function(){
console.log("study02.js");
function b() {
    console.log("b()");
}
});
```

`const fn2 = ()  => {}`: arrow 함수
```
$(() => {
console.log("study02.js");
function b() {
    console.log("b()");
}
});
```
- `$(` 이렇게 생기면 JQuery
참조: https://www.w3schools.com/jquery/jquery_syntax.asp

```
$(document).ready(() => {
    console.log("study02.js");
    function b() {
        console.log("b()");
    }
});
```

