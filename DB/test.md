main.py
```
import argparse
from method import empty, userList, userAdd, userDetail, userEdit, userDelete, boardList, boardAdd, boardDetail, boardEdit, boardDelete

DESC = "CLI Program"
commands = [
    {"command":"userList", "arguments": [], "method": userList},
    {"command":"userAdd", "arguments": ["name", "email", "pwd", "gender"], "method": userAdd},
    {"command":"userDetail", "arguments": ["no"], "method": userDetail},
    {"command":"userEdit", "arguments": ["no", "name", "email", "pwd", "gender"], "method": userEdit},
    {"command":"userDelete", "arguments": ["no", "delYn"], "method": userDelete},

    {"command":"boardList", "arguments": [], "method": boardList},
    {"command":"boardAdd", "arguments": ["title", "cont", "user_no"], "method": boardAdd},
    {"command":"boardDetail", "arguments": ["no"], "method": boardDetail},
    {"command":"boardEdit", "arguments": ["no", "title", "cont", "user_no"], "method": boardEdit},
    {"command":"boardDelete", "arguments": ["no", "delYn"], "method": boardDelete},
]

def checkCLI(args):
    for cmd in commands:
        if args.command == cmd["command"]:
            if cmd["method"] == None:
                empty()
            else:
                cmd["method"](args)
            break
    print("종료")

def run():
    parser = argparse.ArgumentParser(description=DESC)
    subparsers = parser.add_subparsers(dest="command")
    for cmd in commands:
        name = cmd["command"]
        arguments = cmd["arguments"]
        add_parser = subparsers.add_parser(name)
        for arg in arguments:
            add_parser.add_argument(arg)

    checkCLI(parser.parse_args())


if __name__ == "__main__":
    run()

```
method.py
```
from db import findOne, findAll, save

def empty():
    print("함수가 정의되어있지 않습니다.")

def userList(args):
    sql = f"""
            SELECT `no`, `name`, `email`, `pwd`, `gender`, `regDate`
            FROM team3.user
            WHERE
                `delYn` = 0
            """
    list = findAll(sql)
    print(f"번호\t이름\t이메일\t비밀번호\t성별\t회원등록일자")
    print("-"*70)
    for row in list:
        print(f"{row["no"]}\t{row["name"]}\t{row["email"]}\t{row["pwd"]}\t{row["gender"]}\t{row["regDate"]}")
        
def userAdd(args):
    print("아무말")
    sql = f"insert into team3.user (`name`, `email`, `pwd`, `gender`) value ('{args.name}', '{args.email}', '{args.pwd}', '{args.gender}')"
    save(sql)
    userList(None)

def userDetail(args):
    sql = f"""
            SELECT `no`, `name`, `email`, `pwd`, `gender`, `delYn`, `regDate`, `modDate`
            FROM team3.user
            WHERE `no` = '{args.no}'
            """
    row = findOne(sql)
    print(f"번호\t이름\t이메일\t비밀번호\t성별\t탈퇴여부\t회원등록일자\t회원정보수정일자")
    print("-"*70)
    if row:
        print(f"{row["no"]}\t{row["name"]}\t{row["email"]}\t{row["pwd"]}\t{row["gender"]}\t{row["delYn"]}\t{row["regDate"]}\t{row["modDate"]}")
    else:
        None

def userEdit(args):
    sql = f"UPDATE team3.user set name='{args.name}', email='{args.email}', pwd='{args.pwd}', gender='{args.gender}' where `no` = {args.no}"
    save(sql)
    userList(args)
    
def userDelete(args):
    sql = f"UPDATE team3.user set delYn='{args.delYn}' WHERE `no` = {args.no}"
    save(sql)
    userList(None)    
    
def boardList(args):
    sql = """
        SELECT b.no, b.title, u.`name`
        FROM team3.board AS b
        INNER JOIN user AS u
        ON (b.user_no = u.`no`)
        WHERE
            b.`delYn` = 0
          """
    list = findAll(sql)
    print(f"번호\t제목\t이름")
    print("-"*70)
    for row in list:
        print(f"{row["no"]}\t{row["title"]}\t{row["name"]}")

def boardAdd(args):
    sql = f"""
        INSERT INTO team3.board (`title`, `cont`, `user_no`) VALUE ('{args.title}', '{args.cont}','{args.user_no}')
          """
    save(sql)
    boardList(None)

def boardDetail(args):
    sql = f"""
        SELECT b.`no`, b.`title`, b.`cont`, u.`name`
        FROM team3.board AS b
        INNER JOIN team3.`user` AS u
        ON (b.user_no = u.`no`)
        WHERE b.`no` = {args.no}
          """    
    row = findOne(sql)
    print(f"제목\t내용\t이름")
    print("-"*70)
    if row :
        print(f"{row["no"]}\t{row["title"]}\t{row["cont"]}\t{row["name"]}")
    else:
        None

def boardEdit(args):
    sql = f"""
        UPDATE team3.board SET
         `title` = '{args.title}',
         `cont` = '{args.cont}'
        WHERE
         `no` = '{args.no}'
         """
    save(sql)
    boardDetail(args)

def boardDelete(args):
    sql = f"UPDATE team3.board SET delYn='{args.delYn}' WHERE `no` = {args.no}"
    save(sql)
    boardList(None)
```
