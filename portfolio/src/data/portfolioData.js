// 포트폴리오 정적 데이터
export const portfolioData = {
  personalInfo: {
    name: "오승현",
    title: "Frontend Developer",
    subtitle: "안녕하세요! 항상 노력하고 공부하는 개발자, 오승현 입니다 :)",
    location: "Goyang, South Korea",
    email: "lucestdail@gmail.com",
    github: "https://github.com/LucestDail",
    profileImage: "/src/resource/mypicsquare.jpg",
    backgroundImage: "/src/resource/titleimg.jpg"
  },
  
  about: {
    title: "About Me",
    description: "웹 개발에 열정을 가진 프론트엔드 개발자입니다. 사용자 경험을 중시하며, 깔끔하고 효율적인 코드를 작성하는 것을 목표로 합니다. 지속적인 학습과 성장을 통해 더 나은 개발자가 되기 위해 노력하고 있습니다.",
    skills: [
      "JavaScript", "React", "HTML5", "CSS3", 
      "Node.js", "Java", "Python", "Git"
    ]
  },

  projects: [
    {
      id: 1,
      title: "Daily News",
      description: "정보 수집, 크롤링 및 정리를 위한 뉴스 애플리케이션",
      technologies: ["JavaScript", "Web Scraping", "Data Processing"],
      githubUrl: "https://github.com/LucestDail/dailynews",
      image: "/src/resource/picmdfy.jpg",
      features: [
        "실시간 뉴스 크롤링",
        "데이터 정리 및 분류",
        "사용자 친화적 인터페이스"
      ]
    },
    {
      id: 2,
      title: "Jammin",
      description: "초민정음 - 한국어 관련 프로젝트",
      technologies: ["CSS", "HTML", "Korean Language Processing"],
      githubUrl: "https://github.com/LucestDail/jammin",
      image: "/src/resource/mypic.jpg",
      features: [
        "한국어 텍스트 처리",
        "반응형 디자인",
        "사용자 경험 최적화"
      ]
    },
    {
      id: 3,
      title: "Xpath Extractor",
      description: "브라우저 요소의 XPath를 추출하는 Chrome 확장 프로그램",
      technologies: ["JavaScript", "Chrome Extension", "XPath", "Web Scraping"],
      githubUrl: "https://github.com/LucestDail/XpathExtractor",
      image: "/src/resource/github-logo.png",
      features: [
        "Chrome 확장 프로그램",
        "XPath 자동 추출",
        "개발자 도구 유틸리티"
      ]
    },
    {
      id: 4,
      title: "Print Scan",
      description: "백상 관련 프로젝트",
      technologies: ["HTML", "CSS", "Print Design"],
      githubUrl: "https://github.com/LucestDail/printscan",
      image: "/src/resource/logo.svg",
      features: [
        "인쇄 최적화 디자인",
        "반응형 레이아웃",
        "사용자 인터페이스"
      ]
    },
    {
      id: 5,
      title: "OSH",
      description: "시스템 관리 및 운영 관련 프로젝트",
      technologies: ["CSS", "System Administration"],
      githubUrl: "https://github.com/LucestDail/osh",
      image: "/src/resource/mypicsquare.jpg",
      features: [
        "시스템 관리 도구",
        "사용자 인터페이스",
        "효율적인 워크플로우"
      ]
    },
    {
      id: 6,
      title: "Waynai",
      description: "Java 기반 웹 애플리케이션",
      technologies: ["Java", "Web Development", "Backend"],
      githubUrl: "https://github.com/LucestDail/waynai",
      image: "/src/resource/titleimg.jpg",
      features: [
        "Java 백엔드 개발",
        "웹 애플리케이션 아키텍처",
        "데이터베이스 연동"
      ]
    }
  ],

  experience: [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Freelance",
      period: "2023 - Present",
      description: "웹 애플리케이션 개발 및 유지보수",
      technologies: ["React", "JavaScript", "CSS3", "HTML5"]
    },
    {
      id: 2,
      title: "Web Developer",
      company: "Personal Projects",
      period: "2022 - 2023",
      description: "다양한 웹 프로젝트 개발 및 학습",
      technologies: ["JavaScript", "Node.js", "Java", "Python"]
    }
  ],

  education: [
    {
      id: 1,
      degree: "Computer Science",
      school: "Self-taught Developer",
      period: "2020 - Present",
      description: "온라인 강의 및 프로젝트를 통한 지속적인 학습"
    }
  ],

  contact: {
    email: "lucestdail@gmail.com",
    github: "https://github.com/LucestDail",
    location: "Goyang, South Korea",
    message: "프로젝트 협업이나 문의사항이 있으시면 언제든 연락주세요!"
  }
};
