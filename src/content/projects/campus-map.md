---
title: Campus Map
summary: 강의실·편의시설 위치를 검색하고 실내 경로를 안내하는 교내 지도 PWA. 월간 사용자 1,200명.
period: 2024.09 — 2024.12
role: Full-stack
stack: [React, Vite, NestJS, PostgreSQL, PWA]
repo: https://github.com/yoonjl16
featured: true
order: 2
---

> 샘플 프로젝트입니다.

## 개요

신입생이 강의실을 찾지 못해 지각하는 문제를 해결하기 위해 시작했습니다.

## 기술적 의사결정

- **PWA + 오프라인 캐시**: 지하 강의실처럼 네트워크가 약한 곳에서도 동작
- **PostGIS 대신 그래프 탐색**: 실내 경로는 층/계단 노드 그래프로 단순화해 다익스트라로 계산

## 회고

초기에 검색 정확도보다 속도에 집중한 것이 사용자 유지에 더 효과적이었습니다.
