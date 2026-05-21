export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950">
      <div className="relative">
        <div className="h-16 w-16 animate-spin rounded-full border-2 border-cyan-500/20 border-t-cyan-500" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-bold text-cyan-400">TS</span>
        </div>
      </div>
      <p className="mt-6 text-sm text-slate-500">Chargement du portfolio...</p>
    </div>
  );
}
