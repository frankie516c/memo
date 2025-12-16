내가 캐치하지 못한 것 (디테일이 떨어짐)
- 폰트
- 보더
- lemon 비활성화
- Input 이랑 Name이랑 열을 맞춰야함

#iframe
- 블로그에 유투브나 지도나 웹페이지를 화면으로 보이게 가져다주는거

#선택자
```html
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="icon" href="../../images/logo.png"/>
	<title>선택자 사용법 1</title>
	<style>
		/* 선택자 : 태그, 아이디, 클래스 */
		span {
			color:#0f0; 
		}
		span {
			color:#f00; 
		}
		div>span {
			color:#999; 
		}
		div.first-class>span{
			background-color: #ff0; 
		}
		#ex span{
			background-color: aqua; 
		}
		h1, h2 {
			border-style: solid;
		}
	</style>
</head>
<body>
	<div id="ex">
    <h1>Heading 1</h1>
    <h2>Heading 2-1</h2>
    <div class="first-class">
      <span>span tag1</span>
      <p>
        <span>span tag2</span>
      </p>
    </div>
    <span>span tag3</span>
  </div>
  
  <div class="second-class">
    <h2>Heading 2-2</h2>
    <span>span tag4</span>
  </div>
  
  <span>span tag5</span>
</body>
</html>
```
- `color:#0f0;`: 얘가 먼저 나왔지만 적용이 되지 않는 이유는
- `color:#f00;`: 얘가 뒤에 나와서 superior하게 적용되기 때문 마지막꺼가 적용됨
- `background-color: #ff0;`: 동일한 이유로 얘가 적용이 되지 않음
- `background-color: aqua;`: 동일한 이유로 얘가 적용이 됨 덮어씌어짐


#선택자 study06_page2
```html
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="icon" href="../../images/logo.png"/>
	<title>선택자 사용법 2</title>
	<style>
		/* 
		=============================================
		= 전체 일치
		^= 시작하는
		$= 끝나는
		*= 일부 문자 (단어 중 일부 문자)
		~= 단어 일치
		=============================================
		*/
		a[href^="https"] { 
			background-color: purple;
			color:#fff; 
		}
		a[href$="net/"]{
			color:red;
		}
		li[title*="ip"]{ 
			color:aqua;
		}
	</style>
</head>
<body>
	<ul>
    <li><a href="https://www.daum.net/">daum</a></li>
    <li><a href="https://www.naver.com/">naver</a></li>
    <li><a href="mailto:help@host.co.kr" title="mail">help</a></li>
    <li title="lorem ipsum">Lorem ipsum dolor sit amet.</li>
    <li title="lorem">Lorem ipsum dolor sit amet.</li>
  </ul>
</body>
</html>
```
- `a[href^="https"]`: 밑에 보면 해당 프로토콜에만 적용
- `color:#fff;`: 얘가 적용되는 이유는 밑에 href$ 때문
- `a[href$="net/"]`: a태그 사용하고 주소 끝나는 $를 이용해 폰트 색이 적용 됨
- `li[title*="ip"]`: ip라는 글자가 들어가는거만 아쿠아로 적용

#선택자사용 study06_page4
```html
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="icon" href="../../images/logo.png"/>
	<title>선택자 사용법 4</title>
	<style>
		/* 첫 번째 단락에 마우스를 올렸을 때 */
		p:hover, div:hover{ 
			background-color: aqua;
		}
	</style>
</head>
<body>
	<h1>pseudo-class</h1>
  <p>첫 번째 단락. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, eum? Quasi, labore provident nulla molestias ratione eligendi iusto, sit blanditiis nihil, hic impedit optio architecto repellendus voluptate temporibus nobis porro.</p>
  <div>두 번째 단락. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, delectus tenetur ut magni et saepe beatae totam eligendi, explicabo autem excepturi nesciunt maxime assumenda enim? Ad aut sint impedit quas.</div>
</body>
</html>
```
- `p:hover, div:hover`: 쉼표를 이용해서 div도 할 수 있고 아래 div를 p로 바꿔도 됨

#선택자사용 study06_page7
```html
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="icon" href="../../images/logo.png"/>
	<title>선택자 사용법 7</title>
	<style>
		div::selection { 
			background-color: gray;
			color: blue;
		}
	</style>
</head>
<body>
	<h1>pseudo-element</h1>
  <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius repudiandae maiores ab aliquid excepturi rem, suscipit in dolorum vitae eveniet totam autem obcaecati deserunt id natus architecto quas ut sapiente?</div>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque officia ut ratione laboriosam atque, est odit earum aliquam doloribus quasi! Excepturi, deserunt! Beatae fugiat impedit neque dolorum, a assumenda facilis!</p>
</body>
</html>
```
- `div::selection`: drag했을 때 효과
