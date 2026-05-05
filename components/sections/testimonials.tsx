export function Testimonials() {
  const testimonials = [
    {
      name: "Rina Wijaya",
      role: "Marketing Manager",
      content: "Awalnya ragu karena sibuk kerja, tapi program di Bejo Gym benar-benar fleksibel. Turun 10 kg dalam 2 bulan!",
      avatar: "RW",
    },
    {
      name: "Dedi Kurniawan",
      role: "Freelancer",
      content: "Personal trainer-nya sangat suportif. Form benar-benar diperhatikan jadi aman dari cedera.",
      avatar: "DK",
    },
    {
      name: "Maya Putri",
      role: "Mahasiswa",
      content: "Fasilitas bersih, trainer ramah, dan harganya worth it banget. Recommended!",
      avatar: "MP",
    },
  ];

  return (
    <section id="testimonials" className="py-32 md:py-40 bg-zinc-950 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.02),transparent_50%)]" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Kata Member Kami
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto font-light">
            Ribuan member telah mencapai target bersama kami
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-10 rounded-3xl bg-zinc-900/30 border border-zinc-800/50 hover:border-zinc-700 transition-all duration-500 group"
            >
              {/* Quote icon */}
              <div className="mb-8 opacity-30 group-hover:opacity-50 transition-opacity duration-300">
                <svg className="w-10 h-10 text-zinc-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <p className="text-zinc-300 leading-relaxed mb-10 font-light">
                {testimonial.content}
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center text-white font-semibold ring-1 ring-zinc-700">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-white font-medium">
                    {testimonial.name}
                  </h4>
                  <p className="text-zinc-500 text-sm mt-0.5">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
