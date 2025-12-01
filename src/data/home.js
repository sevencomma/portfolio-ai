// src/data/home.js

export const heroData = {
  title: "영남대학교 컴퓨터공학과 3학년, 이현철입니다.",
  subtitle: "백엔드와 알고리즘에 집중하고 있는 컴퓨터공학과 3학년입니다.",
  introSummary:
    "이 페이지는 제가 지금까지 공부하고 경험한 것들을, 생성형 AI 도구들을 활용해 정리한 자기소개 겸 개발 포트폴리오입니다.",
  ttsScript: [
    "안녕하세요. 영남대학교 컴퓨터공학과 이현철입니다.",
    "C, C++, Java, 그리고 Spring Boot를 사용해서 백엔드 위주로 공부하고 있고,",
    "백준에서 알고리즘 문제를 풀면서 기본기를 다지는 중입니다.",
    "이 페이지는 생성형 AI를 이용해서, 지금까지의 저를 정리해 보기 위해 제작했습니다.",
  ].join(" "),
};

export const homeSectionCards = [
  {
    id: "about",
    title: "About",
    description:
      "어떤 성격과 가치관을 가지고 있는지, 그리고 어떤 것들을 좋아하는지 정리했습니다.",
    link: "/about",
  },
  {
    id: "journey",
    title: "Dev Journey",
    description:
      "컴퓨터공학과 입학 이후, 전공 수업·알고리즘·프로젝트를 어떤 흐름으로 공부해 왔는지 정리했습니다.",
    link: "/journey",
  },
  {
    id: "ps",
    title: "Problem Solving",
    description:
      "백준·종만북·대회 경험을 통해 어떻게 문제 해결 능력을 키워 왔는지 정리했습니다.",
    link: "/ps",
  },
  {
    id: "projects",
    title: "Projects",
    description:
      "수업과 팀 프로젝트에서 만들었던 프로그램과 시스템들을 간단히 소개합니다.",
    link: "/projects",
  },
];
