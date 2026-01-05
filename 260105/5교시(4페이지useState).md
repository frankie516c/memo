내가 만든 코드
```
import { useState } from "react"
import { setStorage, getStorage, removeStorage } from "@utils/storage.js"

  const Input = props => {
    <input type="text" value={props.name} onChange={e=>props.setValue(e.target.name)} />
    const onChange = e => { 
    const {setName, value} = e.target
    setData({...data, [setName]: checkBoolean(setName, value)})
    }
    return (
      <label htmlFor="name" className="form-label">이름:</label>,
      <input type="text" className="form-control" id="name" placeholder="이름을 입력하세요." name="name" onChange={onChange}/>
    )
  }

  const Input = props => {
    <input type="text" value={props.email} onChange={e=>props.setValue(e.target.email)} />
    const onChange = e => { 
    const {setEmail, value} = e.target
    setData({...data, [setEmail]: checkBoolean(setEmail, value)})
    }
    return (
      <label htmlFor="email" className="form-label">이메일:</label>,
      <input type="email" className="form-control" id="email" placeholder="이메일를 입력하세요." name="email" onChange={onChange}/>
    )
  }

  const Input = props => {
    <input type="text" value={props.pwd} onChange={e=>props.setValue(e.target.pwd)} />
    const onChange = e => { 
    const {setPwd, value} = e.target
    setData({...data, [setPwd]: checkBoolean(setPwd, value)})
    }
    return (
    <label htmlFor="pwd" className="form-label">비밀번호:</label>,
    <input type="password" className="form-control" id="pwd" placeholder="비밀번호를 입력하세요." name="pwd" onChange={onChange}/>
    )
  }

  const Gender = props => {
  <input type="boolean" value={props.gender} onChange={e=>props.setValue(e.target.gender)} />
  setData({...data, [setGender]: checkBoolean(setGender, value)})
  const Button = props => {
  <Button type ="button" onClick={props.event}>취소</Button>
  }
  }

const Page4 = () => {
  const [name, setName] = useState("name")
  const [email, setEmail] = useState("email")
  const [pwd, setPwd] = useState("pwd")
  const [gender, setGender] = useState(true)
  const checkBoolean = value => setGender(value === "1" ? true : false)
  const onSubmit = e => {
    e.props.preventDefault()
    console.log(data)
  }  
  }
      </form>
    </div>

export default Page4
```

부족한 개념 
- return이 들어가야 하는 자리도 몰랐고 컴포넌트에서 return이 안 됨(JSX는 return 안 하면 화면에 안 나옴)
- const Input 똑같은 것은 여러개 할 수 없는데 같은 이름의 컴포넌트를 여러번 선언함
- props를 사용할 때 해야하는 것과 하면 안 먹히는 것 구분
- `e.target`에 없는 속성을 사용함 (e.g., `e.target.email`, `e.target.pwd`)
- `setData`랑 `data`가 정의되어 있지 않음
- 컴포넌트 안에 컴포넌트를 정의함 (불가능한것은 아니지만 이로 인해 혼란스러워짐)

4️⃣ 지금 단계에서 꼭 정리해야 할 개념 3가지
✅ 1. 컴포넌트는 return JSX 하나
const A = () => {
  return <div />
}

✅ 2. input 상태 변경 공식 패턴
const { name, value } = e.target;
setData({ ...data, [name]: value });


👉 이 패턴은 React 평생 씀

✅ 3. “공통 컴포넌트화”는 하나로

❌ nameInput / emailInput / pwdInput 따로 X
✅ Input 하나 + props로 구분

5️⃣ 한 줄 결론

❌ 지금 코드 형태 그대로는 구조적으로 작동 불가
✅ 하지만 의도는 완전히 맞고,
🔥 조금만 정리하면 바로 중급 React 패턴으로 연결되는 상태


영준님이 만든 코드
```
import { useState } from "react"
import { useNavigate } from 'react-router'

const ParentComponent = () => {
  return (
    <div>
      <Input type="text" placeholder="이름을 입력하세요" />
      <Input type="email" placeholder="이메일를 입력하세요" />
      <Input type="password" placeholder="비밀번호를 입력하세요" />
    </div>
  );
}

// const Input = ( props, {type, placeholder} ) => <input type={type} placeholder={placeholder} className="form-control" value={props.value} onChange={e => props.setValue(e.target.value)} />
const Input = props => <input className="form-control" value={props.value} onChange={e => props.setValue(e.target.value)} />
const InputR = props => <input type="radio" className="form-check-input" checked={props.gender} value={props.value} onChange={e => props.setValue(e.target.value)} />
const Button = props => <button type="button" className="btn btn-primary" onClick={props.event}>생성</button>

const Page5 = () => {
  // 취소 버튼 선언
  const navigate =  useNavigate()
  const onclick = () => navigate("/")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [pwd, setPwd] = useState("")
  const [gender, setGender] = useState(true)
  const checkBoolean = (name, value) => {
    if(name === "gender") return value === "1" ? true : false
    return value
  }
  
  const event = () => {
    const data = { name, email, pwd, gender }
    setGender(checkBoolean(gender, value))
    console.log(data)
  }

  return (
    <div className="container mt-3">
      <h1 className="display-1 text-center">사용자 등록</h1>
      <form >
        <div className="mb-3 mt-3">
          <label htmlFor="name" className="form-label">이름:</label>
          <Input type="text" placeholder="이름를 입력하세요." value={name} setValue={setName} />
        </div>
        <div className="mb-3 mt-3">
          <label htmlFor="email" className="form-label">이메일:</label>
          <Input type="email" placeholder="이메일를 입력하세요." value={email} setValue={setEmail} />
        </div>
        <div className="mb-3">
          <label htmlFor="pwd" className="form-label">비밀번호:</label>
          <Input type="password" placeholder="비밀번호를 입력하세요." value={pwd} setValue={setPwd} />
        </div>
        <div className="d-flex">
          <div className="p-2 flex-fill">
            <div className="form-check">
            <InputR type="radio" value={gender} setValue={setGender}/>남성
            <label className="form-check-label" htmlFor="radio1"></label>
          </div>
          </div>
          <div className="p-2 flex-fill">
            <div className="form-check">
            <InputR type="radio" value={gender} setValue={setGender}/>여성
            <label className="form-check-label" htmlFor="radio2"></label>
          </div>
          </div>
        </div>
        <div className="d-flex gap-2">
          <div className="flex-fill d-grid">
            <Button event={event} />
          </div>
          <div className="flex-fill d-grid">
            <button className="btn btn-primary" onClick={onclick}>취소</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Page5
```
