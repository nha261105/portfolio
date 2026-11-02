import { FiArrowUp } from 'react-icons/fi';
import { personalInfo } from '../../constants/data';
import { useLang } from '../../i18n/context';

const Footer = () => {
  const { ui } = useLang();

  return (
    <footer className="flex flex-col sm:flex-row items-center justify-between gap-3 px-2 py-6 text-sm text-subtle">
      <p>
        © {new Date().getFullYear()} {personalInfo.name} ({personalInfo.nickname}) · {ui.footer.builtWith}
      </p>
      <button
        type="button"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          history.replaceState(null, '', window.location.pathname);
        }}
        className="inline-flex items-center gap-1.5 hover:text-fg transition-colors"
      >
        {ui.footer.backToTop} <FiArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
