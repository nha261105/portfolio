import { useId } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { NODE_H, NODE_W } from '../../constants/diagrams';
import type { DiagramNode, DiagramSpec } from '../../constants/diagrams';

interface Props {
  spec: DiagramSpec;
  /** Accessible description, e.g. "ExamSlot architecture diagram" */
  label: string;
  /** Text of the "planned" legend; omit to hide the legend */
  plannedLabel?: string;
  /** Static, smaller rendering for card previews */
  compact?: boolean;
  className?: string;
}

const box = (n: DiagramNode) => {
  const w = n.w ?? NODE_W;
  return { x: n.x, y: n.y, w, h: NODE_H, cx: n.x + w / 2, cy: n.y + NODE_H / 2 };
};

/** Point where the line from a box's centre towards (tx, ty) leaves the box, pushed out by `gap`. */
const exitPoint = (b: ReturnType<typeof box>, tx: number, ty: number, gap: number) => {
  const dx = tx - b.cx;
  const dy = ty - b.cy;
  const scale = Math.min((b.w / 2 + gap) / Math.abs(dx || 1e-6), (b.h / 2 + gap) / Math.abs(dy || 1e-6));
  return { x: b.cx + dx * scale, y: b.cy + dy * scale };
};

/** Renders a DiagramSpec as a theme-aware SVG with animated data-flow edges. */
const ArchitectureDiagram = ({ spec, label, plannedLabel, compact, className }: Props) => {
  const uid = useId().replace(/:/g, '');
  const byId = new Map(spec.nodes.map((n) => [n.id, box(n)]));
  const hasPlanned = spec.nodes.some((n) => n.planned) || spec.edges.some((e) => e.planned);
  const legendH = plannedLabel && hasPlanned ? 26 : 0;
  const height = spec.height + legendH;

  return (
    <svg
      viewBox={`0 0 ${spec.width} ${height}`}
      role="img"
      aria-label={label}
      className={clsx('w-full h-auto select-none', className)}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <marker id={`arrow-${uid}`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--subtle)" />
        </marker>
        <marker id={`arrow-accent-${uid}`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--accent)" />
        </marker>
      </defs>

      {/* Edges */}
      {spec.edges.map((e, i) => {
        const a = byId.get(e.from);
        const b = byId.get(e.to);
        if (!a || !b) return null;
        const p1 = exitPoint(a, b.cx, b.cy, 2);
        const p2 = exitPoint(b, a.cx, a.cy, 4);
        const d = `M ${p1.x} ${p1.y} L ${p2.x} ${p2.y}`;
        const mx = (p1.x + p2.x) / 2;
        const my = (p1.y + p2.y) / 2;
        const labelW = e.label ? e.label.length * 6.2 + 12 : 0;

        return (
          <motion.g
            key={`${e.from}-${e.to}`}
            initial={compact ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
          >
            <path
              d={d}
              fill="none"
              stroke={e.planned ? 'var(--line-strong)' : 'var(--subtle)'}
              strokeOpacity={e.planned ? 1 : 0.45}
              strokeWidth={1.5}
              strokeDasharray={e.planned ? '3 5' : undefined}
              markerEnd={`url(#arrow-${uid})`}
            />
            {!e.planned && (
              <path
                d={d}
                fill="none"
                stroke="var(--accent)"
                strokeWidth={1.8}
                strokeLinecap="round"
                className={compact ? undefined : 'diagram-flow'}
                strokeDasharray="4 14"
                markerEnd={`url(#arrow-accent-${uid})`}
              />
            )}
            {e.label && !compact && (
              <g>
                <rect x={mx - labelW / 2} y={my - 9} width={labelW} height={18} rx={9} fill="var(--surface)" stroke="var(--line)" />
                <text x={mx} y={my + 3.5} textAnchor="middle" fontSize={10.5} fontFamily="var(--font-mono)" fill="var(--muted)">
                  {e.label}
                </text>
              </g>
            )}
          </motion.g>
        );
      })}

      {/* Nodes */}
      {spec.nodes.map((n, i) => {
        const b = byId.get(n.id)!;
        return (
          <motion.g
            key={n.id}
            initial={compact ? false : { opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            opacity={n.planned ? 0.8 : 1}
          >
            <rect
              x={b.x}
              y={b.y}
              width={b.w}
              height={b.h}
              rx={11}
              fill={n.accent ? 'var(--accent-soft)' : 'var(--surface)'}
              stroke={n.accent ? 'var(--accent)' : 'var(--line-strong)'}
              strokeOpacity={n.accent ? 0.6 : 1}
              strokeWidth={1.2}
              strokeDasharray={n.planned ? '4 4' : undefined}
            />
            <text
              x={b.cx}
              y={n.sub ? b.y + 22 : b.cy + 4}
              textAnchor="middle"
              fontSize={12.5}
              fontWeight={600}
              fontFamily="var(--font-sans)"
              fill="var(--fg)"
            >
              {n.label}
            </text>
            {n.sub && (
              <text x={b.cx} y={b.y + 38} textAnchor="middle" fontSize={10} fontFamily="var(--font-mono)" fill="var(--subtle)">
                {n.sub}
              </text>
            )}
          </motion.g>
        );
      })}

      {/* Legend */}
      {legendH > 0 && (
        <g transform={`translate(${spec.width - 12}, ${height - 9})`}>
          <text textAnchor="end" fontSize={10.5} fontFamily="var(--font-mono)" fill="var(--subtle)">
            {plannedLabel}
          </text>
          <line x1={-(plannedLabel!.length * 6.3 + 40)} x2={-(plannedLabel!.length * 6.3 + 12)} y1={-4} y2={-4} stroke="var(--line-strong)" strokeWidth={1.5} strokeDasharray="3 5" />
        </g>
      )}
    </svg>
  );
};

export default ArchitectureDiagram;
