import { FiArrowUp } from 'react-icons/fi';
import { personalInfo } from '../../constants/data';

const Footer = () => (
  <footer className="flex flex-col sm:flex-row items-center justify-between gap-3 px-2 py-6 text-sm text-subtle">
    <p>
      © {new Date().getFullYear()} {personalInfo.name} ({personalInfo.nickname}) · Built with React &amp; Tailwind CSS
    </p>
    <button
      type="button"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        history.replaceState(null, '', window.location.pathname);
      }}
      className="inline-flex items-center gap-1.5 hover:text-fg transition-colors"
    >
      Back to top <FiArrowUp />
    </button>
  </footer>
);

export default Footer;
