# porfolio

개발자 포트폴리오. **Astro 7 · Tailwind CSS v4 · TypeScript**, GitHub Pages 배포.

사이트: https://yoonjl16.github.io/porfolio/

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
| 프로젝트 | `src/content/projects/*.md` (`featured: true` 면 홈에 노출) |
| About 페이지 소개글 | `src/pages/about.astro` |
| 색상·폰트 토큰 | `src/styles/global.css` |
| 사이트 주소 / base 경로 | `astro.config.mjs` |

## 배포 (GitHub Pages)

1. GitHub 저장소 → **Settings → Pages → Source: GitHub Actions** (Custom domain 은 비워두기)
2. `main` 브랜치에 push 하면 `.github/workflows/deploy.yml` 이 자동 배포

저장소 이름을 `yoonjl16.github.io` 로 바꾸면 `astro.config.mjs` 의 `base` 를 `'/'` 로 변경하세요.
