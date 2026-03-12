"use client";
import Logo from "@/components/Logo";

export default function Page() {
  return (
    <>
      <nav className="fixed top-0 inset-x-0 z-50 bg-[var(--color-bg)]/80 backdrop-blur-sm border-b border-[var(--color-border)] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo size={22} />
          <span className="text-[11px] font-bold tracking-[0.15em] text-[var(--color-green)]/60">OFFRAMP</span>
        </div>
        <a href="https://x.com/OfframpCoin" target="_blank" rel="noopener noreferrer"
          className="text-[11px] font-bold text-black bg-[var(--color-green)] px-4 py-1.5 rounded hover:bg-[var(--color-green-dim)] transition-colors">
          EXIT HERE →
        </a>
      </nav>

      {/* ── HERO: Highway Sign ── */}
      <section className="min-h-[100svh] flex items-center justify-center px-6 pt-16 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-green)]/20 to-transparent" />
        <div className="text-center">
          <div className="highway-sign inline-block mb-10 anim-up d1">
            <div className="exit-marker mb-3">EXIT 404</div>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight mb-2">
              OFF<span className="text-[var(--color-green)]">RAMP</span>
            </h1>
            <div className="road-line my-4" />
            <p className="text-white/60 text-sm">
              ← On-Ramp &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Off-Ramp →
            </p>
          </div>
          <p className="text-[var(--color-muted)] max-w-md mx-auto mb-8 anim-up d2 leading-relaxed">
            Everyone&apos;s fighting to get in. Smart money already found the exit.
            The off-ramp isn&apos;t giving up — it&apos;s the only move that matters.
          </p>
          <a href="#why" className="text-sm font-bold text-black bg-[var(--color-green)] px-6 py-3 rounded hover:bg-[var(--color-green-dim)] transition-colors anim-up d3">
            Find Your Exit ↓
          </a>
        </div>
      </section>

      {/* ── ROAD SIGNS ── */}
      <section className="py-16 md:py-24 px-6 border-t border-[var(--color-border)]">
        <div className="max-w-md mx-auto">
          <p className="text-[10px] text-[var(--color-green)]/40 tracking-[0.3em] uppercase mb-6">Road Signs</p>
          <div className="space-y-4">
            {[
              { distance: "1 MI", sign: "FOMO AHEAD — STAY IN LANE" },
              { distance: "½ MI", sign: "LAST CHANCE TO EXIT BEFORE LIQUIDATION" },
              { distance: "EXIT", sign: "OFFRAMP — SMART MONEY THIS WAY →" },
              { distance: "PAST", sign: "YOU MISSED THE EXIT. NEXT ONE: 200 MI" },
            ].map((item, i) => (
              <div key={i} className="highway-sign !p-4 flex items-center gap-4">
                <span className="exit-marker shrink-0">{item.distance}</span>
                <p className="text-white text-sm font-semibold">{item.sign}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY EXIT ── */}
      <section id="why" className="py-16 md:py-24 px-6 bg-[var(--color-surface)] border-t border-[var(--color-border)]">
        <div className="max-w-xl mx-auto space-y-12">
          <div className="text-center mb-12">
            <p className="text-[10px] text-[var(--color-green)]/40 tracking-[0.3em] uppercase mb-3">Why Exit</p>
            <h2 className="text-2xl font-bold text-white">The Case for Walking Away</h2>
          </div>
          {[
            { t: "The on-ramp is a trap.", d: "Every on-ramp has a toll booth that takes your money and a traffic jam that takes your time. The highway is packed. The billboards are lying. And the GPS keeps recalculating to keep you driving." },
            { t: "Smart money exits first.", d: "The best traders don't have the best entries. They have the best exits. Knowing when to leave is the only alpha that can't be front-run." },
            { t: "The exit is the strategy.", d: "Most people don't have a plan for leaving. They have a plan for entering, a plan for holding, and a fantasy about getting rich. OFFRAMP is the plan they never made." },
            { t: "You don't have to crash to stop driving.", d: "Walking away isn't failure. Staying on a road to nowhere because you already paid the toll — that's failure. The exit is right there. You just have to take it." },
          ].map((item, i) => (
            <div key={i} className="group pl-5 border-l-2 border-[var(--color-green)]/15 hover:border-[var(--color-green)]/40 transition-colors">
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[var(--color-green)] transition-colors">{item.t}</h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 md:py-28 px-6 text-center border-t border-[var(--color-border)]">
        <div className="highway-sign inline-block mb-8">
          <div className="exit-marker mb-3">NOW</div>
          <h2 className="text-2xl font-black text-white">
            TAKE THE <span className="text-[var(--color-green)]">EXIT.</span>
          </h2>
        </div>
        <p className="text-sm text-[var(--color-muted)] mb-8 max-w-sm mx-auto">
          The road doesn&apos;t get better. The exit does.
        </p>
        <a href="https://x.com/OfframpCoin" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-bold text-black bg-[var(--color-green)] px-6 py-3 rounded hover:bg-[var(--color-green-dim)] transition-colors">
          <span>𝕏</span> Exit Here
        </a>
      </section>

      <footer className="border-t border-[var(--color-border)] py-6 px-6 flex items-center justify-between">
        <div className="flex items-center gap-2"><Logo size={14} /><span className="text-[9px] text-[var(--color-green)]/30 font-bold">OFFRAMP</span></div>
        <p className="text-[9px] text-[var(--color-muted)]/40">Exit 404 — Destination: Freedom</p>
      </footer>
    </>
  );
}
