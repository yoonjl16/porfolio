---
title: Algorithm Visualizer
summary: 정렬·그래프 알고리즘의 동작을 단계별로 시각화하는 학습 도구. Canvas 기반 60fps 렌더링.
period: 2024.03 — 2024.05
role: Solo
stack: [TypeScript, Canvas API, Vite]
repo: https://github.com/yoonjl16
featured: true
order: 4
---

> 샘플 프로젝트입니다.

## 개요

자료구조 수업에서 알고리즘을 머릿속으로만 따라가기 어려웠던 경험에서 출발했습니다.

## 구현 포인트

- 알고리즘을 제너레이터 함수로 작성해 단계별 일시정지/되감기 구현
- `requestAnimationFrame` 기반 렌더 루프로 1만 개 원소에서도 60fps 유지
