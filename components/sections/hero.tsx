import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-zinc-950 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,255,255,0.03),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_80%_50%,rgba(120,119,198,0.02),transparent_40%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-zinc-800/30 bg-zinc-900/20 backdrop-blur-sm mb-12">
          <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-sm text-zinc-400 font-medium tracking-wide">GYM PREMIUM DI SLEMAN, YOGYAKARTA</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-8">
          Transformasi Tubuhmu
          <br />
          <span className="text-zinc-500">Dalam 90 Hari</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-14 leading-relaxed font-light">
          Program fitness terukur dengan personal trainer bersertifikat.
          <br />
          Mulai perubahanmu hari ini.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24">
          <Link
            href="#pricing"
            className="inline-flex items-center justify-center px-12 py-4 text-base font-semibold rounded-xl bg-white text-black hover:bg-gray-100 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-white/5"
          >
            Mulai Sekarang
          </Link>
          <Link
            href="#programs"
            className="inline-flex items-center justify-center px-12 py-4 text-base font-semibold rounded-xl bg-transparent text-white border border-zinc-700 hover:border-zinc-500 hover:bg-white/5 transition-all duration-300"
          >
            Lihat Program
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="grid grid-cols-3 gap-10 max-w-lg mx-auto">
          <div className="text-center">
            <p className="text-3xl font-bold text-white mb-2">15+</p>
            <p className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Tahun Pengalaman</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white mb-2">50+</p>
            <p className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Personal Trainer</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white mb-2">98%</p>
            <p className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Kepuasan Member</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator - Premium */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-3">
          <span className="text-[10px] text-zinc-600 uppercase tracking-[0.2em]">Scroll</span>
          <div className="w-px h-14 bg-gradient-to-b from-zinc-600 to-transparent" />
        </div>
      </div>
    </section>
  );
}
