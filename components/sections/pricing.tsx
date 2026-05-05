import Link from "next/link";

export function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "499",
      period: "bulan",
      description: "Cocok untuk pemula",
      features: [
        "Akses gym 06:00 - 22:00",
        "Semua peralatan",
        "1x sesi intro dengan trainer",
        "Kunci locker",
      ],
      popular: false,
    },
    {
      name: "Pro",
      price: "899",
      period: "bulan",
      description: "Paling diminati",
      features: [
        "Akses gym 24 jam",
        "Semua peralatan",
        "4x sesi personal trainer",
        "Program nutrisi",
        "Kunci locker",
      ],
      popular: true,
    },
    {
      name: "Elite",
      price: "1.499",
      period: "bulan",
      description: "Untuk hasil maksimal",
      features: [
        "Akses gym 24 jam",
        "12x sesi personal trainer",
        "Program nutrisi personal",
        "Supervisi trainer setiap visit",
        "Private locker & shower",
        "Free supplement starter pack",
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-32 md:py-40 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.02),transparent_50%)]" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Pilih Paketmu
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto font-light">
            Investasi untuk kesehatan — harga transparan tanpa biaya tersembunyi
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-10 rounded-3xl border transition-all duration-500 ${
                plan.popular
                  ? "bg-white text-black border-white shadow-2xl shadow-white/10 scale-105"
                  : "bg-zinc-900/30 border-zinc-800/50 hover:border-zinc-700 hover:bg-zinc-900/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-5 py-2 text-sm font-medium bg-white text-black rounded-full shadow-lg">
                    Paling Populer
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-2xl font-bold mb-3 ${plan.popular ? "text-black" : "text-white"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.popular ? "text-zinc-600" : "text-zinc-400"} font-light`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl font-bold ${plan.popular ? "text-black" : "text-white"}`}>
                    Rp{plan.price}
                  </span>
                  <span className={`text-sm ${plan.popular ? "text-zinc-600" : "text-zinc-400"}`}>
                    /{plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.popular ? "text-black" : "text-zinc-400"}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`text-sm ${plan.popular ? "text-zinc-800" : "text-zinc-300"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20paket%20{plan.name}"
                className={`block w-full py-4 text-center font-semibold rounded-xl transition-all duration-300 ${
                  plan.popular
                    ? "bg-black text-white hover:bg-zinc-800"
                    : "bg-white text-black hover:bg-gray-100"
                }`}
              >
                Pilih Paket
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-zinc-500 text-sm mt-12 font-light">
          Semua paket berlaku untuk 1 bulan. Tersedia opsi pembayaran 3 dan 6 bulan dengan harga spesial.
        </p>
      </div>
    </section>
  );
}
