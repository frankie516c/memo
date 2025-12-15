web server: 정적파일만 다룸 - 프론트의 영역에 사용하는 서버
  e.g., 아파치 HTTP
        **Nginx:** (우리가 이용할 애)
          - 프록시: 서버 터져서 ㅈ됐을 때 경고 안내문 같은거 보여주는 기능
          - 로드 밸런싱: 서버 무너지지 않게 하는 역할
          - 캐싱: 가볍게 메모리 돌리는 거
web application server: 동적인 파일을 다룸. 요청이 오면 결과를 다르게 줄 수 있게끔 프로그래밍
  e.g., 네이버 도메인 (뉴스 매번 바뀜) - 이렇게 바뀌는거를 제공하는 백엔드 영역의 서버
  
docker hub 들어가서 nginx 다운 받은 뒤
VS Code에서 프로그램 다운(다운 링크는 디스코드에 강사님이 올려주심)
다운 확인법: docker images 입력 -> nginx:latest 뜨나 보기 -> 뜬다면 docker run -d -p 8080:80 nginx:latest -> docker의 container 들어가서 초록불 들어온 Port 누르기 -> nginx 입성!!

왜 도커를 쓰느냐?
굳이 개인노트북에 파이썬 안깔아도 돼서 좋음
VS Code랑 연결되면 바로 개발할 수 있음
