export function ValueProposition() {
  const benefits = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: "Personal Trainer Bersertifikat",
      description: "Tim trainer profesional dengan pengalaman lebih dari 5 tahun",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Program Terukur & Personalized",
      description: "Latihan disesuaikan dengan target, kondisi tubuh, dan jadwalmu",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: "Fasilitas Premium & Bersih",
      description: "Peralatan lengkap, ruang ber-AC, dan sanitasi terjaga setiap saat",
    },
  ];

  return (
    <section id="value-prop" className="py-32 md:py-40 bg-zinc-950 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.02),transparent_50%)]" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Kenapa Bejo Gym?
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto font-light">
            Lebih dari sekadar gym — kami partner transformasimu
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800/50 flex items-center justify-center mx-auto mb-8 text-white group-hover:border-zinc-700 transition-colors duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {benefit.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed font-light">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
