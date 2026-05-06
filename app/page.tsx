import { Hero } from "@/components/sections/hero";
import { ValueProposition } from "@/components/sections/value-proposition";
import { Programs } from "@/components/sections/programs";
import { PricingNew } from "@/components/sections/pricing-new";
import dynamic from "next/dynamic";

// Lazy load heavy components below the fold
const TransformationLazy = dynamic(() => import("@/components/sections/transformation").then(m => ({ default: m.Transformation })), {
  loading: () => (
    <section className="py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-96 bg-zinc-900/50 rounded-3xl animate-pulse" />
      </div>
    </section>
  ),
});

const TestimonialsLazy = dynamic(() => import("@/components/sections/testimonials").then(m => ({ default: m.Testimonials })), {
  loading: () => (
    <section className="py-32 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-80 bg-zinc-900/50 rounded-3xl animate-pulse" />
          ))}
        </div>
      </div>
    </section>
  ),
});

const InstagramLazy = dynamic(() => import("@/components/sections/instagram").then(m => ({ default: m.Instagram })), {
  loading: () => (
    <section className="py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="aspect-square bg-zinc-900/50 rounded-2xl animate-pulse" />
          ))}
        </div>
      </div>
    </section>
  ),
});

const TikTokLazy = dynamic(() => import("@/components/sections/tiktok").then(m => ({ default: m.TikTok })), {
  loading: () => (
    <section className="py-32 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[1, 2, 3].map((i) => (
            <div key={i} className="aspect-[9/16] bg-zinc-900/50 rounded-3xl animate-pulse" />
          ))}
        </div>
      </div>
    </section>
  ),
});

const BMICalculatorLazy = dynamic(() => import("@/components/sections/bmi-calculator").then(m => ({ default: m.BMICalculator })), {
  loading: () => (
    <section className="py-32 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-96 bg-zinc-900/50 rounded-3xl animate-pulse" />
      </div>
    </section>
  ),
});

const LocationLazy = dynamic(() => import("@/components/sections/location").then(m => ({ default: m.Location })), {
  loading: () => (
    <section className="py-32 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-[500px] bg-zinc-900/50 rounded-3xl animate-pulse" />
      </div>
    </section>
  ),
});

const CTALazy = dynamic(() => import("@/components/sections/cta").then(m => ({ default: m.CTA })), {
  loading: () => (
    <section className="py-32 bg-zinc-950">
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-64 bg-zinc-900/50 rounded-3xl animate-pulse" />
      </div>
    </section>
  ),
});

// Client-only WhatsApp button
const WAButtonClient = dynamic(() => import("@/components/client/wa-button-client").then(m => ({ default: m.WAButtonClient })));

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Above the fold - load immediately */}
      <Hero />
      <ValueProposition />
      <Programs />

      {/* Below the fold - lazy load for performance */}
      <TransformationLazy />
      <TestimonialsLazy />
      <PricingNew />
      <InstagramLazy />
      <TikTokLazy />
      <BMICalculatorLazy />
      <LocationLazy />
      <CTALazy />
      <WAButtonClient />
    </main>
  );
}
