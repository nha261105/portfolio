/** Base surface style shared by every card on the page. */
export const cardClass =
  'rounded-2xl border border-line bg-surface shadow-sm shadow-black/[0.03] transition-colors duration-300';

/** Card that reacts to hover (links, interactive tiles). */
export const cardHoverClass = 'hover:border-accent/40 hover:bg-surface-2';

/** Small pill / chip used for tags and tech labels. */
export const chipClass =
  'inline-flex items-center gap-1.5 rounded-full border border-line bg-surface-2 px-2.5 py-0.5 text-xs text-muted';
