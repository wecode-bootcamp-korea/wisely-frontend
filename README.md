![와이즐리 대문](https://user-images.githubusercontent.com/48509329/85009219-0cbc4880-b199-11ea-847c-ae461e590bba.png)

# 와이즐리 클론 PROJECT__FrontEnd
면도기 구독 사이트, 피부/면도 타입에 따라 맞는 자사의 제품을 추천 해 주고 면도와 관련 된 정보를 지속적으로 제공 해 주는 서비스

## 개발 인원 및 기간
- 기간: 2주(5월 11일 ~ 5월 22일)
- 인원: 프론트 3명(주상하, 심기현, 정영미), 백엔드 2명(진성준, 박정인)
- 백엔드 github: 

## 프로젝트 주요 목적
- 실제 협업시 사용하는 Scrum, Sprint Meeting, Stend Up Meeting 방식 경험.
- FrontEnd / BackEnd 협업을 통한 커뮤니케이션 및 협동 작업의 중요성 이해.
- 위 홈페이지에 대한 다양한 UI 및 디자인 요소, 애니메이션 등을 React/styled-components 로 구현.
- 제작 과정에 있어 사용자 중심 구조에 대한 이해도 향상.

## 적용 기술 및 구현 기능

### 적용 기술
- HTML
- CSS
- JavaScript
- React.js
- styled-components
- Redux

### 구현 기능

#### 로그인 및 회원가입

- JWT Access Token 전송.
- 정규 표현식 사용으로 회원가입/로그인 형식 validation

#### Home 페이지

- button 클릭시 해당 컨텐츠로 이동
- transition을 사용한 클릭 이벤트

#### 홈페이지

- React hook, useState로 상태관리
- 자식 컴포넌트에서 부모 컴포넌트로 상태 전달, 상태 변경으로 다른 컴포넌트 렌더링
- 자식 컴포넌트 렌더시 keyframes변화로 animation 효과 적용

### 면도기 세트 페이지

- 부모 컴포턴트로 부터 전달받은 state를  onClick 이벤트로 변경 후 다시 부모로 전달
- state 관리로  장바구니 모달 구현
- 로그인 후 access token을 fetch를 통해  장바구니의 데이터 받아오는 기능 구현
- 장바구니에서 제품 삭제 기능 구현

#### Nav Footer 컴포넌트 구현
- fetch 함수 사용해 back-end로부터 api 받아와 설문페이지 선택사항 목록들 구현
- tab이벤트를 사용해 조건에 따른 단일 선택과 다중선택 구현
- scroll 이동에 따른 이미지 height변화 이벤트 구현
- 리덕스 사용해 tab 선택 정보를 전역 관리하고 설문결과에서 불러오기 구현



## Video

Clcik!!

https://youtu.be/Lrxk9zgUZl8
