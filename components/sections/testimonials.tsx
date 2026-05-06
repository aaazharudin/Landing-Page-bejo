export function Testimonials() {
  const testimonials = [
    {
      name: "Andi Pratama",
      result: "Turun 12 kg dalam 3 bulan",
      content: "Udah 3 bulan latihan di sini, badan berasa lebih ringan. Trainer-nya sabar banget nge-formin tiap latihan.",
      avatar: "AP",
    },
    {
      name: "Sari Dewi",
      result: "Naik 5 kg dalam 4 bulan",
      content: "Awalnya takut salah form. Ternyata di sini aman, trainer-nya benerin terus. Sekarang sudah biasa angkat berat.",
      avatar: "SD",
    },
    {
      name: "Budi Santoso",
      result: "Lebih fit dan sehat",
      content: "Gymnya bersih, trainer ramah, harganya juga masuk akal. Cocok buat yang mau serius latihan tapi nggak mau wallet jebol.",
      avatar: "BS",
    },
  ];

  return (
    <section id="testimonials" className="py-32 md:py-40 bg-zinc-950 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.02),transparent_50%)]" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Rating Display */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-amber-500/10 border border-amber-500/30 mb-6">
            <div className="flex gap-1">
              {[1,2,3,4,5].map((star) => (
                <svg key={star} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-white font-semibold">4.8/5</span>
            <span className="text-zinc-400 text-sm">(100+ member)</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Hasil Nyata, Bukan Janji
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto font-light">
            Transformasi member yang sudah terbukti
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-10 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-amber-500/30 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Result Badge */}
              <div className="relative mb-6">
                <span className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-semibold rounded-full">
                  {testimonial.result}
                </span>
              </div>

              <p className="text-zinc-300 leading-relaxed mb-8 font-light relative">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4 relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-black font-semibold ring-2 ring-amber-500/20">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-white font-medium">
                    {testimonial.name}
                  </h4>
                  <div className="flex gap-0.5 mt-1">
                    {[1,2,3,4,5].map((star) => (
                      <svg key={star} className="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-12 text-zinc-500 text-sm">
          +100 testimonial lainnya bisa dilihat di Instagram @bejosport_
        </p>
      </div>
    </section>
  );
}
