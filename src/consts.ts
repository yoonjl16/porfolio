// ─────────────────────────────────────────────────────────────
// 사이트 전역 정보. TODO: 본인 정보로 교체하세요.
// ─────────────────────────────────────────────────────────────

export const SITE = {
  title: '홍길동 — Frontend Developer',
  description: '사용자 경험과 성능을 함께 고민하는 프론트엔드 개발자의 포트폴리오 & 기술 블로그',
  lang: 'ko',
};

export const PROFILE = {
  name: '홍길동',
  role: 'Frontend Developer',
  location: 'Seoul, KR',
  available: true, // 구직 중 배지 표시 여부
  headline: '읽기 쉬운 코드와\n빠른 인터페이스를 만듭니다.',
  intro:
    'React와 TypeScript로 웹 서비스를 만들고 있습니다. 문제를 작게 쪼개고, 측정 가능한 개선을 쌓아가는 것을 좋아합니다. 배운 것은 이 블로그에 기록합니다.',
  email: 'hello@example.com',
  github: 'https://github.com/yoonjl16',
  linkedin: 'https://www.linkedin.com/',
  resume: '', // PDF 링크가 있으면 입력 (예: '/porfolio/resume.pdf')
};

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
];

export const SKILLS: { group: string; items: string[] }[] = [
  { group: 'Language', items: ['TypeScript', 'JavaScript', 'Python'] },
  { group: 'Frontend', items: ['React', 'Next.js', 'Astro', 'Tailwind CSS', 'TanStack Query'] },
  { group: 'Backend', items: ['Node.js', 'NestJS', 'PostgreSQL'] },
  { group: 'Tooling', items: ['Vite', 'Vitest', 'Playwright', 'GitHub Actions', 'Docker'] },
];

export const EXPERIENCE: {
  period: string;
  title: string;
  org: string;
  summary: string;
}[] = [
  {
    period: '2025 — 현재',
    title: 'Frontend Developer Intern',
    org: 'Company A',
    summary: '디자인 시스템 컴포넌트 20+개 구축, 주요 페이지 LCP 3.1s → 1.4s 개선.',
  },
  {
    period: '2024',
    title: '웹 개발 동아리 리드',
    org: 'University Club',
    summary: '5인 팀 리딩, 교내 서비스 2건 출시 및 월간 사용자 1,200명 달성.',
  },
  {
    period: '2020 — 2025',
    title: '컴퓨터공학 학사',
    org: 'OO University',
    summary: '자료구조, 운영체제, 데이터베이스, 소프트웨어 공학 전공.',
  },
];
