import Link from "next/link";
import { whatsappLinks } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-zinc-950 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,255,255,0.03),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_80%_50%,rgba(120,119,198,0.02),transparent_40%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Promo Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 mb-10">
          <span className="text-amber-400 text-sm font-semibold">🔥 Promo bulan ini - Mulai Rp189K</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6">
          Transformasi Tubuhmu
          <br />
          <span className="text-amber-400">Dalam 90 Hari</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-8 leading-relaxed">
          Program fitness terukur dengan personal trainer bersertifikat.
          <br />
          <span className="text-white">Turun berat badan, bentuk otot, atau uang kembali.</span>
        </p>

        {/* Price Anchor */}
        <p className="text-2xl font-bold text-amber-400 mb-10">
          Mulai <span className="text-3xl">Rp189K</span>/bulan
          <span className="text-zinc-600 line-through text-lg ml-2">Rp219K</span>
        </p>

        {/* Social Proof */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="flex">
            {[1,2,3,4,5].map((star) => (
              <svg key={star} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-white font-semibold">4.8/5</span>
          <span className="text-zinc-500 text-sm">(100+ member)</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="#pricing"
            className="inline-flex items-center justify-center px-12 py-4 text-base font-bold rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-black hover:from-amber-600 hover:to-amber-700 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-amber-500/20"
          >
            Mulai Sekarang
          </Link>
          <Link
            href={whatsappLinks.bejoQuickRegistration}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-12 py-4 text-base font-semibold rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Daftar via WhatsApp
          </Link>
        </div>

        {/* Urgency Text */}
        <p className="text-amber-500 text-sm font-medium mb-2">
          ⏳ Slot member terbatas setiap bulan
        </p>
        <p className="text-amber-500 text-sm font-medium mb-12">
          ⚠️ Harga bisa berubah kapan saja
        </p>

        {/* Trust indicators */}
        <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
          <div className="text-center">
            <p className="text-2xl font-bold text-white mb-1">100+</p>
            <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-medium">Member Aktif</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-white mb-1">15+</p>
            <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-medium">Tahun</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-white mb-1">98%</p>
            <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-medium">Kepuasan</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-3">
          <span className="text-[10px] text-zinc-600 uppercase tracking-[0.2em]">Scroll</span>
          <div className="w-px h-14 bg-gradient-to-b from-zinc-600 to-transparent" />
        </div>
      </div>
    </section>
  );
}
