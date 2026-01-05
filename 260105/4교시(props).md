**지금 헷갈리는 지점이 정확히 “props가 왜 필요하고, 부모–자식이 어떻게 연결되는지”**
아래에서 **개념 → 코드에 대입 → 한 줄씩 해석 → 머릿속 모델** 순서로 설명해줄게.

---

## 1️⃣ props를 한 문장으로 정의하면

> **props는 “부모 컴포넌트가 자식 컴포넌트에게 값을 전달하는 통로”**야.

* React 컴포넌트는 **서로 직접 변수에 접근 못함**
* 대신 **부모 → 자식 방향으로만 데이터 전달**
* 그 전달 수단이 `props`

📌 핵심 규칙

> **상태(state)는 부모에 있고, 자식은 props로 빌려 쓴다**

---

## 2️⃣ 이 코드에서의 부모–자식 관계

```jsx
App  ← 부모
 ├─ Input  ← 자식
 ├─ Input  ← 자식
 └─ Button ← 자식
```

* `App`이 **상태(name, desc)** 를 가지고 있음
* `Input`, `Button`은 **아무 상태도 없음**
* 자식들은 **부모가 내려준 props만 사용**

---

## 3️⃣ App 컴포넌트 (부모) 먼저 이해하기

```jsx
const [name, setName] = useState("홍길동")
const [desc, setDesc] = useState("전설의 도적")
```

👉 App이 **데이터의 주인**

* `name` / `desc` → 현재 값
* `setName` / `setDesc` → 값을 바꾸는 함수

```jsx
<Input value={name} setValue={setName}/>
<Input value={desc} setValue={setDesc}/>
```

이 한 줄이 **props의 핵심**

> “Input아,
> 너는 이 값을 쓰고(`value`),
> 바꾸고 싶으면 이 함수(`setValue`)를 써”

---

## 4️⃣ Input 컴포넌트 (자식) 해부

```jsx
const Input = props =>
  <input
    type="text"
    value={props.value}
    onChange={e => props.setValue(e.target.value)}
  />
```

### 🔹 여기서 props는 뭐냐?

```js
props = {
  value: name,
  setValue: setName
}
```

(두 번째 Input은 `desc`, `setDesc`가 들어감)

---

### 🔹 왜 자식이 setValue를 쓰는가?

중요한 포인트 👇

> **자식은 상태를 직접 수정할 수 없다**
>
> 그래서 **부모가 수정 권한을 함수로 내려준다**

```jsx
onChange={e => props.setValue(e.target.value)}
```

이건 사실상:

> “입력이 바뀌면 → 부모(App)의 상태를 바꿔줘”

📌 그래서 **입력값은 Input에 있는 것처럼 보이지만**
📌 **실제 데이터는 App에 있다**

이걸 **Controlled Component(제어 컴포넌트)** 라고 불러.

---

## 5️⃣ Button 컴포넌트 이해

```jsx
const Button = props =>
  <button type="button" onClick={props.event}>
    합치기
  </button>
```

App에서:

```jsx
const event = () => {
  const data = { name, desc }
  console.log(data)
}

<Button event={event} />
```

👉 여기서도 동일한 패턴

* `event` 함수는 **App에 있음**
* Button은 **실행만 함**

즉,

> Button은 “어떤 일이 일어나는지 몰라”
>
> 그냥 “눌리면 이 함수 실행할게”만 알고 있음

---

## 6️⃣ 전체 흐름을 사람 말로 풀면

1. App이 상태를 만든다
2. App이 Input에게 말한다
   → “이 값 써”
   → “바꾸고 싶으면 이 함수 써”
3. 사용자가 Input에 타이핑
4. Input이 부모 함수 실행
5. App 상태 변경
6. 변경된 값이 다시 Input으로 내려감
7. Button 클릭
8. Button이 부모 이벤트 실행
9. 부모가 모든 데이터를 조합

---

## 7️⃣ props가 없으면 어떻게 되는데?

❌ 이런 건 React에서 불가능

```jsx
// Input이 App의 name을 직접 수정?
name = "새값" ❌
```

React 철학:

> **데이터 흐름은 단방향**
>
> 부모 → 자식

그래서:

* **값은 props**
* **변경은 함수(props)**

---

## 8️⃣ 지금 단계에서 꼭 기억해야 할 3가지

### ✅ 1. 누가 상태를 가지고 있는가?

👉 `App`

### ✅ 2. 자식은 무엇을 할 수 있는가?

👉 **props로 받은 것만 사용**

### ✅ 3. 왜 setState를 넘겨주는가?

👉 **자식에게 수정 “권한”을 주기 위해**

---

## 9️⃣ props가 헷갈릴 때 떠올릴 비유

📦 **props = 택배 상자**

* 부모가 포장해서 보냄
* 자식은 열어서 사용만 가능
* 내용물 바꾸고 싶으면 **반송 요청(setState)**

---

## 🔚 한 줄 요약

> **props는 “부모의 상태와 로직을 자식에게 빌려주는 계약서”다**

---

다음 단계로는:

* `props` → **구조분해 할당**
* `Input`을 더 일반화하는 방법
* `children` 개념

이 중에서 뭐가 제일 궁금해?
