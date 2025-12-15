#URL <br />
주소 <br />
http: 보안 더 약함, https: 보안 좀 더 강함 <br />
localhost:8080 나의 IP (127.0.0.1) <br />

#URI <br />
파일의 위치까지 데려다줌 (e.g., http://127.0.0.1:5500/workspaces/WEB_STUDY-study/frontend/html/study01/index.html) <br />
*.html이라는 '파일명'까지 우리를 데려다주는 주소이다 <br />

#HTML 할 때
```HTML
<h1 class="h1" style="text-align: end;">
```

```HTML
<style>
h1, h2, h3, h4, h5, h6 { margin: 0; padding: 10px 0; font-weight: normal; }
.h1 { text-align: center !important; }
```
- !important: 라는 코드로 인해 가운데 정렬이 어떤 상황에서도 최우선시 됨.
- 단, 해당 명령어는 남발하면 안되는 우선순위 설정 값

#P태그 <br />
```HTML
</h2>
<p style="padding: 0 30px;">
HTML(하이퍼텍스트 마크업 언어)은 웹페이지의 구조를 만드는 데 사용되는 표준 마크업 언어입니다.
웹사이트의 텍스트, 이미지, 링크 등 콘텐츠의 기본 뼈대를 정의하며, 이 언어를 통해 웹 브라우저가 페이지의 콘텐츠를 표시하고, CSS를 사용해 스타일을 추가하며, 자바스크립트를 이용해 상호작용을 구현합니다. 
</p>
```
- 얘에 바로 style을 준 이유는 p태그가 스타일에 더 없어서 (p태그 이용하는게 이 부분 뿐)

Q. 네모 세개에서 네모가 두개 되었을 때 나머지 하나는 어디로 갔을까?
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="icon" href="../images/logo.png"/>
	<title>Document</title>
    <style>
        * {box-sizing: boarder-box}
        div {width: 100px; height: 100px; border: 1px solid #000; }
        .db {display: inline-block}
        .fl {float: left;}
    </style>
</head>
<body>
    <div class="db fl"></div>
    <div class="db fl"></div>
    <div></div>
</body>
</html>
```
A. 1번 네모 뒤에 숨겨졌다. <br />
51번에서 다음과 같이 바꾸면 사라진 3번째 네모가 보임 <br />
```HTML
<div style="clear: both;">3</div>
```

6) 5번 방식은 구닥다리라서 아래 방법이 나왔음: 오목판 <br />
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="icon" href="../images/logo.png"/>
	<title>Document</title>
<style>
  td {height: 100px;}
</style>
</head>
<body>
    <div class="db fl">1</div>
    <div class="db fl">2</div>
    <div style="clear: both;">3</div>
<table border="1" style="width: 100%;">
    <tr>
      <td colspan="2"></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td rowspan="2"></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </table>
</body>
</html>
```

7) Grid
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr;">
    <div>A P.C.</div>
    <div>B alenciaga</div>
    <div>C hannel</div>
    <div>D ior</div>

  </div>
  <div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr;">
    <div>E </div>
    <div>F endi</div>
    <div>G ivancy</div>
    <div>H ermes</div>

    </div>
    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr;">
    <div>I</div>
    <div>J</div>
    <div>K</div>
    <div>L ouis Vitton</div>

    </div>
    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr;">
    <div>M oncler</div>
    <div>N </div>
    <div>O </div>
    <div>P </div>

    </div>
    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr;">
    <div>Q </div>
    <div>R </div>
    <div>S </div>
    <div>T ods</div>

    </div>
    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr;">
    <div>U</div>
    <div>V</div>
    <div>W</div>
    <div>X</div>

    </div>
    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr;">
    <div>Y</div>
    <div>Z</div>

  </div>
</body>
</html>
```

8) flex 응용 <br />
 ul { display: flex; gap: 5px; flex-direction: row-reverse; <br />
 row-reverse / colomn-reverse 응용 <br />

- display는 list item으로 기재되고 <br />
- div는 block으로 기재되기 때문에 <br />
 적용 유무가 달라짐 <br />

- div 부모한테 주는거랑 자식한테 주는거랑 다름 <br />

- flex는 메뉴 다룰 때 씀 (e.g., 네이버 포털창 밑 메일/카페/블로그 등)\ <br />

9) div 이용해서 체크보드 만들기
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    * {box-sizing: boarder-box;}
    div {width: 100px; height: 100px}
    .body {display: flex;}
    .body div {flex-grow: 1;}
    .bgl {background-color: aqua;}
    .bg2 {background-color: brown;}
  </style>
</head>
 <body>
    <div class="body">
        <div class="bgl"></div>
        <div class="bg2"></div>
        <div class="bgl"></div>
    </div>
    <div class="body">
        <div class="bg2"></div>
        <div class="bgl"></div>
        <div class="bg2"></div>
    </div>
    <div class="body">
        <div class="bgl"></div>
        <div class="bg2"></div>
        <div class="bgl"></div>
    </div>
    <div class="body">
        <div class="bg2"></div>
        <div class="bgl"></div>
        <div class="bg2"></div>
    </div>
</body>
</html>
```

10) 응용
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    * {box-sizing: boarder-box;}
    html, body { margin: 0; padding: 0}
    .body {display: flex; width: 100%; height: calc(100vh / 4);} 
    .body div {flex-grow: 1;}
    .bgl {background-color: creme;}
    .bg2 {background-color: black;}
  </style>
</head>
 <body> 
    <div class="body"> 
        <div class="bgl"></div> 
        <div class="bg2"></div>
        <div class="bgl"></div>
        <div class="bg2"></div>
        <div class="bgl"></div>
        <div class="bg2"></div>
    </div>
    <div class="body">
        <div class="bg2"></div>
        <div class="bgl"></div>
        <div class="bg2"></div>
        <div class="bgl"></div>
        <div class="bg2"></div>
        <div class="bgl"></div>
    </div>
    <div class="body"> 
        <div class="bgl"></div> 
        <div class="bg2"></div>
        <div class="bgl"></div>
        <div class="bg2"></div>
        <div class="bgl"></div>
        <div class="bg2"></div>
    </div>
    <div class="body">
        <div class="bg2"></div>
        <div class="bgl"></div>
        <div class="bg2"></div>
        <div class="bgl"></div>
        <div class="bg2"></div>
        <div class="bgl"></div>
    </div>
</body>
</html>
```
