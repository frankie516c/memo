<h3> Branch 만들기 </h3>

```
git clone (주소)
```
- 경로 잘 맞나 확인하기
- 안맞으면 오류 뜸

Turn Sushi > 25-12-30 > ISSUE > 내이름 > development 에 파란색으로 뜨는 `create a branch` 누르기
다른 설정 건들이지 않고 `create branch` 초록 버튼 누르면 됨
그러면 코드가 뜸
이를 VS Code에 복사

```
git fetch origin
git checkout 2-조윤주
```
- `2-조윤주`: 신규 브런치 이름

```
git branch
```
- 입력시 `* 2-조윤주`라고 뜨고 밑에 `main`이 뜨면 잘 된 것

<h3> 새로운 프로젝트 만들기 </h3>

알맞은 경로에 찾아가서 (내가 맨날 잘못하는 습관)
```
npm create vite@latest 20251230
```
- Y
- React
- Javascipt
- No
- Yes
=> vite 설치 완료

- `ctrl` + `ctrl`로 종료 후
- `git status` 입력
