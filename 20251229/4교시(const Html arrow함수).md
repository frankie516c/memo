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
