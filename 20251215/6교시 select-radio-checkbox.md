```html
<!doctype html>
<html lang="ko">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Document</title>
</head>
<body>
    <form>
        <select name="txt">
            <option value="0">선택하세요</option>
            <option value="1">지구</option>
            <option value="2">화성</option>
            <option value="3">목성</option>
            <option value="4">토성</option>
        </select>
        <select name="item" multiple>
            <optgroup label="삼성">
                <option>갤럭시</option>
                <option>Z플립</option>
            </optgroup>
            <optgroup label="애플">
                <option>맥북</option>
                <option>아이폰</option>
            </optgroup>
        </select>
        <button type="submit">요청</button>
    </form>
</body>
</html>
```

```html
<option value="0">선택하세요</option>
```
- `0`는 홈페이지 주소 뒤에 나오는 값
- `선택하세요`는 select에서 고를 수 있는 보기

```html
<optgroup label="삼성">
<option>갤럭시</option>
<option>Z플립</option>
</optgroup>
<optgroup label="애플">
<option>맥북</option>
<option>아이폰</option>
</optgroup>
```
- 장점: 셀렉을 두 번 하지 않고 하나의 셀렉 창에서 구별이 된 채로 고를 수 있다
- 다중선택 가능 (how? multiple add)

`라디오`
- 라디오는 하나만 불이 들어올 수 있음
- 여러개에 `checked`를 해도 맨 마지막에 `checked` 기입한거만 불이 들어옴
- 불만 있으면 뭔지 모르니까 `label`을 기입해줌

- 체크박스는 다중선택이 가능
- 
