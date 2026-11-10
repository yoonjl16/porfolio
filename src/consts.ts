// ─────────────────────────────────────────────────────────────
// 사이트 전역 정보. TODO: 본인 정보로 교체하세요.
// ─────────────────────────────────────────────────────────────

export const SITE = {
  title: '이윤지 — AI Researcher',
  description: '더 나은 삶, 사용자의 개인화를 위한 AI 연구자',
  lang: 'ko',
};

export const PROFILE = {
  name: '이윤지',
  role: 'AI Researcher · ML Engineer',
  location: 'Incheon, KR',
  available: true, // 구직 중 배지 표시 여부
  headline: '모두의 일상을 위한\n개인화된 AI를 연구합니다',
  intro:
    '추천 시스템과 Vision 위주의 인공지능을 연구하고 서비스를 제작합니다.',
  email: 'world.yoonjl@gmail.com',
  github: 'https://github.com/yoonjl23',
  linkedin: 'https://www.linkedin.com/in/%EC%9C%A4%EC%A7%80-%EC%9D%B4-14766044a/',
  resume: '', // PDF 링크가 있으면 입력 (예: '/porfolio/resume.pdf')
};

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
];

export const SKILLS = [
  { group: 'AI / ML', items: ['Tensorflow', 'PyTorch', 'OpenCV', 'Transformer', 'CNN','YOLO', 'scikit-learn'] },
  { group: 'RecSys', items: ['협업 필터링', 'Pandas', 'NDCG@k', 'HitRate@k'] },
  { group: 'Frontend', items: ['React', 'TypeScript',  'Tailwind CSS'] },
  { group: 'Tooling', items: ['Git', 'Python', 'Docker', 'Colab',], },
];

export const EXPERIENCE: {
  period: string;
  title: string;
  org: string;
  summary: string;
}[] = [
  {
    period: '2026',
    title: '교내 캡스톤 프로젝트 리드',
    org: 'Capstone Project Lead',
    summary: '캡스톤 프로젝트 수상',
  },
  {
    period: '2025 - 현재',
    title: '학부연구생 활동',
    org: 'Network System Lab',
    summary: '논문 1건 발표',
  },
  {
    period: '2023-2027',
    title: '인공지능 동아리 활동',
    org: 'University Club SSF',
    summary: '',
  },
  {
    period: '2023 — 2027',
    title: '인공지능 학사',
    org: 'Kyonggi University',
    summary: '자료구조, 운영체제, 데이터베이스, 소프트웨어 공학 전공.',
  },
];
