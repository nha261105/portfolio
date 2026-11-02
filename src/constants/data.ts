/**
 * All site content. Text shown to visitors is written in both languages: { en: '…', vi: '…' }.
 * Plain strings (names, tech, URLs) are the same in every language.
 */
import type { L } from '../i18n/types';
import type { DiagramSpec } from './diagrams';
import { examSlotDiagram, interactHubDiagram, smartDocDiagram } from './diagrams';

import meJpg from '../assets/me.jpg';
import cvPdf from '../assets/CV_Nguyen_Hoang_Anh.pdf';
import imgSmartDocAI from '../assets/img_SmartDocAI.png';

// ---------------------------------------------------------------- types

export type SectionId = 'about' | 'resume' | 'projects' | 'contact';

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

export interface ExperienceItem {
  company: string;
  role: L;
  period: L;
  location?: L;
  url?: string;
  highlights: L[];
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
    en: 'I build software systems that handle real-world complexity — from high-concurrency registration flows to AI-integrated pipelines. Clean Architecture is how I think. Java and Python are how I ship.',
    vi: 'Tôi xây dựng những hệ thống phần mềm xử lý được độ phức tạp của thực tế — từ luồng đăng ký chịu tải cao đến pipeline tích hợp AI. Clean Architecture là cách tôi tư duy; Java và Python là công cụ tôi dùng để hiện thực hóa.',
  } as L,
  bio: {
    en: 'Software Engineer Intern with hands-on experience building REST APIs, AI-integrated pipelines, and cloud-deployed applications. I approach problems through the lens of Clean Architecture, system design, and concurrency control. My toolkit spans Java, Python, and C#, with a focus on applied AI (RAG, LLM integration) and production-grade backend systems.',
    vi: 'Software Engineer Intern với kinh nghiệm thực tế xây dựng REST API, pipeline tích hợp AI và ứng dụng triển khai trên cloud. Tôi tiếp cận vấn đề qua lăng kính Clean Architecture, thiết kế hệ thống và kiểm soát đồng thời. Bộ công cụ của tôi gồm Java, Python và C#, tập trung vào AI ứng dụng (RAG, tích hợp LLM) và hệ thống backend sẵn sàng cho production.',
  } as L,
};

export const services: Service[] = [
  {
    icon: 'server',
    title: { en: 'Backend APIs', vi: 'Backend API' },
    description: {
      en: 'RESTful services with Spring Boot and ASP.NET Core — auth, validation and clear API docs.',
      vi: 'RESTful service với Spring Boot và ASP.NET Core — xác thực, kiểm tra dữ liệu và tài liệu API rõ ràng.',
    },
  },
  {
    icon: 'layers',
    title: { en: 'System Design', vi: 'Thiết kế hệ thống' },
    description: {
      en: 'Concurrency control, caching and message queues for flows that must survive peak traffic.',
      vi: 'Kiểm soát đồng thời, caching và message queue cho những luồng phải trụ được lúc cao điểm.',
    },
  },
  {
    icon: 'cpu',
    title: { en: 'Applied AI', vi: 'AI ứng dụng' },
    description: {
      en: 'RAG pipelines and local LLM integration for teams that need to keep their data private.',
      vi: 'Pipeline RAG và tích hợp LLM chạy local cho những đội cần giữ dữ liệu riêng tư.',
    },
  },
  {
    icon: 'code',
    title: { en: 'Clean Architecture', vi: 'Clean Architecture' },
    description: {
      en: 'Layered, testable codebases that stay easy to extend as features grow.',
      vi: 'Codebase phân tầng, dễ kiểm thử và dễ mở rộng khi tính năng ngày càng nhiều.',
    },
  },
];

// ---------------------------------------------------------------- resume

/** Work experience — the Experience timeline is hidden while this list is empty. */
export const experience: ExperienceItem[] = [];

export const education = {
  institution: { en: 'Sai Gon University', vi: 'Trường Đại học Sài Gòn' } as L,
  degree: { en: 'Bachelor of Software Engineering', vi: 'Cử nhân Kỹ thuật Phần mềm' } as L,
  period: { en: '2023 – Expected 2028', vi: '2023 – Dự kiến 2028' } as L,
  location: { en: 'Ho Chi Minh City, Vietnam', vi: 'TP. Hồ Chí Minh, Việt Nam' } as L,
};

export const techGroups: TechGroup[] = ['Languages', 'Backend', 'Frontend', 'Database', 'DevOps & Tools'];

export const techStack: { items: TechItem[]; concepts: string[] } = {
  items: [
    { name: 'Java',         primary: true,  icon: 'ci ci-java',       group: 'Languages' },
    { name: 'Python',       primary: true,  icon: 'ci ci-python',     group: 'Languages' },
    { name: 'C#',           primary: false, icon: 'ci ci-csharp',     group: 'Languages' },
    { name: 'Spring Boot',  primary: true,  icon: 'ci ci-spring',     group: 'Backend' },
    { name: 'ASP.NET Core', primary: false, icon: 'ci ci-dotnetcore', group: 'Backend' },
    { name: 'FastAPI',      primary: false, icon: 'ci ci-fastapi',    group: 'Backend' },
    { name: 'React',        primary: false, icon: 'ci ci-react',      group: 'Frontend' },
    { name: 'PostgreSQL',   primary: true,  icon: 'ci ci-postgresql', group: 'Database' },
    { name: 'Supabase',     primary: false, icon: 'ci ci-supabase',   group: 'Database' },
    { name: 'Docker',       primary: true,  icon: 'ci ci-docker',     group: 'DevOps & Tools' },
    { name: 'Git',          primary: true,  icon: 'ci ci-git',        group: 'DevOps & Tools' },
    { name: 'Postman',      primary: false, icon: 'ci ci-postman',    group: 'DevOps & Tools' },
    { name: 'Swagger',      primary: false, icon: 'ci ci-swagger',    group: 'DevOps & Tools' },
    { name: 'JUnit 5',      primary: false, icon: 'ci ci-junit',      group: 'DevOps & Tools' },
    { name: 'IntelliJ',     primary: false, icon: 'ci ci-intellij',   group: 'DevOps & Tools' },
    { name: 'VS Code',      primary: false, icon: 'ci ci-vscode',     group: 'DevOps & Tools' },
    { name: 'Ubuntu',       primary: false, icon: 'ci ci-ubuntu',     group: 'DevOps & Tools' },
    { name: 'LaTeX',        primary: false, icon: 'ci ci-latex',      group: 'DevOps & Tools' },
    { name: 'Markdown',     primary: false, icon: 'ci ci-markdown',   group: 'DevOps & Tools' },
  ],
  concepts: ['RESTful APIs', 'Clean Architecture', 'JWT Auth', 'OOP', 'SOLID', 'Concurrency', 'RAG'],
};

// ---------------------------------------------------------------- projects

export const projects: Project[] = [
  {
    id: 1,
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
    id: 2,
    name: 'SmartDoc AI',
    tagline: { en: 'Offline Document Q&A System', vi: 'Hệ thống hỏi đáp tài liệu offline' },
    period: { en: 'Mar – Apr 2026', vi: 'Tháng 3 – 4/2026' },
    team: { en: 'Team of 5 · Lead', vi: 'Nhóm 5 người · Trưởng nhóm' },
    status: 'completed',
    problem: {
      en: "Teams handling sensitive documents (PDF, DOCX) can't rely on cloud LLMs because of data privacy concerns.",
      vi: 'Những nhóm làm việc với tài liệu nhạy cảm (PDF, DOCX) không thể dùng LLM trên cloud vì lo ngại về quyền riêng tư dữ liệu.',
    },
    solution: {
      en: 'Led a 5-person team building a fully offline RAG app: documents are chunked, embedded with a multilingual model and indexed in FAISS + BM25, and answers come from Qwen2.5 7B running locally on Ollama. I designed the layered architecture and built the Cross-Encoder re-ranking and Self-RAG steps.',
      vi: 'Dẫn dắt nhóm 5 người xây dựng ứng dụng RAG chạy hoàn toàn offline: tài liệu được chia đoạn, tạo embedding bằng mô hình đa ngôn ngữ và lập chỉ mục trong FAISS + BM25; câu trả lời được sinh bởi Qwen2.5 7B chạy local qua Ollama. Tôi thiết kế kiến trúc phân tầng và tự làm bước re-ranking bằng Cross-Encoder cùng Self-RAG.',
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
        en: 'Cross-Encoder re-ranking and Self-RAG self-evaluation (my features)',
        vi: 'Re-ranking bằng Cross-Encoder và tự đánh giá Self-RAG (phần tôi phụ trách)',
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
    id: 3,
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

export const sectionIds: SectionId[] = ['about', 'resume', 'projects', 'contact'];

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
      en: 'Solving problems daily — I enjoy algorithms and squeezing out every optimization.',
      vi: 'Giải bài mỗi ngày — tôi thích thuật toán và tối ưu đến từng chi tiết.',
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
