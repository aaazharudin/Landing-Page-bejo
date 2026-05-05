export function Programs() {
  return (
    <section id="programs" className="py-32 md:py-40 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.02),transparent_50%)]" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Pilihan Program
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto font-light">
            Pilih program yang sesuai dengan targetmu
          </p>
        </div>

        {/* Program Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
          {/* Card 1: Penurunan Berat Badan */}
          <div className="group p-10 rounded-3xl border border-zinc-800/50 bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-orange-500/20 transition-all duration-500">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500/10 to-orange-600/10 flex items-center justify-center mb-8 ring-1 ring-orange-500/20">
              <svg className="w-7 h-7 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Penurunan Berat Badan
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8 font-light">
              Program terukur untuk bakar lemak dan capai berat ideal.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-zinc-300">
                <span className="w-1 h-1 rounded-full bg-orange-400" />
                Latihan cardio intensitas tinggi
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-300">
                <span className="w-1 h-1 rounded-full bg-orange-400" />
                Panduan nutrisi personal
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-300">
                <span className="w-1 h-1 rounded-full bg-orange-400" />
                Monitoring mingguan
              </li>
            </ul>
          </div>

          {/* Card 2: Pembentukan Otot */}
          <div className="group p-10 rounded-3xl border border-zinc-800/50 bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-blue-500/20 transition-all duration-500">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/10 flex items-center justify-center mb-8 ring-1 ring-blue-500/20">
              <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Pembentukan Otot
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8 font-light">
              Bangun massa otot dengan strength training dan nutrisi tepat.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-zinc-300">
                <span className="w-1 h-1 rounded-full bg-blue-400" />
                Progressive overload
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-300">
                <span className="w-1 h-1 rounded-full bg-blue-400" />
                Compound movements
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-300">
                <span className="w-1 h-1 rounded-full bg-blue-400" />
                Panduan supplement
              </li>
            </ul>
          </div>

          {/* Card 3: Personal Trainer */}
          <div className="group p-10 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent hover:from-white/10 hover:border-white/20 transition-all duration-500 relative overflow-hidden">
            {/* Popular badge */}
            <div className="absolute top-6 right-6">
              <span className="px-3 py-1.5 text-xs font-medium bg-white text-black rounded-full">
                Populer
              </span>
            </div>
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center mb-8 ring-1 ring-white/20">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Personal Trainer
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8 font-light">
              Bimbingan one-on-one dengan trainer bersertifikat.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-zinc-300">
                <span className="w-1 h-1 rounded-full bg-white" />
                Sesi latihan personal
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-300">
                <span className="w-1 h-1 rounded-full bg-white" />
                Form correction real-time
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-300">
                <span className="w-1 h-1 rounded-full bg-white" />
                Jadwal fleksibel
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm font-medium"
          >
            Lihat harga program
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
