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
- 문자열 안에 숫자와 특수기호가 포함 됨
  - 그럼 왜 문자랑 숫자를 따로 관리하느냐?
    - 문자는 연산을 할 수 없기 때문
        - e.g., 5+"1"=51 
    - `==`는 값만 비교, `===`는 자료형 비교
        - e.g., 5 == "5" : ture (같은 값이니까)
        - e.g., 5 === "5" : false (숫자와 문자니까)
    - 특이점: 사칙연산 외 나머지와 몫도 구할 수 있음
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

		// [변수선언]
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
