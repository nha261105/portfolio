/** Slowly drifting blurred blobs behind the page — purely decorative. */
const Background = () => (
  <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
    <div
      className="absolute -top-40 right-[-10%] w-[520px] h-[520px] rounded-full blur-3xl opacity-90 animate-blob"
      style={{ background: 'var(--glow)' }}
    />
    <div
      className="absolute bottom-[-20%] left-[-10%] w-[460px] h-[460px] rounded-full blur-3xl opacity-60 animate-blob"
      style={{ background: 'var(--glow)', animationDelay: '-11s' }}
    />
    {/* faint dot grid, fading out towards the bottom */}
    <div
      className="absolute inset-0 opacity-[0.35]"
      style={{
        backgroundImage: 'radial-gradient(var(--line-strong) 1px, transparent 1px)',
        backgroundSize: '22px 22px',
        maskImage: 'linear-gradient(to bottom, black, transparent 60%)',
      }}
    />
  </div>
);

export default Background;
