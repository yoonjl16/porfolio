# porfolio

개발자 포트폴리오 & 기술 블로그. **Astro 7 · Tailwind CSS v4 · MDX · TypeScript**, GitHub Pages 배포.

## 실행

```bash
npm install
npm run dev      # http://localhost:4321/porfolio
npm run build    # dist/ 생성
```

## 수정할 곳

| 무엇 | 위치 |
| --- | --- |
| 이름, 소개, 링크, 기술 스택, 경력 | `src/consts.ts` |
| 블로그 글 | `src/content/blog/*.md(x)` |
| 프로젝트 | `src/content/projects/*.md(x)` (`featured: true` 면 홈에 노출) |
| 색상·폰트 토큰 | `src/styles/global.css` |
| 사이트 주소 / base 경로 | `astro.config.mjs` |

## 배포 (GitHub Pages)

1. GitHub 저장소 → **Settings → Pages → Source: GitHub Actions** 선택
2. `main` 브랜치에 push 하면 `.github/workflows/deploy.yml` 이 자동 배포
3. 주소: `https://yoonjl16.github.io/porfolio/`

저장소 이름을 `yoonjl16.github.io` 로 바꾸면 `astro.config.mjs` 의 `base` 를 `'/'` 로 변경하세요.

## 기능

- 라이트/다크 모드 (시스템 설정 연동 + 수동 전환)
- View Transitions 페이지 전환
- 블로그 태그, 목차, 읽기 시간, 이전/다음 글
- Shiki 코드 하이라이팅 (라이트/다크 테마)
- RSS, sitemap, Open Graph 메타 태그
- 접근성: 스킵 링크, 키보드 포커스 링, `prefers-reduced-motion` 대응
