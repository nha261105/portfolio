/** Smooth-scroll to a section and reflect it in the URL hash (without adding history entries). */
export const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  history.replaceState(null, '', `#${id}`);
};
