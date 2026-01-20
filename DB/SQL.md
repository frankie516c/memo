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
