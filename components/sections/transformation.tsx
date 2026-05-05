export function Transformation() {
  const stories = [
    {
      name: "Andi Pratama",
      result: "Turun 18 kg dalam 3 bulan",
      image: "/api/placeholder/400/500",
    },
    {
      name: "Sari Dewi",
      result: "Naik 8 kg otot dalam 4 bulan",
      image: "/api/placeholder/400/500",
    },
    {
      name: "Budi Santoso",
      result: "Turun 12 kg + 6 pack abs",
      image: "/api/placeholder/400/500",
    },
  ];

  return (
    <section id="transformation" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Hasil Nyata
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Transformasi member kami — bukti komitmen kami
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all duration-300"
            >
              {/* Placeholder for before/after image */}
              <div className="aspect-[4/5] bg-zinc-800 relative">
                <div className="absolute inset-0 flex items-center justify-center text-zinc-600">
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                {/* Before/After label */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white">
                  Before
                </div>
                <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white">
                  After
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-1">
                  {story.name}
                </h3>
                <p className="text-zinc-400 text-sm">
                  {story.result}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
