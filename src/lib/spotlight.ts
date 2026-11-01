import type { MouseEvent } from 'react';

/** Feeds the cursor position to the `.spotlight` CSS glow (see index.css). */
export const trackSpotlight = (e: MouseEvent<HTMLElement>) => {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
  el.style.setProperty('--my', `${e.clientY - rect.top}px`);
};
