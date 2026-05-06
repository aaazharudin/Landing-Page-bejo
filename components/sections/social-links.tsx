export function SocialLinks() {
  return (
    <section id="social" className="py-24 md:py-32 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02),transparent_50%)]" />

      <div className="relative max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ikuti Kami di Social Media
          </h2>
          <p className="text-zinc-400 text-lg font-light">
            Dapatkan update harian, tips fitness, dan inspirasi transformasi member
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Instagram Card */}
          <a
            href="https://instagram.com/bejosport_"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700 hover:border-pink-500/50 rounded-3xl p-10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/10"
          >
            {/* Instagram Icon */}
            <div className="flex justify-center mb-6">
              <svg className="w-20 h-20 text-pink-500 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>

            <h3 className="text-2xl font-bold text-white text-center mb-2">
              Instagram
            </h3>
            <p className="text-pink-400 text-center mb-6">
              @bejosport_
            </p>
            <p className="text-zinc-400 text-sm text-center">
              Transformasi member, tips workout, daily motivation
            </p>

            <div className="mt-6 text-center">
              <span className="inline-flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all">
                Follow di Instagram
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </a>

          {/* TikTok Card */}
          <a
            href="https://www.tiktok.com/@bejosportcenter"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700 hover:border-zinc-400/50 rounded-3xl p-10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-zinc-400/10"
          >
            {/* TikTok Icon */}
            <div className="flex justify-center mb-6">
              <svg className="w-20 h-20 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </div>

            <h3 className="text-2xl font-bold text-white text-center mb-2">
              TikTok
            </h3>
            <p className="text-zinc-300 text-center mb-6">
              @bejosportcenter
            </p>
            <p className="text-zinc-400 text-sm text-center">
              Video tips workout, tutorial exercise, trending
            </p>

            <div className="mt-6 text-center">
              <span className="inline-flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all">
                Follow di TikTok
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </a>
        </div>

        <p className="text-center mt-12 text-zinc-500 text-sm">
          Klik logo untuk melihat konten asli kami di social media
        </p>
      </div>
    </section>
  );
}
