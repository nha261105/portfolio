/**
 * All site content. Text shown to visitors is written in both languages: { en: '…', vi: '…' }.
 * Plain strings (names, tech, URLs) are the same in every language.
 */
import type { L } from '../i18n/types';
import type { DiagramSpec } from './diagrams';
import { examSlotDiagram, harnessDiagram, interactHubDiagram, papersDiagram, smartDocDiagram } from './diagrams';

import meJpg from '../assets/me.jpg';
import cvPdf from '../assets/CV_Nguyen_Hoang_Anh.pdf';
import imgSmartDocAI from '../assets/img_SmartDocAI.png';

// ---------------------------------------------------------------- types

export type SectionId = 'about' | 'experience' | 'projects' | 'skills' | 'contact';

export type TechGroup = 'Languages' | 'Backend' | 'Frontend' | 'Database' | 'DevOps & Tools';

export type ProjectStatus = 'completed' | 'in-progress' | 'early-stage';

export interface Project {
  id: number;
  name: string;
  tagline: L;
  period: L;
  team: L;
  status: ProjectStatus;
  problem: L;
  solution: L;
  highlights: L[];
  /** Planned work, shown as "Next steps" */
  roadmap?: L[];
  tech: string[];
  github: string;
  demo: string | null;
  image: string | null;
  diagram: DiagramSpec;
  /** Main language — used by the project filter */
  stack: string;
}

export interface TechItem {
  name: string;
  /** Highlighted as a main skill */
  primary: boolean;
  icon: string;
  group: TechGroup;
}

export interface Service {
  icon: 'server' | 'layers' | 'cpu' | 'code';
  title: L;
  description: L;
}

export interface ExperienceGroup {
  /** Project or area the bullets belong to */
  title: L;
  /** One line of context: my role, the client type, the stack */
  sub?: L;
  items: L[];
}

export interface ExperienceItem {
  company: string;
  role: L;
  period: L;
  location?: L;
  url?: string;
  highlights: L[];
  /** Bullets grouped by project; shown after `highlights` */
  groups?: ExperienceGroup[];
  /** Small print under the entry, e.g. NDA */
  note?: L;
  tech: string[];
}

export interface InterestTag {
  iconClass: string | null;
  label: string;
  url: string;
}

export interface InterestItem {
  id: number;
  iconClass: string | null;
  title: L;
  description: L;
  tags: InterestTag[];
}

// ---------------------------------------------------------------- profile

export const personalInfo = {
  name: 'Nguyễn Hoàng Anh',
  nickname: 'Ryan',
  role: 'Software Engineer',
  email: 'nha261105@gmail.com',
  location: { en: 'Phu Thanh, Ho Chi Minh City', vi: 'Phú Thạnh, TP. Hồ Chí Minh' } as L,
  github: 'https://github.com/nha261105',
  linkedin: 'https://linkedin.com/in/nha261105',
  discord: 'https://discord.com/users/1058334582786752615',
  resume: cvPdf,
  avatar: meJpg,
};

export const about = {
  intro: {
    en: 'I build backend systems and LLM applications — from an exam platform built for exam-day traffic to document Q&A that respects who can read what.',
    vi: 'Tôi xây dựng hệ thống backend và ứng dụng LLM — từ nền tảng thi trực tuyến chịu được lượng truy cập ngày thi đến hệ thống hỏi đáp tài liệu tôn trọng quyền đọc của từng người.',
  } as L,
  bio: {
    en: 'Final-year Software Engineering student working at a startup on backend systems and LLM applications. I am drawn to system design and data flows, and growing toward AI engineering. I own features end to end, from design to deployment, and favour practical solutions that ship.',
    vi: 'Sinh viên năm cuối ngành Kỹ thuật Phần mềm, đang làm tại một startup về hệ thống backend và ứng dụng LLM. Tôi thích thiết kế hệ thống và các luồng dữ liệu, và đang hướng tới AI engineering. Tôi nhận một tính năng từ thiết kế đến triển khai, và ưu tiên giải pháp thực tế, ra được sản phẩm.',
  } as L,
};

export const services: Service[] = [
  {
    icon: 'server',
    title: { en: 'Backend systems', vi: 'Hệ thống backend' },
    description: {
      en: 'APIs with FastAPI and Express: auth, RBAC, caching and rate limiting that hold up in production.',
      vi: 'API với FastAPI và Express: xác thực, phân quyền, cache và rate limit chạy ổn trên production.',
    },
  },
  {
    icon: 'layers',
    title: { en: 'System design', vi: 'Thiết kế hệ thống' },
    description: {
      en: 'Finding the bottleneck in a data flow and fixing it at the source, from query counts to proxy setup.',
      vi: 'Tìm điểm nghẽn trong luồng dữ liệu và sửa tận gốc, từ số lượng query đến cấu hình proxy.',
    },
  },
  {
    icon: 'cpu',
    title: { en: 'LLM applications', vi: 'Ứng dụng LLM' },
    description: {
      en: 'RAG over company documents with permission checks, plus local LLMs when data must stay private.',
      vi: 'RAG trên tài liệu công ty có kiểm tra quyền truy cập, và LLM chạy local khi dữ liệu cần giữ riêng tư.',
    },
  },
  {
    icon: 'code',
    title: { en: 'AI-assisted delivery', vi: 'Phát triển cùng AI agent' },
    description: {
      en: 'Spec-driven work with Claude Code: guardrails, agent skills and proposals reviewed before any code.',
      vi: 'Làm việc theo spec với Claude Code: quy tắc cho agent, agent skill và đề xuất được duyệt trước khi viết code.',
    },
  },
];

// ---------------------------------------------------------------- resume

/** Work experience — the Experience timeline is hidden while this list is empty. */
export const experience: ExperienceItem[] = [
  {
    company: 'EON TECH',
    role: { en: 'AI & Technology Executive', vi: 'AI & Technology Executive' },
    period: { en: 'Dec 2026 – Present', vi: 'Từ 12/2026' },
    location: { en: 'Ho Chi Minh City', vi: 'TP. Hồ Chí Minh' },
    url: 'https://eonsr.com',
    highlights: [
      {
        en: 'Promoted to a full-time role after the internship, continuing the work below.',
        vi: 'Được nhận chính thức sau kỳ thực tập, tiếp tục các mảng việc bên dưới.',
      },
    ],
    tech: [],
  },
  {
    company: 'EON TECH',
    role: { en: 'AI & Technology Associate (Intern)', vi: 'AI & Technology Associate (Thực tập)' },
    period: { en: 'Jun – Nov 2026', vi: '06 – 11/2026' },
    location: { en: 'Ho Chi Minh City', vi: 'TP. Hồ Chí Minh' },
    url: 'https://eonsr.com',
    highlights: [],
    groups: [
      {
        title: { en: 'Training & exam platform', vi: 'Nền tảng đào tạo & thi' },
        sub: {
          en: 'Sole engineer · internal LMS for a large logistics enterprise · Express/TypeScript, MongoDB, Redis',
          vi: 'Kỹ sư duy nhất · LMS nội bộ cho một doanh nghiệp logistics lớn · Express/TypeScript, MongoDB, Redis',
        },
        items: [
          {
            en: 'RBAC, question banks, timed exams with auto-grading, SCORM courses and certificates, covered by 2,500+ automated tests.',
            vi: 'Phân quyền, ngân hàng câu hỏi, thi tính giờ có chấm tự động, khóa học SCORM và chứng chỉ, cùng hơn 2.500 test tự động.',
          },
          {
            en: 'Traced mass mid-exam logouts to all examinees sharing one rate-limit bucket behind the proxy and fixed it the same day, then moved password hashing off the event loop and added retries with answer backup.',
            vi: 'Tìm ra nguyên nhân thí sinh bị đăng xuất hàng loạt giữa giờ thi là do mọi người dùng chung một bộ đếm rate limit sau proxy và sửa ngay trong ngày; sau đó chuyển việc băm mật khẩu khỏi event loop và thêm retry cùng sao lưu bài làm.',
          },
          {
            en: "Toward 10,000 examinees on one 4 vCPU server: cut a ~350-query permission check to one load, removed password hashing from token refresh, added indexes, and stopped exam APIs from exposing other examinees' data.",
            vi: 'Hướng tới 10.000 thí sinh trên một máy chủ 4 vCPU: giảm phép kiểm tra quyền từ khoảng 350 query xuống một lần đọc, bỏ băm mật khẩu khi refresh token, thêm index và chặn API thi trả về dữ liệu của thí sinh khác.',
          },
          {
            en: 'Moved media to self-hosted S3 with content-addressed keys and expiring signed links; set up GitLab CI/CD and a pentest handover kit.',
            vi: 'Chuyển media sang S3 tự host với key theo nội dung và link ký có hạn; dựng GitLab CI/CD và bộ tài liệu bàn giao cho pentest.',
          },
        ],
      },
      {
        title: { en: 'Document Q&A over SharePoint', vi: 'Hỏi đáp tài liệu trên SharePoint' },
        sub: {
          en: 'Backend co-developer · FastAPI, PostgreSQL + pgvector',
          vi: 'Cùng phát triển backend · FastAPI, PostgreSQL + pgvector',
        },
        items: [
          {
            en: 'Webhook-driven document sync with delta reconciliation, permission checks when a source is linked, and project archival that blocks retrieval.',
            vi: 'Đồng bộ tài liệu qua webhook và đối soát delta, kiểm tra quyền khi gắn nguồn, và lưu trữ dự án chặn truy xuất.',
          },
        ],
      },
      {
        title: { en: 'Working with AI', vi: 'Làm việc cùng AI' },
        items: [
          {
            en: 'Set up spec-driven development with Claude Code in two repositories: AGENTS.md guardrails, agent skills, and OpenSpec proposals reviewed before implementation.',
            vi: 'Thiết lập quy trình phát triển theo spec với Claude Code ở hai repo: quy tắc AGENTS.md, agent skill và đề xuất OpenSpec được duyệt trước khi viết code.',
          },
          {
            en: 'Contributed to hospital and e-office RAG chatbots, an LLM gateway and an internal AI playground.',
            vi: 'Đóng góp cho chatbot RAG bệnh viện và văn phòng điện tử, một LLM gateway và một AI playground nội bộ.',
          },
        ],
      },
    ],
    note: { en: 'Client names are withheld under NDA.', vi: 'Không nêu tên khách hàng do thỏa thuận bảo mật (NDA).' },
    tech: ['TypeScript', 'Express', 'MongoDB', 'Redis', 'Nginx', 'FastAPI', 'PostgreSQL', 'pgvector', 'GitLab CI/CD', 'Claude Code'],
  },
];


export const education = {
  institution: { en: 'Sai Gon University', vi: 'Trường Đại học Sài Gòn' } as L,
  degree: { en: 'Bachelor of Software Engineering', vi: 'Cử nhân Kỹ thuật Phần mềm' } as L,
  period: { en: '2023 – Expected 2027', vi: '2023 – Dự kiến 2027' } as L,
  location: { en: 'Ho Chi Minh City, Vietnam', vi: 'TP. Hồ Chí Minh, Việt Nam' } as L,
};

export const techGroups: TechGroup[] = ['Languages', 'Backend', 'Frontend', 'Database', 'DevOps & Tools'];

export const techStack: { items: TechItem[]; concepts: string[] } = {
  items: [
    { name: 'Python',      primary: true,  icon: 'ci ci-python',     group: 'Languages' },
    { name: 'TypeScript',  primary: true,  icon: 'ci ci-typescript', group: 'Languages' },
    { name: 'C++',         primary: false, icon: 'ci ci-cpp',        group: 'Languages' },
    { name: 'FastAPI',     primary: true,  icon: 'ci ci-fastapi',    group: 'Backend' },
    { name: 'Node.js / Express', primary: true, icon: 'ci ci-nodejs', group: 'Backend' },
    { name: 'PostgreSQL',  primary: true,  icon: 'ci ci-postgresql', group: 'Database' },
    { name: 'MongoDB',     primary: false, icon: 'ci ci-mongodb',    group: 'Database' },
    { name: 'Redis',       primary: false, icon: 'ci ci-redis',      group: 'Database' },
    { name: 'Docker',      primary: true,  icon: 'ci ci-docker',     group: 'DevOps & Tools' },
    { name: 'Nginx',       primary: false, icon: 'ci ci-nginx',      group: 'DevOps & Tools' },
    { name: 'GitLab CI/CD', primary: false, icon: 'ci ci-gitlab',    group: 'DevOps & Tools' },
    { name: 'Git',         primary: false, icon: 'ci ci-git',        group: 'DevOps & Tools' },
    { name: 'Claude Code', primary: true,  icon: 'ci ci-claude',     group: 'DevOps & Tools' },
    { name: 'Ubuntu',      primary: false, icon: 'ci ci-ubuntu',     group: 'DevOps & Tools' },
    { name: 'VS Code',     primary: false, icon: 'ci ci-vscode',     group: 'DevOps & Tools' },
  ],
  concepts: ['System Design', 'REST APIs', 'RAG', 'LangChain', 'Vector Search (FAISS, pgvector)', 'Caching & Rate Limiting', 'CI/CD', 'Spec-driven Development'],
};

// ---------------------------------------------------------------- projects

export const projects: Project[] = [
  {
    id: 1,
    name: 'SmartDoc AI',
    tagline: { en: 'Offline Document Q&A System', vi: 'Hệ thống hỏi đáp tài liệu offline' },
    period: { en: 'Mar – Apr 2026', vi: 'Tháng 3 – 4/2026' },
    team: { en: 'Solo project', vi: 'Dự án cá nhân' },
    status: 'completed',
    problem: {
      en: "Teams handling sensitive documents (PDF, DOCX) can't rely on cloud LLMs because of data privacy concerns.",
      vi: 'Những nhóm làm việc với tài liệu nhạy cảm (PDF, DOCX) không thể dùng LLM trên cloud vì lo ngại về quyền riêng tư dữ liệu.',
    },
    solution: {
      en: 'A fully offline RAG app: documents are chunked, embedded with a multilingual model and indexed in FAISS + BM25, and answers come from Qwen2.5 7B running locally on Ollama, with Cross-Encoder re-ranking and Self-RAG checks on top.',
      vi: 'Ứng dụng RAG chạy hoàn toàn offline: tài liệu được chia đoạn, tạo embedding bằng mô hình đa ngôn ngữ và lập chỉ mục trong FAISS + BM25; câu trả lời được sinh bởi Qwen2.5 7B chạy local qua Ollama, có thêm re-ranking bằng Cross-Encoder và bước tự kiểm tra Self-RAG.',
    },
    highlights: [
      {
        en: 'Layered architecture: presentation → application → data → model',
        vi: 'Kiến trúc phân tầng: presentation → application → data → model',
      },
      {
        en: 'Hybrid retrieval: FAISS vector search + BM25 keyword search',
        vi: 'Truy xuất lai: tìm kiếm vector FAISS + tìm kiếm từ khóa BM25',
      },
      {
        en: 'Cross-Encoder re-ranking and Self-RAG self-evaluation',
        vi: 'Re-ranking bằng Cross-Encoder và tự đánh giá Self-RAG',
      },
      {
        en: 'GraphRAG vs standard RAG, compared side by side',
        vi: 'So sánh trực tiếp GraphRAG với RAG thông thường',
      },
      {
        en: 'Source citations, conversation memory and multi-document filtering',
        vi: 'Trích dẫn nguồn, ghi nhớ hội thoại và lọc theo nhiều tài liệu',
      },
      {
        en: 'Fully air-gapped — no data leaves the machine',
        vi: 'Chạy hoàn toàn offline — dữ liệu không rời khỏi máy',
      },
    ],
    tech: ['Python', 'LangChain', 'FAISS', 'BM25', 'Sentence-Transformers', 'Ollama (Qwen2.5)', 'Streamlit'],
    github: 'https://github.com/nha261105/generative-AI',
    demo: null,
    image: imgSmartDocAI,
    diagram: smartDocDiagram,
    stack: 'Python',
  },
  {
    id: 2,
    name: 'Papers',
    tagline: { en: 'Local arXiv Reading Library', vi: 'Thư viện đọc paper arXiv chạy local' },
    period: { en: 'Oct 2026 – Present', vi: 'Từ 10/2026' },
    team: { en: 'Solo project', vi: 'Dự án cá nhân' },
    status: 'in-progress',
    problem: {
      en: 'Research papers end up scattered across browser tabs and download folders, and the notes on them get lost.',
      vi: 'Paper nghiên cứu nằm rải rác ở các tab trình duyệt và thư mục tải về, ghi chú về chúng thì bị thất lạc.',
    },
    solution: {
      en: 'A small app that runs on my machine: search arXiv through its official API, download PDFs, and keep a library with status, tags and Markdown notes, read side by side with the PDF in the browser.',
      vi: 'Một app nhỏ chạy trên máy: tìm paper trên arXiv qua API chính thức, tải PDF và quản lý thư viện với trạng thái, tag và ghi chú Markdown, đọc song song với PDF ngay trên trình duyệt.',
    },
    highlights: [
      {
        en: 'Search arXiv through its official API, never by scraping HTML',
        vi: 'Tìm trên arXiv qua API chính thức, không cào HTML',
      },
      {
        en: 'Rate-limited HTTP client with retries: at least 3 seconds between requests, as arXiv asks',
        vi: 'HTTP client có giới hạn tốc độ và retry: cách nhau ít nhất 3 giây giữa các request như arXiv yêu cầu',
      },
      {
        en: 'Pluggable source interface, so other paper sources can be added later',
        vi: 'Giao diện nguồn dữ liệu dạng plugin, có thể thêm nguồn paper khác sau này',
      },
      {
        en: 'Library with status, favourites, folders and tags; Markdown notes that save as you type',
        vi: 'Thư viện có trạng thái, bài hay, thư mục và tag; ghi chú Markdown tự lưu khi gõ',
      },
      {
        en: 'Keyboard-first: Ctrl+K quick open, j / k to move through the library',
        vi: 'Ưu tiên bàn phím: Ctrl+K để mở nhanh, j / k để duyệt thư viện',
      },
    ],
    tech: ['Python', 'FastAPI', 'SQLite', 'React', 'TypeScript', 'Vite'],
    github: 'https://github.com/nha261105/paper_for_cs',
    demo: null,
    image: null,
    diagram: papersDiagram,
    stack: 'Python',
  },
  {
    id: 3,
    name: 'Agent Harness',
    tagline: { en: 'Human-gated Workflow for Claude Code', vi: 'Quy trình làm việc với Claude Code có người duyệt' },
    period: { en: 'Nov 2026 – Present', vi: 'Từ 11/2026' },
    team: { en: 'Solo project', vi: 'Dự án cá nhân' },
    status: 'in-progress',
    problem: {
      en: 'Coding agents move fast but drift from what the person wanted, and large changes are hard to review after the fact.',
      vi: 'AI agent viết code nhanh nhưng dễ đi lệch ý người dùng, và thay đổi lớn thì khó review sau khi đã làm xong.',
    },
    solution: {
      en: 'A template copied into a real project. I decide what to build, approve the plan and confirm I understand the result; the agent reads the code, plans, builds, tests, reviews and opens the pull request in between.',
      vi: 'Một template chép vào dự án thật. Tôi quyết định làm gì, duyệt kế hoạch và xác nhận đã hiểu kết quả; ở giữa các bước đó, agent tự đọc code, lập kế hoạch, viết code, test, review và mở pull request.',
    },
    highlights: [
      {
        en: 'Three human stops: the brief, the plan, and understanding the result',
        vi: 'Ba điểm dừng cho người duyệt: brief, kế hoạch và hiểu kết quả',
      },
      {
        en: 'Small changes are planned in a short plan file; large ones become OpenSpec proposals',
        vi: 'Thay đổi nhỏ có file kế hoạch ngắn; thay đổi lớn thành đề xuất OpenSpec',
      },
      {
        en: 'Large changes are built by a separate worker agent through Orca',
        vi: 'Thay đổi lớn được giao cho một worker agent riêng qua Orca',
      },
      {
        en: 'Built-in code review, and a guard hook that blocks reading secrets such as .env',
        vi: 'Có sẵn bước code review và hook chặn việc đọc file bí mật như .env',
      },
    ],
    tech: ['Claude Code', 'OpenSpec', 'Orca', 'Bash'],
    github: 'https://github.com/nha261105/agent-harness',
    demo: null,
    image: null,
    diagram: harnessDiagram,
    stack: 'Tooling',
  },
];

/** Projects no longer shown on the site (kept so their text is not lost). */
export const archivedProjects: Project[] = [
  {
    id: 101,
    name: 'ExamSlot',
    tagline: { en: 'High-Concurrency Exam Registration System', vi: 'Hệ thống đăng ký lịch thi chịu tải cao' },
    period: { en: 'May 2026', vi: 'Tháng 5/2026' },
    team: { en: 'Solo project', vi: 'Dự án cá nhân' },
    status: 'early-stage',
    problem: {
      en: 'University exam registration portals collapse under peak-time traffic — race conditions cause double-booking and inconsistent data.',
      vi: 'Cổng đăng ký lịch thi của trường thường sập vào giờ cao điểm — tranh chấp dữ liệu (race condition) gây đăng ký trùng và dữ liệu không nhất quán.',
    },
    solution: {
      en: 'A two-layer concurrency design: a Redis distributed lock in front of optimistic locking (@Version) in PostgreSQL, with confirmations processed asynchronously through RabbitMQ and live slot updates over WebSocket. Built so far: the domain model, optimistic locking and the Redis / RabbitMQ infrastructure.',
      vi: 'Thiết kế kiểm soát đồng thời hai lớp: khóa phân tán Redis đứng trước optimistic locking (@Version) trong PostgreSQL; việc xác nhận được xử lý bất đồng bộ qua RabbitMQ và cập nhật chỗ trống theo thời gian thực qua WebSocket. Hiện đã làm xong: mô hình dữ liệu, optimistic locking và hạ tầng Redis / RabbitMQ.',
    },
    highlights: [
      {
        en: 'Domain model with 6 JPA entities: exams, registrations, watchlists, notifications, users and an audit log',
        vi: 'Mô hình dữ liệu gồm 6 entity JPA: kỳ thi, đăng ký, danh sách theo dõi, thông báo, người dùng và nhật ký audit',
      },
      {
        en: 'Optimistic locking with @Version on exams and registrations',
        vi: 'Optimistic locking bằng @Version cho kỳ thi và đăng ký',
      },
      {
        en: 'Registration lifecycle: PENDING → CONFIRMED / CANCELLED',
        vi: 'Vòng đời đăng ký: PENDING → CONFIRMED / CANCELLED',
      },
      {
        en: 'Redis and RabbitMQ provisioned with Docker Compose',
        vi: 'Redis và RabbitMQ được dựng sẵn bằng Docker Compose',
      },
    ],
    roadmap: [
      { en: 'Redis distributed lock around slot booking', vi: 'Khóa phân tán Redis khi giữ chỗ' },
      { en: 'RabbitMQ confirmation worker', vi: 'Worker xác nhận đăng ký qua RabbitMQ' },
      { en: 'Real-time slot watchlist over WebSocket', vi: 'Theo dõi chỗ trống theo thời gian thực qua WebSocket' },
      { en: 'Spring Security + JWT authentication', vi: 'Xác thực bằng Spring Security + JWT' },
    ],
    tech: ['Java 21', 'Spring Boot 4', 'Spring Data JPA', 'PostgreSQL', 'Redis', 'RabbitMQ', 'Docker'],
    github: 'https://github.com/nha261105/ExamSlot',
    demo: null,
    image: null,
    diagram: examSlotDiagram,
    stack: 'Java',
  },
  {
    id: 103,
    name: 'InteractHub',
    tagline: { en: 'Social Media Platform Backend', vi: 'Backend cho mạng xã hội' },
    period: { en: 'Mar – May 2026', vi: 'Tháng 3 – 5/2026' },
    team: { en: 'Team of 4 · Main contributor', vi: 'Nhóm 4 người · Đóng góp chính' },
    status: 'completed',
    problem: {
      en: 'Social platform backends often turn into tightly coupled monoliths that are hard to test, making every new feature risky.',
      vi: 'Backend mạng xã hội dễ trở thành khối nguyên khối kết dính chặt, khó kiểm thử, khiến mỗi tính năng mới đều tiềm ẩn rủi ro.',
    },
    solution: {
      en: 'An ASP.NET Core 8 backend structured with Clean Architecture (API / Core / Infrastructure / Tests): JWT + Identity auth, EF Core on PostgreSQL, Azure Blob for media and SignalR for real-time notifications — shipped through a CI/CD pipeline to Azure App Service. I wrote about 110 of the 139 commits.',
      vi: 'Backend ASP.NET Core 8 theo Clean Architecture (API / Core / Infrastructure / Tests): xác thực JWT + Identity, EF Core trên PostgreSQL, Azure Blob lưu media và SignalR cho thông báo thời gian thực — triển khai qua pipeline CI/CD lên Azure App Service. Tôi viết khoảng 110 trên 139 commit.',
    },
    highlights: [
      {
        en: 'Clean Architecture: 4 projects, each layer testable on its own',
        vi: 'Clean Architecture: 4 project, mỗi tầng kiểm thử độc lập',
      },
      {
        en: '9 REST controllers: auth, users, posts, stories, friends, search, reports, uploads, notifications',
        vi: '9 REST controller: xác thực, người dùng, bài viết, story, bạn bè, tìm kiếm, báo cáo, upload, thông báo',
      },
      {
        en: 'JWT + ASP.NET Core Identity, FluentValidation and structured logging with Serilog',
        vi: 'JWT + ASP.NET Core Identity, FluentValidation và ghi log có cấu trúc bằng Serilog',
      },
      {
        en: 'Real-time notifications with SignalR; media stored on Azure Blob Storage',
        vi: 'Thông báo thời gian thực với SignalR; media lưu trên Azure Blob Storage',
      },
      {
        en: '30 xUnit tests (Moq, FluentAssertions) with 78.8% code coverage',
        vi: '30 test xUnit (Moq, FluentAssertions) với độ phủ code 78.8%',
      },
      {
        en: 'CI/CD: GitHub Actions → Docker image on GHCR → Azure App Service',
        vi: 'CI/CD: GitHub Actions → Docker image trên GHCR → Azure App Service',
      },
    ],
    tech: ['C# · ASP.NET Core 8', 'EF Core', 'PostgreSQL', 'JWT', 'SignalR', 'Azure Blob', 'xUnit', 'Docker', 'GitHub Actions'],
    github: 'https://github.com/nha261105/CSharp-backend',
    demo: null,
    image: null,
    diagram: interactHubDiagram,
    stack: 'C#',
  },
];

// ---------------------------------------------------------------- navigation & interests

export const sectionIds: SectionId[] = ['about', 'experience', 'projects', 'skills', 'contact'];

export const interests: InterestItem[] = [
  {
    id: 1,
    iconClass: 'ci ci-spotify ci-xl',
    title: { en: 'Music', vi: 'Âm nhạc' },
    description: {
      en: 'My coding soundtrack — mostly lo-fi, podcasts and dark academia playlists.',
      vi: 'Nhạc nền khi code — chủ yếu là lo-fi, podcast và playlist dark academia.',
    },
    tags: [
      { iconClass: 'ci ci-spotify', label: 'Spotify', url: 'https://open.spotify.com/user/3177b6o5mok5sx4aubtuts2o3ng4?si=f3be02cc77284b3c' },
    ],
  },
  {
    id: 2,
    iconClass: 'ci ci-cpp ci-xl',
    title: { en: 'Competitive Programming', vi: 'Lập trình thi đấu' },
    description: {
      en: '300+ problems on LeetCode and regular practice on Codeforces. VNOI Code Tour 2025 certificate, ranked 320 of 1,214; member of my university Olympiad in Informatics team.',
      vi: 'Hơn 300 bài trên LeetCode và luyện đều trên Codeforces. Chứng nhận VNOI Code Tour 2025, hạng 320/1.214; thành viên đội tuyển Olympic Tin học của trường.',
    },
    tags: [
      { iconClass: 'ci ci-codeforces', label: 'Codeforces', url: 'https://codeforces.com/profile/Kurano' },
      { iconClass: 'ci ci-leetcode', label: 'LeetCode', url: 'https://leetcode.com/u/kurano26' },
    ],
  },
  {
    id: 3,
    iconClass: 'ci ci-gitbook ci-xl',
    title: { en: 'Reading', vi: 'Đọc sách' },
    description: {
      en: 'Tech blogs and papers — plus the occasional light novel to unwind.',
      vi: 'Blog công nghệ, paper — và thỉnh thoảng là light novel để thư giãn.',
    },
    tags: [{ iconClass: null, label: 'Docln', url: 'https://ln.hako.vn/danh-sach' }],
  },
  {
    id: 4,
    iconClass: null,
    title: { en: 'Badminton', vi: 'Cầu lông' },
    description: {
      en: 'My favourite sport — keeps me fit and clears my head after long debugging sessions.',
      vi: 'Môn thể thao yêu thích — vừa rèn thể lực vừa xả stress sau những buổi debug dài.',
    },
    tags: [],
  },
];
