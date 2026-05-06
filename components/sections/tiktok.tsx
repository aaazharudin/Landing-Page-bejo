export function TikTok() {
  const videos = [
    {
      id: 1,
      thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=540&q=80",
      views: "45.2K",
      title: "Video latihan Bejo Sport Center",
      url: "https://www.tiktok.com/@bejosportcenter/video/7629951819397057799",
    },
    {
      id: 2,
      thumbnail: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=540&q=80",
      views: "128K",
      title: "Tips fitness dari Bejo Sport Center",
      url: "https://www.tiktok.com/@bejosportcenter/video/7319719963118357765",
    },
    {
      id: 3,
      thumbnail: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=540&q=80",
      views: "89.5K",
      title: "Workout routine Bejo Sport Center",
      url: "https://www.tiktok.com/@bejosportcenter/video/7497190963799002375",
    },
  ];

  return (
    <section id="tiktok" className="py-32 md:py-40 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.02),transparent_50%)]" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Video Tips & Tutorial
          </h2>
          <p className="text-zinc-400 text-lg font-light">
            @bejosportcenter — follow untuk tips fitness harian
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {videos.map((video) => (
            <a
              key={video.id}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-[9/16] rounded-3xl overflow-hidden bg-zinc-900 hover:ring-2 hover:ring-white/20 transition-all duration-300"
            >
              {/* TikTok thumbnail */}
              <img
                src={video.thumbnail}
                alt={video.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white font-medium text-sm mb-2 line-clamp-2">
                  {video.title}
                </p>
                <div className="flex items-center gap-2 text-zinc-400 text-xs">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                  </svg>
                  <span>{video.views} views</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.tiktok.com/@bejosportcenter"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white hover:text-zinc-300 transition-colors text-sm font-medium"
          >
            Follow di TikTok
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
