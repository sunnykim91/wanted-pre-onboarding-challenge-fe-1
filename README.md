# 원티드 프리온보딩 챌린지 프론트엔드 코스 사전과제

## 📷시연

![image](https://user-images.githubusercontent.com/48176511/213246850-744275f1-3a7a-40c0-99cf-468bc6541960.png)
![image](https://user-images.githubusercontent.com/48176511/213247079-1ed4c856-f27f-4b24-abd5-436811ba7a40.png)

추후: 영상으로 업로드 및 디자인 수정 후 재업로드 예정

## ✨구현 요구 사항

- 인증 관련

  - 로그인 페이지 / 회원가입 페이지
    - [x] 이메일, 패스워드 유효성 검사
    - [x] 유효성 검사 에러시 문구 표출
    - [x] 이메일과 비밀번호가 모두 입력되어 있고, 유효성 검사 통과시 로그인/회원가입 가능
  - 로그인 API 관련 (60%구현)
    - [x] 응답으로 받은 토큰은 로컬 스토리지에 저장
    - [x] 토큰이 존재할 때 로그인/회원가입 페이지 접근 시 todos 페이지로 리다이렉트
    - [x] 토큰이 존재하지 않을 때 todos 페이지 접근 시 로그인 페이지로 리다이렉트

- Todo 페이지 관련
  - Todo API를 호출하여 CRUD 기능 구현
    - [x] 목록 / 상세 영역으로 나누어 구현
    - [x] Todo 목록을 볼 수 있음
    - [x] Todo 추가 버튼을 클릭하면 할 일이 추가 됨
    - [x] Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있음
    - [x] Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있음
  - 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현
    - [x] 수정되는 Todo의 내용이 목록에서도 실시간으로 반영

## 📆 프로젝트 기간
2023.01.10 ~ 2023.01...(ing)

## 📚 기술스택
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)


## 실행 방법
### Back-End Code실행
[서버 api 링크](https://github.com/sunnykim91/wanted-pre-onboarding-challenge-fe-1-api)에 접속하여 
```bash
  > git clone https://github.com/sunnykim91/wanted-pre-onboarding-challenge-fe-1-api
  > cd wanted-pre-onboarding-challenge-fe-1-api
  > yarn
  > yarn start # http://localhost:8080
```

### Front-End Code실행
```bash
  > git clone https://github.com/sunnykim91/wanted-pre-onboarding-challenge-fe-1.git
  > cd wanted-pre-onboarding-challenge-fe-1
  > npm i
  > npm start
```

## 폴더 구조 설명

```
📦src
 ┣ 📂api  : API 명세 파일
 ┣ 📂assets : 이미지 등 Assets로 쓰일 폴더
 ┃ ┗ 📂image
 ┣ 📂components : 전역에서 공통으로 사용될 컴포넌트
 ┃ ┣ 📂common
 ┃ ┣ 📂layout
 ┃ ┗ 📂modal
 ┣ 📂constants  : 상수로 정해놓을 값들 정리
 ┣ 📂hooks : 커스텀 훅 정리
 ┣ 📂pages : 페이지
 ┃ ┣ 📂home
 ┃ ┣ 📂login
 ┃ ┣ 📂signup
 ┃ ┗ 📂todos
 ┃ ┃ ┣ 📂component : 페이지안에서 사용될 컴포넌트
 ┣ 📂Router  : 공통 라우터
 ┣ 📂store  : 스토어
 ┃ ┣ 📂slice : redux-toolkit slice 
 ┃ ┣ 📂thunk : 비동기 API 처리 모음
 ┣ 📂types : 타입 정리
 ┃ ┣ 📂auth : 로그인 관련
 ┃ ┣ 📂common : 공통 
 ┃ ┗ 📂todo : todo관련
 ┣ 📂utils : 전역에서 사용될 util들
 ┃ ┣ 📂modal : 모달창
 ┃ ┣ 📂schema : yup에 사용되는 스키마
 ┃ ┗ 📂SnackBar : 스낵바
 ```
 
 ## 사용한 라이브러리 및 설명
- MUI : antd, bootStrap 과 같이 3대장으로 불리는 UI 디자인 라이브러리로써 많은 컴포넌트들과 쉬운 사용법, 확장성을 가지고 있어서 선택
- redux-toolkit: 기존 redux에 비해서 코드양을 줄이고, 불필요하게 많은 라이브러리들을 설치해야하는 점이 없음.
- yup: form의 validation을 위하여 사용하였습니다.
- react-hook-form : 기본 form 태그를 사용하는 것보다, 라이브러리를 사용해보고 싶었고, Hooks API형태로 되어있고, 타입스크립트로 작성된 프로젝트여서 타입스크립트와 잘맞고, 비제어 컴포넌트로 되어있습니다.
### [react-hook-form을 사용한 이유]:(https://tech.osci.kr/2023/01/02/introduce-react-hook-form/)

## 과제 수행 시 주안점
- 고민한 부분

## 한계점 및 개선 사항 작성
- react-query 미적용


## 히스토리 끄적끄적

### 1번째 강의 후 피드백 관련

디렉토리 관련
- 공통된것들로의 분리 과정 (로그인관련 / TODO 로직 관련 등)
- 타입의 세분화 (auth, todo, util)
- 명명 변경 (model => types)

UI/UX관련
- HomePage 추가 및 디자인 변경

### 2번째 강의 후 피드백 관련
- 1번째 기술부채들 정리 
- Redux의 적용
- React-query 적용(미적용ㅠ)
