어제자
```
USE edu;

SELECT first_name, last_name, gender
	FROM edu.employees;

SELECT dept_no, dept_name
	FROM edu.departments;
	
SELECT emp_no, salary
	FROM edu.salaries;

SELECT e.first_name,
		 e.last_name,
		 s.salary
	FROM edu.employees AS e
  INNER JOIN edu.salaries AS s
  	ON (e.emp_no = s.emp_no)
	;
	
SELECT e.emp_no,
		 e.first_name,
		 e.last_name,
		 e.gender,
		 s.salary
	FROM edu.employees AS e
  INNER JOIN edu.salaries AS s
  	ON (e.emp_no = s.emp_no)
  WHERE e.gender = 'F'
	AND s.salary >= 70000
	AND s.to_date = '9999-01-01'
	;
	
SELECT first_name,
		 last_name,
	FROM edu.employees;
SELECT emp_no, COUNT(emp_no) AS cnt
	FROM edu.salaries
	GROUP BY emp_no
	ORDER BY 2 DESC, 1;
```


여성 사원 중 연봉 협상이 가장 많은 사원 추출
```
USE edu;
SELECT e.emp_no, e.first_name, 
		 COUNT(s.emp_no) AS cnt
FROM edu.employees AS e
INNER JOIN edu.salaries AS s
ON (e.emp_no = s.emp_no AND s.to_date != '9999-01-01')
WHERE e.gender = 'F'
GROUP BY e.emp_no, e.first_name
ORDER BY 3 DESC, 1;

SELECT emp_no, COUNT(emp_no) AS cnt
FROM edu.salaries
GROUP BY emp_no
HAVING COUNT(emp_no) >= 18;
```
밑에 부분:<br />
`HAVING COUNT` : 조건을 붙여넣는 것<br />
`LIMIT` : 상위 N개<br />
`OFFSET` : 상위 N개를 제외한거 (단, 0부터 시작)<br />

`LIMIT` 10개를 썼을 때랑 비교해서 `OFFSET`을 5부터 쓰면 6~10위가 나옴:<br />
<img width="1000" height="469" alt="image" src="https://github.com/user-attachments/assets/888ce6d2-38ff-4b43-afde-a69b37f5afb6" />

`SELECT` 연산:<br />
<img width="208" height="216" alt="image" src="https://github.com/user-attachments/assets/9c4aee8a-abf5-420a-8fed-ce1fb1b97008" />

```
SELECT salary FROM edu.salaries
WHERE emp_no = 10001
	AND from_date = '1986-06-26';

	SELECT salary FROM edu.salaries
 WHERE emp_no = 10001            
 	AND from_date = '1987-06-26';
```
이 연봉 두개를 합치려면
```
SELECT (SELECT 60117) + (SELECT 62102) AS 합;
SELECT 60117 + 62102;
```

얘를 subquery로 사용하는 방법
```
SELECT 
(SELECT salary FROM edu.salaries WHERE emp_no = 10001 AND from_date = '1986-06-26'),
(SELECT salary FROM edu.salaries WHERE emp_no = 10001 AND from_date = '1987-06-26')
```
또는
```
SELECT 
(SELECT salary FROM edu.salaries WHERE emp_no = 10001 AND from_date = '1986-06-26') +
(SELECT salary FROM edu.salaries WHERE emp_no = 10001 AND from_date = '1987-06-26') AS y1986_1987
;
```

<img width="824" height="700" alt="image" src="https://github.com/user-attachments/assets/f3645c3c-4a39-4055-ad50-17deec01c846" />

또 추가를 하자면
```
SELECT emp_no, from_date,
	IFNULL((SELECT salary FROM edu.salaries WHERE from_date = '1986-06-26' AND emp_no = s.emp_no), 0) AS y1986,
	(SELECT salary FROM edu.salaries WHERE from_date = '1987-06-26' AND emp_no = s.emp_no) AS 1987
	FROM edu.salaries AS s WHERE s.from_date = '1986-06-26';
```

`BETWEEN A AND B`: 범위 값 지정<br />
`NOT IN`: 범위로 표현할 수 없는 데이터 값에 사용<br />

`LIKE`: 검색기능<br />
`LIKE 'A%'`: A로 시작하는 데이터<br />
<img width="796" height="696" alt="image" src="https://github.com/user-attachments/assets/3c56be30-074f-4779-a227-d77082231b4d" />
`LIKE '_A%'`: A가 두번째로 들어가는 데이터<br />
<img width="769" height="693" alt="image" src="https://github.com/user-attachments/assets/212e2783-c7fd-4bf9-b924-00f4e8020618" />

`NULL`:
```
SELECT * FROM 
(
SELECT NULL AS TXT, '홍길동' AS NAME
UNION ALL 
SELECT '가수인가?' AS TXT, 'IU' AS NAME
) AS T
;
```
<img width="436" height="204" alt="image" src="https://github.com/user-attachments/assets/b6fe25d8-945e-489c-ab92-9e3ec1d4c601" />

`IS NULL`<br />
<img width="424" height="274" alt="image" src="https://github.com/user-attachments/assets/1245c86f-7242-49dc-925f-a71ef103dda8" />

`IS NOT NULL`<br />
<img width="436" height="300" alt="image" src="https://github.com/user-attachments/assets/83bdcd83-4f24-42ec-bf13-eadfa608a3c1" />


==================================<br />
내가 푼 문제들 
```
-- 4번 문제
SELECT emp_no, hire_date, first_name FROM employees
WHERE hire_date >= '1986-01-01';

-- 5번 문제
SELECT emp_no, dept_no, from_date FROM dept_manager
WHERE from_date >= '1990-01-01';

-- 6번 문제
SELECT emp_no, hire_date FROM employees
WHERE hire_date <= '1990-01-01';

-- 7번 문제
SELECT emp_no, gender, hire_date FROM employees
WHERE hire_date >= '1990-01-01';

-- 8번 문제
select emp_no, salary, from_date from salaries
WHERE salary >= 60000
AND from_date = '1990-01-01';

-- 9번 문제
select emp_no, dept_no from dept_manager
WHERE dept_no IN('d001','d002');

-- 10번 문제
select emp_no, title from titles
WHERE title IN('staff', 'engineer');

-- 11번 문제
select emp_no, dept_no from dept_manager
WHERE dept_no != 'd003';

-- 12번 문제
select emp_no, salary from salaries
WHERE salary BETWEEN '60000' AND '70000';

-- 14번 문제
select emp_no, dept_no from dept_manager
WHERE dept_no NOT IN('d001', 'd002');

-- 15번 문제
select emp_no, first_name from employees
WHERE first_name LIKE 'b%';

-- 16번 문제
select emp_no, first_name from employees
WHERE first_name LIKE '_r%';

-- 17번 문제
select emp_no, first_name from employees
WHERE first_name LIKE '%i';

-- 18번 문제
select emp_no, first_name from employees
WHERE first_name NOT LIKE 'b%';
```
==================================<br />

잘못푼거
```
SELECT emp_no, hire_date, first_name
FROM employees
WHERE SUBSTR(hire_date, 1, 4) > '1986';
```

==================================<br />
STUDY 03

<img width="414" height="149" alt="image" src="https://github.com/user-attachments/assets/903376e5-ee50-48a8-b9c7-4e08c5269645" />

<img width="350" height="140" alt="image" src="https://github.com/user-attachments/assets/081120d4-6769-435b-a060-b042cc6ed45a" />

```
SELECT 'one' + 'two' + 'three';select insert('abcdefg', 2, 1, 'wow');

select insert('abcdefg', 2, 0, 'wow');

select insert('abcdefg', 2, 3, '');
```
==================================<br />
문제 풀이
```
-- [문제 1] 부서의 현재 매니저 정보만 조회
SELECT * FROM edu.departments WHERE dept_no = 'd001';
SELECT * FROM edu.dept_manager WHERE dept_no = 'd001';

SELECT d.dept_name, dm.emp_no
FROM edu.dept_manager AS dm
INNER JOIN edu.departments AS d
ON (dm.dept_no = d.dept_no)
WHERE dm.to_date = '9999-01-01'
;

-- [문제 2] 사원의 사번, 이름, 직책 조회 단, 현재 직책만 조회
SELECT * FROM edu.employees WHERE emp_no = 10001;
SELECT * FROM edu.titles WHERE emp_no = 10001;

SELECT e.emp_no, e.first_name, t.title
FROM edu.employees AS e
INNER JOIN edu.titles AS t
ON (e.emp_no = t.emp_no)
WHERE t.to_date = '9999-01-01'
;

-- [문제 3] 1960년 이후 태어난 사원들의 사원 번호, 부서 번호 조회
SELECT * FROM edu.employees WHERE emp_no = '10001';
SELECT * FROM edu.dept_emp WHERE emp_no = '10001';

SELECT d.emp_no, d.dept_no
	FROM edu.employees AS e
	INNER JOIN edu.dept_emp AS d
		ON (e.emp_no = d.emp_no)
	WHERE e.birth_date >= '1960-01-01';
```

-- [문제 2] 사원의 사번, 이름, 직책 조회 단, 현재 직책만 조회
강사님 정답
```
SELECT * FROM edu.employees WHERE emp_no = 10001;
SELECT * FROM edu.titles WHERE emp_no = 10001;

SELECT e.emp_no, e.first_name, t.title
FROM edu.employees AS e
INNER JOIN edu.titles AS t
ON (e.emp_no = t.emp_no AND t.to_date = '9999-01-01')
;
```

다른 이유

**결론부터 말하면**
👉 **INNER JOIN에서는 두 쿼리가 논리적으로 완전히 동일하고 결과도 같다.**
다만 **SQL의 의미적 위치(ON vs WHERE)** 차이를 이해하는 게 핵심이야.

---

## 1️⃣ 네 코드와 강사님 코드의 차이점

### ✅ 네가 작성한 코드

```sql
FROM edu.employees AS e
INNER JOIN edu.titles AS t
ON (e.emp_no = t.emp_no)
WHERE t.to_date = '9999-01-01'
```

👉 의미

1. `emp_no`로 먼저 조인
2. 조인된 결과 중에서
3. **현재 직책(`to_date = '9999-01-01'`)만 필터링**

---

### ✅ 강사님 코드

```sql
FROM edu.employees AS e
INNER JOIN edu.titles AS t
ON (e.emp_no = t.emp_no AND t.to_date = '9999-01-01')
```

👉 의미

1. 조인할 때부터
2. **현재 직책인 데이터만 대상으로 조인**

---

## 2️⃣ 왜 결과가 같을까? (중요 포인트)

### 🔹 INNER JOIN의 특성

INNER JOIN은

> **ON 조건을 만족하는 행만 결과로 남김**

그래서 아래 두 문장은 **논리적으로 동일**해져:

```sql
INNER JOIN t ON A AND B
```

```sql
INNER JOIN t ON A
WHERE B
```

➡️ **INNER JOIN에서는**

* `ON`에 쓰든
* `WHERE`에 쓰든
  👉 결과가 같다

---

## 3️⃣ 그럼 왜 강사님은 ON에 썼을까?

### 📌 이유 1: 의미적으로 더 정확

* `ON` → **조인 조건**
* `WHERE` → **결과 필터링**

👉
`t.to_date = '9999-01-01'` 은
“조인 대상 자체의 조건”이므로
**ON에 쓰는 게 개념적으로 더 자연스럽다**

---

### 📌 이유 2: OUTER JOIN에서는 결과가 달라짐 (핵심!)

지금은 INNER JOIN이라서 같지만
**LEFT JOIN / RIGHT JOIN이면 결과가 달라진다**

#### 예시 (LEFT JOIN)

```sql
-- ❌ WHERE에 쓰면
LEFT JOIN titles t ON e.emp_no = t.emp_no
WHERE t.to_date = '9999-01-01';
```

👉 `titles`가 없는 사원은 **전부 탈락**
→ LEFT JOIN 의미가 사라짐

```sql
-- ✅ ON에 쓰면
LEFT JOIN titles t 
ON e.emp_no = t.emp_no 
AND t.to_date = '9999-01-01';
```

👉 사원은 모두 유지
👉 현재 직책이 없으면 title이 NULL

📌 **이 차이 때문에 실무에서는 ON에 조건을 넣는 습관을 들인다**

---

## 4️⃣ 정리 한 줄 요약 ✨

| 구분          | INNER JOIN | OUTER JOIN |
| ----------- | ---------- | ---------- |
| ON vs WHERE | 결과 동일      | 결과 달라짐     |
| 강사님 방식      | 👍 권장      | 👍 필수      |
| 네 코드        | ❌ 틀리진 않음   | ⚠️ 위험      |

---

## ✅ 결론

* 네 코드 **틀린 거 아님**
* 강사님 코드는 **개념적으로 더 정확하고 확장성 있는 방식**
* **“조인 조건은 ON, 결과 필터는 WHERE”**
  👉 이 원칙만 기억하면 돼

원하면
👉 LEFT JOIN 예제를 데이터 기준으로 직접 비교해서 보여줄 수도 있어!

==================================<br />
문제풀이
```
-- [문제 1] 총 사원(직원) 수
SELECT COUNT(emp_no) AS cnt FROM edu.employees;

-- [문제 2] 직원들 연봉 전체 합, 최고 연봉, 최저 연봉
SELECT SUM(salary) AS 전체합,
			MAX(salary) AS 최고연봉,
			MIN(salary) AS 최저연봉
		FROM edu.salaries;

-- [문제 3] 사원의 성별 수
SELECT gender, COUNT(gender) AS 수
FROM edu.employees
GROUP BY gender;

-- [문제 4] 직책별 직원 수
SELECT title, COUNT(emp_no) AS 수
 FROM titles
 GROUP BY title;

-- [문제 5] d001, d002, d009 각 부서의 인원 수
SELECT dept_no, COUNT(emp_no) AS 수
 FROM edu.dept_emp
 WHERE dept_no
 IN ('d001', 'd002', 'd009')
 GROUP BY dept_no;
```
