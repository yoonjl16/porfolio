import { getCollection } from 'astro:content';

/** base 경로(/porfolio)를 붙인 내부 링크 */
export function url(path = '/') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${base}${p}` || '/';
}

export function formatDate(date: Date) {
  return date.toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' })
    .replace(/\.\s?/g, '.').replace(/\.$/, '');
}

export async function getPosts() {
  const posts = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getProjects() {
  const projects = await getCollection('projects');
  return projects.sort((a, b) => a.data.order - b.data.order);
}

export function readingTime(body = '') {
  const chars = body.replace(/```[\s\S]*?```/g, '').length;
  return Math.max(1, Math.round(chars / 500)); // 한국어 기준 약 500자/분
}
