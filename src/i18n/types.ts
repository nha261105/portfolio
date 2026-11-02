export type Lang = 'en' | 'vi';

/** A piece of user-facing text in every supported language. */
export type L = Record<Lang, string>;

/** Accepts plain strings (same in every language) or localized text. */
export type Text = string | L;

export const translate = (lang: Lang, value: Text): string =>
  typeof value === 'string' ? value : value[lang];
