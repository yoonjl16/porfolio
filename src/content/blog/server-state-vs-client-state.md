---
title: 서버 상태와 클라이언트 상태를 분리하니 버그가 절반으로 줄었다
description: 전역 스토어 하나에 모든 상태를 넣던 구조를 TanStack Query 중심으로 바꾼 과정과 기준.
pubDate: 2025-10-28
tags: [react, architecture]
---

> 샘플 글입니다. `src/content/blog/` 에 마크다운 파일을 추가하면 자동으로 글이 생성됩니다.

## 문제 상황

회고 플랫폼을 만들 때 모든 상태를 하나의 전역 스토어에 넣었습니다. 서버에서 받아온 데이터와 모달 열림 여부가 같은 곳에 섞이면서 캐시 무효화 버그가 반복됐습니다.

## 기준 세우기

상태를 두 종류로 나눴습니다.

- **서버 상태**: 원본이 서버에 있고, 시간이 지나면 낡는다 → TanStack Query
- **클라이언트 상태**: 원본이 브라우저에 있다 → `useState`, 필요할 때만 Zustand

## 코드

```tsx
export function useRetro(id: string) {
  return useQuery({
    queryKey: ['retro', id],
    queryFn: () => api.retro.get(id),
    staleTime: 30_000,
  });
}
```

낙관적 업데이트는 `onMutate`에서 캐시를 먼저 바꾸고, 실패하면 롤백합니다.

```ts
onMutate: async (next) => {
  await queryClient.cancelQueries({ queryKey: ['retro', id] });
  const prev = queryClient.getQueryData(['retro', id]);
  queryClient.setQueryData(['retro', id], next);
  return { prev };
},
```

## 결과

상태 관련 이슈가 한 달 기준 14건에서 6건으로 줄었습니다. 무엇보다 "이 데이터는 어디서 오는가"를 팀 모두가 같은 기준으로 말할 수 있게 됐습니다.
