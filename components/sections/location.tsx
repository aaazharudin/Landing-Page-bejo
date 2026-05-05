export function Location() {
  // Google Maps embed - will be updated with correct coordinates
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.0267536344816!2d110.3748!3d-7.7616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNDUnNDIuMCJTIDExMMKwMjInMjkuMiJF!5e0!3m2!1sid!2sid!4v1234567890";

  return (
    <section id="location" className="py-32 md:py-40 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.02),transparent_50%)]" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Lokasi Kami
          </h2>
          <p className="text-zinc-400 text-lg font-light">
            Kunjungi gym kami di Sleman, Yogyakarta
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <div className="aspect-square md:aspect-auto md:h-[500px] rounded-3xl overflow-hidden border border-zinc-800">
            <iframe
              src={mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Bejo Gym</h3>
              <p className="text-zinc-400 leading-relaxed">
                Gym premium dengan fasilitas lengkap dan personal trainer bersertifikat.
                <br />
                Datang dan rasakan pengalaman berbeda.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Alamat</h4>
                  <p className="text-zinc-400">Sleman, DI Yogyakarta</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Jam Operasional</h4>
                  <p className="text-zinc-400">Senin - Minggu<br />06:00 - 21:00 WIB</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Kontak</h4>
                  <p className="text-zinc-400">WhatsApp: +62 812-3456-7890<br />Email: hello@bejogym.id</p>
                </div>
              </div>
            </div>

            <a
              href="https://share.google/728pMv4YBbKNY2bOX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Buka di Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
