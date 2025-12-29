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
