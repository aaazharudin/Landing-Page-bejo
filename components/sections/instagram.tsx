export function Instagram() {
  const posts = [
    { id: 1, image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80", likes: "1.2K" },
    { id: 2, image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80", likes: "856" },
    { id: 3, image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80", likes: "2.1K" },
    { id: 4, image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80", likes: "943" },
    { id: 5, image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=600&q=80", likes: "1.5K" },
    { id: 6, image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&q=80", likes: "1.8K" },
  ];

  return (
    <section id="instagram" className="py-32 md:py-40 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.02),transparent_50%)]" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ikuti Kami di Instagram
          </h2>
          <p className="text-zinc-400 text-lg font-light">
            @bejogym — inspirasi harian, tips, dan transformasi member
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {posts.map((post) => (
            <a
              key={post.id}
              href="https://instagram.com/bejogym"
              target="_blank"
              rel="noopener noreferrer"
              className="group aspect-square relative overflow-hidden rounded-2xl bg-zinc-900 hover:ring-2 hover:ring-white/20 transition-all duration-300"
            >
              {/* Instagram image */}
              <img
                src={post.image}
                alt="Instagram post"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex items-center gap-2 text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                    <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span className="text-sm font-medium">{post.likes}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://instagram.com/bejogym"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white hover:text-zinc-300 transition-colors text-sm font-medium"
          >
            Lihat selengkapnya di Instagram
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
