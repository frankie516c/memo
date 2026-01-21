<h3>SELECT</h3>

main.py
```
import mariadb
from dotenv import load_dotenv
load_dotenv()
import os

def getConn():
    try:
        return mariadb.connect(
            user = os.getenv('USER'),
            password=os.getenv('PASSWORD'),
            host=os.getenv('HOST'),
            port=int(os.getenv('PORT')),
            database=os.getenv('DATABASE')
        )
    except mariadb.Error as e:
        print(f"MariaDB Error : {e}")
        return None
    
def findOne(sql):
    result = None
    try:
        conn = getConn()
        if conn: 
            cur = conn.cursor() 
            cur.execute(sql)
            row = cur.fetchone()
            columns = [desc[0] for desc in cur.description] 
            cur.close()
            conn.close()
            result = dict(zip(columns, row)) if row else None
    except mariadb.Error as e:
        print(f"MariaDB Error : {e}")
    return result

def findAll(sql):
    result = []
    try:
        conn = getConn()
        if conn: 
            cur = conn.cursor() 
            cur.execute(sql)
            rows = cur.fetchall()
            columns = [desc[0] for desc in cur.description] 
            cur.close()
            conn.close()
            return [dict(zip(columns, row)) for row in rows]
    except mariadb.Error as e:
        print(f"MariaDB Error : {e}")
    return result
    
deptNo1 = "d001"
deptNo2 = "d002"
deptNo3 = "d009"
arr = [deptNo1, deptNo2, deptNo3]
sql = f"""
    SELECT dept_no, COUNT(emp_no) AS 수
        FROM edu.dept_emp
    WHERE dept_no IN {tuple(arr)}
    GROUP BY dept_no
    ORDER BY 2 DESC
      """
print(sql)
# print( findOne(sql))
print( findAll(sql))
```

<img width="741" height="210" alt="image" src="https://github.com/user-attachments/assets/a59c3b23-c111-4baf-b225-5867b434f2e2" />


SQL
```
SELECT dept_no, COUNT(emp_no) AS 수
   FROM edu.dept_emp
WHERE dept_no
IN('{deptNo1}', '{deptNo2}', '{deptNo3}')
GROUP BY dept_no
ORDER BY 2 DESC
```

<h3>INSERT</h3>

```
SELECT * FROM edu.test;

INSERT INTO edu.test
	(`name`, `regDate`)
VALUE 
	('김채원', NOW());

COMMIT;

UPDATE edu.test SET `name` = '졸리고 배고파' WHERE `no` = 8;

ROLLBACK;

```

<img width="446" height="191" alt="image" src="https://github.com/user-attachments/assets/62bc9740-e98f-4544-955e-f5672b8c4fa6" />
