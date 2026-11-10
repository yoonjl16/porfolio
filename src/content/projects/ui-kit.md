---
title: Mono UI Kit
summary: 접근성(WAI-ARIA)을 기본으로 한 React 컴포넌트 라이브러리. Storybook 문서와 시각 회귀 테스트 포함.
period: 2025.07 — 진행 중
role: Solo
stack: [React, TypeScript, Radix, Storybook, Vitest]
repo: https://github.com/yoonjl16
featured: true
order: 3
---

> 샘플 프로젝트입니다.

## 목표

키보드만으로 모든 컴포넌트를 조작할 수 있고, 다크 모드에서도 대비 4.5:1을 만족하는 UI 킷.

## 주요 내용

- 디자인 토큰 → CSS 변수 자동 생성
- Playwright 시각 회귀 테스트로 스타일 변경 감지
- 번들 크기 예산(컴포넌트당 3KB gzip) CI 검사
