import type { Lang } from './types';

/** Interface strings (labels, buttons, headings). Content lives in constants/data.ts. */
const en = {
  nav: { about: 'About', resume: 'Resume', projects: 'Projects', contact: 'Contact' },
  section: { about: 'About Me', resume: 'Resume', projects: 'Projects', contact: 'Contact' },
  about: { whatIDo: "What I'm doing", beyondCode: 'Beyond code' },
  resume: { experience: 'Experience', education: 'Education', techStack: 'Tech Stack', concepts: 'Concepts' },
  techGroup: {
    Languages: 'Languages',
    Backend: 'Backend',
    Frontend: 'Frontend',
    Database: 'Database',
    'DevOps & Tools': 'DevOps & Tools',
  },
  projects: {
    filterLabel: 'Filter projects',
    all: 'All',
    viewDetails: 'View details',
    problem: 'Problem',
    solution: 'Solution',
    highlights: 'Highlights',
    roadmap: 'Next steps',
    architecture: 'Architecture',
    planned: 'planned',
    liveDemo: 'Live demo',
    close: 'Close',
    screenshot: 'screenshot',
    diagramLabel: 'architecture diagram',
    status: { completed: 'Completed', 'in-progress': 'In progress', 'early-stage': 'Early stage' },
  },
  contact: {
    title: "Let's work together",
    subtitle: 'Have a role, a project or just a question about software systems? My inbox is always open.',
    copyEmail: 'Copy email address',
    copied: 'Email copied to clipboard!',
    sayHello: 'Say hello',
    messageMe: 'Message me',
  },
  sidebar: {
    email: 'Email',
    location: 'Location',
    downloadCv: 'Download CV',
    showContacts: 'Show contacts',
    hideContacts: 'Hide contacts',
  },
  footer: { builtWith: 'Built with React & Tailwind CSS', backToTop: 'Back to top' },
  theme: { toLight: 'Switch to light mode', toDark: 'Switch to dark mode', light: 'Light mode', dark: 'Dark mode' },
  language: { label: 'Language', switchTo: 'Chuyển sang tiếng Việt' },
  sectionsNav: 'Sections',
};

export type UIStrings = typeof en;

const vi: UIStrings = {
  nav: { about: 'Giới thiệu', resume: 'Hồ sơ', projects: 'Dự án', contact: 'Liên hệ' },
  section: { about: 'Giới thiệu', resume: 'Hồ sơ', projects: 'Dự án', contact: 'Liên hệ' },
  about: { whatIDo: 'Công việc của tôi', beyondCode: 'Ngoài code' },
  resume: { experience: 'Kinh nghiệm', education: 'Học vấn', techStack: 'Công nghệ', concepts: 'Khái niệm' },
  techGroup: {
    Languages: 'Ngôn ngữ',
    Backend: 'Backend',
    Frontend: 'Frontend',
    Database: 'Cơ sở dữ liệu',
    'DevOps & Tools': 'DevOps & Công cụ',
  },
  projects: {
    filterLabel: 'Lọc dự án',
    all: 'Tất cả',
    viewDetails: 'Xem chi tiết',
    problem: 'Vấn đề',
    solution: 'Giải pháp',
    highlights: 'Điểm nổi bật',
    roadmap: 'Dự định tiếp theo',
    architecture: 'Kiến trúc',
    planned: 'dự định',
    liveDemo: 'Bản demo',
    close: 'Đóng',
    screenshot: 'ảnh chụp màn hình',
    diagramLabel: 'sơ đồ kiến trúc',
    status: { completed: 'Hoàn thành', 'in-progress': 'Đang phát triển', 'early-stage': 'Giai đoạn đầu' },
  },
  contact: {
    title: 'Cùng làm việc nhé',
    subtitle: 'Bạn có vị trí tuyển dụng, một dự án hay chỉ muốn trao đổi về hệ thống phần mềm? Cứ nhắn cho tôi.',
    copyEmail: 'Sao chép địa chỉ email',
    copied: 'Đã sao chép email!',
    sayHello: 'Gửi email',
    messageMe: 'Nhắn tin',
  },
  sidebar: {
    email: 'Email',
    location: 'Địa chỉ',
    downloadCv: 'Tải CV',
    showContacts: 'Hiện thông tin liên hệ',
    hideContacts: 'Ẩn thông tin liên hệ',
  },
  footer: { builtWith: 'Xây dựng bằng React & Tailwind CSS', backToTop: 'Lên đầu trang' },
  theme: { toLight: 'Chuyển sang giao diện sáng', toDark: 'Chuyển sang giao diện tối', light: 'Giao diện sáng', dark: 'Giao diện tối' },
  language: { label: 'Ngôn ngữ', switchTo: 'Switch to English' },
  sectionsNav: 'Các mục',
};

export const ui: Record<Lang, UIStrings> = { en, vi };
