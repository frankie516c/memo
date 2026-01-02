react는 함수를 사용해야 하기 때문에 useState을 쓴다

num, setNum
data, setData
이런거 사용하려면 useState가 필요함

<img width="970" height="583" alt="image" src="https://github.com/user-attachments/assets/5c0f8d9f-893b-4b01-bf26-ce4332a0e7c7" />

- `return (` 화면을 그려주는거니까 이 밖에 함수가 있어도 얘 안에 있는게 먼저 바뀐다<br />
- `value={txt} onChange={e => setTxt(e.target.value)}/>` 얘때매 칸에 글이 써짐<br />
**- `e.preventDefault()`: form 태그의 기본 역할을 막는 태그<br />**
**- `if(txt === '') return`: 예외처리 (입력창에 아무것도 쓰지 않았을 경우 아무것도 담지 않겠다는 것)**
- `setArray([txt, ...array])`: state 값 변경
  - `[]`여기에 들어가는건 인자값이라고 불림react는 함수를 사용해야 하기 때문에 useState을 쓴다

num, setNum
data, setData
이런거 사용하려면 useState가 필요함

<img width="970" height="583" alt="image" src="https://github.com/user-attachments/assets/5c0f8d9f-893b-4b01-bf26-ce4332a0e7c7" />

- `return (` 화면을 그려주는거니까 이 밖에 함수가 있어도 얘 안에 있는게 먼저 바뀐다<br />
- `value={txt} onChange={e => setTxt(e.target.value)}/>` 얘때매 칸에 글이 써짐<br />
- `e.preventDefault()`: form 태그의 기본 역할을 막는 태그<br />
- `if(txt === '') return`: 예외처리 (입력창에 아무것도 쓰지 않았을 경우 아무것도 담지 않겠다는 것)
**- `setArray([txt, ...array])`: state 값 변경 // 출력값을 제어할 수 있음**
  - `[]`여기에 들어가는건 인자값이라고 불림
  - txt: 아래 내용이랑 반대로 내림차순으로 됨
  - array: 얘가 앞에 와서 입력창에 글자를 입력할 때 `ㅎ하ㄴ나` `ㄷ두둘` `ㅅ세셋` 이렇게 뜸
  - 근데 만약 이 둘을 바꾸는걸로만 안되면 `toReverse()`라는 기능을 써야 됨

```
const c = [...a]
```
- 이 코드의 의미: `const d = [b[0]]` 이것과 같은 것 (명칭: 깊은 복사)
- 쉽게 설명하자면 '저장된 곳이 다르다'

```
setTxt('')
```
**텍스트를 입력하고 버튼을 누른 뒤 입력창에 아무것도 남지 않는 것을 의미함**
