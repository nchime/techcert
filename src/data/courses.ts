export type Course = {
  id: string;
  step: string;
  provider: string;
  title: string;
  tagline: string;
  accent: string;
  accentInk: string;
  accentSoft: string;
  duration: string;
  durationNote: string;
  language: string;
  level: string;
  credential: string;
  credentialNote: string;
  description: string;
  highlights: string[];
  steps: { label: string; detail: string }[];
  links: { label: string; url: string; primary?: boolean }[];
};

export const courses: Course[] = [
  {
    id: "anthropic",
    step: "01",
    provider: "Anthropic",
    title: "AI Fluency: Framework & Foundations",
    tagline: "가장 빠르게 수료증 받기",
    accent: "#D97757",
    accentInk: "#A34A2A",
    accentSoft: "rgba(217,119,87,0.14)",
    duration: "3–4시간",
    durationNote: "14개 강의 · 영상 약 1.1시간 + 최종 퀴즈",
    language: "영문",
    level: "입문",
    credential: "수료증 (Certificate of Completion)",
    credentialNote: "최종 퀴즈 통과 시 발급",
    description:
      "AI와 효과적이고 안전하게 협업하는 4D 프레임워크(Delegation · Description · Discernment · Diligence)를 배우는 Anthropic 공식 무료 강의입니다. 비개발자도 바로 시작할 수 있는 첫 인증서로 가장 추천합니다.",
    highlights: [
      "Anthropic 공식 아카데미 · Skilljar 호스팅",
      "계정 생성만으로 무료 수강",
      "프롬프트 · AI 활용 윤리까지 한 번에",
    ],
    steps: [
      { label: "강의 페이지 접속", detail: "Skilljar 회원 가입 (이메일만 필요)" },
      { label: "14개 강의 수강", detail: "약 1.1시간 분량 영상 + 자료" },
      { label: "최종 퀴즈 응시", detail: "정답 기준 통과 시 인증서 발급" },
      { label: "수료증 다운로드", detail: "PDF 저장 후 이력서 · LinkedIn 첨부" },
    ],
    links: [
      { label: "무료 수강 신청", url: "https://www.anthropic.com/ai-fluency", primary: true },
      { label: "과정 상세 커리큘럼", url: "https://www.anthropic.com/ai-fluency/deep-dive-1-what-is-generative-ai" },
    ],
  },
  {
    id: "databricks",
    step: "02",
    provider: "Databricks",
    title: "Generative AI Fundamentals",
    tagline: "한국어 지원 · 공식 배지",
    accent: "#FF3621",
    accentInk: "#C21507",
    accentSoft: "rgba(255,54,33,0.14)",
    duration: "약 1시간",
    durationNote: "학습 영상 후 20분 평가 · 합격선 80%",
    language: "영문 / 한국어",
    level: "입문",
    credential: "Databricks 공식 배지",
    credentialNote: "Accredited 배지 · 만료일 없음",
    description:
      "생성형 AI의 핵심 개념, 활용 기회 발굴, 거버넌스, Databricks 위 구현까지 정리한 뒤 짧은 평가를 통과하면 공식 배지가 발급됩니다. 한국어 버전 과정도 제공되어 접근성이 뛰어납니다.",
    highlights: [
      "한국어(KR) 전용 과정 제공",
      "합격 시 LinkedIn에 배지 바로 등록",
      "평가 통과 시 무기한 유효 배지",
    ],
    steps: [
      { label: "한국어 과정 선택", detail: "Databricks Academy 무료 등록" },
      { label: "학습 영상 시청", detail: "약 1시간 분량 · 온디맨드" },
      { label: "배지 평가 응시", detail: "20분 퀴즈 · 80% 이상 통과" },
      { label: "배지 수령", detail: "credentials.databricks.com 공유 링크 획득" },
    ],
    links: [
      {
        label: "한국어 과정 바로가기",
        url: "https://www.databricks.com/kr/training/catalog/generative-ai-fundamentals-accreditation-korean-2784",
        primary: true,
      },
      { label: "영문 과정 · 배지 안내", url: "https://www.databricks.com/learn/training/generative-ai-fundamentals-accreditation" },
    ],
  },
  {
    id: "huggingface",
    step: "03",
    provider: "Hugging Face",
    title: "AI Agents Course",
    tagline: "실습 중심 · Python",
    accent: "#FFD21E",
    accentInk: "#7A6000",
    accentSoft: "rgba(255,210,30,0.14)",
    duration: "주말 1–2일",
    durationNote: "자기주도 · 유닛별 실습 + 퀴즈",
    language: "영문",
    level: "입문 → 중급",
    credential: "유닛별 Certificate",
    credentialNote: "Fundamentals of Agents 등 수료 기록",
    description:
      "Python으로 AI 에이전트를 직접 만들고 배포까지 해보는 실습형 무료 코스입니다. 유닛마다 퀴즈를 통과할 때마다 수료 기록이 쌓여, 포트폴리오용 증거로 활용하기 좋습니다.",
    highlights: [
      "실제 에이전트 구축 · 배포 실습",
      "유닛별 퀴즈 → 단계별 수료증",
      "Hugging Face 계정 하나로 시작",
    ],
    steps: [
      { label: "코스 소개 페이지 접속", detail: "Hugging Face 계정으로 로그인" },
      { label: "유닛별 학습 · 실습", detail: "이론 → 도구 사용 → 에이전트 구축" },
      { label: "유닛 퀴즈 통과", detail: "단계별 Certificate 획득" },
      { label: "최종 과제 제출", detail: "수료 기록을 프로필 · 이력서에 표기" },
    ],
    links: [
      { label: "코스 시작하기", url: "https://huggingface.co/learn/agents-course/unit0/introduction", primary: true },
      { label: "코스 홈 · 전체 커리큘럼", url: "https://huggingface.co/learn" },
    ],
  },
  {
    id: "google",
    step: "04",
    provider: "Google",
    title: "Google Skills — Skill Badges",
    tagline: "Vertex AI · Gemini · 프롬프트",
    accent: "#4285F4",
    accentInk: "#1A56C7",
    accentSoft: "rgba(66,133,244,0.14)",
    duration: "1–4시간 / 배지",
    durationNote: "랩 기반 · 도전랩으로 조기 취득 가능",
    language: "영문 (일부 한국어)",
    level: "입문 → 중급",
    credential: "Skill Badge · Certificate",
    credentialNote: "공개 프로필 URL로 공유",
    description:
      "Google AI Studio · Gemini · Vertex AI · 프롬프트 디자인 등 클라우드/AI 랩을 완료하면 Skill Badge가 발급됩니다. 도전랩(Challenge Lab)만 통과해도 배지를 빠르게 획득할 수 있습니다.",
    highlights: [
      "무료 크레딧 기반 실습 랩 제공",
      "Prompt Design · Generative AI 배지 다수",
      "배지별 공개 프로필 링크 생성",
    ],
    steps: [
      { label: "Google Skills 가입", detail: "Google 계정으로 로그인" },
      { label: "배지 과정 선택", detail: "Prompt Design · Generative AI 등" },
      { label: "랩 · 도전랩 완주", detail: "진도 체크포인트 100% 달성" },
      { label: "배지 획득 · 공유", detail: "프로필 배지 URL 복사해 LinkedIn 게시" },
    ],
    links: [
      { label: "Google Skills 시작", url: "https://www.cloudskillsboost.google/", primary: true },
      { label: "Prompt Design 배지", url: "https://www.cloudskillsboost.google/course_templates/976" },
      { label: "Google AI Studio: Prompt Design", url: "https://www.skills.google/focuses/129386" },
    ],
  },
  {
    id: "microsoft",
    step: "05",
    provider: "Microsoft Learn",
    title: "Applied Skills — AI 크레덴셜",
    tagline: "시험비 0원 · 재응시 무료",
    accent: "#0078D4",
    accentInk: "#005A9E",
    accentSoft: "rgba(0,120,212,0.14)",
    duration: "2–4시간",
    durationNote: "학습 경로 + 30–45분 랩 평가",
    language: "영문 (한국어 UI)",
    level: "입문 → 중급",
    credential: "Microsoft Applied Skills credential",
    credentialNote: "Learn 프로필 · 공유 URL · Transcript에 표기",
    description:
      "Microsoft Learn의 준비 학습 경로를 마친 뒤, 브라우저에서 바로 진행하는 랩 평가를 통과하면 Applied Skills 크레덴셜이 발급됩니다. 시험비·고사장 없이 0원이며, AI 에이전트 · Copilot · 보고서 자동화 등 AI 관련 크레덴셜이 현재 35종 운영 중입니다. 다만 카탈로그가 자주 교체되므로 목록 링크로 최신 항목을 확인하세요.",
    highlights: [
      "랩 평가 무료 · 72시간 후 무제한 재응시",
      "프로모터 없이 브라우저 랩으로 진행",
      "공유 URL로 이력서 · LinkedIn 검증",
    ],
    steps: [
      { label: "크레덴셜 선택", detail: "Applied Skills 목록에서 AI 관련 항목 확인" },
      { label: "학습 경로 수강", detail: "준비 모듈 약 1~4시간 · 온디맨드" },
      { label: "랩 평가 응시", detail: "입문 30분 / 중급 45분 · 통과 시 즉시 안내" },
      { label: "크레덴셜 공유", detail: "Learn 프로필 → Credential share URL 복사" },
    ],
    links: [
      {
        label: "AI 크레덴셜 무료 응시",
        url: "https://learn.microsoft.com/en-us/credentials/applied-skills/generate-reports-with-ai-research-agents/",
        primary: true,
      },
      { label: "Applied Skills 전체 목록", url: "https://learn.microsoft.com/en-us/credentials/browse/?credential_types=applied%20skills" },
    ],
  },
  {
    id: "ibm",
    step: "06",
    provider: "IBM",
    title: "AI Fundamentals — SkillsBuild & Coursera",
    tagline: "배지 취득 + 무료 감사 병행",
    accent: "#0F62FE",
    accentInk: "#0043CE",
    accentSoft: "rgba(15,98,254,0.14)",
    duration: "약 10시간",
    durationNote: "6개 강의 완주 · Coursera는 14시간",
    language: "영문 (일부 스페인어 · 포르투갈어)",
    level: "입문",
    credential: "IBM 디지털 크레덴셜 (Credly 배지)",
    credentialNote: "SkillsBuild 완주 시 발급 · Coursera는 감사만 무료",
    description:
      "IBM SkillsBuild의 Artificial Intelligence Fundamentals(6개 강의 · 약 10시간)를 완주하면 IBM 브랜드 디지털 크레덴셜이 발급됩니다. 같은 주제를 Coursera의 IBM 공식 강의로 무료 감사(수강만)할 수도 있으며, 감사 모드에서는 수료증이 나오지 않는 점이 다릅니다.",
    highlights: [
      "SkillsBuild 가입만으로 전액 무료",
      "완주 시 Credly 배지 발급",
      "Coursera 감사로 강의 자료 별도 확보",
    ],
    steps: [
      { label: "SkillsBuild 가입", detail: "이메일 · 국가 정보만으로 등록" },
      { label: "AI Fundamentals 수강", detail: "6개 강의 · 약 10시간 완주" },
      { label: "크레덴셜 획득", detail: "IBM 디지털 크레덴셜 → Credly 배지" },
      { label: "Coursera 병행 (선택)", detail: "Introduction to AI 무료 감사" },
    ],
    links: [
      { label: "SkillsBuild 무료 수강", url: "https://skillsbuild.org/adult-learners/explore-learning/artificial-intelligence", primary: true },
      { label: "Coursera: Introduction to AI", url: "https://www.coursera.org/learn/introduction-to-ai" },
      { label: "SkillsBuild 전체 카탈로그", url: "https://skillsbuild.org/learning-catalog" },
    ],
  },
  {
    id: "nvidia",
    step: "07",
    provider: "NVIDIA",
    title: "DLI 무료 Self-Paced Courses",
    tagline: "GPU 실습 랩 · 수료증",
    accent: "#76B900",
    accentInk: "#3E6B00",
    accentSoft: "rgba(118,185,0,0.14)",
    duration: "1–4시간 / 과정",
    durationNote: "무료 과정 11종 · 영문 기준",
    language: "영문",
    level: "입문 → 중급",
    credential: "NVIDIA DLI 수료증 (Certificate of Competency)",
    credentialNote: "평가 통과 시 발급 · NVIDIA 계정 연동",
    description:
      "NVIDIA Deep Learning Institute의 무료 셀프페이스 과정으로, 클라우드 GPU 워크스테이션이 포함된 실습 랩을 0원으로 사용할 수 있습니다. 무료 과정 중 수료증이 나오는 대표 과정은 'Securing Agents with NemoClaw and OpenShell'(4시간)이며, 무료 카탈로그는 시즌마다 구성이 바뀝니다.",
    highlights: [
      "클라우드 GPU 실습 환경 무료 제공",
      "이수 시 NVIDIA 공식 수료증",
      "로그인 후 바로 수강 · 한국 결제 불필요",
    ],
    steps: [
      { label: "NVIDIA 계정 로그인", detail: "learn.nvidia.com 접속 후 enroll" },
      { label: "무료 과정 선택", detail: "Find Training에서 Free 필터 적용" },
      { label: "실습 랩 완주", detail: "클라우드 GPU 워크스테이션 · 세션 16시간 한도" },
      { label: "평가 통과 → 수료증", detail: "수료증 다운로드 후 LinkedIn 첨부" },
    ],
    links: [
      {
        label: "무료 수강 신청",
        url: "https://learn.nvidia.com/courses/course-detail?course_id=course-v1%3ADLI%2BS-FX-43%2BV1",
        primary: true,
      },
      { label: "전체 무료 과정 목록", url: "https://www.nvidia.com/en-us/training/find-training/?Free+Courses=Free" },
    ],
  },
  {
    id: "openai",
    step: "08",
    provider: "OpenAI Academy",
    title: "무료 수료증 과정 (14종)",
    tagline: "ChatGPT 계정만으로 시작",
    accent: "#5B6CFF",
    accentInk: "#3A4BD8",
    accentSoft: "rgba(91,108,255,0.14)",
    duration: "45분–3시간 / 과정",
    durationNote: "전체 14개 과정 · 패스웨이 3종",
    language: "영문",
    level: "입문 → 중급",
    credential: "Course Completion Certificate · 배지",
    credentialNote:
      "과정보수료증 + 평가 80% 이상 시 Accredible 배지 · Foundations · Codex · API 패스웨이 완주 시 패스웨이 수료증",
    description:
      "OpenAI가 직접 만든 무료 자기주도 과정 14종입니다. 과정을 완주하면 수료증(Course Completion Certificate)이 발급되고, 이어서 평가(10–20문항)를 80% 이상 통과하면 Accredible 배지가 함께 붙습니다. Foundations · Codex · API 패스웨이의 모든 과정과 평가를 마치면 패스웨이 수료증까지 받을 수 있습니다.",
    highlights: [
      "ChatGPT 계정만으로 무료 · 워크스페이스 불필요",
      "과정보수료증 + 평가 80% 이상 배지",
      "Foundations · Codex · API 패스웨이 수료증",
    ],
    steps: [
      { label: "Academy 접속 · 로그인", detail: "ChatGPT 계정으로 로그인하면 진도가 저장됩니다" },
      { label: "과정 선택 · Enroll", detail: "AI Foundations 60–75분부터 시작하기" },
      { label: "완주 + 평가 응시", detail: "10–20문항 · 80% 이상 통과 (불합격 시 재응시)" },
      { label: "수료증 · 배지 수령", detail: "Accredible 배지 → LinkedIn 공유 · 패스웨이 3종 완주 선택" },
    ],
    links: [
      { label: "무료 수강 신청", url: "https://academy.openai.com/pages/courses", primary: true },
      {
        label: "수료증 · 배지 조건 (공식)",
        url: "https://help.openai.com/en/articles/20001270-openai-academy-courses",
      },
    ],
  },
];

export const roadmap = [
  { id: "anthropic", day: "DAY 1", course: "Anthropic AI Fluency", note: "영상 시청 + 퀴즈로 첫 수료증 획득", time: "3–4시간" },
  { id: "databricks", day: "DAY 2", course: "Databricks Gen AI Fundamentals", note: "한국어 과정으로 배지까지 원샷", time: "약 1시간" },
  { id: "google", day: "DAY 3–4", course: "Google Skills Skill Badge", note: "Prompt Design 배지부터 공략", time: "3–4시간" },
  { id: "huggingface", day: "주말", course: "Hugging Face AI Agents", note: "실습 몰입 → 유닛별 수료 기록", time: "6–10시간" },
  { id: "microsoft", day: "DAY 5", course: "Microsoft Applied Skills", note: "짧은 랩 평가로 MS 크레덴셜 확보", time: "2–4시간" },
  { id: "ibm", day: "DAY 6–7", course: "IBM SkillsBuild AI Fundamentals", note: "6개 강의 완주 → IBM 디지털 크레덴셜", time: "약 10시간" },
  { id: "nvidia", day: "주말 2", course: "NVIDIA DLI 무료 과정", note: "GPU 랩 완주 → NVIDIA 수료증", time: "4시간" },
  { id: "openai", day: "DAY 8", course: "OpenAI Academy 수료증", note: "ChatGPT 계정으로 과정 완주 → 수료증 · 배지", time: "45분–3시간" },
];

export const faqs = [
  {
    q: "정말 비용이 0원인가요?",
    a: "네. 8개 과정 모두 수강 · 평가 · 배지 발급까지 무료입니다. 유료 전환 없이 수료증과 배지를 그대로 받을 수 있습니다. OpenAI Academy도 무료 ChatGPT 계정만 있으면 전 세계 어디서나 수강할 수 있습니다. 단, Coursera와 같은 플랫폼에서 수료증(공유 인증서)이 필요한 경우 해당 플랫폼의 유료 구독이나 재정 지원 신청이 별도로 필요할 수 있습니다.",
  },
  {
    q: "배지 · 수료증은 얼마나 유효한가요?",
    a: "Databricks 배지는 만료일이 없고, Anthropic 수료증과 Hugging Face 수료 기록도 재발급 기간 제한 없이 보관됩니다. Google · IBM · Microsoft · NVIDIA의 배지와 크레덴셜도 프로필에 지속 표시됩니다.",
  },
  {
    q: "어떤 순서로 들으면 좋나요?",
    a: "가장 빠른 Anthropic 수료증으로 동기를 확보하고, 한국어 지원 Databricks로 배지를 더한 뒤, Microsoft · IBM 크레덴셜을 채운 후 실습형 Google · Hugging Face · NVIDIA로 이력서용 포트폴리오를 완성하는 순서를 추천합니다.",
  },
  {
    q: "영어가 부족해도 가능한가요?",
    a: "Databricks는 한국어 과정이 준비되어 있고, 나머지는 번역 확장 기능이나 AI 번역을 함께 사용하면 충분히 완주할 수 있는 난이도입니다. 단, Microsoft 랩 평가와 NVIDIA 실습은 영문 기준이므로 평가 화면은 영어로 제공됩니다.",
  },
  {
    q: "ChatGPT 유료 요금제(Plus)가 필요한가요?",
    a: "아니요. OpenAI Academy는 무료 ChatGPT 계정만 있으면 수강할 수 있으며 워크스페이스 멤버십도 필요 없습니다. 진도와 배지는 로그인한 계정 이메일에 저장되므로, 처음 시작할 때 쓸 계정으로 로그인하는 것이 중요합니다.",
  },
];
