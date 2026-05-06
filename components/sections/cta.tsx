import Link from "next/link";
import { whatsappLinks } from "@/lib/whatsapp";

export function CTA() {
  return (
    <section id="cta" className="py-32 md:py-40 bg-zinc-950 relative overflow-hidden">
      {/* Gradient background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900/30 to-zinc-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(212,175,55,0.05),transparent_50%)]" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {/* Urgency Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-8">
          <span className="text-amber-400 text-sm font-semibold">⏳ Slot terbatas setiap bulan</span>
        </div>

        {/* Main heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Mulai Sekarang,
          <br />
          <span className="text-amber-400">Jangan Tunggu Nanti</span>
        </h2>

        {/* Subtext */}
        <p className="text-lg text-zinc-400 mb-12 max-w-2xl mx-auto font-light">
          Setiap hari yang kamu tunda, adalah hari yang kamu buang.
          <span className="text-white font-medium"> 100+ member sudah membuktikannya.</span>
        </p>

        {/* CTA Buttons - WhatsApp First */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-12">
          <Link
            href={whatsappLinks.bejoQuickRegistration}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-14 py-5 text-base font-bold rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-green-500/20"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Daftar via WhatsApp
          </Link>
          <Link
            href="#pricing"
            className="inline-flex items-center justify-center px-14 py-5 text-base font-semibold rounded-xl bg-transparent text-white border border-zinc-700 hover:border-amber-500 hover:bg-amber-500/10 transition-all duration-300"
          >
            Lihat Paket Harga
          </Link>
        </div>

        {/* Urgency Text */}
        <p className="text-amber-500 text-sm font-semibold mb-8">
          ⚠️ Promo Rp189K berakhir akhir bulan ini
        </p>

        {/* Trust note */}
        <p className="text-sm text-zinc-600 font-light">
          Tidak ada komitmen jangka panjang. Batalkan kapan saja.
        </p>
      </div>
    </section>
  );
}
