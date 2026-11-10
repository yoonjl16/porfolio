---
title: DevLog — 팀 회고 플랫폼
summary: 스프린트 회고를 템플릿화하고 액션 아이템을 추적하는 웹 서비스. 실시간 협업 편집 지원.
period: 2025.03 — 2025.06
role: Frontend Lead
stack: [Next.js, TypeScript, TanStack Query, Tailwind CSS, Supabase]
repo: https://github.com/yoonjl16
demo: https://example.com
featured: true
order: 1
---

> 샘플 프로젝트입니다. 이 파일(`src/content/projects/devlog-platform.md`)을 본인 프로젝트로 교체하세요.

## 문제

팀 회고가 노션 문서에 흩어져 있어 지난 액션 아이템이 실제로 실행됐는지 추적하기 어려웠습니다.

## 해결

- 회고 템플릿(KPT, 4L)을 선택해 바로 시작하는 흐름 설계
- Supabase Realtime으로 동시 편집, 낙관적 업데이트로 체감 지연 제거
- 액션 아이템을 다음 회고에 자동으로 이월

## 결과

| 지표 | Before | After |
| --- | --- | --- |
| 액션 아이템 완료율 | 34% | 71% |
| LCP (p75) | 2.8s | 1.2s |

## 배운 점

서버 상태와 클라이언트 상태를 분리하니 버그의 절반이 사라졌습니다. 자세한 과정은 블로그에 정리했습니다.
