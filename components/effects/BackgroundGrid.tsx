export function BackgroundGrid() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden
      style={{
        backgroundImage: `
          linear-gradient(rgba(148, 163, 184, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(148, 163, 184, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: "64px 64px",
        maskImage:
          "radial-gradient(ellipse 80% 60% at 50% 0%, black 20%, transparent 70%)",
      }}
    />
  );
}
