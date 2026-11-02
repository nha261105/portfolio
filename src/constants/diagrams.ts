/**
 * Architecture diagrams for the project modal / cards, drawn as SVG by ui/ArchitectureDiagram.
 * Coordinates are in the diagram's own viewBox. Based on each project's repository.
 */
export interface DiagramNode {
  id: string;
  label: string;
  sub?: string;
  x: number;
  y: number;
  w?: number;
  /** Highlight as a core component */
  accent?: boolean;
  /** Designed but not implemented yet */
  planned?: boolean;
}

export interface DiagramEdge {
  from: string;
  to: string;
  label?: string;
  planned?: boolean;
}

export interface DiagramSpec {
  width: number;
  height: number;
  nodes: DiagramNode[];
  edges: DiagramEdge[];
}

export const NODE_H = 52;
export const NODE_W = 120;

export const examSlotDiagram: DiagramSpec = {
  width: 740,
  height: 296,
  nodes: [
    { id: 'client', label: 'Student', sub: 'browser', x: 20, y: 124, w: 110 },
    { id: 'api', label: 'Spring Boot 4', sub: 'REST API', x: 210, y: 124, w: 130, accent: true },
    { id: 'ws', label: 'WebSocket', sub: 'slot watchlist', x: 210, y: 20, w: 130, planned: true },
    { id: 'redis', label: 'Redis', sub: 'distributed lock', x: 420, y: 20, w: 130, planned: true },
    { id: 'pg', label: 'PostgreSQL', sub: '@Version lock', x: 420, y: 124, w: 130, accent: true },
    { id: 'mq', label: 'RabbitMQ', sub: 'registration queue', x: 420, y: 228, w: 130, planned: true },
    { id: 'worker', label: 'Confirm worker', sub: 'async consumer', x: 605, y: 228, w: 120, planned: true },
  ],
  edges: [
    { from: 'client', to: 'api', label: 'register' },
    { from: 'api', to: 'redis', label: '1 · lock', planned: true },
    { from: 'api', to: 'pg', label: '2 · write' },
    { from: 'api', to: 'mq', label: '3 · enqueue', planned: true },
    { from: 'mq', to: 'worker', planned: true },
    { from: 'worker', to: 'pg', label: 'confirm', planned: true },
    { from: 'api', to: 'ws', label: 'publish', planned: true },
    { from: 'ws', to: 'client', label: 'live slots', planned: true },
  ],
};

export const smartDocDiagram: DiagramSpec = {
  width: 850,
  height: 262,
  nodes: [
    { id: 'docs', label: 'Documents', sub: 'PDF · DOCX', x: 20, y: 24, w: 115 },
    { id: 'chunk', label: 'Chunking', sub: 'recursive splitter', x: 195, y: 24, w: 125 },
    { id: 'embed', label: 'Embeddings', sub: 'multilingual mpnet', x: 380, y: 24, w: 130 },
    { id: 'index', label: 'FAISS + BM25', sub: 'hybrid index', x: 570, y: 24, w: 125, accent: true },
    { id: 'q', label: 'Question', sub: 'chat + history', x: 20, y: 190, w: 115 },
    { id: 'ret', label: 'Hybrid retrieval', sub: 'ensemble', x: 195, y: 190, w: 125 },
    { id: 'rerank', label: 'Re-ranking', sub: 'cross-encoder', x: 380, y: 190, w: 130, accent: true },
    { id: 'llm', label: 'Qwen2.5 7B', sub: 'Ollama · local', x: 570, y: 190, w: 125, accent: true },
    { id: 'ans', label: 'Answer', sub: '+ citations', x: 755, y: 190, w: 85 },
  ],
  edges: [
    { from: 'docs', to: 'chunk' },
    { from: 'chunk', to: 'embed' },
    { from: 'embed', to: 'index' },
    { from: 'q', to: 'ret' },
    { from: 'index', to: 'ret', label: 'search' },
    { from: 'ret', to: 'rerank', label: 'top-k' },
    { from: 'rerank', to: 'llm', label: 'context' },
    { from: 'llm', to: 'ans' },
  ],
};

export const interactHubDiagram: DiagramSpec = {
  width: 860,
  height: 292,
  nodes: [
    { id: 'hub', label: 'SignalR hub', sub: 'real-time notifications', x: 195, y: 20, w: 150 },
    { id: 'blob', label: 'Azure Blob', sub: 'media storage', x: 760, y: 20, w: 90 },
    { id: 'client', label: 'Clients', sub: 'web · mobile', x: 20, y: 120, w: 115 },
    { id: 'api', label: 'ASP.NET Core 8 API', sub: 'JWT · Identity', x: 195, y: 120, w: 150, accent: true },
    { id: 'core', label: 'Core', sub: 'domain layer', x: 405, y: 120, w: 120, accent: true },
    { id: 'infra', label: 'Infrastructure', sub: 'EF Core · services', x: 585, y: 120, w: 125 },
    { id: 'pg', label: 'PostgreSQL', sub: 'database', x: 760, y: 120, w: 90 },
    { id: 'gha', label: 'GitHub Actions', sub: 'CI/CD', x: 195, y: 228, w: 150 },
    { id: 'ghcr', label: 'GHCR', sub: 'Docker image', x: 405, y: 228, w: 120 },
    { id: 'app', label: 'Azure App Service', sub: 'hosting', x: 585, y: 228, w: 140 },
  ],
  edges: [
    { from: 'client', to: 'api', label: 'HTTPS' },
    { from: 'api', to: 'core' },
    { from: 'core', to: 'infra' },
    { from: 'infra', to: 'pg' },
    { from: 'infra', to: 'blob', label: 'uploads' },
    { from: 'api', to: 'hub', label: 'push' },
    { from: 'hub', to: 'client', label: 'live' },
    { from: 'gha', to: 'ghcr', label: 'build' },
    { from: 'ghcr', to: 'app', label: 'deploy' },
  ],
};
