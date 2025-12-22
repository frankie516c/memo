<h3>FOR IN 문 (배열)</h3>

```
const a = [1,2,3,4,5];
for (const k in a) {
    console.log(index);
}
```

- 나오는 값: 1,2,3,4,5
- k: key=index
- for문이 가지고 있는 length는 저 배열이기 때문에 훨씬 짧아짐
- in: 회전할 때 마다 인덱스를 순차적으로 꺼내는 것

```
const a = [1,2,3,4,5];
for (const index in a) {
    console.log(`배열${index} : ${a[index]}`);
}
```

<h3>FOR OF 문 (배열)</h3>

```
const a = [1,2,3,4,5];
for (const v of a) {
    console.log( v );
}
```
- v: value (값만 꺼내오는 것)
- index를 꺼내지 않는 애

<h3>FOR EACH 문 (함수)</h3>

```
const a = [1,2,3,4,5];

function event (x, y){
  console.log("반복", x, y);
}

a.forEach(event);
```
- `a.forEach` 괄호 안에 들어가야 하는 값: f(callbackfn) = 콜백함수
- `x`: 값
- `y`: 인덱스

```
const a = [1,2,3,4,5];

function event (값, 인덱스) {
  console.log(`배열${인덱스} : ${값}`);
}

a.forEach(event);
```
**객체지향언어의 핵심**
- 함수를 만들고
- 그 함수 안에 기능을 만들고
- 그 기능을 이용해서 출력을 한다면 원하는 값을 꺼내쓸 수 있음

여태까지한건 1차원 배열
2차원 배열은 두가지 방향으로 가기 때문에 두가지 for문이 필요함 (중첩for문)

<h3>중첩FOR 문 (근본)</h3>

더하기 썼을 때 (보기 헷갈림)
```
for ( let i = 1; i <= 9 ; i++ ) {
    for ( let j = 1; i <= 9 ; j++ ) {
        console.log( i + "*" + j + " = " + (i*j));
    }
    console.log();
}
```
백텍 쓰면 가독성 높아짐
```
for ( let i = 1; i <= 1 ; i++ ) {

    for ( let j = 1; j <= 9 ; j++ ) {
        console.log( `${i} * ${j} = ${i * j}` );
    }
    console.log();
}
```
- for문(반복문) 할 땐 배열보단 숫자를 갖고 제어하는게 나음
- ++의 의미는 후치의 형식으로 `+ 1`을 한 것
