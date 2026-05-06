export function Transformation() {
  const stories = [
    {
      name: "Andi Pratama",
      result: "Turun 18 kg dalam 3 bulan",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    },
    {
      name: "Sari Dewi",
      result: "Naik 8 kg otot dalam 4 bulan",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80",
    },
    {
      name: "Budi Santoso",
      result: "Turun 12 kg + 6 pack abs",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
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
              {/* Transformation image */}
              <div className="aspect-[4/5] bg-zinc-800 relative overflow-hidden">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-full object-cover"
                />
                {/* Before/After label */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white">
                  Before
                </div>
                <div className="absolute bottom-4 right-4 px-3 py-1 bg-emerald-500/90 backdrop-blur-sm rounded-full text-xs text-white font-semibold">
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
