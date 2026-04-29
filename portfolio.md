# Portfolio — Nguyen Hoang Anh
---

## Prompt Hoàn Chỉnh Cho Portfolio Của Nguyen Hoang Anh

---

Bạn là một Senior Frontend Engineer đồng thời có tư duy Product Designer.
Tôi muốn bạn thiết kế và generate một portfolio cá nhân dành cho tôi —
Nguyen Hoang Anh — Backend-focused Software Engineer Intern, bằng React.

---

### 🎯 Mục tiêu

Tạo portfolio theo phong cách backend engineer thực thụ:
- Tối giản, sạch, chuyên nghiệp — không thiên về UI màu mè
- Thể hiện tư duy system design, concurrency, clean architecture
- Recruiter hiểu trong 5–10s: Tôi là ai / Tôi build cái gì / Tôi giải quyết vấn đề như thế nào

---

### 🎨 Design Style

- Dark theme (nền #0D1117 hoặc #0F0F0F)
- Accent color: gradient xanh dương (#3B82F6 → #6366F1)
- Typography: Inter hoặc JetBrains Mono cho code elements
- Minimal, hiện đại, không over-design
- Inspired bởi portfolio developer, KHÔNG phải agency hay designer

---

### 🧠 Nguyên tắc UX

- Content > Visual
- Không lạm dụng animation
- Scroll mượt, responsive đầy đủ
- Performance tốt
- Mobile: stack layout

---

### 🧩 Cấu trúc đầy đủ (theo thứ tự)

---

#### 1. Navbar

- Logo: text "nha.dev" hoặc "NHA"
- Menu: About | Projects | Tech Stack | Education | Contact
- Sticky khi scroll
- Active section highlight
- Mobile: hamburger menu

---

#### 2. Hero Section ⭐ (quan trọng nhất)

Layout Desktop: 2 cột — avatar trái, content phải
Layout Mobile: stack

Nội dung cần có:
- Terminal-style widget nhỏ phía trên (ví dụ: `> backend engineer --mode=learning`)
- Greeting: "Hello —"
- Tên: **Nguyen Hoang Anh** (font lớn, bold)
- Role: Backend-focused Software Engineer
- Mô tả ngắn (dùng đúng nội dung này):

  > "I build backend systems that handle real-world complexity —
  > from high-concurrency registration flows to AI-integrated pipelines.
  > Clean Architecture is how I think. Java, Spring Boot & C# are how I ship."

- CTA buttons:
  - [Resume] → assets/CV_Nguyen_Hoang_Anh.pdf
  - [GitHub] → github.com/nha261105
  - [LinkedIn] → linkedin.com/in/nha261105
  - Email: nha261105@gmail.com

- Stagger animation (Framer Motion) cho từng dòng text xuất hiện

---

#### 3. About

Nội dung:
- Backend-focused Software Engineer Intern
- Kinh nghiệm: REST APIs, AI-integrated pipelines, cloud-deployed apps
- Stack chính: Java, Python, C#
- Tư duy: Clean Architecture, system design, concurrency, applied AI (RAG, LLM)
- Đang học tại Sai Gon University (Software Engineering, 2023–2028)
- Location: Phu Thanh, Ho Chi Minh City

Layout: 2 cột — bio text trái, quick stats phải
Quick stats:
- 3 production-level projects
- 3 backend languages
- Expertise: System Design & Clean Architecture

---

#### 4. Projects ⭐ (quan trọng nhất)

Trình bày như **engineering case study**, KHÔNG phải UI showcase.
KHÔNG có ảnh screenshot. Dùng icon hoặc tech badge thay thế.

Mỗi project card gồm:

```
[Tên project] — [tagline kỹ thuật]
Timeline | Team size

Problem:
  Mô tả vấn đề thực tế cần giải quyết

Solution:
  Giải thích cách tiếp cận kỹ thuật

Architecture Highlights:
  • Bullet point kỹ thuật chính

Tech Stack: [badge list]
[GitHub] [Live Demo nếu có]
```

---

##### Project 1: ExamSlot — High-Concurrency Exam Registration System

Timeline: 2025 (In Development) | Solo project

**Problem:**
University exam slot portals collapse under peak-time traffic — race conditions
cause double-booking and data inconsistency.

**Solution:**
Designed a 2-layer concurrency control: Redis Distributed Lock (outer layer) +
Optimistic Locking via @Version (inner layer). Async processing via RabbitMQ
decouples registration from confirmation, keeping response time fast. Real-time
slot updates pushed via WebSocket Watchlist.

**Architecture Highlights:**
- 2-layer concurrency: Redis Distributed Lock + Optimistic Locking (@Version)
- Async confirmation pipeline with RabbitMQ
- Real-time Watchlist via WebSocket (multiple concurrent subscribers)
- Auth: Spring Security + JWT

**Tech:** Java 17, Spring Boot 3, PostgreSQL, Redis, RabbitMQ, WebSocket, JUnit 5, Docker

---

##### Project 2: SmartDoc AI — Offline Document Q&A System

Timeline: Feb 2026 – Present | Team of 4 (Led)

**Problem:**
Teams handling sensitive documents (PDF, DOCX) can't rely on cloud LLMs
due to data privacy concerns.

**Solution:**
Built a fully offline RAG pipeline running on local hardware via Ollama.
Applied Cross-Encoder re-ranking to improve retrieval quality. Explored
GraphRAG as an alternative to standard vector similarity search.

**Architecture Highlights:**
- Modular RAG pipeline: chunking → embedding (FAISS) → retrieval → generation
- Cross-Encoder re-ranking for precision improvement
- GraphRAG exploration vs standard RAG benchmarking
- Fully air-gapped — no internet dependency

**Tech:** Python, LangChain, FAISS, Ollama (Qwen2.5), Streamlit

---

##### Project 3: InteractHub — Social Media Platform Backend

Timeline: Feb 2026 – Present | Team of 4

**Problem:**
Social platform backends often become monolithic and hard to test —
tightly coupled layers make feature extension risky.

**Solution:**
Structured the entire backend with Clean Architecture + Onion pattern
(API / Core / Infrastructure / Tests). Deployed on Azure with full auth
flows, file storage, and real-time notifications.

**Architecture Highlights:**
- Clean Architecture + Onion pattern (4 layers, independently testable)
- JWT auth: register / login / logout / forgot & reset password
- Azure Blob Storage for file upload
- Real-time notifications via SignalR
- Deployed: Azure App Service + Azure SQL Database

**Tech:** C# ASP.NET Core 8, EF Core, MSSQL, JWT, SignalR, Azure Blob, Swagger

---

#### 5. Tech Stack

Hiển thị dạng grid với icon (dùng devicons hoặc skillicons.dev).

Phân nhóm rõ ràng:

| Nhóm | Công nghệ |
|---|---|
| Languages | Java ⭐, Python, C# |
| Frameworks | Spring Boot ⭐, ASP.NET Core, LangChain |
| Databases | PostgreSQL ⭐, Redis, MSSQL, FAISS (Vector DB) |
| DevOps & Tools | Docker, Git, Postman, Swagger |
| Testing | JUnit 5, Mockito, Integration Testing |
| Concepts (text badge) | RESTful APIs · Clean Architecture · JWT Auth · OOP · SOLID · Concurrency · RAG |

⭐ = primary stack (highlight accent color)

---

#### 6. Education

Timeline đơn giản, 1 mục:

**Sai Gon University**
Bachelor of Software Engineering
2023 – Expected 2028
Ho Chi Minh City, Vietnam

---

#### 7. Contact

- CTA ngắn: "Let's build something meaningful."
- Hiển thị: Email | GitHub | LinkedIn
- Form đơn giản: First Name | Email | Message | [Send]
- Không cần Subject dropdown (giữ đơn giản)

---

### 🎬 Animation (Framer Motion)

- Fade + slide lên khi scroll vào viewport (mỗi section)
- Stagger text ở Hero
- Hover trên project card: border glow nhẹ + slight scale
- Hover button: background shift
- KHÔNG dùng parallax, KHÔNG dùng particle, KHÔNG dùng 3D

---

### ⚙️ Tech Stack để build

| Package | Vai trò |
|---|---|
| React + Vite | Core framework + build tool |
| Tailwind CSS | Styling utility-first |
| Framer Motion | Animation (fade, slide, stagger, hover) |
| react-intersection-observer | Trigger animation khi scroll vào viewport |
| react-icons | Icon nhỏ: GitHub, LinkedIn, Mail, menu... |
| clsx | Conditional className gọn hơn |

> **Không dùng:** react-router-dom (portfolio 1 trang, scroll-based — không cần routing), react-hook-form (form chỉ 3 field, dùng useState thuần là đủ)

---

### 🧱 Output mong muốn

1. Cấu trúc folder component tree đầy đủ
2. Code React cho từng component (clean, reusable)
3. Tailwind styling nhất quán
4. Framer Motion animation đúng chỗ
5. Data tách riêng vào file `constants/data.js` (dễ cập nhật)

---

### ⚠️ Rules

- Không over-design
- Không screenshot/ảnh UI trong project cards
- Ưu tiên readability và information density
- Code production-ready, có thể deploy Vercel ngay
- Tất cả content lấy từ thông tin thực ở trên — KHÔNG dùng placeholder

---

### 🎯 Cảm giác cuối cùng

Portfolio phải truyền tải:

> "Đây là một backend engineer biết giải quyết vấn đề thật —
> concurrency, system design, AI pipelines — không phải người đang show UI đẹp."

---

## PHẦN 3: Thông tin cá nhân (để tham chiếu)

| Field | Value |
|---|---|
| Họ tên | Nguyen Hoang Anh |
| Email | nha261105@gmail.com |
| Phone | 098 5922 611 |
| Location | Phu Thanh, Ho Chi Minh City |
| GitHub | github.com/nha261105 |
| LinkedIn | linkedin.com/in/nha261105 |
| Trường | Sai Gon University — Software Engineering (2023–2028) |
| Role | Backend-focused Software Engineer Intern |
| Primary stack | Java, Spring Boot, PostgreSQL, Redis |