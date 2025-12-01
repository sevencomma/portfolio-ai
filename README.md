# 🧑‍💻 AI 기반 개인 포트폴리오 – 이현철

> React + Vite로 만든 **개인 소개 & 개발 여정 포트폴리오**  
> 텍스트·이미지·음성·배경 영상까지 **생성형 AI 도구들을 직접 활용**해서 제작한 프로젝트입니다.
>
> **https://portfolio-ai-pink.vercel.app/**

---

## 📌 프로젝트 개요

이 프로젝트는 **영남대학교 컴퓨터공학과, 이현철**의

- 자기소개
- 개발 관련 여정(전공, 알고리즘, 프로젝트)
- 연락처

를 한 번에 볼 수 있는 **싱글 페이지 포트폴리오 웹사이트**입니다.

단순한 정적 페이지를 넘어서,

- AI로 만든 **프로필 일러스트**
- AI TTS로 만든 **자기소개 음성**
- AI로 만든 **배경 음악**
- AI 비디오 생성으로 만든 **배경 영상**

을 직접 페이지에 통합해서, **복합 생성형 AI 활용**까지 보여주는 것을 목표로 했습니다.

---

## ✨ 주요 기능

### 1. Home / Hero 섹션
- “영남대 컴공 3학년, 이현철입니다.” 메인 인사
- 짧게 정리된 자기소개 문구
- 버튼 클릭 시 **TTS 자기소개 음성 재생**
- 오른쪽에는
  - 생성형 AI로 만든 **프로필 일러스트**
  - Dream Machine으로 생성한 **루프 배경 비디오**를 함께 배치

### 2. About Me
- 이름, 나이, 출신, 학력, 별명 등 기본 정보
- 성격/가치관 (무관심·혼자 선호·전략/효율 중심·실력 위주 등)
- “고독한 개발자” 느낌의 키워드 태그
- Hero와는 다른 스타일의 **AI 아바타 이미지** 사용

### 3. Tastes (취향)
- 좋아하는 **Music / Food / Game**을 카드 형태로 정리
- Music 카드 안에서:
  - Suno로 생성한 **1분짜리 나만의 학습용 BGM**을 바로 재생 가능
- Food/Game 카드에도 AI 일러스트를 추가해서 텍스트만 있는 화면을 피함

### 4. Dev Journey / PS / Books / Projects
- **연도·학기별 타임라인**으로 개발 여정 정리
  - 2023: 입학 & C 언어 기초
  - 2024: 전공 몰입 & 자료구조/알고리즘 입문
  - 2024 겨울: 종만북으로 알고리즘 사고 확장
  - 2025 상반기: 주요 CS 과목과 텀프로젝트
  - 2025 여름: Java & Spring Boot 입문
  - 2025 하반기: 소공, 컴구, 데베 심화
- **Books & Lectures 요약**
  - K.N. King C 책, 종만북, 김영한 스프링 강의 등
- **Problem Solving(PS) & 수상**
  - 백준 실버 → 골드 → 플래티넘 → 1000문제 Solve
  - 알고리즘 대회 / 경진대회 수상, PCCP Lv.3 등
- **Projects**
  - 각 프로젝트를 카드로 보여주고, 클릭 시 모달에서 상세 설명
    - 소설 – 미로 탈출 게임 (+ 알고리즘)
    - 소프트웨어공학 – 스터디 그룹 프로젝트
    - 운영체제 – 페이지 스케줄링 분석 및 새로운 알고리즘 제안
    - 컴퓨터네트워크 – C 멀티스레드 소켓 통신
    - 컴퓨터구조 – SPEC2000, sim-cache 캐시 분석 등

### 5. Contact
- GitHub, Email 등 연락 수단 정리
- “이 페이지도 계속 업데이트할 예정”이라는 한 줄 다짐 포함

---

## 🧠 사용 기술 스택

### Frontend
- **React 18**
- **Vite** (번들러/개발 서버)
- **React Router** (페이지 전환용)
- **CSS** (직접 작성한 스타일 – `src/styles/*.css`)

### Styling
- 다크 테마 기반의 커스텀 디자인
- 컴포넌트/기능별로 나눈 CSS 파일:
  - `base.css`, `layout.css`, `navbar.css`, `hero.css`, `about.css`,  
    `timeline.css`, `projects.css`, `books_ps.css`, `contact.css`, `responsive.css`
- Google Fonts – **Noto Sans KR** 사용

### Deployment
- **Vercel**을 사용한 배포
- GitHub 레포지토리와 연동하여 push 시 자동 빌드 & 배포

---

## 🤖 사용한 AI 도구들

이 프로젝트는 단순히 텍스트만 ChatGPT로 작성한 것이 아니라,  
실제 웹에 들어가는 여러 리소스를 **각기 다른 AI 도구로 생성**했습니다.

### 1. 텍스트 / 기획
- **ChatGPT / GPT 계열**
  - 페이지 구조 설계 (섹션 나누기)
  - 자기소개, Dev Journey 서술, PS/Projects 설명 텍스트 초안 작성
  - CSS 구조와 컴포넌트 설계

### 2. 이미지
- **Gemini (나노바나나)**  
  - Hero 섹션 프로필 아바타 이미지  
  - About 섹션용 캐릭터/프로필 이미지  
  - (선택적으로) 취향 카드(Music/Food/Game)용 일러스트

### 3. 음성 (TTS)
- **Typecast**
  - Hero 섹션에서 사용하는 **자기소개 음성 파일** 생성  
  - React에서 `<audio src="/audio/intro-tts.mp3" />` 형태로 재생

### 4. 배경 음악
- **Suno**
  - 약 1분 길이의 **공부/코딩할 때 듣는 나만의 BGM** 생성
  - Tastes > Music 카드에서 `<audio src="/audio/my-style-song.mp3" />` 형태로 사용

### 5. 배경 비디오
- **Dream Machine**
  - Hero 우측 배경에 들어가는 **루프 비디오** 생성  
  - 추상적인 코드/네온/디지털 느낌의 영상으로, 사이트 첫 인상을 강화

---

## 📁 디렉토리 구조 (요약)

> 실제 구조와 완전히 1:1은 아닐 수 있지만, 대략적인 형태는 아래와 같습니다.

```bash
.
├─ public/
│  ├─ images/
│  │  ├─ hero-profile.png      # Gemini 프로필 이미지
│  │  └─ about-profile.png     # About 섹션용 이미지
│  ├─ audio/
│  │  ├─ intro-tts.mp3         # Typecast 자기소개 TTS
│  │  └─ my-style-song.mp3     # Suno 생성 음악
│  └─ video/
│     └─ hero-bg.mp4           # Dream Machine 배경 비디오
│
├─ src/
│  ├─ main.jsx
│  ├─ App.jsx
│  ├─ router/
│  │  └─ index.jsx             # React Router 설정
│  ├─ components/
│  │  ├─ Navbar.jsx
│  │  ├─ Footer.jsx
│  │  └─ ProjectsModal.jsx     # 프로젝트 상세 모달
│  ├─ pages/
│  │  ├─ Home.jsx
│  │  ├─ About.jsx
│  │  ├─ Tastes.jsx
│  │  ├─ Journey.jsx           # Dev Journey + PS + Books + Projects
│  │  └─ Contact.jsx
│  ├─ data/
│  │  ├─ home.js
│  │  ├─ about.js
│  │  ├─ tastes.js
│  │  ├─ journey.js
│  │  ├─ ps.js
│  │  └─ projects.js
│  └─ styles/
│     ├─ base.css
│     ├─ layout.css
│     ├─ navbar.css
│     ├─ hero.css
│     ├─ about.css
│     ├─ timeline.css
│     ├─ projects.css
│     ├─ books_ps.css
│     ├─ contact.css
│     └─ responsive.css
│
└─ package.json
