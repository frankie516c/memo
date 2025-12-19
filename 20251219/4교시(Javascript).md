Javascript=ECMAScript=ES=Jas<br />
Node.js: browser console용에서 서버용으로 진출=풀스택 가능해짐<br />
                                              Javascript는 백엔드에 사용하는데 한계가 있음<br />
                                              e.g., 큰 회사의 홈페이지 만들기 어려움<br />
                                              그래서 React를 배움<br />
React, Vue, Angular로 SPA 개발 가속<br />
                      Single Page Application (html 하나로 끝)<br />
ES6(2015) 이후: 혁신적 변화 https://www.w3schools.com/js/js_es6.asp<br />

**내 목표**<br />
(6) 데이터 시각화 / 머신러닝<br />
    D3.js, Chart.js, ECharts 등을 통한 실시간 데이터 시각화<br />
    TensorFlow.js → 브라우저 머신러닝 모델 실행 가능<br />

var<br />
let: 바껴도 됨<br />
get: 상수 (값 변경 불가) <- ES6이후 들어옴<br />
```
let a = 10;
const b = 20;

a = 30; // ✅ 가능
b = 40; // ❌ TypeError: const 값 변경 불가
```

(2) 템플릿 문자열 (Template Literals) = 포맷<br />
- 문자열 연결을 + 대신 `로 표현 + 변수 내삽<br />
```
const name = "Tom";
console.log(`Hello, ${name}!`); // Hello, Tom
```

(3) 화살표 함수 (Arrow Function)<br />
- 깔끔한 함수 표현 + this 바인딩 자동<br />
```
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5
```

(4) 구조 분해 할당 (Destructuring)<br />
- 배열/객체를 쉽게 분리<br />
```
const user = { id: 1, name: "Alice" };
const { id, name } = user;

const arr = [10, 20];
const [x, y] = arr;

console.log(id, name, x, y); // 1 Alice 10 20
```

page3 F12 Console<br />
```
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="icon" href="../../images/logo.png"/>
	<title>문자열</title>
	<script>
    /*
    [문자열] ===================================================================
    * 템플릿 리터럴 : 백틱 사용
    : 이중 따옴표나 작은 따옴표 대신 백틱(`)을 사용해서 표현
    : 작은 따옴표와 혼동할 수 있으나, 백틱은 일반적으로 키보드 tab 키 위에 있음
    : 플래이스 홀더를 이용한 ${expression}으로 표현식 사용
    ============================================================================
    */
   var age = 35;
   var name = '홍길동';

   var message = '저는 ' + name + '이고, 나이는 ' + age + '세 입니다.'; <!--난 더하기가 번거롭다-->
   var messageTwo = `저는 ${name}이고, 나이는 ${age}세 입니다.`; <!--백틱 사용 시 괄호. 연산도 가능함.-->
   console.log(message);
   console.log(messageTwo);
  </script>
</head>
<body>
	<h1>개발자 모드 (F12) >> console 탭에서 확인하세요.</h1>
</body>
</html>
```
