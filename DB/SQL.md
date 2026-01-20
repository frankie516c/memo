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
