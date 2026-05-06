import Image from "next/image";

export function Facilities() {
  const facilities = [
    {
      id: 1,
      name: "Free Weight Area",
      description: "Lengkap dengan dumbbell, barbell, dan weight plates",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    },
    {
      id: 2,
      name: "Cardio Zone",
      description: "Treadmill, sepeda statis, elliptical, dan rowing machine",
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80",
    },
    {
      id: 3,
      name: "Machine Weights",
      description: "Alat fitness modern untuk semua kelompok otot",
      image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=800&q=80",
    },
    {
      id: 4,
      name: "Functional Training",
      description: "Area untuk latihan fungsional dan core exercise",
      image: "https://images.unsplash.com/photo-1517931524326-bdd55a541177?w=800&q=80",
    },
    {
      id: 5,
      name: "Locker Room",
      description: "Locker bersih, shower, dan area ganti yang nyaman",
      image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&q=80",
    },
    {
      id: 6,
      name: "Personal Training Zone",
      description: "Area khusus untuk latihan dengan personal trainer",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    },
  ];

  return (
    <section id="facilities" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(255,255,255,0.02),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Fasilitas Lengkap
          </h2>
          <p className="text-zinc-400 text-lg font-light max-w-2xl mx-auto">
            Semua yang Anda butuhkan untuk transformasi tubuh tersedia di sini
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility) => (
            <div
              key={facility.id}
              className="group relative overflow-hidden rounded-2xl bg-zinc-900 hover:ring-2 hover:ring-amber-500/30 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={facility.image}
                  alt={facility.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {facility.name}
                </h3>
                <p className="text-zinc-300 text-sm">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-zinc-500 text-sm">
            Dan masih banyak fasilitas lainnya untuk menunjang fitness Anda
          </p>
        </div>
      </div>
    </section>
  );
}
