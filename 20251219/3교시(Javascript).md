루트: html>study13

script 태그 사용법
```
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="icon" href="../../images/logo.png"/>
	<title>script 태그 사용법</title>
	<script> <!--스타일과 비슷함 여기에 내용 넣음-->
    // 한 줄 주석
    /*
    여러 줄 주석
    */
    var num = 100;  
    document.write("안녕~"); <!--입력한 순서-->
    document.write(num);
    document.write("종료");
	</script>
	<script src="js/test.js"></script> <!--링크와 비슷함 F12 눌렀을 때 네트워크에 해당 .js가 뜨는지 확인해야 됨-->
</head>
<body> <!--body에 내용이 없고 두 번째 스크립트에 내용이 있음-->
</body> <!--내용 확인 방법 F12 > source > js 폴더 > test.js 에서 확인-->
</html>
```

- 기본타입, 참조타입: Python, Java 등 사용
- 기본타입에 나열된 것들과 순서는 상관 없음
- *문자열* 안에 *숫자와 특수기호가 포함* 됨<br />
  Q. 그럼 왜 문자랑 숫자를 *따로 관리*하느냐?<br />
  A. 문자는 연산을 할 수 없기 때문<br />
      e.g., 5+"1"=51 <br />
- `==`는 값만 비교, `===`는 자료형 비교<br />
      e.g., 5 == "5" : true (같은 값이니까)<br />
      e.g., 5 === "5" : false (숫자와 문자니까)<br />
    - 특이점: 사칙연산 외 *나머지*와 *몫*도 구할 수 있음<br />
- 변수 선언
  - typeof num === "boolean": true (자료형을 비교하는 것)<br />
    ***typeof***란? ***자료형을 문자열로 반환하는 연산자***
```
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="icon" href="../../images/logo.png"/>
	<title>자료형</title>
	<script>
		/*
		[기본 타입] Primitive Type
		- number    : 숫자(정수, 실수) <!--100이 숫자가 아닌 문자로 쓰임 왜? 숫자가 문자 안에 포함이 되기 때문에. 집합이라고 생각하면 됨-->
		- bigint    : 정수 -(2의 53승 -1) ~ 2의 53승-1
		- string    : 문자열 <!--숫자랑 특수기호가 포함 됨-->
		- boolean   : 논리값(true, false)
		- undefined : 초기화되지 않은 상태, 변수 초기화에 사용 <!--함수에서 출력 할 값이 없을 경우 또는 대상이 없는 경우-->
		- null      : 객체 변수 초기화 사용
		- NaN       : Not a Number <!--숫자가 들어가야 되는데 비어있다. 0 넣어줘야함-->

		[참조 타입] 참조형, Reference Type <!--지금은 몰라도 돼-->
		- array
		- function
		- ...
		*/

		// [변수선언] <!--변할 수 있는 수-->
		// var 변수명;
		var num;
		document.write('num >>' +num);
		document.write('<br>');
		document.write('num type >>', typeof num);
		document.write('<br>');
		
		num = 100;
		document.write('num >>' +num + '<br>');
		document.write('num type >>', typeof num);
		document.write('<br>');
		
		num = 5n;
		document.write('num >>' +num);
		document.write('<br>');
		document.write('num type >>', typeof num);
		document.write('<br>');
		
		num = 2.2;
		document.write('num >>' +num);
		document.write('<br>');
		document.write('num type >>', typeof num);
		document.write('<br>');
		
		num = '안녕';
		document.write('num >>' +num);
		document.write('<br>');
		document.write('num type >>', typeof num);
		document.write('<br>');
		
		num = true;
		document.write('num >>' +num);
		document.write('<br>');
		document.write('num type >>', typeof num);
		document.write('<br>');
	</script>
</head>
<body>
</body>
</html>
```

F12 창 console 입력 실험
<img width="980" height="1040" alt="캡처" src="https://github.com/user-attachments/assets/f04d1428-6fa3-495b-8190-8eab8eac057b" />

20251222<br />
헷갈린거 정리<br />
위 코드는 같은 변수에 서로 다른 값이 들어갈 때 javascript가 그 값을 어떤 자료형으로 판단하는지를 보여주는 예제라서 스크린캡쳐에 나온 값은 javascript의 자료형 판단 규칙 때문에 나오는 것.<br />
**자바스크립트에서는 변수의 타입이 고정되지 않고, 값이 바뀔 때마다 typeof 결과도 함께 바뀐다.**<br />
<br />
Javascript의 핵심 개념 2가지<br />
1. 동적 타입의 언어<br />
- 변수에 자료형을 미리 정하지 않음<br />
- "값이 무엇이냐"에 따라 자동으로 결정 됨<br />
e.g., `var num;`에서는 아직 `num`이 어떤 타입인지 정해지지 않음<br />

2. `typeof`는 연산자<br />
- `typeof`를 사용해서 `typeof 값`을 입력하면 **해당 값의 자료형을 문자열로 반환**함<br />
