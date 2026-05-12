export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const navOffset = 96;
  const top = el.getBoundingClientRect().top + window.scrollY - navOffset;
  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
}
