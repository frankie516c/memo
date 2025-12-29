내가 실패한거 모음

```
  const Html = (v,i) => <li>1번</li>&&<li>2번</li>&&<li>3번</li>
    
  return ( 
    <ul>
      {Html}
    </ul>
  )
```

```
  const Html = () => `<li>1번</li>`&&`<li>2번</li>`&&`<li>3번</li>`
    
  return ( 
    <ul>
      {Html}
    </ul>
  )
```

```
  const Html = () => `
  <ul>
  <li>1번</li>
  <li>2번</li>
  <li>3번</li>
  </ul>
  `
    
  return ( 
    <ul>
      {Html}
    </ul>
  )
```

```
  const Arr = () => `
  <ul>
  <li>1번</li>
  <li>2번</li>
  <li>3번</li>
  </ul>
  `
    
  return ( 
    <ul>
      {Arr}
    </ul>
  )
```

```
  const Html = () => <li>1번</li> <li>2번</li> <li>3번</li>
    
  return ( 
    <ul>
      {Html}
    </ul>
  )
```

```
  const Html = () => `<li>1번</li> : <li>2번</li> : <li>3번</li>`
    
  return ( 
    <ul>
      {Html}
    </ul>
  )
```

```
  const Html = () => <li>1번</li> <br /> <li>2번</li> <br /> <li>3번</li>
    
  return ( 
    <ul>
      {Html}
    </ul>
  )
```

```
  const Html = () => <li>1번</li>; <li>2번</li>; <li>3번</li>
    
  return ( 
    <ul>
      {Html}
    </ul>
  )
```

```
  const Html = () => 
  <ul>
  <li>1번</li>;<li>2번</li>;<li>3번</li>
  </ul>
    
  return ( 
    <ul>
      {Html}
    </ul>
  )
```

이채훈님 디스코드 공유 답
```
const Page1 = () => <h1>상단 화면</h1>
const Page2 = () => <h1>하단 화면</h1>

const Main = () => {
const Html = () => 
<> 
  <li>1번</li>
  <li>2번</li>
  <li>3번</li>
</>

  return ( 
    <ul>
      <Html />
    </ul>
  )
}

const App = () => {
  return (
    <> 
      <Page1 />
      
      <Main />

      <Page2 />
    </>
  )
}

export default App
```
내가 배워야 되는 점
- 위에 코드를 응용함
  -  `Html`을 `return`에서 `<Html />`로 사용
  ```
  const Page1 = () => <h1>상단 화면</h1>
  (생략)
  const App = () => {
  return (
    <> 
      <Page1 />
  ``` 
- 부모자식을 주되 `<></>`로 비워둠
  - `return`에서 사용한 `<ul></ul>`과 겹치지 않음
  - 화면에 `<ul></ul>`이 출력되지 않음
- `<li></li>`리스트를 유지해서 선생님이 힌트 주신 방법을 그대로 사용함

이채훈님 답2
```
const Page1 = () => <h1>상단 화면</h1>
const Page2 = () => <h1>하단 화면</h1>

const Main = () => {
  const Html = () => {
    const html2 = []
    for (let i = 1; i < 4; i++) {
      html2.push(<li key={i}>{i}번</li>)
    }

  return ( 
    <>{html2}</>
  )
}
  return<Html />
}

const App = () => {
  return (
    <> 
      <Page1 />
      <ul>
      <Main />
      </ul>
      <Page2 />
    </>
  )
}

export default App
```
- `for문`을 이용할 수 있음
- `.push` 함수를 이용하는게 포인트
- `<Main />` 위아래에 `<ul></ul>`을 넣는 방법이 있음

이채훈님 답 3
```
const Page1 = () => <h1>상단 화면</h1>
const Page2 = () => <h1>하단 화면</h1>

const Main = () => {
  const Html = () => {
    const html2 = []
    for (let i = 1; i < 4; i++) {
      html2.push(<li key={i}>{i}번</li>)
    }

  return ( 
    <>{html2}</>
  )
}
  return(
  <ul>
  <Html />
  </ul>
  )
}

const App = () => {
  return (
    <> 
      <Page1 />
      
      <Main />
      
      <Page2 />
    </>
  )
}

export default App
```
- `return`의 <Html /> 위아래에 `<ul></ul>`을 넣는 방법이 있음

이나라님 답
```
const Page1 = () => <h1>상단 화면</h1>
const Page2 = () => <h1>하단 화면</h1>

const Main = () => {
  const arr = ["1번", "2번", "3번"]
  const Html = () => {
    const list = [];
    for (let num of arr) {
      list.push(<li key={num}>{num}</li>);
    }

  return ( 
    <>
    {list}
    </>
  )
}
  return(
  <ul>
  <Html />
  </ul>
  )
}

const App = () => {
  return (
    <> 
      <Page1 />
      
      <Main />
      
      <Page2 />
    </>
  )
}

export default App
```
- `arr`을 이용해서 꺼내오는 방법을 사용
- `for문` 사용
- `.push` 사용
