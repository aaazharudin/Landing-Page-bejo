import Link from "next/link";
import { whatsappLinks } from "@/lib/whatsapp";

export function PricingNew() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-zinc-950 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(212,175,55,0.08),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Pilih Paketmu Sekarang
          </h2>
          <p className="text-xl md:text-2xl text-amber-400 font-semibold mb-3">
            🔥 Promo terbatas bulan ini — mulai dari Rp189K
          </p>
          <p className="text-zinc-500 text-sm">
            ⏳ Slot member terbatas setiap bulan
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Card 1: Starter Plan */}
          <div className="relative bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-white mb-2">Starter Plan</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-white">Rp189K</span>
                <span className="text-zinc-500">/ bulan</span>
              </div>
              <p className="text-zinc-600 line-through text-sm">Rp219K</p>
              <p className="text-zinc-400 text-xs mt-2">Cocok untuk pemula yang ingin mulai fitness</p>
            </div>

            <div className="inline-block px-3 py-1 bg-amber-500/20 text-amber-400 text-xs font-semibold rounded-full mb-4">
              🔥 Hemat sekarang
            </div>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2 text-zinc-300 text-sm">
                <svg className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Akses gym penuh
              </li>
              <li className="flex items-start gap-2 text-zinc-300 text-sm">
                <svg className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Free locker
              </li>
              <li className="flex items-start gap-2 text-zinc-300 text-sm">
                <svg className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Free wifi
              </li>
            </ul>

            <Link
              href={whatsappLinks.bejoMembership}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 px-6 bg-white text-black font-semibold text-center rounded-xl hover:bg-gray-100 transition-colors"
            >
              Mulai Sekarang
            </Link>
          </div>

          {/* Card 2: Transformation Plan - MOST POPULAR */}
          <div className="relative bg-gradient-to-b from-amber-500/10 to-zinc-900 border-2 border-amber-500/50 rounded-2xl p-6 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 lg:scale-105 lg:z-10">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold px-6 py-2 rounded-full text-sm shadow-lg">
                🔥 PALING LARIS
              </div>
            </div>

            <div className="mb-4 mt-2">
              <h3 className="text-xl font-bold text-white mb-2">Transformation Plan</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-amber-400">Rp420K</span>
              </div>
              <p className="text-zinc-600 line-through text-sm">Rp480K</p>
              <p className="text-zinc-400 text-xs mt-2">3 bulan untuk hasil transformasi nyata</p>
            </div>

            <div className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-semibold rounded-full mb-4">
              Dipilih 70% member
            </div>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2 text-zinc-300 text-sm">
                <svg className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Lebih hemat
              </li>
              <li className="flex items-start gap-2 text-zinc-300 text-sm">
                <svg className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Cocok untuk hasil maksimal
              </li>
              <li className="flex items-start gap-2 text-zinc-300 text-sm">
                <svg className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Full akses gym
              </li>
            </ul>

            <Link
              href={whatsappLinks.bejoThreeMonthPlan}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 px-6 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold text-center rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg shadow-amber-500/30"
            >
              Ambil Paket Ini
            </Link>
          </div>

          {/* Card 3: Personal Coaching */}
          <div className="relative bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-white mb-2">Personal Coaching</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-white">Rp94K</span>
                <span className="text-zinc-500">/ sesi</span>
              </div>
              <div className="mt-2 space-y-1">
                <p className="text-zinc-400 text-xs">• 1 orang: <span className="text-white font-semibold">Rp940K</span> (10 sesi)</p>
                <p className="text-zinc-400 text-xs">• 2 orang: <span className="text-white font-semibold">Rp1.300K</span> (10 sesi)</p>
              </div>
              <p className="text-zinc-400 text-xs mt-2">Panduan personal trainer untuk hasil maksimal</p>
            </div>

            <div className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-semibold rounded-full mb-4">
              💪 Hasil lebih cepat dengan trainer
            </div>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2 text-zinc-300 text-sm">
                <svg className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Program terarah
              </li>
              <li className="flex items-start gap-2 text-zinc-300 text-sm">
                <svg className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Trainer profesional
              </li>
              <li className="flex items-start gap-2 text-zinc-300 text-sm">
                <svg className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Membership termasuk
              </li>
            </ul>

            <Link
              href={whatsappLinks.personalTrainerProgram}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 px-6 bg-white text-black font-semibold text-center rounded-xl hover:bg-gray-100 transition-colors"
            >
              Mulai Transformasi
            </Link>
          </div>

          {/* Card 4: Trial Pass */}
          <div className="relative bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-white mb-2">Trial Pass</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-white">Rp30K</span>
                <span className="text-zinc-500">/ visit</span>
              </div>
              <p className="text-zinc-400 text-xs mt-1">Coba dulu tanpa komitmen</p>
              <p className="text-zinc-400 text-xs mt-2">Cocok untuk yang ingin coba fasilitas dulu</p>
            </div>

            <div className="inline-block px-3 py-1 bg-zinc-700/50 text-zinc-300 text-xs font-semibold rounded-full mb-4">
              Fleksibel
            </div>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2 text-zinc-300 text-sm">
                <svg className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Akses 1 hari
              </li>
              <li className="flex items-start gap-2 text-zinc-300 text-sm">
                <svg className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Fleksibel
              </li>
              <li className="flex items-start gap-2 text-zinc-300 text-sm">
                <svg className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Tanpa membership
              </li>
            </ul>

            <Link
              href={whatsappLinks.bejoDayPass}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 px-6 bg-white text-black font-semibold text-center rounded-xl hover:bg-gray-100 transition-colors"
            >
              Coba Sekarang
            </Link>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-8 mb-8 pb-8 border-b border-zinc-800">
          <div className="flex items-center gap-2 text-zinc-400">
            <span className="text-amber-400">👥</span>
            <span>100+ member aktif</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-400">
            <span className="text-amber-400">⭐</span>
            <span>Rating 4.8/5 dari member</span>
          </div>
        </div>

        {/* Urgency */}
        <div className="text-center mb-8">
          <p className="text-amber-500 text-sm font-semibold">
            ⚠️ Harga bisa berubah kapan saja
          </p>
        </div>

        {/* WhatsApp CTA */}
        <div className="text-center">
          <a
            href={whatsappLinks.bejoQuickRegistration}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 py-4 px-8 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Daftar cepat via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
